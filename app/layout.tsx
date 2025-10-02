import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { ThemeProvider } from "@/components/theme-provider"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"

export const metadata: Metadata = {
  title: "AI & Cybersecurity Solutions",
  description: "Integrated AI and cybersecurity services for businesses and enterprises",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/footerlogo.png" type="image/png" />
        <link
          href="https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700&family=Roboto+Mono:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Suppress hydration warnings from browser extensions
              const originalError = console.error;
              console.error = (...args) => {
                if (typeof args[0] === 'string' && args[0].includes('Hydration failed')) {
                  return;
                }
                originalError(...args);
              };
            `
          }}
        />
      </head>
      <body style={{ fontFamily: 'Arial, sans-serif' }} suppressHydrationWarning>
        <ThemeProvider 
          attribute="class" 
          defaultTheme="light"
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}



