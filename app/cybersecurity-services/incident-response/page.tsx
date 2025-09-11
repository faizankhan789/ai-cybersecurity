"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Shield, Clock, FileSearch, MessageSquare, CheckCircle2 } from "lucide-react"

const services = [
  {
    title: "Digital Forensics",
    description: "Investigate security incidents to determine scope, impact, and root cause.",
    icon: <FileSearch className="h-8 w-8 text-red-700" />,
    features: [
      "Evidence collection and preservation",
      "Malware analysis",
      "Attack vector identification",
      "Chain of custody documentation",
    ],
  },
  {
    title: "Ransomware Negotiation",
    description: "Expert assistance in handling ransomware incidents and potential negotiations.",
    icon: <MessageSquare className="h-8 w-8 text-red-700" />,
    features: [
      "Attacker communication management",
      "Payment evaluation guidance",
      "Decryption verification",
      "Law enforcement coordination",
    ],
  },
  {
    title: "Post-Breach Reporting",
    description: "Comprehensive documentation and analysis of security incidents.",
    icon: <FileSearch className="h-8 w-8 text-red-700" />,
    features: [
      "Detailed incident timeline",
      "Impact assessment",
      "Regulatory compliance reporting",
      "Remediation recommendations",
    ],
  },
]

export default function IncidentResponsePage() {
  const [timeRemaining, setTimeRemaining] = useState(3600) // 1 hour in seconds
  const [isTimerRunning, setIsTimerRunning] = useState(true)

  useEffect(() => {
    let timer: NodeJS.Timeout

    if (isTimerRunning && timeRemaining > 0) {
      timer = setInterval(() => {
        setTimeRemaining((prev) => prev - 1)
      }, 1000)
    }

    return () => {
      if (timer) clearInterval(timer)
    }
  }, [isTimerRunning, timeRemaining])

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const secs = seconds % 60

    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A1A1A] to-[#8B0000] text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-mono mb-6">When Every Second Counts</h1>
              <p className="text-xl mb-8 max-w-lg">
                Rapid breach containment, forensic analysis, and recovery services to minimize damage and restore
                operations.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="destructive" className="group">
                  <Link href="#response-timeline">
                    View Response Timeline
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="/contact?emergency=true">Emergency Response Hotline</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  {/* SOC dashboard animation */}
                  <div className="absolute inset-0 bg-black/50 rounded-lg overflow-hidden p-6">
                    <div className="grid grid-cols-2 gap-4 h-full">
                      <div className="space-y-4">
                        <div className="h-1/3 bg-red-900/30 rounded-lg border border-red-700 p-3 flex flex-col">
                          <div className="text-xs text-red-400 mb-2">ACTIVE THREATS</div>
                          <div className="text-2xl font-mono font-bold">12</div>
                          <div className="mt-auto text-xs text-red-400">Critical: 3 | High: 9</div>
                        </div>
                        <div className="h-2/3 bg-gray-900/50 rounded-lg border border-gray-700 p-3">
                          <div className="text-xs text-gray-400 mb-2">INCIDENT TIMELINE</div>
                          <div className="space-y-2">
                            {[...Array(5)].map((_, i) => (
                              <div key={i} className="flex items-center text-xs">
                                <div className="w-2 h-2 rounded-full bg-red-500 mr-2"></div>
                                <div className="text-gray-400 mr-2">{`${(23 - i).toString().padStart(2, "0")}:${Math.floor(
                                  Math.random() * 60,
                                )
                                  .toString()
                                  .padStart(2, "0")}`}</div>
                                <div className="text-white truncate">Alert triggered: Suspicious activity</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="space-y-4">
                        <div className="h-2/3 bg-gray-900/50 rounded-lg border border-gray-700 p-3">
                          <div className="text-xs text-gray-400 mb-2">THREAT MAP</div>
                          <div className="h-[calc(100%-20px)] w-full relative">
                            <div className="absolute inset-0 opacity-50">
                              <Image
                                src="/placeholder.svg?height=200&width=300"
                                alt="World map"
                                width={300}
                                height={200}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            {[...Array(8)].map((_, i) => {
                              const top = `${Math.random() * 100}%`
                              const left = `${Math.random() * 100}%`

                              return (
                                <div
                                  key={i}
                                  className="absolute w-1.5 h-1.5 bg-red-500 rounded-full animate-ping"
                                  style={{
                                    top,
                                    left,
                                    animationDelay: `${i * 0.5}s`,
                                    animationDuration: `${Math.random() * 2 + 1}s`,
                                  }}
                                ></div>
                              )
                            })}
                          </div>
                        </div>
                        <div className="h-1/3 bg-gray-900/50 rounded-lg border border-gray-700 p-3">
                          <div className="text-xs text-gray-400 mb-2">RESPONSE STATUS</div>
                          <div className="flex items-center">
                            <div className="w-3 h-3 rounded-full bg-yellow-500 animate-pulse mr-2"></div>
                            <div className="text-yellow-400 text-sm">Containment in Progress</div>
                          </div>
                          <div className="mt-2 text-xs text-gray-400">Team deployed: 3 minutes ago</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Response Banner */}
      <section className="bg-red-700 text-white py-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center mb-4 md:mb-0">
              <Shield className="h-6 w-6 mr-2 animate-pulse" />
              <span className="font-bold">24/7 Emergency Response:</span>
              <span className="ml-2">+1 (888) 911-CYBER</span>
            </div>
            <Button asChild variant="outline" size="sm" className="border-white text-white hover:bg-white/10">
              <Link href="/contact?emergency=true">Contact Emergency Team</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Response Timeline */}
      <section id="response-timeline" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Containment in &lt;1 Hour</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our rapid response protocol ensures swift containment and mitigation of security incidents.
            </p>
          </div>

          <div className="relative">
            {/* Timeline */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-gray-200 transform -translate-x-1/2"></div>

            <div className="space-y-12 relative">
              {/* Step 1 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <Badge className="mb-2 bg-red-700">STEP 1</Badge>
                  <h3 className="text-xl font-bold mb-2">Initial Response</h3>
                  <p className="text-gray-600">
                    Our 24/7 incident response team is activated within minutes of alert notification.
                  </p>
                  <div className="mt-2 text-sm text-red-700 font-mono">T+00:05</div>
                </div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-red-700 text-white flex items-center justify-center transform -translate-x-1/2">
                  <Clock className="h-6 w-6" />
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <Card>
                    <CardContent className="p-4">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-red-700 mr-2 flex-shrink-0" />
                          <span>Incident verification and classification</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-red-700 mr-2 flex-shrink-0" />
                          <span>Emergency communication channels established</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-red-700 mr-2 flex-shrink-0" />
                          <span>Initial damage assessment</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 2 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-1">
                  <Card>
                    <CardContent className="p-4">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-red-700 mr-2 flex-shrink-0" />
                          <span>Isolation of affected systems</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-red-700 mr-2 flex-shrink-0" />
                          <span>Network segmentation</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-red-700 mr-2 flex-shrink-0" />
                          <span>Blocking of attack vectors</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-red-700 text-white flex items-center justify-center transform -translate-x-1/2">
                  <Shield className="h-6 w-6" />
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left order-2 md:order-2">
                  <Badge className="mb-2 bg-red-700">STEP 2</Badge>
                  <h3 className="text-xl font-bold mb-2">Containment</h3>
                  <p className="text-gray-600">
                    Rapid isolation of affected systems to prevent lateral movement and further damage.
                  </p>
                  <div className="mt-2 text-sm text-red-700 font-mono">T+00:20</div>
                </div>
              </div>

              {/* Step 3 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right">
                  <Badge className="mb-2 bg-red-700">STEP 3</Badge>
                  <h3 className="text-xl font-bold mb-2">Eradication</h3>
                  <p className="text-gray-600">Removal of threat actors and malicious code from the environment.</p>
                  <div className="mt-2 text-sm text-red-700 font-mono">T+00:40</div>
                </div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-red-700 text-white flex items-center justify-center transform -translate-x-1/2">
                  <FileSearch className="h-6 w-6" />
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left">
                  <Card>
                    <CardContent className="p-4">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-red-700 mr-2 flex-shrink-0" />
                          <span>Malware removal</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-red-700 mr-2 flex-shrink-0" />
                          <span>Credential resets</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-red-700 mr-2 flex-shrink-0" />
                          <span>Vulnerability patching</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Step 4 */}
              <div className="flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 md:pr-12 mb-6 md:mb-0 md:text-right order-1 md:order-1">
                  <Card>
                    <CardContent className="p-4">
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-red-700 mr-2 flex-shrink-0" />
                          <span>System restoration from clean backups</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-red-700 mr-2 flex-shrink-0" />
                          <span>Service prioritization based on business impact</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle2 className="h-5 w-5 text-red-700 mr-2 flex-shrink-0" />
                          <span>Verification of system integrity</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className="hidden md:block absolute left-1/2 w-12 h-12 rounded-full bg-red-700 text-white flex items-center justify-center transform -translate-x-1/2">
                  <ArrowRight className="h-6 w-6" />
                </div>
                <div className="md:w-1/2 md:pl-12 md:text-left order-2 md:order-2">
                  <Badge className="mb-2 bg-red-700">STEP 4</Badge>
                  <h3 className="text-xl font-bold mb-2">Recovery</h3>
                  <p className="text-gray-600">
                    Restoration of systems and data to normal operations with enhanced security.
                  </p>
                  <div className="mt-2 text-sm text-red-700 font-mono">T+01:00</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Incident Response Timer */}
      <section className="py-12 px-4 bg-black text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Incident Response Simulation</h2>
            <p className="text-gray-300 mb-6">
              In a real incident, every second counts. This timer simulates our response window.
            </p>

            <div className="bg-gray-900 p-6 rounded-lg inline-block">
              <div className="text-5xl md:text-6xl font-mono font-bold mb-4">{formatTime(timeRemaining)}</div>
              <div className="flex justify-center gap-4">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-700 text-white"
                  onClick={() => setIsTimerRunning(!isTimerRunning)}
                >
                  {isTimerRunning ? "Pause" : "Resume"}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="border-gray-700 text-white"
                  onClick={() => setTimeRemaining(3600)}
                >
                  Reset
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Incident Response Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive incident response and recovery services to minimize damage and restore operations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 p-3 bg-red-100 rounded-full w-fit">{service.icon}</div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-red-700"></div>
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

      {/* Case Study */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-700">CASE STUDY</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recovered 95% of Data After a Manufacturing Ransomware Attack
            </h2>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="text-lg mb-6">
                    A global manufacturing company with 50+ locations was hit by a sophisticated ransomware attack that
                    encrypted critical production systems and threatened to leak sensitive data.
                  </p>
                  <h3 className="text-xl font-bold mb-4">Our Response</h3>
                  <p className="mb-4">We deployed our incident response team within 30 minutes of notification and:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-700"></div>
                      <span>Isolated affected systems to prevent lateral movement</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-700"></div>
                      <span>Identified and closed the initial access vector</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-700"></div>
                      <span>Recovered critical systems from secure backups</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-700"></div>
                      <span>Negotiated with threat actors to prevent data leakage</span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-bold mb-4">Results</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-red-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-red-700">95%</p>
                      <p className="text-sm">Data Recovery</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-red-700">24h</p>
                      <p className="text-sm">Critical Systems Restored</p>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-red-700">0</p>
                      <p className="text-sm">Data Leaked</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-bold mb-4">Client Profile</h3>
                    <p className="mb-4">
                      <span className="font-medium">Industry:</span> Manufacturing
                    </p>
                    <p className="mb-4">
                      <span className="font-medium">Size:</span> 5,000+ employees
                    </p>
                    <p className="mb-4">
                      <span className="font-medium">Challenge:</span> Ransomware attack encrypting production systems
                    </p>
                    <p>
                      <span className="font-medium">Timeline:</span> 72 hours from detection to full recovery
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button asChild variant="destructive">
                  <Link href="/resources/breach-response-checklist">Download Our Breach Response Checklist</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1A1A1A] to-[#8B0000] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Prepare Before Disaster Strikes</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Download our comprehensive breach response checklist to ensure your organization is prepared for a security
            incident.
          </p>
          <Button asChild size="lg" variant="destructive" className="group">
            <Link href="/resources/breach-response-checklist">
              Download Our Breach Response Checklist
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

