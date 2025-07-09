"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"

// Header Component
const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-gradient-to-r from-rose-400 via-pink-500 to-purple-600 text-white shadow-2xl relative overflow-hidden">
      {/* Decorative background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-4 left-4 text-6xl">🌸</div>
        <div className="absolute top-8 right-8 text-4xl">✨</div>
        <div className="absolute bottom-4 left-1/3 text-5xl">🦋</div>
      </div>

      <div className="container mx-auto px-6 py-6 relative z-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="bg-white/20 p-2 rounded-full">
              <span className="text-2xl">👑</span>
            </div>
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-yellow-200 to-pink-200 bg-clip-text text-transparent">
                BhesBhusa
              </h1>
              <p className="text-sm text-pink-100">Traditional Elegance</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/tryon", label: "Try-On" },
              { href: "/articrafts", label: "Artifacts" },
              { href: "/festives", label: "Festivals" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white/90 hover:text-white transition-all duration-300 hover:scale-105 font-medium"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white hover:bg-white/20 p-2 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-6 pb-4 border-t border-white/20 pt-4">
            <div className="flex flex-col space-y-4">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/tryon", label: "Try-On" },
                { href: "/articrafts", label: "Artifacts" },
                { href: "/festives", label: "Festivals" },
              ].map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/90 hover:text-white transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

// Dashboard Features Component
const DashboardFeatures: React.FC = () => {
  const router = useRouter()
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const features = [
    {
      icon: "🎉",
      title: "Festivals & Traditions",
      description: "Explore the rich heritage of Nepali festivals and cultural celebrations",
      path: "/festives",
      gradient: "from-purple-400 to-pink-400",
      badge: "Cultural",
      badgeColor: "bg-purple-500",
    },
    {
      icon: "👗",
      title: "Virtual Try-On",
      description: "Experience authentic Nepali dresses with our AR try-on technology",
      path: "/tryon",
      gradient: "from-rose-400 to-orange-400",
      badge: "Popular",
      badgeColor: "bg-rose-500",
    },
    {
      icon: "🏺",
      title: "Traditional Artifacts",
      description: "Discover beautiful artifacts like Haalo, Dhungro and traditional crafts",
      path: "/articrafts",
      gradient: "from-amber-400 to-yellow-400",
      badge: "Heritage",
      badgeColor: "bg-amber-500",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-rose-50 py-12">
      <div className="container mx-auto px-6">
        {/* Welcome Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-4">
            <span className="text-3xl mr-2">✨</span>
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Welcome, Beautiful
            </h2>
            <span className="text-3xl ml-2">💖</span>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
            Embrace your cultural heritage with our curated collection of traditional Nepali fashion and artifacts
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group cursor-pointer transition-all duration-500 hover:scale-105 rounded-2xl shadow-xl hover:shadow-2xl overflow-hidden bg-white/80 backdrop-blur-sm transform ${
                hoveredIndex === index ? "ring-4 ring-pink-300 scale-105" : ""
              }`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => {
                if (feature.path) {
                  router.push(feature.path)
                }
              }}
            >
              {/* Top gradient bar */}
              <div className={`h-2 bg-gradient-to-r ${feature.gradient}`} />

              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <span className={`${feature.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
                    {feature.badge}
                  </span>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-gray-600 leading-relaxed mb-6">{feature.description}</p>

                <button
                  className={`w-full bg-gradient-to-r ${feature.gradient} hover:opacity-90 text-white border-0 shadow-lg group-hover:shadow-xl transition-all duration-300 py-3 px-6 rounded-xl font-medium flex items-center justify-center space-x-2`}
                >
                  <span>Explore Now</span>
                  <span className="text-lg">✨</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="mt-20 text-center">
          <div className="flex items-center justify-center space-x-4 text-pink-400">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-pink-400" />
            <span className="text-2xl">✨</span>
            <div className="w-16 h-px bg-gradient-to-r from-pink-400 to-purple-400" />
            <span className="text-2xl">🌸</span>
            <div className="w-16 h-px bg-gradient-to-r from-purple-400 to-transparent" />
          </div>
          <p className="text-gray-500 mt-4 italic font-medium">"Celebrating the timeless beauty of Nepali culture"</p>
        </div>

        {/* Additional decorative floating elements */}
        <div className="fixed top-20 left-10 text-pink-300 text-2xl animate-bounce opacity-30 pointer-events-none">
          🦋
        </div>
        <div className="fixed top-40 right-20 text-purple-300 text-xl animate-pulse opacity-40 pointer-events-none">
          ✨
        </div>
        <div className="fixed bottom-20 left-1/4 text-rose-300 text-3xl animate-bounce opacity-20 pointer-events-none">
          🌸
        </div>
      </div>
    </div>
  )
}

// Main Dashboard Component
export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <Header />
      <DashboardFeatures />
    </div>
  )
}
