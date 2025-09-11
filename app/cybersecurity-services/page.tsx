import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Lock, FileCheck, AlertTriangle, ChevronRight } from "lucide-react"
import SecurityMetrics from "@/components/security-metrics"

export default function CybersecurityServicesPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A1A1A] to-[#3A0000] text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-mono mb-6">
                Enterprise-Grade Cybersecurity Solutions
              </h1>
              <p className="text-xl mb-8 max-w-lg">
                Protect your digital assets with comprehensive security solutions including threat detection, network
                security, compliance, and incident response.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="destructive" className="group">
                  <Link href="#services">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="/contact">Request Security Assessment</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  {/* Hexagonal pattern background */}
                  <div className="absolute inset-0 opacity-20">
                    <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                      <pattern
                        id="hexagons"
                        width="50"
                        height="43.4"
                        patternUnits="userSpaceOnUse"
                        patternTransform="scale(2)"
                      >
                        <polygon
                          points="25,0 50,14.4 50,43.4 25,57.8 0,43.4 0,14.4"
                          fill="none"
                          stroke="#FF4655"
                          strokeWidth="1"
                        />
                      </pattern>
                      <rect width="100%" height="100%" fill="url(#hexagons)" />
                    </svg>
                  </div>

                  {/* Shield animation */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="relative">
                      <div
                        className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"
                        style={{ animationDuration: "3s" }}
                      ></div>
                      <div
                        className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"
                        style={{ animationDuration: "3s", animationDelay: "1s" }}
                      ></div>
                      <Shield className="h-32 w-32 text-red-500 relative z-10" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Security Metrics */}
      <SecurityMetrics />

      {/* Services Overview */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Cybersecurity Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive security solutions to protect your organization from evolving cyber threats.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Network Security Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-t-4 border-t-red-500">
              <CardHeader>
                <div className="mb-4 p-3 bg-red-100 rounded-full w-fit">
                  <Lock className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Network Security</CardTitle>
                <CardDescription>Fortify your digital perimeter</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Protect your network infrastructure with advanced firewall setups, zero-trust architecture, and
                  intrusion prevention systems.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="group w-full justify-between">
                  <Link href="/cybersecurity-services/network-security">
                    Learn More
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Threat Intelligence Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-t-4 border-t-orange-500">
              <CardHeader>
                <div className="mb-4 p-3 bg-orange-100 rounded-full w-fit">
                  <AlertTriangle className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Threat Intelligence</CardTitle>
                <CardDescription>Stay ahead of cybercriminals</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Proactive threat hunting, penetration testing, and vulnerability management to identify and mitigate
                  risks before they're exploited.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="group w-full justify-between">
                  <Link href="/cybersecurity-services/threat-intelligence">
                    Learn More
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Compliance Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-t-4 border-t-green-500">
              <CardHeader>
                <div className="mb-4 p-3 bg-green-100 rounded-full w-fit">
                  <FileCheck className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Compliance</CardTitle>
                <CardDescription>Audit-proof your business</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Simplify GDPR, HIPAA, and ISO 27001 compliance with our expert guidance and comprehensive compliance
                  solutions.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="group w-full justify-between">
                  <Link href="/cybersecurity-services/compliance">
                    Learn More
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Incident Response Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-t-4 border-t-red-700">
              <CardHeader>
                <div className="mb-4 p-3 bg-red-100 rounded-full w-fit">
                  <Shield className="h-6 w-6 text-red-700" />
                </div>
                <CardTitle className="text-xl">Incident Response</CardTitle>
                <CardDescription>When every second counts</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rapid breach containment, forensic analysis, and recovery services to minimize damage and restore
                  operations.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="group w-full justify-between">
                  <Link href="/cybersecurity-services/incident-response">
                    Learn More
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Evolving Threat Landscape</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay informed about the latest cybersecurity threats and how to protect your organization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="text-red-500">Ransomware Attacks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Ransomware attacks increased by 150% in the past year, with an average ransom payment of $220,000.
                </p>
                <div className="h-1 w-full bg-gray-700 mb-1">
                  <div className="h-1 bg-red-500" style={{ width: "75%" }}></div>
                </div>
                <p className="text-sm text-gray-400">75% of organizations affected</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                  <Link href="/resources/ransomware-protection">Protection Guide</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="text-orange-500">Phishing Campaigns</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Phishing remains the #1 attack vector, with increasingly sophisticated techniques targeting employees.
                </p>
                <div className="h-1 w-full bg-gray-700 mb-1">
                  <div className="h-1 bg-orange-500" style={{ width: "92%" }}></div>
                </div>
                <p className="text-sm text-gray-400">92% of breaches involve phishing</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                  <Link href="/resources/phishing-awareness">Training Resources</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="text-yellow-500">Supply Chain Attacks</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Supply chain attacks have emerged as a major threat, compromising trusted software and services.
                </p>
                <div className="h-1 w-full bg-gray-700 mb-1">
                  <div className="h-1 bg-yellow-500" style={{ width: "63%" }}></div>
                </div>
                <p className="text-sm text-gray-400">63% increase year-over-year</p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="border-gray-600 text-white hover:bg-gray-700">
                  <Link href="/resources/supply-chain-security">Mitigation Strategies</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our cybersecurity solutions have protected organizations across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-red-700 to-red-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Badge className="bg-white text-red-600">FINANCE</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Advanced Threat Protection for Banking</CardTitle>
                <CardDescription>Blocked 10,000+ threats per month</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implemented a multi-layered security system for a leading FinTech company, preventing numerous
                  sophisticated attacks.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/case-studies/fintech-security">Read Case Study</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Case Study 2 */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-orange-700 to-orange-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Badge className="bg-white text-orange-600">MANUFACTURING</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Ransomware Recovery</CardTitle>
                <CardDescription>95% data recovery within 24 hours</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Rapid incident response for a manufacturing firm hit by ransomware, minimizing downtime and data loss.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/case-studies/manufacturing-recovery">Read Case Study</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our team holds industry-leading certifications to ensure the highest standards of security expertise.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {["CISSP", "CEH", "OSCP", "CISM", "CompTIA Security+", "ISO 27001 Lead Auditor"].map((cert, index) => (
              <div key={index} className="flex flex-col items-center">
                <div className="w-24 h-24 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <Shield className="h-12 w-12 text-red-600" />
                </div>
                <span className="font-bold text-center">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1A1A1A] to-[#3A0000] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Secure Your Digital Assets?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a free security assessment with our experts to identify vulnerabilities and strengthen your
            security posture.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="destructive" className="group">
              <Link href="/contact">
                Request Free Security Assessment
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="/resources">Explore Security Resources</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

