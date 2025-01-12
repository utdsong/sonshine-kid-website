"use client"

import { MapPin } from 'lucide-react'

const address = "House 63, Street 160, Teuk Laak 2, Khan Toul Kork, Phnom Penh, Cambodia"
const mapUrl = "https://maps.app.goo.gl/Y6guvHmeJ9RbDaz29"

export function LocationMap() {
  return (
    <div className="space-y-4">
      <div className="rounded-lg overflow-hidden shadow-lg aspect-video">
        <iframe
          src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3909.0673010586687!2d104.89656971531383!3d11.562856144705446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3109510b95c1f781%3A0x89fa6581a9aa5d88!2sSonShine%20Kids%20International!5e0!3m2!1sen!2s!4v1704918929183!5m2!1sen!2s`}
          width="100%"
          height="100%"
          style={{ border: 0, minHeight: "400px" }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="SonShine Kids Cambodia Location"
          aria-label="Google Maps showing SonShine Kids Cambodia location"
        />
      </div>
      <div className="flex items-center justify-center gap-2 text-gray-600">
        <MapPin className="h-5 w-5 text-[#1a7fa8]" />
        <a 
          href={mapUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm hover:underline"
        >
          {address}
        </a>
      </div>
    </div>
  )
}

