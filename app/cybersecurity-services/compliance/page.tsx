"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { ArrowRight, FileCheck, CheckCircle2, Stethoscope, BadgeDollarSign, ShoppingBag } from "lucide-react"

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: <Stethoscope className="h-5 w-5" />,
    regulation: "HIPAA",
    description: "Health Insurance Portability and Accountability Act",
    requirements: ["Patient data protection", "Access controls", "Audit trails", "Breach notification procedures"],
  },
  {
    id: "finance",
    name: "Finance",
    icon: <BadgeDollarSign className="h-5 w-5" />,
    regulation: "PCI DSS",
    description: "Payment Card Industry Data Security Standard",
    requirements: [
      "Secure payment processing",
      "Network security",
      "Vulnerability management",
      "Regular security testing",
    ],
  },
  {
    id: "retail",
    name: "Retail",
    icon: <ShoppingBag className="h-5 w-5" />,
    regulation: "CCPA",
    description: "California Consumer Privacy Act",
    requirements: ["Consumer data rights", "Opt-out mechanisms", "Data inventory", "Privacy policy updates"],
  },
]

const auditServices = [
  {
    title: "Pre-audit Assessment",
    description: "Identify compliance gaps before your official audit.",
    features: [
      "Comprehensive controls review",
      "Documentation assessment",
      "Gap analysis report",
      "Remediation roadmap",
    ],
  },
  {
    title: "Gap Analysis",
    description: "Detailed analysis of your current compliance posture.",
    features: ["Control-by-control evaluation", "Risk assessment", "Prioritized findings", "Executive summary"],
  },
  {
    title: "Certification Support",
    description: "End-to-end assistance with certification processes.",
    features: ["Audit preparation", "Evidence collection", "Auditor liaison", "Post-audit remediation"],
  },
]

const gdprQuestions = [
  {
    id: "data-inventory",
    question: "Do you maintain a comprehensive inventory of all personal data you process?",
    options: ["Yes", "Partially", "No"],
  },
  {
    id: "consent",
    question: "Do you have mechanisms to obtain and manage user consent?",
    options: ["Yes", "Partially", "No"],
  },
  {
    id: "dpo",
    question: "Have you appointed a Data Protection Officer (DPO)?",
    options: ["Yes", "Not applicable to us", "No"],
  },
  {
    id: "breach",
    question: "Do you have a data breach notification process in place?",
    options: ["Yes", "In development", "No"],
  },
  {
    id: "impact",
    question: "Do you conduct Data Protection Impact Assessments (DPIA) for high-risk processing?",
    options: ["Yes", "Sometimes", "No"],
  },
]

