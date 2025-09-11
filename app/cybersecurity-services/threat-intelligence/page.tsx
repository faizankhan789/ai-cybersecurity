"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { ArrowRight, AlertTriangle, Search, Eye, FileWarning } from "lucide-react"

const services = [
  {
    title: "Dark Web Monitoring",
    description: "Continuous surveillance of dark web forums and marketplaces for leaked credentials and data.",
    icon: <Eye className="h-8 w-8 text-orange-600" />,
    features: [
      "Credential exposure detection",
      "Brand mention monitoring",
      "Stolen data identification",
      "Early warning of potential breaches",
    ],
  },
  {
    title: "Phishing Simulation",
    description: "Test your organization's resilience against social engineering attacks.",
    icon: <FileWarning className="h-8 w-8 text-orange-600" />,
    features: [
      "Customized phishing campaigns",
      "Employee awareness metrics",
      "Targeted training for vulnerable users",
      "Detailed reporting and analytics",
    ],
  },
  {
    title: "Malware Analysis",
    description: "Identify and understand malicious code targeting your organization.",
    icon: <Search className="h-8 w-8 text-orange-600" />,
    features: [
      "Static and dynamic analysis",
      "Behavior monitoring",
      "Threat intelligence correlation",
      "Remediation recommendations",
    ],
  },
]

const certifications = [
  { name: "CISSP", logo: "/placeholder.svg?height=100&width=100" },
  { name: "CEH", logo: "/placeholder.svg?height=100&width=100" },
  { name: "OSCP", logo: "/placeholder.svg?height=100&width=100" },
]

