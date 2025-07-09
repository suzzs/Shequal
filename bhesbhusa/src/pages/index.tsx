"use client"

import type React from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { useState, useEffect } from "react"

// Header Component
const Header: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <header className={`bg-gradient-to-r from-pink-500 via-pink-600 to-red-500 text-white shadow-xl transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'}`}>
      <div className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo with animation */}
          <div className="flex items-center space-x-4">
            <div className="text-2xl font-bold text-white relative flex items-center space-x-3">
              <span className="text-3xl">🇳🇵</span>
              <span className="inline-block hover:scale-105 transition-transform duration-300 cursor-pointer">
                BhesBhusa
              </span>
              <div className="absolute -bottom-1 left-12 w-0 h-0.5 bg-pink-200 transition-all duration-500 hover:w-full"></div>
            </div>
            <div className="hidden sm:flex items-center space-x-2 text-pink-100 text-sm">
             
            </div>
          </div>

          {/* Navigation with staggered animation */}
          <nav className="hidden md:flex space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About Us" },
              { href: "/tryon", label: "Try-On" },
              { href: "/articrafts", label: "Artifacts" },
              { href: "/festives", label: "Festivals" }
            ].map((item, index) => (
              <Link 
                key={item.href}
                href={item.href} 
                className={`hover:text-pink-100 transition-all duration-300 relative group transform hover:scale-105 font-medium ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-4 opacity-0'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-200 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <button className="md:hidden text-white hover:text-pink-100 transform hover:scale-110 transition-all duration-300">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}

// Dashboard Features Component
const DashboardFeatures: React.FC = () => {
  const router = useRouter()
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  const features = [
    {
      icon: "🎉",
      title: "Explore Festivals",
      description: "Discover Nepali festivals and traditions with rich cultural heritage",
      path: "/festives",
      gradient: "from-red-400 to-pink-500",
      bgColor: "bg-red-50"
    },
    {
      icon: "👗",
      title: "Virtual Try-On",
      description: "Try authentic Nepali dresses virtually with AR technology",
      path: "/tryon",
      gradient: "from-pink-400 to-purple-500",
      bgColor: "bg-pink-50"
    },
    {
      icon: "🏺",
      title: "Traditional Artifacts",
      description: "Explore Haalo, Dhungro & more traditional Nepali artifacts",
      path: "/articrafts",
      gradient: "from-purple-400 to-pink-500",
      bgColor: "bg-purple-50"
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50 py-16 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(219, 39, 119, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(168, 85, 247, 0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Welcome Section */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
          <div className="flex items-center justify-center mb-6">
            <img 
              src="/image.png" 
              alt="Nepali people in traditional dress doing namaste" 
              className="w-24 h-24 rounded-full object-cover border-4 border-pink-200 hover:border-pink-300 transition-all duration-300 shadow-lg"
            />
          </div>
          <h2 className="text-5xl font-bold text-gray-800 mb-6 relative inline-block">
            Welcome to BhesBhusa
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-pink-400 to-red-500 rounded-full"></div>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-xl leading-relaxed">
           Created And Crafted By Nepali Women
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer border border-gray-100 hover:border-pink-200 relative overflow-hidden group transform hover:scale-105 hover:-translate-y-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onClick={() => {
                if (feature.path) {
                  router.push(feature.path)
                }
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Subtle background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              {/* Icon with enhanced styling */}
              <div className={`text-6xl mb-6 text-center transform transition-all duration-300 ${hoveredCard === index ? 'scale-110' : 'scale-100'}`}>
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl ${feature.bgColor} mb-4`}>
                  {feature.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center group-hover:text-pink-600 transition-colors duration-300">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-center mb-8 leading-relaxed">
                {feature.description}
              </p>

              <button className={`w-full bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-600 hover:to-pink-700 text-white py-4 px-6 rounded-2xl transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:scale-105 ${hoveredCard === index ? 'shadow-pink-200' : ''}`}>
                <span className="flex items-center justify-center">
                  Explore Now
                  <svg className={`w-5 h-5 ml-2 transition-transform duration-300 ${hoveredCard === index ? 'translate-x-1' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </button>
            </div>
          ))}
        </div>

        {/* Cultural Message */}
        <div className={`text-center transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '800ms' }}>
          <div className="inline-flex items-center space-x-3 bg-white/80 backdrop-blur-sm px-10 py-6 rounded-2xl border border-pink-200 hover:border-pink-300 transition-all duration-300 hover:shadow-lg">
            <span className="text-2xl">✨</span>
            <span className="text-gray-700 font-medium text-lg"> Discover Try and Buy</span>
            <span className="text-2xl">✨</span>
          </div>
        </div>

        {/* Stats Section */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`} style={{ transitionDelay: '1000ms' }}>
          {[
            { icon: "🎭", label: "Festivals", value: "50+" },
            { icon: "👘", label: "Traditional Dresses", value: "100+" },
            { icon: "🏛️", label: "Cultural Artifacts", value: "200+" }
          ].map((stat, index) => (
            <div key={index} className="text-center bg-white/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-white/70 transition-all duration-300">
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

// Main Dashboard Component
export default function Dashboard() {
  return (
    <div className="relative">
      <Header />
      <DashboardFeatures />
    </div>
  )
}