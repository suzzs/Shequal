import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowLeft, MapPin, Clock, Users } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import Head from "next/head"

export default function FestivalsPage() {
  const festivals = [
    {
      id: 1,
      name: "Diwali - Festival of Lights",
      country: "India",
      date: "November 12, 2024",
      description:
        "Celebrate the victory of light over darkness with traditional Indian attire including sarees, lehengas, and kurtas.",
      image: "/placeholder.svg?height=250&width=400",
      clothing: ["Sarees", "Lehengas", "Kurtas"],
      attendees: "1B+",
      duration: "5 days",
      significance: "Religious & Cultural",
    },
    {
      id: 2,
      name: "Chinese New Year",
      country: "China",
      date: "February 10, 2024",
      description:
        "Welcome the lunar new year with vibrant red qipaos and traditional Chinese garments symbolizing prosperity.",
      image: "/placeholder.svg?height=250&width=400",
      clothing: ["Qipao", "Hanfu", "Tang Suit"],
      attendees: "1.4B+",
      duration: "15 days",
      significance: "Cultural & Traditional",
    },
    {
      id: 3,
      name: "Hanami - Cherry Blossom Festival",
      country: "Japan",
      date: "March 20 - May 15, 2024",
      description:
        "Experience the beauty of spring in elegant kimonos while celebrating the blooming of cherry blossoms.",
      image: "/placeholder.svg?height=250&width=400",
      clothing: ["Kimono", "Yukata", "Hakama"],
      attendees: "Millions",
      duration: "2 months",
      significance: "Cultural & Seasonal",
    },
    {
      id: 4,
      name: "Chuseok - Harvest Festival",
      country: "South Korea",
      date: "September 17, 2024",
      description: "Honor ancestors and celebrate the harvest season wearing beautiful traditional hanboks.",
      image: "/placeholder.svg?height=250&width=400",
      clothing: ["Hanbok", "Jeogori", "Chima"],
      attendees: "50M+",
      duration: "3 days",
      significance: "Ancestral & Harvest",
    },
    {
      id: 5,
      name: "Eid al-Fitr",
      country: "Global",
      date: "April 10, 2024",
      description: "Celebrate the end of Ramadan with festive traditional clothing from various Islamic cultures.",
      image: "/placeholder.svg?height=250&width=400",
      clothing: ["Thobe", "Kaftan", "Shalwar Kameez"],
      attendees: "1.8B+",
      duration: "3 days",
      significance: "Religious",
    },
    {
      id: 6,
      name: "Día de los Muertos",
      country: "Mexico",
      date: "November 1-2, 2024",
      description: "Honor deceased loved ones with colorful traditional Mexican clothing and vibrant decorations.",
      image: "/placeholder.svg?height=250&width=400",
      clothing: ["Huipil", "Rebozo", "Charro Suit"],
      attendees: "Millions",
      duration: "2 days",
      significance: "Cultural & Memorial",
    },
  ]

  const getSignificanceColor = (significance: string) => {
    if (significance.includes("Religious")) return "bg-purple-100 text-purple-800"
    if (significance.includes("Cultural")) return "bg-blue-100 text-blue-800"
    if (significance.includes("Harvest")) return "bg-green-100 text-green-800"
    if (significance.includes("Seasonal")) return "bg-orange-100 text-orange-800"
    return "bg-gray-100 text-gray-800"
  }

  return (
    <>
      <Head>
        <title>Cultural Festivals - Bhesbhusa</title>
        <meta name="description" content="Discover cultural festivals and their traditional clothing worldwide" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-pink-50">
        {/* Header */}
        <header className="bg-white/95 backdrop-blur-sm border-b border-rose-200 sticky top-0 z-50">
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
                  <div className="w-8 h-8 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                    <Calendar className="w-4 h-4 text-white" />
                  </div>
                  <h1 className="text-xl font-bold text-gray-800">Cultural Festivals</h1>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div className="container mx-auto px-4 py-8">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Celebrate Cultural Festivals Worldwide</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the rich traditions and beautiful clothing associated with festivals from around the globe. Learn
              about the cultural significance and traditional attire for each celebration.
            </p>
          </div>

          {/* Festival Calendar */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Upcoming Festivals</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {festivals.map((festival) => (
                <Card key={festival.id} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <Image
                      src={festival.image || "/placeholder.svg"}
                      alt={festival.name}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className={getSignificanceColor(festival.significance)}>{festival.significance}</Badge>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge variant="secondary" className="bg-white/90 text-gray-800">
                        <MapPin className="w-3 h-3 mr-1" />
                        {festival.country}
                      </Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className="text-lg group-hover:text-rose-600 transition-colors">
                      {festival.name}
                    </CardTitle>
                    <CardDescription className="text-sm">{festival.description}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="w-4 h-4 mr-2" />
                        {festival.date}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-2" />
                        Duration: {festival.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="w-4 h-4 mr-2" />
                        {festival.attendees} participants
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="text-sm font-semibold text-gray-700 mb-2">Traditional Clothing:</h4>
                      <div className="flex flex-wrap gap-1">
                        {festival.clothing.map((item, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
                      >
                        Learn More
                      </Button>
                      <Link href="/buy">
                        <Button size="sm" variant="outline" className="border-rose-200 hover:bg-rose-50 bg-transparent">
                          Buy Outfits
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Cultural Impact Section */}
          <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-12 text-white mb-12">
            <div className="text-center">
              <h3 className="text-3xl font-bold mb-4">Preserving Cultural Heritage</h3>
              <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
                Festivals are more than celebrations—they're living traditions that connect us to our heritage. Through
                traditional clothing, we honor our ancestors and pass down cultural wisdom to future generations.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                  <div className="text-3xl font-bold mb-2">100+</div>
                  <div className="text-rose-100">Festivals Covered</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">50+</div>
                  <div className="text-rose-100">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">500+</div>
                  <div className="text-rose-100">Traditional Outfits</div>
                </div>
                <div>
                  <div className="text-3xl font-bold mb-2">5B+</div>
                  <div className="text-rose-100">People Celebrating</div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Ready to Celebrate?</h3>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our virtual try-on feature to see how you'd look in traditional festival attire, or learn more
              about the cultural significance of each celebration.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/buy">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600"
                >
                  Buy Festival Outfits
                </Button>
              </Link>
              <Link href="/art-craft">
                <Button size="lg" variant="outline" className="border-rose-200 hover:bg-rose-50 bg-transparent">
                  Learn Traditional Crafts
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
