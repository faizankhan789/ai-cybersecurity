"use client"

import { useState } from "react"
import Link from "next/link"
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
      { label: "AI Consulting", href: "/ai-solutions/consulting" },
    ],
  },
  {
    label: "Cybersecurity",
    href: "/cybersecurity-services",
    icon: <Shield className="h-4 w-4 mr-2" />,
    submenu: [
      { label: "Network Security", href: "/cybersecurity-services/network-security" },
      { label: "Threat Intelligence", href: "/cybersecurity-services/threat-intelligence" },
      { label: "Compliance", href: "/cybersecurity-services/compliance" },
      { label: "Incident Response", href: "/cybersecurity-services/incident-response" },
    ],
  },
  {
    label: "Integrated Solutions",
    href: "/integrated-solutions",
    icon: <Zap className="h-4 w-4 mr-2" />,
  },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <div className="h-6 w-6 bg-gradient-to-br from-blue-500 to-purple-600 rounded"></div>
          <span className="hidden font-bold sm:inline-block">AI & Cybersecurity</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navItems.map((item, index) =>
            item.submenu ? (
              <DropdownMenu key={index}>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center gap-1">
                    {item.icon}
                    {item.label}
                    <ChevronDown className="h-4 w-4 ml-1" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start">
                  {item.submenu.map((subItem, subIndex) => (
                    <DropdownMenuItem key={subIndex} asChild>
                      <Link href={subItem.href} prefetch={true}>{subItem.label}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
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

        <div className="flex flex-1 items-center justify-end space-x-4">
          <Button asChild variant="ghost" className="hidden md:flex">
            <Link href="/contact">Contact</Link>
          </Button>
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
            <div className="pt-4 border-t flex flex-col gap-2">
              <Button asChild variant="outline" className="w-full">
                <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                  Contact
                </Link>
              </Button>
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

