"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Lock, Shield, Wifi, Server, CheckCircle2 } from "lucide-react"

const solutions = [
  {
    title: "Endpoint Protection",
    description: "Secure all devices connecting to your network with advanced threat prevention.",
    icon: <Server className="h-8 w-8 text-red-600" />,
    features: [
      "Real-time threat detection and prevention",
      "Behavioral analysis and machine learning",
      "Device control and application whitelisting",
      "Remote device management and security policies",
    ],
  },
  {
    title: "VPN Solutions",
    description: "Ensure secure remote access with enterprise-grade VPN infrastructure.",
    icon: <Wifi className="h-8 w-8 text-red-600" />,
    features: [
      "End-to-end encrypted connections",
      "Multi-factor authentication",
      "Split tunneling capabilities",
      "Centralized access management",
    ],
  },
  {
    title: "DDoS Mitigation",
    description: "Protect your services from distributed denial-of-service attacks.",
    icon: <Shield className="h-8 w-8 text-red-600" />,
    features: [
      "Traffic analysis and filtering",
      "Automatic attack detection",
      "Traffic rerouting during attacks",
      "24/7 monitoring and response",
    ],
  },
]

export default function NetworkSecurityPage() {
  const [ipRange, setIpRange] = useState("")
  const [isChecking, setIsChecking] = useState(false)
  const [results, setResults] = useState<null | {
    score: number
    vulnerabilities: string[]
    recommendations: string[]
  }>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!ipRange) return

    setIsChecking(true)
    setResults(null)

    // Simulate network check
    setTimeout(() => {
      setIsChecking(false)

      // Generate random score between 30 and 85
      const score = Math.floor(Math.random() * 56) + 30

      const vulnerabilities = [
        "Outdated firewall rules",
        "Open ports (22, 80, 443)",
        "Missing network segmentation",
        "Weak encryption protocols",
      ].slice(0, Math.floor(Math.random() * 3) + 1)

      const recommendations = [
        "Update firewall rules to restrict unnecessary access",
        "Implement network segmentation for critical systems",
        "Enable advanced threat protection features",
        "Deploy multi-factor authentication for all remote access",
      ].slice(0, Math.floor(Math.random() * 3) + 2)

      setResults({
        score,
        vulnerabilities,
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
              <h1 className="text-4xl md:text-5xl font-bold font-mono mb-6">Fortify Your Digital Perimeter</h1>
              <p className="text-xl mb-8 max-w-lg">
                Protect your network infrastructure with advanced firewall setups, zero-trust architecture, and
                intrusion prevention systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="destructive" className="group">
                  <Link href="#network-checker">
                    Try Network Health Checker
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="#solutions">Explore Solutions</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  {/* Firewall animation */}
                  <div className="absolute inset-0">
                    <svg width="100%" height="100%" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                      <g className="animate-pulse" style={{ animationDuration: "3s" }}>
                        <circle
                          cx="200"
                          cy="200"
                          r="150"
                          fill="none"
                          stroke="#FF4655"
                          strokeWidth="2"
                          strokeDasharray="10 5"
                        />
                      </g>
                      <g className="animate-pulse" style={{ animationDuration: "4s", animationDelay: "0.5s" }}>
                        <circle
                          cx="200"
                          cy="200"
                          r="100"
                          fill="none"
                          stroke="#FF4655"
                          strokeWidth="2"
                          strokeDasharray="10 5"
                        />
                      </g>
                      <g className="animate-pulse" style={{ animationDuration: "5s", animationDelay: "1s" }}>
                        <circle
                          cx="200"
                          cy="200"
                          r="50"
                          fill="none"
                          stroke="#FF4655"
                          strokeWidth="2"
                          strokeDasharray="10 5"
                        />
                      </g>
                      <circle cx="200" cy="200" r="20" fill="#FF4655" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions */}
      <section id="solutions" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Network Security Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive protection for your entire network infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {solutions.map((solution, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 p-3 bg-red-100 rounded-full w-fit">{solution.icon}</div>
                  <CardTitle>{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-red-600"></div>
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

      {/* Zero-Trust Architecture */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4">FEATURED APPROACH</Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Zero-Trust Architecture</h2>
              <p className="text-xl text-gray-600 mb-6">
                Move beyond the traditional perimeter-based security model with our zero-trust implementation.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-bold">Verify Explicitly</p>
                    <p className="text-gray-600">
                      Always authenticate and authorize based on all available data points.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-bold">Least Privilege Access</p>
                    <p className="text-gray-600">
                      Limit user access with Just-In-Time and Just-Enough-Access principles.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-red-600 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-bold">Assume Breach</p>
                    <p className="text-gray-600">
                      Operate as if your network is already compromised and segment access.
                    </p>
                  </div>
                </li>
              </ul>
              <Button asChild>
                <Link href="/resources/zero-trust-guide">Download Zero-Trust Implementation Guide</Link>
              </Button>
            </div>
            <div className="relative">
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Zero-Trust Architecture Diagram"
                  width={600}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-red-100 p-3 rounded-lg shadow">
                <Lock className="h-8 w-8 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Health Checker */}
      <section id="network-checker" className="py-20 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Network Health Checker</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Enter your IP range to get a preliminary assessment of your network security posture.
            </p>
          </div>

          <Card className="bg-gray-900 border-gray-800 text-white">
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="ip-range" className="text-sm font-medium">
                    IP Range or Domain
                  </label>
                  <Input
                    id="ip-range"
                    value={ipRange}
                    onChange={(e) => setIpRange(e.target.value)}
                    placeholder="e.g., 192.168.1.0/24 or example.com"
                    className="bg-gray-800 border-gray-700 text-white"
                  />
                  <p className="text-xs text-gray-400">
                    Note: This is a simulation. No actual network scanning is performed.
                  </p>
                </div>

                <div className="flex justify-center">
                  <Button
                    type="submit"
                    disabled={!ipRange || isChecking}
                    variant="destructive"
                    className="w-full md:w-auto"
                  >
                    {isChecking ? "Analyzing Network..." : "Check Network Health"}
                  </Button>
                </div>
              </form>

              {results && (
                <div className="mt-8 border-t border-gray-800 pt-8">
                  <h3 className="text-xl font-bold mb-4">Security Assessment Results</h3>

                  <div className="mb-6">
                    <p className="text-sm text-gray-400 mb-2">Security Score</p>
                    <div className="flex items-center">
                      <div className="w-full bg-gray-800 rounded-full h-4 mr-4">
                        <div
                          className={`h-4 rounded-full ${
                            results.score < 50 ? "bg-red-600" : results.score < 70 ? "bg-yellow-500" : "bg-green-500"
                          }`}
                          style={{ width: `${results.score}%` }}
                        ></div>
                      </div>
                      <span className="text-xl font-bold">{results.score}/100</span>
                    </div>
                  </div>

                  {results.vulnerabilities.length > 0 && (
                    <div className="mb-6">
                      <h4 className="font-semibold mb-2 text-red-500">Potential Vulnerabilities</h4>
                      <ul className="space-y-1">
                        {results.vulnerabilities.map((vuln, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                            <span>{vuln}</span>
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
                    <Button asChild variant="outline" className="border-gray-700">
                      <Link href="/contact">Request Comprehensive Security Audit</Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">CASE STUDY</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Blocked 10,000+ Threats/Month for a FinTech Client</h2>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="text-lg mb-6">
                    A rapidly growing FinTech company was experiencing an increasing number of sophisticated cyber
                    attacks targeting their payment processing infrastructure.
                  </p>
                  <h3 className="text-xl font-bold mb-4">Our Solution</h3>
                  <p className="mb-4">We implemented a comprehensive network security solution that included:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      <span>Next-generation firewall with deep packet inspection</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      <span>Zero-trust architecture for internal systems</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      <span>24/7 security monitoring and incident response</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                      <span>Advanced DDoS protection for public-facing services</span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-bold mb-4">Results</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-red-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-red-600">10K+</p>
                      <p className="text-sm">Threats Blocked Monthly</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-red-600">99.9%</p>
                      <p className="text-sm">Uptime Maintained</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-red-600">0</p>
                      <p className="text-sm">Successful Breaches</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-bold mb-4">Client Profile</h3>
                    <p className="mb-4">
                      <span className="font-medium">Industry:</span> Financial Technology
                    </p>
                    <p className="mb-4">
                      <span className="font-medium">Size:</span> 500+ employees
                    </p>
                    <p className="mb-4">
                      <span className="font-medium">Challenge:</span> Targeted attacks on payment infrastructure
                    </p>
                    <p>
                      <span className="font-medium">Timeline:</span> 2 months from assessment to implementation
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button asChild variant="destructive">
                  <Link href="/contact">Request a Free Network Audit</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1A1A1A] to-[#3A0000] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Fortify Your Network?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our network security experts will help you identify vulnerabilities and implement robust protection
            measures.
          </p>
          <Button asChild size="lg" variant="destructive" className="group">
            <Link href="/contact">
              Request a Free Network Audit
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

