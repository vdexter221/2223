"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { siteConfig } from "../config/site";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight - windowHeight;
      const percentage = (scrollY / documentHeight) * 100;
      setScrollPercentage(percentage);
      setIsScrolled(scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    setScrollPercentage(0);
    setIsMenuOpen(false);
  }, [pathname]);

  const navigationItems = [
    { label: "HOME", href: "/" },
    { label: "SERVICES", href: "/services" },
    { label: "BLOG", href: "/blog" },
    { label: "CONTACT US", href: "/contact" },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-gray-900/95 backdrop-blur-sm shadow-lg" : "bg-gray-900"
      } border-b border-gray-800`}
    >
      {/* Scroll Progress Indicator */}
      <div className="absolute bottom-0 left-0 w-full h-[2px] bg-gray-800">
        <div
          className="h-full bg-[#ff4b36] transition-all duration-300"
          style={{ width: `${scrollPercentage}%` }}
        />
      </div>
      <div className="container mx-auto px-4 h-22 flex items-center justify-between">
        <Link href="/" className="flex items-center h-full">
          <Image
            src={siteConfig.logo.src || "/placeholder.svg"}
            alt={siteConfig.logo.alt}
            width={400}
            height={60}
            className="h-16 w-auto object-contain object-left transition-transform duration-300 hover:scale-105"
            priority
          />
        </Link>
        <nav className="hidden md:flex gap-8">
          {navigationItems.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-sm text-white hover:text-[#ff4b36] transition-colors relative group"
            >
              {label}
              <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-[#ff4b36] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
            </Link>
          ))}
        </nav>
        <button
          className="md:hidden text-white p-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
        {isMenuOpen && (
          <div className="absolute top-24 left-0 right-0 bg-gray-900 border-b border-gray-800 md:hidden">
            <nav className="flex flex-col px-4 py-4">
              {navigationItems.map(({ label, href }) => (
                <Link
                  key={label}
                  href={href}
                  className="text-white py-3 hover:text-[#ff4b36] transition-colors border-b border-gray-800 last:border-b-0"
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={label}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

