import React from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import L from "leaflet"
import "leaflet/dist/leaflet.css"

// Fix Leaflet icon issue in Next.js
delete (L.Icon.Default.prototype as any)._getIconUrl
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
})

interface MapComponentProps {
  seller: {
    name: string
    region: string
    coordinates: { lat: number; lng: number }
  }
}

const MapComponent: React.FC<MapComponentProps> = ({ seller }) => {
  return (
    <div className="h-96 rounded-lg overflow-hidden shadow-xl">
      <MapContainer 
        center={[seller.coordinates.lat, seller.coordinates.lng]} 
        zoom={9} 
        className="h-full w-full z-0"
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <Marker position={[seller.coordinates.lat, seller.coordinates.lng]}>
          <Popup>
            <strong>{seller.name}</strong><br />
            {seller.region}<br />
            Location of her workshop
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  )
}

export default MapComponent