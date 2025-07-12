import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Eye, Heart, Share2, Shirt } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

export default function GalleryPage() {
  const galleryItems = [
    {
      id: 2,
      title: "Daura Suruwal – National Dress for Men",
      category: "Daura Suruwal",
      region: "Nepal (Across the country)",
      image: "/daur.png",
      views: 3000,
      likes: 250,
      story:
        "Daura Suruwal is the national dress of Nepal for men. Its design holds religious significance, with eight pleats and ties representing auspicious symbols from Hindu tradition.",
    },
    {
      id: 3,
      title: "Tamang Women Dress",
      category: "Women dress",
      region: "TaplleJung",
      image: "/tamang.png",
      views: 2100,
      likes: 160,
      story:
        "Haku Patasi, or 'black sari', is worn by Newar women, especially during festivals like Indra Jatra. It is known for its striking red border and cultural pride.",
    },
  ]

  return (
    <>
      <Head>
        <title>Gallery - Bhesbhusa</title>
        <meta
          name="description"
          content="Explore our gallery of beautiful Nepali cultural clothing and traditional wear"
        />
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
                    <Eye className="w-5 h-5 text-white" />
                  </div>
                  <h1 className="text-2xl font-bold text-amber-100 drop-shadow-lg">Cultural Gallery</h1>
                  <span className="text-2xl">🇳🇵</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12 relative">
            {/* Background pattern */}
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #fbbf24 2px, transparent 2px),
                               radial-gradient(circle at 75% 75%, #dc2626 2px, transparent 2px)`,
                backgroundSize: "40px 40px",
              }}
            />
            <div className="relative z-10">
              <h2 className="text-5xl font-bold text-red-900 mb-4 drop-shadow-lg">
                Explore
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-red-600">
                  {" "}
                  Nepali Cultural Beauty
                </span>
              </h2>
              <p className="text-xl text-red-700 max-w-3xl mx-auto">
                Discover the stunning diversity of traditional Nepali clothing and cultural heritage. Each piece tells a
                story of ancient traditions, masterful craftsmanship, and timeless beauty.
              </p>
            </div>
          </div>

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <Card
                key={item.id}
                className="group hover:shadow-2xl hover:scale-105 transition-all duration-500 overflow-hidden border border-amber-200 hover:border-red-400 bg-white/90 backdrop-blur-sm"
              >
                <div className="relative">
                  <Image
                    src={item.image || "/placeholder.svg"}
                    alt={item.title}
                    width={300}
                    height={400}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-amber-100/95 text-red-800 border border-amber-300 shadow-lg"
                    >
                      {item.region}
                    </Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-gradient-to-r from-red-600 to-amber-600 text-white shadow-lg border-0">
                      {item.category}
                    </Badge>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-red-900/80 via-amber-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex justify-between items-center mb-3">
                        <div className="flex space-x-2">
                          <Button
                            size="sm"
                            className="bg-amber-100/90 hover:bg-amber-200 text-red-800 shadow-lg hover:scale-110 transition-all"
                          >
                            <Eye className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-red-100/90 hover:bg-red-200 text-red-800 shadow-lg hover:scale-110 transition-all"
                          >
                            <Heart className="w-4 h-4" />
                          </Button>
                          <Button
                            size="sm"
                            className="bg-amber-100/90 hover:bg-amber-200 text-red-800 shadow-lg hover:scale-110 transition-all"
                          >
                            <Share2 className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      {/* Story Button - New Addition */}
                      <div className="mb-3">
                        <Button
                          size="sm"
                          className="bg-gradient-to-r from-amber-500 to-red-500 hover:from-amber-600 hover:to-red-600 text-white shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 w-full font-semibold"
                        >
                          📖 Story
                        </Button>
                      </div>
                      <p className="text-amber-100 text-sm line-clamp-2 drop-shadow-lg">{item.story}</p>
                    </div>
                  </div>
                </div>

                <CardContent className="p-4">
                  <h3 className="font-semibold text-red-900 mb-2 group-hover:text-amber-700 transition-colors text-lg">
                    {item.title}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-red-700">
                    <div className="flex items-center">
                      <Eye className="w-4 h-4 mr-1 text-amber-600" />
                      <span className="font-medium">{item.views.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center">
                      <Heart className="w-4 h-4 mr-1 text-red-600" />
                      <span className="font-medium">{item.likes}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-red-800 via-amber-700 to-red-900 rounded-2xl p-12 text-white relative overflow-hidden">
            {/* Traditional pattern background */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 15px, rgba(255,255,255,0.1) 15px, rgba(255,255,255,0.1) 30px)`,
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center justify-center mb-4">
                <span className="text-4xl mr-3">🇳🇵</span>
                <h3 className="text-4xl font-bold">Share Your Cultural Heritage</h3>
              </div>
              <p className="text-xl mb-8 max-w-2xl mx-auto text-amber-100">
                Join our community and showcase your own Nepali cultural clothing. Share your heritage, preserve
                traditions, and inspire others to embrace their cultural identity.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-amber-100 text-red-800 hover:bg-amber-200 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 px-8 py-3"
                >
                  <Shirt className="w-5 h-5 mr-2" />
                  Upload Your Photo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-amber-300 text-amber-100 hover:bg-amber-100/20 hover:text-amber-200 bg-transparent backdrop-blur-sm px-8 py-3 hover:scale-105 transition-all duration-300"
                >
                  Join Community
                </Button>
              </div>
            </div>
          </div>

          {/* Additional Info Section */}
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            <div className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-amber-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-red-900 mb-2">Authentic Heritage</h4>
              <p className="text-red-700 text-sm">
                Every piece in our gallery represents authentic Nepali cultural traditions passed down through
                generations.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-amber-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-amber-900 mb-2">Cultural Pride</h4>
              <p className="text-amber-800 text-sm">
                Celebrate and preserve the rich diversity of Nepali ethnic communities and their unique clothing
                traditions.
              </p>
            </div>

            <div className="text-center p-6 rounded-xl bg-white/80 backdrop-blur-sm border border-red-200 hover:shadow-lg transition-all">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Share2 className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-bold text-red-900 mb-2">Share Stories</h4>
              <p className="text-red-700 text-sm">
                Each garment tells a story of craftsmanship, cultural significance, and the artisans who created them.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
