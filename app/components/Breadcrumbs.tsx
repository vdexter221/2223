import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Breadcrumbs() {
  const pathname = usePathname()
  const pathSegments = pathname.split("/").filter((segment) => segment !== "")

  return (
    <nav aria-label="Breadcrumb" className="text-sm text-gray-400 mb-4">
      <ol className="list-none p-0 inline-flex">
        <li className="flex items-center">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          <span className="mx-2">/</span>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`
          const isLast = index === pathSegments.length - 1
          return (
            <li key={segment} className="flex items-center">
              {isLast ? (
                <span className="text-white">{segment.replace(/-/g, " ")}</span>
              ) : (
                <>
                  <Link href={href} className="hover:text-white">
                    {segment.replace(/-/g, " ")}
                  </Link>
                  <span className="mx-2">/</span>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}

