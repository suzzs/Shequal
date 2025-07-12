import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, ArrowLeft, Clock, Users, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

export default function ArtCraftPage() {
  const crafts = [
    {
      id: 1,
      title: "Traditional Embroidery Techniques",
      description: "Learn the intricate art of hand embroidery used in cultural clothing",
      image: "/placeholder.svg?height=200&width=300",
      difficulty: "Intermediate",
      duration: "2-3 hours",
      students: 1250,
      rating: 4.8,
      region: "Global",
    },
    {
      id: 2,
      title: "Silk Weaving Mastery",
      description: "Discover the ancient art of silk weaving and pattern creation",
      image: "/placeholder.svg?height=200&width=300",
      difficulty: "Advanced",
      duration: "4-5 hours",
      students: 890,
      rating: 4.9,
      region: "Asia",
    },
    {
      id: 3,
      title: "Block Printing Workshop",
      description: "Master the traditional block printing techniques for fabric design",
      image: "/placeholder.svg?height=200&width=300",
      difficulty: "Beginner",
      duration: "1-2 hours",
      students: 2100,
      rating: 4.7,
      region: "India",
    },
    {
      id: 4,
      title: "Batik Art Creation",
      description: "Explore the wax-resist dyeing technique from Indonesia",
      image: "/placeholder.svg?height=200&width=300",
      difficulty: "Intermediate",
      duration: "3-4 hours",
      students: 750,
      rating: 4.6,
      region: "Indonesia",
    },
    {
      id: 5,
      title: "Textile Dyeing Methods",
      description: "Learn natural and traditional dyeing techniques for fabrics",
      image: "/placeholder.svg?height=200&width=300",
      difficulty: "Beginner",
      duration: "2 hours",
      students: 1680,
      rating: 4.5,
      region: "Global",
    },
    {
      id: 6,
      title: "Beadwork & Sequin Art",
      description: "Master the art of decorative beadwork and sequin application",
      image: "/placeholder.svg?height=200&width=300",
      difficulty: "Intermediate",
      duration: "2-3 hours",
      students: 920,
      rating: 4.8,
      region: "Africa",
    },
  ]

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner":
        return "bg-green-100 text-green-800"
      case "Intermediate":
        return "bg-yellow-100 text-yellow-800"
      case "Advanced":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <>
      <Head>
        <title>Art & Craft - Bhesbhusa</title>
        <meta name="description" content="Learn traditional craftsmanship and textile arts" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-amber-50 to-orange-50">
        {/* Header */}
        <header className="bg-white/95 backdrop-blur-sm border-b border-amber-200 sticky top-0 z-50">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Link href="/">
                  <Button variant="ghost" size="sm">
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Home
                  </Button>
                </Link>
                <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-orange-500 rounded-full flex items-center justify-center">
                    <Palette className="w-4 h-4 text-white" />
                  </div>
                  <h1 className="text-xl font-bold text-gray-800">Art & Craft</h1>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Master Traditional Craftsmanship</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dive deep into the world of traditional textile arts and craftsmanship. Learn from master artisans and
              discover the techniques behind beautiful cultural clothing.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
              <div className="text-gray-600">Craft Techniques</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-orange-600 mb-2">15K+</div>
              <div className="text-gray-600">Students</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-red-600 mb-2">25+</div>
              <div className="text-gray-600">Countries</div>
            </div>
            <div className="text-center p-6 bg-white rounded-xl shadow-sm">
              <div className="text-3xl font-bold text-purple-600 mb-2">4.8</div>
              <div className="text-gray-600">Avg Rating</div>
            </div>
          </div>

          {/* Craft Workshops */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {crafts.map((craft) => (
              <Card key={craft.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                <div className="relative">
                  <Image
                    src={craft.image || "/placeholder.svg"}
                    alt={craft.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getDifficultyColor(craft.difficulty)}>{craft.difficulty}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="bg-white/90 text-gray-800">
                      {craft.region}
                    </Badge>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle className="text-lg group-hover:text-amber-600 transition-colors">{craft.title}</CardTitle>
                  <CardDescription className="text-sm">{craft.description}</CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex items-center justify-between text-sm text-gray-600 mb-4">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {craft.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-1" />
                      {craft.students.toLocaleString()}
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400" />
                      {craft.rating}
                    </div>
                  </div>

                  <Button className="w-full bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600">
                    Start Learning
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center bg-gradient-to-r from-amber-500 to-orange-500 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold mb-4">Become a Master Craftsperson</h3>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Join our comprehensive program and learn from traditional artisans around the world. Preserve cultural
              heritage while mastering timeless techniques.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="bg-white text-amber-600 hover:bg-gray-100">
                View All Workshops
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 bg-transparent">
                Become an Instructor
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
