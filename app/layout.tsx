import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { cn } from "@/lib/utils"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "./globals.css"
import { Toaster } from "sonner"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "SonShine Kids Cambodia - Bilingual Pre-School",
    template: "%s | SonShine Kids Cambodia"
  },
  description: "A nurturing bilingual kindergarten offering education in both Khmer and English in Phnom Penh, Cambodia",
  keywords: ["preschool", "kindergarten", "bilingual education", "Cambodia", "Phnom Penh", "education"],
  authors: [{ name: "SonShine Kids Cambodia" }],
  creator: "SonShine Kids Cambodia",
  metadataBase: new URL('https://sonshinecambodia.com'),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sonshinecambodia.com",
    title: "SonShine Kids Cambodia - Bilingual Pre-School",
    description: "A nurturing bilingual kindergarten offering education in both Khmer and English in Phnom Penh, Cambodia",
    siteName: "SonShine Kids Cambodia",
    images: [
      {
        url: "/images/hero/hero1.jpg",
        width: 1200,
        height: 630,
        alt: "SonShine Kids Cambodia"
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SonShine Kids Cambodia - Bilingual Pre-School',
    description: 'A nurturing bilingual kindergarten offering education in both Khmer and English',
    images: ['/images/hero/hero1.jpg'],
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html 
      lang="en" 
      className="scroll-smooth"
      suppressHydrationWarning
    >
      <body className={cn(
        inter.className,
        "min-h-screen bg-white text-slate-900 antialiased",
        "flex flex-col",
        "selection:bg-[#1a7fa8] selection:text-white"
      )}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <Toaster />
      </body>
    </html>
  )
}

