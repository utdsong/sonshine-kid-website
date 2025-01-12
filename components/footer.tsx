import Link from "next/link"
import Image from "next/image"
import { Facebook, Mail, Phone } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-[#1a7fa8] text-white">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and About */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="https://i.ibb.co/NYf118L/logo.png"
                alt="SonShine Kids Cambodia Logo"
                width={40}
                height={40}
                className="h-8 w-auto bg-white rounded-full"
              />
              <span className="font-bold">SonShine Kids Cambodia</span>
            </Link>
            <p className="text-sm text-white/80">
              A nurturing bilingual kindergarten offering education in both Khmer and English.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-sm hover:text-[#e1df32] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/programs" className="text-sm hover:text-[#e1df32] transition-colors">
                  Programs
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm hover:text-[#e1df32] transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/donate" className="text-sm hover:text-[#e1df32] transition-colors">
                  Donate
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4">Contact Us</h3>
            <div className="space-y-2">
              <a 
                href="tel:+85512345678" 
                className="flex items-center space-x-2 text-sm hover:text-[#e1df32] transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+855 12 345 678</span>
              </a>
              <a 
                href="mailto:info@sonshinekids.com" 
                className="flex items-center space-x-2 text-sm hover:text-[#e1df32] transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>info@sonshinekids.com</span>
              </a>
              <a 
                href="https://www.facebook.com/p/Sonshine-Kids-Cambodia-100092845294006" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center space-x-2 text-sm hover:text-[#e1df32] transition-colors"
              >
                <Facebook className="h-4 w-4" />
                <span>Follow us on Facebook</span>
              </a>
              <p className="text-sm">
                House 63, Street 160, Teuk Laak 2, Khan Toul Kork, Phnom Penh, Cambodia
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-white/20 text-center text-sm text-white/60">
          <p>&copy; {new Date().getFullYear()} SonShine Kids Cambodia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

