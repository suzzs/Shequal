"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, Search, Filter, ArrowLeft, Star, Heart, Truck, Eye, Share2 } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

export default function BuyPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [cartItems, setCartItems] = useState(0)
  const [favorites, setFavorites] = useState<number[]>([])
  const [searchTerm, setSearchTerm] = useState("")

  const categories = [
    { id: "all", name: "All Items", count: 150, emoji: "👗" },
    { id: "dress", name: "Traditional Dress", count: 45, emoji: "👘" },
    { id: "daura-suruwal", name: "Daura Suruwal", count: 32, emoji: "🥋" },
    { id: "ethnic-wear", name: "Ethnic Wear", count: 28, emoji: "🎭" },
    { id: "festival-wear", name: "Festival Wear", count: 20, emoji: "🎊" },
    { id: "accessories", name: "Accessories", count: 15, emoji: "💍" },
  ]

  const products = [
    {
      id: 1,
      name: "Traditional Tamang Dress",
      category: "dress",
      region: "Taplejung, Nepal",
      price: 299,
      originalPrice: 399,
      image: "/tamang.png",
      rating: 4.8,
      reviews: 124,
      inStock: true,
      bestseller: true,
      description: "Authentic Tamang women's traditional dress with intricate embroidery",
      story: "Handcrafted by skilled artisans in the mountains of Taplejung",
    },
    {
      id: 2,
      name: "Classic Daura Suruwal",
      category: "daura-suruwal",
      region: "Kathmandu, Nepal",
      price: 599,
      originalPrice: 799,
      image: "/daur.png",
      rating: 4.9,
      reviews: 89,
      inStock: true,
      bestseller: false,
      description: "National dress of Nepal with traditional eight-string design",
      story: "Represents the cultural pride and heritage of Nepali men",
    },
  ]

  const filteredProducts = products.filter((product) => {
    const matchesCategory = selectedCategory === "all" || product.category === selectedCategory
    const matchesSearch =
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.region.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const addToCart = (productId: number) => {
    setCartItems(cartItems + 1)
  }

  const toggleFavorite = (productId: number) => {
    setFavorites((prev) => (prev.includes(productId) ? prev.filter((id) => id !== productId) : [...prev, productId]))
  }

  return (
    <>
      <Head>
        <title>Buy Cultural Wear - Bhesbhusa</title>
        <meta name="description" content="Shop authentic Nepali traditional clothing and cultural wear" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-red-50 to-orange-50">
        {/* Header */}
        <header className="bg-gradient-to-r from-red-900/95 to-amber-900/95 backdrop-blur-sm border-b-2 border-amber-400 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-amber-100 hover:text-amber-200 hover:bg-amber-100/10"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-amber-500 via-red-600 to-red-700 rounded-full flex items-center justify-center border-2 border-amber-300 shadow-lg">
                    <ShoppingCart className="w-5 h-5 text-white" />
                  </div>
                  <h1 className="text-2xl font-bold text-amber-100 drop-shadow-lg">Shop Cultural Wear</h1>
                  <span className="text-2xl">🇳🇵</span>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="relative hidden sm:block">
                  <Input
                    type="search"
                    placeholder="Search Nepali cultural wear..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 pr-4 py-2 w-64 border-amber-300 focus:border-amber-500 bg-white/90"
                  />
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-amber-600" />
                </div>
                <Button
                  variant="outline"
                  className="relative border-amber-300 hover:bg-amber-100/20 bg-transparent text-amber-100 hover:text-amber-200"
                >
                  <ShoppingCart className="w-4 h-4" />
                  {cartItems > 0 && (
                    <Badge className="absolute -top-2 -right-2 bg-red-600 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center p-0">
                      {cartItems}
                    </Badge>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Trust Indicators */}
              <Card className="mb-6 border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-900">
                    <Truck className="w-5 h-5 mr-2 text-amber-600" />
                    Free Shipping
                  </CardTitle>
                  <CardDescription className="text-red-700">On orders over $200 worldwide</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm text-red-700">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      Authentic Nepali cultural wear
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      30-day return policy
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3"></div>
                      Secure payment
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-amber-500 rounded-full mr-3"></div>
                      Handcrafted by artisans
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Categories */}
              <Card className="border-amber-200 bg-white/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="flex items-center text-red-900">
                    <Filter className="w-5 h-5 mr-2 text-amber-600" />
                    Categories
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full text-left p-3 rounded-lg transition-all duration-300 group ${
                          selectedCategory === category.id
                            ? "bg-gradient-to-r from-red-100 to-amber-100 text-red-800 border-2 border-red-300 shadow-lg scale-105"
                            : "hover:bg-amber-50 hover:scale-102 border border-transparent"
                        }`}
                      >
                        <div className="flex justify-between items-center">
                          <div className="flex items-center">
                            <span className="text-lg mr-2">{category.emoji}</span>
                            <span className="font-medium">{category.name}</span>
                          </div>
                          <Badge
                            variant="secondary"
                            className={`text-xs ${
                              selectedCategory === category.id
                                ? "bg-red-200 text-red-800"
                                : "bg-amber-100 text-amber-800"
                            }`}
                          >
                            {category.count}
                          </Badge>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3">
              {/* Hero Section */}
              <div className="mb-8 text-center relative">
                <div
                  className="absolute inset-0 opacity-5"
                  style={{
                    backgroundImage: `radial-gradient(circle at 25% 25%, #fbbf24 2px, transparent 2px),
                                   radial-gradient(circle at 75% 75%, #dc2626 2px, transparent 2px)`,
                    backgroundSize: "40px 40px",
                  }}
                />
                <div className="relative z-10">
                  <h2 className="text-4xl font-bold text-red-900 mb-4 drop-shadow-lg">
                    Authentic
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">
                      {" "}
                      Nepali Cultural Clothing
                    </span>
                  </h2>
                  <p className="text-xl text-red-700 max-w-2xl mx-auto">
                    Handcrafted traditional wear from skilled artisans across Nepal. Each piece tells a story of
                    heritage and craftsmanship.
                  </p>
                </div>
              </div>

              {/* Products Grid */}
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredProducts.map((product) => (
                  <Card
                    key={product.id}
                    className="group hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer border border-amber-200 hover:border-red-400 bg-white/90 backdrop-blur-sm overflow-hidden"
                  >
                    <div className="relative overflow-hidden">
                      <Image
                        src={product.image || "/placeholder.svg"}
                        alt={product.name}
                        width={200}
                        height={300}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />

                      {/* Badges */}
                      {product.bestseller && (
                        <Badge className="absolute top-3 left-3 bg-gradient-to-r from-amber-500 to-red-500 text-white shadow-lg">
                          ⭐ Bestseller
                        </Badge>
                      )}

                      {/* Action Buttons */}
                      <div className="absolute top-3 right-3 flex flex-col space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/90 hover:bg-white shadow-lg hover:scale-110 transition-all"
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleFavorite(product.id)
                          }}
                        >
                          <Heart
                            className={`w-4 h-4 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : ""}`}
                          />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/90 hover:bg-white shadow-lg hover:scale-110 transition-all"
                        >
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button
                          size="sm"
                          variant="outline"
                          className="bg-white/90 hover:bg-white shadow-lg hover:scale-110 transition-all"
                        >
                          <Share2 className="w-4 h-4" />
                        </Button>
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <Button
                            size="sm"
                            className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white shadow-xl w-full mb-2"
                          >
                            📖 Story
                          </Button>
                          <p className="text-amber-100 text-sm drop-shadow-lg line-clamp-2">{product.story}</p>
                        </div>
                      </div>

                      {!product.inStock && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <Badge variant="secondary" className="bg-red-500 text-white text-lg px-4 py-2">
                            Out of Stock
                          </Badge>
                        </div>
                      )}
                    </div>

                    <CardContent className="p-4">
                      <h3 className="font-bold text-red-900 mb-1 text-lg group-hover:text-amber-700 transition-colors">
                        {product.name}
                      </h3>
                      <p className="text-sm text-red-600 mb-2 flex items-center">📍 {product.region}</p>

                      {/* Rating */}
                      <div className="flex items-center mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                              }`}
                            />
                          ))}
                          <span className="text-sm text-red-700 ml-2 font-medium">{product.rating}</span>
                          <span className="text-sm text-red-500 ml-1">({product.reviews} reviews)</span>
                        </div>
                      </div>

                      {/* Price */}
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                          <span className="text-xl font-bold text-red-600">${product.price}</span>
                          <span className="text-sm text-gray-500 line-through">${product.originalPrice}</span>
                          <Badge className="bg-green-100 text-green-800 text-xs">
                            Save ${product.originalPrice - product.price}
                          </Badge>
                        </div>
                      </div>

                      {/* Add to Cart Button */}
                      <Button
                        className="w-full bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
                        disabled={!product.inStock}
                        onClick={() => addToCart(product.id)}
                      >
                        <ShoppingCart className="w-4 h-4 mr-2" />
                        {product.inStock ? "Add to Cart" : "Out of Stock"}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* No Products Found */}
              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <div className="w-24 h-24 bg-gradient-to-r from-red-100 to-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <ShoppingCart className="w-12 h-12 text-red-400" />
                  </div>
                  <h3 className="text-2xl font-bold text-red-900 mb-2">No products found</h3>
                  <p className="text-red-700 mb-4">Try selecting a different category or search term</p>
                  <Button
                    onClick={() => {
                      setSelectedCategory("all")
                      setSearchTerm("")
                    }}
                    className="bg-gradient-to-r from-red-500 to-amber-500 hover:from-red-600 hover:to-amber-600"
                  >
                    Reset Filters
                  </Button>
                </div>
              )}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 bg-gradient-to-r from-red-800 via-amber-700 to-red-900 rounded-2xl p-12 text-white relative overflow-hidden">
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,0.1) 15px, rgba(255,255,255,0.1) 30px)`,
              }}
            />

            <div className="relative z-10">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-4xl mr-3">🇳🇵</span>
                  <h3 className="text-3xl font-bold">Why Choose Bhesbhusa?</h3>
                </div>
                <p className="text-xl text-amber-100">
                  Trusted by thousands of customers worldwide for authentic Nepali cultural wear
                </p>
              </div>

              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div className="transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold mb-2 text-amber-200">10K+</div>
                  <div className="text-amber-100">Happy Customers</div>
                </div>
                <div className="transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold mb-2 text-amber-200">500+</div>
                  <div className="text-amber-100">Authentic Products</div>
                </div>
                <div className="transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold mb-2 text-amber-200">25+</div>
                  <div className="text-amber-100">Countries Served</div>
                </div>
                <div className="transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold mb-2 text-amber-200">4.8★</div>
                  <div className="text-amber-100">Average Rating</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
