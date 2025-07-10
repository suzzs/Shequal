import React, { useState } from 'react'
import { MapPin, Phone, Mail, Star, MessageCircle, Heart, Share2 } from 'lucide-react'

// Mock map component since we can't use actual Leaflet in this environment
const MapComponent = ({ seller }) => {
  const openInGoogleMaps = () => {
    const url = `https://www.google.com/maps/search/?api=1&query=${seller.coordinates.lat},${seller.coordinates.lng}`
    window.open(url, '_blank')
  }

  return (
    <div className="h-96 rounded-lg overflow-hidden shadow-xl relative bg-green-50">
      {/* Map placeholder */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-100 to-blue-100 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <div className="bg-white p-4 rounded-lg shadow-lg max-w-xs">
            <h3 className="font-bold text-lg">{seller.name}</h3>
            <p className="text-gray-600">{seller.region}</p>
            <p className="text-sm text-gray-500 mt-1">Location of her workshop</p>
            <button 
              onClick={openInGoogleMaps}
              className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
            >
              Open in Google Maps
            </button>
          </div>
        </div>
      </div>
      
      {/* Map controls */}
      <div className="absolute top-4 right-4 flex flex-col gap-2">
        <button className="bg-white p-2 rounded shadow hover:shadow-md transition-shadow">
          <span className="text-xl">+</span>
        </button>
        <button className="bg-white p-2 rounded shadow hover:shadow-md transition-shadow">
          <span className="text-xl">-</span>
        </button>
      </div>
    </div>
  )
}

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('about')
  const [isFollowing, setIsFollowing] = useState(false)
  
  const seller = {
    name: "Mama Grace",
    region: "Goma, North Kivu",
    coordinates: { lat: -1.6792, lng: 29.2228 },
    avatar: null, // We'll use a placeholder
    rating: 4.8,
    reviews: 127,
    joinDate: "March 2022",
    specialties: ["Traditional Crafts", "Textiles", "Pottery"],
    bio: "Experienced artisan specializing in traditional Congolese crafts. I have been creating beautiful handmade items for over 15 years, passing down techniques learned from my grandmother.",
    stats: {
      products: 45,
      sales: 320,
      followers: 89
    }
  }

  const products = [
    { id: 1, name: "Handwoven Basket", price: "$25", image: null },
    { id: 2, name: "Clay Pot Set", price: "$40", image: null },
    { id: 3, name: "Traditional Textile", price: "$60", image: null },
    { id: 4, name: "Wooden Sculpture", price: "$35", image: null }
  ]

  const PlaceholderImage = ({ text, size = "w-32 h-32" }) => (
    <div className={`${size} bg-gray-200 rounded-lg flex items-center justify-center text-gray-500 text-sm font-medium`}>
      {text}
    </div>
  )

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-xl p-8 text-white mb-8">
        <div className="flex flex-col md:flex-row items-center gap-6">
          <PlaceholderImage text="Profile" size="w-32 h-32" />
          
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-3xl font-bold mb-2">{seller.name}</h1>
            <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
              <MapPin className="w-4 h-4" />
              <span>{seller.region}</span>
            </div>
            
            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                <span>{seller.rating}</span>
                <span className="text-gray-200">({seller.reviews} reviews)</span>
              </div>
              <span className="text-gray-200">•</span>
              <span>Joined {seller.joinDate}</span>
            </div>
            
            <div className="flex gap-2 justify-center md:justify-start">
              {seller.specialties.map((specialty, index) => (
                <span key={index} className="bg-white/20 px-3 py-1 rounded-full text-sm">
                  {specialty}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <button 
              onClick={() => setIsFollowing(!isFollowing)}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                isFollowing 
                  ? 'bg-white text-green-600 hover:bg-gray-100' 
                  : 'bg-green-500 text-white hover:bg-green-400'
              }`}
            >
              {isFollowing ? 'Following' : 'Follow'}
            </button>
            
            <div className="flex gap-2">
              <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <MessageCircle className="w-4 h-4" />
              </button>
              <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <Heart className="w-4 h-4" />
              </button>
              <button className="p-2 bg-white/20 rounded-lg hover:bg-white/30 transition-colors">
                <Share2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <div className="text-2xl font-bold text-green-600 mb-1">{seller.stats.products}</div>
          <div className="text-gray-600">Products</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <div className="text-2xl font-bold text-blue-600 mb-1">{seller.stats.sales}</div>
          <div className="text-gray-600">Sales</div>
        </div>
        <div className="bg-gray-50 rounded-lg p-6 text-center">
          <div className="text-2xl font-bold text-purple-600 mb-1">{seller.stats.followers}</div>
          <div className="text-gray-600">Followers</div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="border-b border-gray-200 mb-6">
        <nav className="flex gap-8">
          {['about', 'products', 'location', 'reviews'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`pb-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                activeTab === tab
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </nav>
      </div>

      {/* Tab Content */}
      <div className="min-h-96">
        {activeTab === 'about' && (
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">About {seller.name}</h3>
              <p className="text-gray-700 leading-relaxed">{seller.bio}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
              <div className="space-y-2">
                <div className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gray-500" />
                  <span>+243 XXX XXX XXX</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-4 h-4 text-gray-500" />
                  <span>mama.grace@example.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-500" />
                  <span>{seller.region}</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'products' && (
          <div>
            <h3 className="text-xl font-semibold mb-6">Products ({seller.stats.products})</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {products.map((product) => (
                <div key={product.id} className="border rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
                  <PlaceholderImage text={product.name} size="w-full h-48" />
                  <div className="p-4">
                    <h4 className="font-medium mb-2">{product.name}</h4>
                    <p className="text-green-600 font-bold">{product.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'location' && (
          <div>
            <h3 className="text-xl font-semibold mb-6">Workshop Location</h3>
            <MapComponent seller={seller} />
            <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-2">Address Details</h4>
              <p className="text-gray-700">{seller.region}</p>
              <p className="text-gray-600 text-sm mt-1">
                Visit {seller.name}'s workshop to see her beautiful crafts in person and learn about traditional techniques.
              </p>
            </div>
          </div>
        )}

        {activeTab === 'reviews' && (
          <div>
            <h3 className="text-xl font-semibold mb-6">Customer Reviews ({seller.reviews})</h3>
            <div className="space-y-6">
              {[1, 2, 3].map((review) => (
                <div key={review} className="border-b border-gray-200 pb-6">
                  <div className="flex items-start gap-4">
                    <PlaceholderImage text="User" size="w-10 h-10" />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="font-medium">Customer {review}</span>
                        <div className="flex">
                          {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-gray-700">
                        Amazing quality craftsmanship! The attention to detail is incredible. 
                        {seller.name} truly is a master artisan.
                      </p>
                      <p className="text-gray-500 text-sm mt-2">2 weeks ago</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default UserProfile