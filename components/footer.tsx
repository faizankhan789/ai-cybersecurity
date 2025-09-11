"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Twitter, Linkedin, Github, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-4 mb-4">
              <Image
                src="/footerlogo.png"
                alt="AI & Cybersecurity Logo"
                width={80}
                height={80}
                className="h-16 w-16 md:h-18 md:w-18 lg:h-20 lg:w-20 object-contain"
                onError={(e) => {
                  e.currentTarget.src = "/logo.png"
                }}
              />
              <span className="font-bold text-white text-lg md:text-xl">AI & Cybersecurity</span>
            </div>
            <p className="mb-4">
              Empowering businesses with integrated AI and cybersecurity solutions for a secure digital future.
            </p>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Twitter">
                <Twitter className="h-5 w-5 hover:text-white transition-colors" />
              </Link>
              <Link href="#" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5 hover:text-white transition-colors" />
              </Link>
              <Link href="#" aria-label="GitHub">
                <Github className="h-5 w-5 hover:text-white transition-colors" />
              </Link>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-solutions" className="hover:text-white transition-colors">
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link href="/cybersecurity-services" className="hover:text-white transition-colors">
                  Cybersecurity Services
                </Link>
              </li>
              <li>
                <Link href="/integrated-solutions" className="hover:text-white transition-colors">
                  Integrated Solutions
                </Link>
              </li>
              <li>
                <Link href="/resources" className="hover:text-white transition-colors">
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 mt-0.5 text-gray-400" />
                <span>123 Tech Plaza, San Francisco, CA 94103</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-gray-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-gray-400" />
                <span>info@aiandcybersecurity.com</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="mb-4">Subscribe to our newsletter for the latest in AI and cybersecurity.</p>
            <form className="space-y-2">
              <Input type="email" placeholder="Your email address" className="bg-gray-800 border-gray-700" required />
              <Button type="submit" className="w-full">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm text-center">
          <p>© {new Date().getFullYear()} AI & Cybersecurity Solutions. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy-policy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
            <Link href="/compliance" className="hover:text-white transition-colors">
              Compliance
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

