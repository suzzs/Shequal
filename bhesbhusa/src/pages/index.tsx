import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Shirt } from "lucide-react"
import Link from "next/link"
import Head from "next/head"
import Image from "next/image"

export default function HomePage() {
  return (
    <>
      <Head>
        <title>Bhesbhusa - Embrace Your Cultural Heritage</title>
        <meta name="description" content="Discover, try on, and celebrate traditional clothing from around the world" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-amber-50 via-red-50 to-orange-50 relative">
        {/* Background Image Overlay */}
        <div className="fixed inset-0 z-0">
          <Image
            src="/background.jpg"
            alt="Traditional Nepali cultural background"
            fill
            className="object-cover opacity-5"
            priority
          />
          {/* Alternative: CSS Background Image */}
          <div
            className="absolute inset-0 opacity-60"
            style={{
              backgroundImage: `url('/background.jpg')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>

        {/* Content Wrapper */}
        <div className="relative z-10">
          {/* Header */}
          <header className="bg-gradient-to-r from-red-900/95 to-amber-900/95 backdrop-blur-sm border-b-2 border-amber-400 sticky top-0 z-50">
            <div className="container mx-auto px-4 py-4">
              <div className="flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-amber-500 via-red-600 to-red-700 rounded-full flex items-center justify-center border-2 border-amber-300 shadow-lg">
                    <img
                      src="/image.png"
                      alt="Nepali people in traditional dress doing namaste"
                      className="logo-image w-14 h-14 rounded-full object-cover shadow-md hover:scale-110 hover:rotate-12 transition-all"
                    />
                  </div>
                  <h1 className="text-2xl font-bold text-amber-100 drop-shadow-lg">Bhesbhusa</h1>
                </div>

                {/* Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                  <Link href="/" className="text-amber-100 hover:text-amber-300 font-medium transition-colors">
                    Home
                  </Link>
                  <Link href="/buy" className="text-amber-100 hover:text-amber-300 font-medium transition-colors">
                    Buy
                  </Link>
                  <Link href="/art-craft" className="text-amber-100 hover:text-amber-300 font-medium transition-colors">
                    Art & Craft
                  </Link>
                  <Link href="/festivals" className="text-amber-100 hover:text-amber-300 font-medium transition-colors">
                    Festivals
                  </Link>
                  <Link href="/gallery" className="text-amber-100 hover:text-amber-300 font-medium transition-colors">
                    Gallery
                  </Link>
                </nav>

                {/* Search */}
                <div className="flex items-center space-x-4">
                  <div className="relative hidden sm:block">
                    <Input
                      type="search"
                      placeholder="Search cultural wear..."
                      className="pl-10 pr-4 py-2 w-64 border-amber-300 focus:border-amber-500 bg-white/90"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-amber-600" />
                  </div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="md:hidden bg-amber-100/20 border-amber-300 text-amber-100"
                  >
                    <Search className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </header>

          {/* Hero Section */}
          <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
            {/* Hero Background with enhanced overlay */}
            <div className="absolute inset-0 z-0">
              {/* Main gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-800/90 via-amber-700/85 to-red-900/90" />
              <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 via-transparent to-red-900/50" />

              {/* Traditional pattern overlay */}
              <div
                className="absolute inset-0 opacity-15"
                style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, #fbbf24 2px, transparent 2px),
                                   radial-gradient(circle at 75% 75%, #dc2626 2px, transparent 2px)`,
                  backgroundSize: "50px 50px",
                }}
              />

              {/* Additional decorative pattern */}
              <div
                className="absolute inset-0 opacity-5"
                style={{
                  backgroundImage: `repeating-linear-gradient(
                    45deg,
                    transparent,
                    transparent 20px,
                    rgba(251, 191, 36, 0.1) 20px,
                    rgba(251, 191, 36, 0.1) 40px
                  )`,
                }}
              />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
              <div className="flex items-center justify-center space-x-2">
                <span className="text-7xl">🇳🇵</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-bold text-amber-100 mb-6 drop-shadow-2xl">
                Embrace Your
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-200">
                  {" "}
                  Cultural Heritage
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-amber-100/90 mb-8 max-w-2xl mx-auto drop-shadow-lg">
                Discover Try and Buy Nepali Cultural Dresses along arts and crafts
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Link href="/tryon">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-amber-500 via-red-600 to-red-700 hover:from-amber-600 hover:via-red-700 hover:to-red-800 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-amber-400"
                  >
                    <Shirt className="w-5 h-5 mr-2" />
                    Try On Now
                  </Button>
                </Link>
                <Link href="/gallery">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-2 border-amber-300 text-amber-100 hover:bg-amber-100/20 hover:text-amber-200 px-8 py-4 text-lg font-semibold rounded-full bg-transparent backdrop-blur-sm"
                  >
                    Explore Gallery
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Features Section */}
          <section className="py-20 bg-gradient-to-b from-amber-50/95 to-red-50/95 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="text-center mb-16">
                <h3 className="text-4xl font-bold text-red-900 mb-4">Discover Cultural Beauty</h3>
                <p className="text-xl text-red-700 max-w-2xl mx-auto">
                  Immerse yourself in the rich tapestry of Nepali traditions and global craftsmanship
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {/* Buy Cultural Wear */}
                <div className="group text-center p-8 rounded-2xl bg-gradient-to-b from-red-100/95 via-amber-50/95 to-red-100/95 hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-amber-200 hover:border-red-400 cursor-pointer backdrop-blur-sm">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-600 via-amber-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 overflow-hidden">
                    <img
                      src="/dress.png"
                      alt="Traditional Nepali Cultural Wear"
                      className="w-14 h-14 object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-red-900 mb-4 group-hover:text-red-700 transition-colors">
                    Buy Cultural Wear
                  </h4>
                  <p className="text-red-700 mb-6 group-hover:text-red-600 transition-colors">
                    Shop authentic traditional clothing from Nepal and around the world. High-quality fabrics and
                    craftsmanship delivered to your door.
                  </p>
                  <Link href="/buy">
                    <Button className="bg-gradient-to-r from-red-600 to-amber-600 hover:from-red-700 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Shop Now
                    </Button>
                  </Link>
                </div>

                {/* Art & Craft */}
                <div className="group text-center p-8 rounded-2xl bg-gradient-to-b from-amber-100/95 via-yellow-50/95 to-amber-100/95 hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-amber-200 hover:border-amber-400 cursor-pointer backdrop-blur-sm">
                  <div className="w-20 h-20 bg-gradient-to-r from-amber-600 via-yellow-500 to-amber-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 overflow-hidden">
                    <img
                      src="/mithila.png"
                      alt="Traditional Nepali Art and Crafts"
                      className="w-14 h-14 object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-amber-900 mb-4 group-hover:text-amber-700 transition-colors">
                    Art & Craft
                  </h4>
                  <p className="text-amber-800 mb-6 group-hover:text-amber-600 transition-colors">
                    Discover the traditional innovations and artistic creations of authentic Nepali craftsmanship and
                    cultural heritage.
                  </p>
                  <Link href="/art-craft">
                    <Button className="bg-gradient-to-r from-amber-600 to-yellow-600 hover:from-amber-700 hover:to-yellow-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      Explore Crafts
                    </Button>
                  </Link>
                </div>

                {/* Festivals */}
                <div className="group text-center p-8 rounded-2xl bg-gradient-to-b from-red-100/95 via-pink-50/95 to-red-100/95 hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-red-200 hover:border-red-400 cursor-pointer backdrop-blur-sm">
                  <div className="w-20 h-20 bg-gradient-to-r from-red-600 via-pink-500 to-red-700 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300 overflow-hidden">
                    <img
                      src="/festivals"
                      alt="Nepali Cultural Festivals"
                      className="w-14 h-14 object-cover rounded-full group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <h4 className="text-2xl font-bold text-red-900 mb-4 group-hover:text-red-700 transition-colors">
                    Festivals
                  </h4>
                  <p className="text-red-700 mb-6 group-hover:text-red-600 transition-colors">
                    Discover the significance of traditional clothing in Dashain, Tihar, and other cultural festivals
                    celebrated worldwide.
                  </p>
                  <Link href="/festival.png">
                    <Button className="bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300">
                      View Festivals
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-gradient-to-r from-red-800/95 via-amber-700/95 to-red-900/95 text-white relative overflow-hidden backdrop-blur-sm">
            {/* Traditional pattern background */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.1) 10px, rgba(255,255,255,0.1) 20px)`,
              }}
            />
            <div className="container mx-auto px-4 relative z-10">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                <div className="transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold mb-2 text-amber-200">50+</div>
                  <div className="text-amber-100">Cultural Styles</div>
                </div>
                <div className="transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold mb-2 text-amber-200">10K+</div>
                  <div className="text-amber-100">Happy Users</div>
                </div>
                <div className="transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold mb-2 text-amber-200">25+</div>
                  <div className="text-amber-100">Countries</div>
                </div>
                <div className="transform hover:scale-105 transition-transform">
                  <div className="text-4xl font-bold mb-2 text-amber-200">100+</div>
                  <div className="text-amber-100">Festivals</div>
                </div>
              </div>
            </div>
          </section>

          {/* Footer */}
          <footer className="bg-gradient-to-b from-red-950/95 to-amber-950/95 text-white py-12 backdrop-blur-sm">
            <div className="container mx-auto px-4">
              <div className="grid md:grid-cols-4 gap-8">
                <div>
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-red-600 rounded-full flex items-center justify-center">
                      <Shirt className="w-4 h-4 text-white" />
                    </div>
                    <h5 className="text-xl font-bold text-amber-200">Bhesbhusa</h5>
                  </div>
                  <p className="text-amber-100/80">
                    Celebrating Nepali and global cultural heritage through traditional clothing and modern technology.
                  </p>
                </div>
                <div>
                  <h6 className="font-semibold mb-4 text-amber-200">Explore</h6>
                  <ul className="space-y-2 text-amber-100/70">
                    <li>
                      <Link href="/buy" className="hover:text-amber-200 transition-colors">
                        Buy Cultural Wear
                      </Link>
                    </li>
                    <li>
                      <Link href="/art-craft" className="hover:text-amber-200 transition-colors">
                        Art & Craft
                      </Link>
                    </li>
                    <li>
                      <Link href="/festivals" className="hover:text-amber-200 transition-colors">
                        Festivals
                      </Link>
                    </li>
                    <li>
                      <Link href="/gallery" className="hover:text-amber-200 transition-colors">
                        Gallery
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-semibold mb-4 text-amber-200">Support</h6>
                  <ul className="space-y-2 text-amber-100/70">
                    <li>
                      <Link href="/help" className="hover:text-amber-200 transition-colors">
                        Help Center
                      </Link>
                    </li>
                    <li>
                      <Link href="/contact" className="hover:text-amber-200 transition-colors">
                        Contact Us
                      </Link>
                    </li>
                    <li>
                      <Link href="/about" className="hover:text-amber-200 transition-colors">
                        About
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h6 className="font-semibold mb-4 text-amber-200">Connect</h6>
                  <p className="text-amber-100/70 mb-4">
                    Join our community and stay updated with the latest Nepali cultural fashion trends.
                  </p>
                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="border-amber-400 text-amber-200 hover:text-white hover:border-amber-300 hover:bg-amber-600/20 bg-transparent"
                    >
                      Follow
                    </Button>
                  </div>
                </div>
              </div>
              <div className="border-t border-amber-800 mt-8 pt-8 text-center text-amber-100/60">
                <p>&copy; 2024 Bhesbhusa. All rights reserved.</p>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </>
  )
}