export default function CompliancePage() {
  const [activeTab, setActiveTab] = useState("healthcare")
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [score, setScore] = useState<number | null>(null)
  const [recommendations, setRecommendations] = useState<string[]>([])

  const handleAnswerChange = (questionId: string, answer: string) => {
    const newAnswers = { ...answers, [questionId]: answer }
    setAnswers(newAnswers)

    // Calculate score if all questions are answered
    const answeredQuestions = Object.keys(newAnswers).length
    if (answeredQuestions === gdprQuestions.length) {
      calculateScore(newAnswers)
    }
  }

  const calculateScore = (currentAnswers: Record<string, string>) => {
    let totalScore = 0
    const newRecommendations: string[] = []

    gdprQuestions.forEach((question) => {
      const answer = currentAnswers[question.id]

      if (answer === "Yes") {
        totalScore += 20
      } else if (answer === "Partially" || answer === "In development" || answer === "Sometimes") {
        totalScore += 10
        newRecommendations.push(`Improve your ${question.id.replace(/-/g, " ")} processes.`)
      } else if (answer === "No") {
        newRecommendations.push(`Implement a ${question.id.replace(/-/g, " ")} system.`)
      }
    })

    setScore(totalScore)
    setRecommendations(newRecommendations)
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A1A1A] to-[#004D40] text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-mono mb-6">Audit-Proof Your Business</h1>
              <p className="text-xl mb-8 max-w-lg">
                Simplify GDPR, HIPAA, and ISO 27001 compliance with our expert guidance and comprehensive compliance
                solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="destructive" className="group bg-green-700 hover:bg-green-800">
                  <Link href="#compliance-wizard">
                    Try Compliance Wizard
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="#industry-guides">View Industry Guides</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  {/* Checklist animation */}
                  <div className="absolute inset-0 flex flex-col justify-center items-center">
                    <div className="bg-white/10 backdrop-blur-sm p-8 rounded-lg w-4/5">
                      <div className="space-y-4">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className="flex items-center space-x-3 animate-pulse"
                            style={{ animationDelay: `${i * 0.5}s` }}
                          >
                            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center">
                              <CheckCircle2 className="h-4 w-4 text-white" />
                            </div>
                            <div className="h-2 bg-white/70 rounded w-full"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compliance Wizard */}
      <section id="compliance-wizard" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compliance Wizard</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Answer a few questions to assess your GDPR readiness and get personalized recommendations.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Badge className="mr-2 bg-green-600">GDPR</Badge>
                Are You GDPR Ready?
              </CardTitle>
              <CardDescription>General Data Protection Regulation compliance assessment</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {gdprQuestions.map((question) => (
                  <div key={question.id} className="space-y-3">
                    <h3 className="font-medium">{question.question}</h3>
                    <RadioGroup
                      value={answers[question.id] || ""}
                      onValueChange={(value) => handleAnswerChange(question.id, value)}
                    >
                      <div className="grid grid-cols-3 gap-2">
                        {question.options.map((option) => (
                          <div key={option} className="flex items-center space-x-2">
                            <RadioGroupItem value={option} id={`${question.id}-${option}`} />
                            <Label htmlFor={`${question.id}-${option}`}>{option}</Label>
                          </div>
                        ))}
                      </div>
                    </RadioGroup>
                  </div>
                ))}
              </div>

              {score !== null && (
                <div className="mt-8 pt-6 border-t">
                  <h3 className="text-lg font-bold mb-4">Your GDPR Readiness Score</h3>

                  <div className="mb-6">
                    <div className="flex justify-between text-sm mb-1">
                      <span>Compliance Level</span>
                      <span>{score}%</span>
                    </div>
                    <Progress value={score} className="h-2" />
                    <p className="mt-2 text-sm text-gray-500">
                      {score >= 80
                        ? "Excellent! Your organization demonstrates strong GDPR compliance."
                        : score >= 60
                          ? "Good progress, but there are areas that need improvement."
                          : "Your organization needs significant improvements to meet GDPR requirements."}
                    </p>
                  </div>

                  {recommendations.length > 0 && (
                    <div>
                      <h4 className="font-semibold mb-2">Recommendations</h4>
                      <ul className="space-y-1">
                        {recommendations.map((rec, index) => (
                          <li key={index} className="flex items-start">
                            <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                            <span>{rec}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  <div className="mt-6 text-center">
                    <Button asChild className="bg-green-700 hover:bg-green-800">
                      <Link href="/contact">Get Your Detailed Compliance Report</Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Industry Guides */}
      <section id="industry-guides" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Compliance Guides</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized compliance guidance for different industries.
            </p>
          </div>

          <Tabs defaultValue="healthcare" value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {industries.map((industry) => (
                <TabsTrigger key={industry.id} value={industry.id} className="flex items-center gap-2">
                  {industry.icon}
                  <span>{industry.name}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center mb-2">
                      <Badge className="mr-2 bg-green-600">{industry.regulation}</Badge>
                      <CardTitle>{industry.description}</CardTitle>
                    </div>
                    <CardDescription>
                      Key compliance requirements for the {industry.name.toLowerCase()} industry
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h3 className="font-semibold mb-4">Key Requirements</h3>
                        <ul className="space-y-2">
                          {industry.requirements.map((req, index) => (
                            <li key={index} className="flex items-start">
                              <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0" />
                              <span>{req}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <Image
                          src="/placeholder.svg?height=300&width=400"
                          alt={`${industry.name} compliance`}
                          width={400}
                          height={300}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="bg-green-700 hover:bg-green-800">
                      <Link href={`/resources/${industry.regulation.toLowerCase()}-guide`}>
                        Download {industry.regulation} Compliance Guide
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Audit Services */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Audit Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive audit preparation and support services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {auditServices.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 p-3 bg-green-100 rounded-full w-fit">
                    <FileCheck className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-green-600"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild variant="outline" className="w-full">
                    <Link href="/contact">Request Service</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Compliance Certifications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We help organizations achieve and maintain key compliance certifications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "ISO 27001", description: "Information Security Management" },
              { name: "SOC 2", description: "Service Organization Controls" },
              { name: "GDPR", description: "General Data Protection Regulation" },
            ].map((cert, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="h-24 w-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <FileCheck className="h-12 w-12 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{cert.name}</h3>
                  <p className="text-gray-600">{cert.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1A1A1A] to-[#004D40] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Simplify Compliance?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get a comprehensive assessment of your compliance posture and a roadmap for improvement.
          </p>
          <Button asChild size="lg" className="group bg-green-700 hover:bg-green-800">
            <Link href="/contact">
              Get Your Compliance Score
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

