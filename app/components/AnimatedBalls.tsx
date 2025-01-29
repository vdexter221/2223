"use client"

import { useState, useEffect } from "react"

export default function AnimatedBalls() {
  const [particles, setParticles] = useState([])

  useEffect(() => {
    const generateParticles = () => {
      const newParticles = Array.from({ length: 12 }).map((_, i) => ({
        id: i,
        size: Math.random() * 16 + 8,
        delay: Math.random() * 4,
        duration: Math.random() * 4 + 4,
        position: {
          x: Math.random() * 100,
          y: Math.random() * 100,
        },
      }))
      setParticles(newParticles)
    }
    generateParticles()
  }, [])

  return (
    <div className="relative h-[500px] w-full hidden lg:flex items-center justify-center opacity-0 animate-fade-in-up delay-600 overflow-visible">
      {/* Quantum Core with multiple layers */}
      <div className="absolute w-32 h-32 bg-gradient-to-br from-[#ff4b36] to-[#ff6b50] rounded-full animate-pulse">
        <div className="absolute inset-0 border-4 border-[#ff4b36]/30 rounded-full animate-ping" />
        <div className="absolute inset-0 border-4 border-[#ff4b36]/20 rounded-full animate-ping delay-1000" />
      </div>

      {/* Primary Quantum Field */}
      <div className="absolute w-96 h-96 animate-spin-slow">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2"
            style={{ transform: `rotate(${i * 60}deg)` }}
          >
            <div className="w-12 h-12 bg-gradient-to-br from-[#ff4b36] to-[#ff6b50] rounded-full animate-float relative">
              <div className="absolute inset-0 bg-[#ff4b36]/30 rounded-full animate-ping" />
            </div>
          </div>
        ))}
      </div>

      {/* Particle Accelerator Ring */}
      <div className="absolute w-[600px] h-[600px] border-4 border-[#ff4b36]/10 rounded-full animate-spin-reverse-slow">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="absolute bg-[#ff4b36]/40 rounded-full animate-float"
            style={{
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              left: `${particle.position.x}%`,
              top: `${particle.position.y}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      {/* Energy Waves */}
      <div className="absolute w-[800px] h-[800px] border-4 border-[#ff4b36]/5 rounded-full animate-pulse-wave" />
      <div className="absolute w-[700px] h-[700px] border-4 border-[#ff4b36]/5 rounded-full animate-pulse-wave delay-2000" />
    </div>
  )
}

