"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { smoothScroll } from "@/lib/utils"

const menuItems = [
  { href: "/about", label: "About Us", isHash: false },
  { href: "/programs", label: "Programs", isHash: false },
  { href: "/#contact", label: "Contact", isHash: true },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isOpen])

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, isHash?: boolean) => {
    if (isHash) {
      e.preventDefault();
      
      // Always navigate to home page with hash if not on home page
      if (pathname !== '/') {
        window.location.href = '/#contact';
        return;
      }
      
      // If on home page, smooth scroll to contact section
      const element = document.getElementById('contact');
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
    setIsOpen(false);
  }

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled 
          ? "bg-white shadow-sm" 
          : "bg-transparent"
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
      <div className="container flex h-16 items-center justify-between px-4 relative">
        <Link href="/" className="flex items-center space-x-2 relative z-50">
          <Image
            src="https://i.ibb.co/NYf118L/logo.png"
            alt="SonShine Kids Cambodia Logo"
            width={40}
            height={40}
            className="h-8 w-auto bg-white rounded-full"
          />
          <span className={`hidden font-bold sm:inline-block text-white`}>
            SonShine Kids Cambodia
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 relative z-50">
          {menuItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href, item.isHash)}
              className={`text-sm font-medium transition-colors text-white hover:text-[#e1df32] ${
                pathname === item.href ? "underline underline-offset-4" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}
          <Button
            asChild
            className="bg-[#ff6c9e] hover:bg-[#ff6c9e]/90"
          >
            <Link href="/donate">Donate</Link>
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <div className={`p-2 rounded-full ${isOpen ? "bg-white" : ""}`}>
            {isOpen ? (
              <X className="h-6 w-6 text-slate-900" />
            ) : (
              <Menu className="h-6 w-6 text-white" />
            )}
          </div>
        </button>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white md:hidden"
            >
              <nav className="container flex flex-col items-center justify-center h-full py-4 px-4 space-y-8">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href, item.isHash)}
                    className={`text-lg font-medium text-slate-900 hover:text-[#1a7fa8] ${
                      pathname === item.href ? "underline underline-offset-4" : ""
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                <Button
                  asChild
                  className="bg-[#ff6c9e] hover:bg-[#ff6c9e]/90 w-full max-w-xs"
                >
                  <Link href="/donate">Donate</Link>
                </Button>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}