export default function ThreatIntelligencePage() {
  const [domain, setDomain] = useState("")
  const [isChecking, setIsChecking] = useState(false)
  const [results, setResults] = useState<null | {
    score: number
    risks: string[]
    recommendations: string[]
  }>(null)

  const [threatData, setThreatData] = useState<{
    regions: { name: string; count: number }[]
    types: { name: string; count: number }[]
  }>({
    regions: [],
    types: [],
  })

  useEffect(() => {
    // Simulate threat map data
    const regions = [
      { name: "North America", count: Math.floor(Math.random() * 500) + 200 },
      { name: "Europe", count: Math.floor(Math.random() * 400) + 150 },
      { name: "Asia", count: Math.floor(Math.random() * 600) + 300 },
      { name: "South America", count: Math.floor(Math.random() * 200) + 100 },
      { name: "Africa", count: Math.floor(Math.random() * 150) + 50 },
      { name: "Australia", count: Math.floor(Math.random() * 100) + 30 },
    ]

    const types = [
      { name: "Ransomware", count: Math.floor(Math.random() * 300) + 100 },
      { name: "Phishing", count: Math.floor(Math.random() * 400) + 200 },
      { name: "DDoS", count: Math.floor(Math.random() * 200) + 50 },
      { name: "Data Breach", count: Math.floor(Math.random() * 150) + 30 },
    ]

    setThreatData({ regions, types })
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!domain) return

    setIsChecking(true)
    setResults(null)

    // Simulate phishing risk check
    setTimeout(() => {
      setIsChecking(false)

      // Generate random score between 20 and 90
      const score = Math.floor(Math.random() * 71) + 20

      const risks = [
        "Similar domain registrations detected",
        "Email security misconfigurations",
        "Recent phishing campaigns targeting your industry",
        "Weak SPF/DKIM/DMARC records",
      ].slice(0, Math.floor(Math.random() * 3) + 1)

      const recommendations = [
        "Implement DMARC with reject policy",
        "Enable email authentication protocols",
        "Deploy anti-spoofing measures",
        "Conduct regular phishing awareness training",
      ].slice(0, Math.floor(Math.random() * 3) + 2)

      setResults({
        score,
        risks,
        recommendations,
      })
    }, 2000)
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A1A1A] to-[#3A0000] text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-mono mb-6">Stay Ahead of Cybercriminals</h1>
              <p className="text-xl mb-8 max-w-lg">
                Proactive threat hunting, penetration testing, and vulnerability management to identify and mitigate
                risks before they're exploited.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="destructive" className="group">
                  <Link href="#threat-map">
                    View Global Threat Map
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="#phishing-calculator">Try Phishing Risk Calculator</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  {/* Animated attack vectors */}
                  <div className="absolute inset-0">
                    <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                    <div
                      className="absolute top-3/4 left-1/2 w-2 h-2 bg-orange-500 rounded-full animate-ping"
                      style={{ animationDelay: "0.5s" }}
                    ></div>
                    <div
                      className="absolute top-1/2 left-3/4 w-2 h-2 bg-yellow-500 rounded-full animate-ping"
                      style={{ animationDelay: "1s" }}
                    ></div>
                    <div
                      className="absolute top-1/3 left-2/3 w-2 h-2 bg-red-500 rounded-full animate-ping"
                      style={{ animationDelay: "1.5s" }}
                    ></div>
                    <div
                      className="absolute top-2/3 left-1/3 w-2 h-2 bg-orange-500 rounded-full animate-ping"
                      style={{ animationDelay: "2s" }}
                    ></div>
                  </div>

                  {/* Central shield */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <AlertTriangle className="h-32 w-32 text-orange-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Global Threat Map */}
      <section id="threat-map" className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Global Threat Map</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-time visualization of cyber threats around the world.
            </p>
          </div>

          <Card className="bg-gray-900 border-gray-800 text-white">
            <CardContent className="p-6">
              <div className="aspect-video relative mb-8">
                <div className="absolute inset-0 bg-gray-800 rounded-lg overflow-hidden">
                  {/* World map background */}
                  <div className="absolute inset-0 opacity-30">
                    <Image
                      src="/placeholder.svg?height=600&width=1200"
                      alt="World map"
                      width={1200}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Animated threat points */}
                  <div className="absolute inset-0">
                    {[...Array(20)].map((_, i) => {
                      const top = `${Math.random() * 100}%`
                      const left = `${Math.random() * 100}%`
                      const size = Math.random() * 1 + 0.5
                      const delay = Math.random() * 5
                      const duration = Math.random() * 3 + 2

                      return (
                        <div
                          key={i}
                          className="absolute w-2 h-2 bg-red-500 rounded-full animate-ping"
                          style={{
                            top,
                            left,
                            width: `${size}rem`,
                            height: `${size}rem`,
                            animationDelay: `${delay}s`,
                            animationDuration: `${duration}s`,
                          }}
                        ></div>
                      )
                    })}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-bold mb-4">Threats by Region</h3>
                  <div className="space-y-3">
                    {threatData.regions.map((region, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{region.name}</span>
                          <span>{region.count.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div
                            className="bg-orange-500 h-2 rounded-full"
                            style={{
                              width: `${(region.count / Math.max(...threatData.regions.map((r) => r.count))) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-bold mb-4">Threats by Type</h3>
                  <div className="space-y-3">
                    {threatData.types.map((type, index) => (
                      <div key={index}>
                        <div className="flex justify-between text-sm mb-1">
                          <span>{type.name}</span>
                          <span>{type.count.toLocaleString()}</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2">
                          <div
                            className="bg-red-500 h-2 rounded-full"
                            style={{
                              width: `${(type.count / Math.max(...threatData.types.map((t) => t.count))) * 100}%`,
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-8 text-center">
                <p className="text-sm text-gray-400 mb-4">
                  This visualization represents simulated threat data for demonstration purposes.
                </p>
                <Button asChild variant="outline" className="border-gray-700">
                  <Link href="/resources/threat-intelligence">Download Full Threat Report</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Threat Intelligence Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive threat intelligence solutions to protect your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 p-3 bg-orange-100 rounded-full w-fit">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-orange-600"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Learn More</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Phishing Risk Calculator */}
      <section id="phishing-calculator" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Phishing Risk Calculator</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Assess your organization's vulnerability to phishing attacks.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="domain" className="text-sm font-medium">
                    Your Email Domain
                  </label>
                  <Input
                    id="domain"
                    value={domain}
                    onChange={(e) => setDomain(e.target.value)}
                    placeholder="e.g., yourcompany.com"
                  />
                  <p className="text-xs text-gray-500">
                    Note: This is a simulation. No actual domain scanning is performed.
                  </p>
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    disabled={!domain || isChecking}
                    variant="destructive"
                    className="w-full md:w-auto"
                  >
                    {isChecking ? "Analyzing Risk..." : "Calculate Phishing Risk"}
                  </Button>
                </div>
              </form>

              {results && (
                <div className="mt-8 border-t pt-8">
                  <h3 className="text-xl font-bold mb-4">Phishing Risk Assessment</h3>

                  <div className="mb-6">
                    <p className="text-sm text-gray-500 mb-2">Risk Score</p>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-200 rounded-full h-4 mr-4">
                        <div
                          className={`h-4 rounded-full ${
                            results.score > 70 ? "bg-red-600" : results.score > 40 ? "bg-yellow-500" : "bg-green-500"
                          }`}
                          style={{ width: `${results.score}%` }}
                        ></div>
                      </div>
                      <span className="text-xl font-bold">{results.score}/100</span>
                    </div>
                  </div>

                  {results.risks.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 text-red-500">Identified Risks</h4>
                      <ul className="space-y-1">
                        {results.risks.map((risk, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                            <span>{risk}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {results.recommendations.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2 text-green-500">Recommendations</h4>
                      <ul className="space-y-1">
                        {results.recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-green-500"></div>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6 text-center">
                    <Button asChild>
                      <Link href="/contact">Get Detailed Phishing Protection Plan</Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our threat intelligence team holds industry-leading certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="flex justify-center mb-4">
                    <Image
                      src={cert.logo || "/placeholder.svg"}
                      alt={`${cert.name} certification`}
                      width={100}
                      height={100}
                      className="h-24 w-24"
                    />
                  </div>
                  <h3 className="text-xl font-bold">{cert.name}</h3>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1A1A1A] to-[#3A0000] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Informed About Emerging Threats</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Download our comprehensive 2024 Threat Report to understand the evolving threat landscape and how to protect
            your organization.
          </p>
          <Button asChild size="lg" variant="destructive" className="group">
            <Link href="/resources/threat-report">
              Download the 2024 Threat Report
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

