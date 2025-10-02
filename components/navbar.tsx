"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Menu, X, ChevronDown, Brain, Shield, Zap } from "lucide-react"

const navItems = [
  {
    label: "AI Solutions",
    href: "/ai-solutions",
    icon: <Brain className="h-4 w-4 mr-2" />,
    submenu: [
      { label: "Machine Learning", href: "/ai-solutions/machine-learning" },
      { label: "Computer Vision", href: "/ai-solutions/computer-vision" },
      { label: "NLP & Chatbots", href: "/ai-solutions/nlp-chatbots" },
      { label: "Generative AI", href: "/ai-solutions/generative-ai" },
      { label: "RAG Systems", href: "/ai-solutions/rag" },
      { label: "Large Language Models", href: "/ai-solutions/llm" },
      { label: "AI Consulting", href: "/ai-solutions/consulting" },
    ],
  },
  {
    label: "Cybersecurity",
    href: "/cybersecurity-services",
    icon: <Shield className="h-4 w-4 mr-2" />,
    submenu: [
      { label: "Web App Penetration Testing", href: "/cybersecurity-services/web-application-pentest" },
      { label: "Mobile App Security Testing", href: "/cybersecurity-services/mobile-application-pentest" },
      { label: "API Penetration Testing", href: "/cybersecurity-services/api-penetration-testing" },
      { label: "Network & Infrastructure Testing", href: "/cybersecurity-services/network-security" },
      { label: "Vulnerability Assessment", href: "/cybersecurity-services/threat-intelligence" },
      { label: "Compliance & Configuration Review", href: "/cybersecurity-services/compliance" },
      { label: "Incident Response", href: "/cybersecurity-services/incident-response" },
    ],
  },
  {
    label: "Integrated Solutions",
    href: "/integrated-solutions",
    icon: <Zap className="h-4 w-4 mr-2" />,
  },
  { label: "Resources", href: "/resources" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState<number | null>(null)
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  const handleMouseEnter = (index: number) => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current)
    }
    setHoveredItem(index)
  }

  const handleMouseLeave = () => {
    hoverTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null)
    }, 150) // Small delay to allow moving to submenu
  }

  useEffect(() => {
    return () => {
      if (hoverTimeoutRef.current) {
        clearTimeout(hoverTimeoutRef.current)
      }
    }
  }, [])

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center -mt-2">
          <Image
            src="/logo.png"
            alt="AI & Cybersecurity Logo"
            width={200}
            height={200}
            className="h-44 w-44 md:h-48 md:w-48 lg:h-52 lg:w-52 object-contain"
          />
        </Link>

        <div className="flex flex-1 items-center justify-end space-x-6">
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navItems.map((item, index) =>
              item.submenu ? (
                <div
                  key={index}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(index)}
                  onMouseLeave={handleMouseLeave}
                >
                  <Button 
                    variant="ghost" 
                    className="flex items-center gap-1 transition-colors hover:text-foreground/80 text-foreground/60"
                    asChild
                  >
                    <Link href={item.href}>
                      {item.icon}
                      {item.label}
                      <ChevronDown className="h-4 w-4 ml-1" />
                    </Link>
                  </Button>
                  {hoveredItem === index && (
                    <div className="absolute top-full left-0 mt-1 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                      <div className="py-2">
                        {item.submenu.map((subItem, subIndex) => (
                          <Link
                            key={subIndex}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={index}
                  href={item.href}
                  prefetch={true}
                  className="flex items-center transition-colors hover:text-foreground/80 text-foreground/60"
                >
                  {item.icon}
                  {item.label}
                </Link>
              ),
            )}
          </nav>

          <Button asChild className="hidden md:flex">
            <Link href="/contact">Get Started</Link>
          </Button>

          {/* Mobile Menu Button */}
          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t">
          <div className="container py-4 space-y-4">
            {navItems.map((item, index) => (
              <div key={index} className="py-2">
                {item.submenu ? (
                  <>
                    <div className="flex items-center font-medium mb-2">
                      {item.icon}
                      {item.label}
                    </div>
                    <div className="pl-6 space-y-2">
                      {item.submenu.map((subItem, subIndex) => (
                        <Link
                          key={subIndex}
                          href={subItem.href}
                          className="block text-foreground/60 hover:text-foreground"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link href={item.href} className="flex items-center font-medium" onClick={() => setIsMenuOpen(false)}>
                    {item.icon}
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t">
              <Button asChild className="w-full">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Get Started
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

