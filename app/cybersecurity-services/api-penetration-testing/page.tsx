"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { ArrowRight, Zap, Lock, Code, CheckCircle, Download, Play } from "lucide-react"

const apiTypes = [
  {
    id: "rest",
    title: "REST API Testing",
    description: "Comprehensive security testing for RESTful web services and microservices.",
    icon: <Zap className="h-8 w-8 text-blue-600" />,
    vulnerabilities: [
      "Broken Object Level Authorization (BOLA)",
      "Broken User Authentication",
      "Excessive Data Exposure",
      "Lack of Resources & Rate Limiting",
      "Broken Function Level Authorization",
      "Mass Assignment vulnerabilities",
      "Security Misconfiguration",
      "Injection attacks (SQL, NoSQL, LDAP)",
      "Improper Assets Management",
      "Insufficient Logging & Monitoring"
    ],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "HEAD", "OPTIONS"],
  },
  {
    id: "graphql",
    title: "GraphQL API Testing",
    description: "Specialized testing for GraphQL endpoints with schema and query analysis.",
    icon: <Code className="h-8 w-8 text-purple-600" />,
    vulnerabilities: [
      "GraphQL introspection enabled",
      "Depth limiting bypass",
      "Query complexity attacks",
      "Recursive query exploitation",
      "Field suggestions information disclosure",
      "Authorization bypass in resolvers",
      "Injection through variables",
      "Schema disclosure vulnerabilities"
    ],
    methods: ["Query", "Mutation", "Subscription", "Introspection"],
  },
  {
    id: "soap",
    title: "SOAP/XML API Testing", 
    description: "Security assessment for SOAP web services and XML-based APIs.",
    icon: <Lock className="h-8 w-8 text-green-600" />,
    vulnerabilities: [
      "XML External Entity (XXE) injection",
      "SOAP injection attacks",
      "WS-Security bypass",
      "WSDL enumeration",
      "XML bomb attacks",
      "Authentication bypass",
      "Message replay attacks",
      "Improper input validation"
    ],
    methods: ["SOAP 1.1", "SOAP 1.2", "WSDL", "XML Schema"],
  },
]

const testingPhases = [
  {
    phase: "1. API Discovery",
    description: "Comprehensive mapping of all API endpoints and documentation",
    activities: [
      "Endpoint enumeration and discovery",
      "API documentation analysis",
      "Parameter discovery and fuzzing",
      "HTTP method enumeration",
      "Version discovery and analysis",
    ]
  },
  {
    phase: "2. Authentication Testing",
    description: "Deep analysis of authentication and session management",
    activities: [
      "JWT token analysis and manipulation",
      "OAuth 2.0/OpenID Connect testing",
      "API key security assessment",
      "Session fixation and hijacking tests",
      "Multi-factor authentication bypass",
    ]
  },
  {
    phase: "3. Authorization Testing",
    description: "Business logic and access control verification",
    activities: [
      "Vertical privilege escalation",
      "Horizontal privilege escalation",
      "IDOR (Insecure Direct Object References)",
      "Role-based access control bypass",
      "Resource-level authorization testing",
    ]
  },
  {
    phase: "4. Input Validation Testing",
    description: "Comprehensive input validation and injection testing",
    activities: [
      "SQL/NoSQL injection testing",
      "Command injection assessment",
      "XSS in API responses",
      "XXE (XML External Entity) attacks",
      "Deserialization vulnerabilities",
    ]
  }
]

const tools = [
  { name: "Burp Suite Professional", category: "Web Proxy & Scanner", logo: "/placeholder.svg?height=60&width=120" },
  { name: "OWASP ZAP", category: "Security Testing Proxy", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Postman", category: "API Testing Platform", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Insomnia", category: "API Client", logo: "/placeholder.svg?height=60&width=120" },
  { name: "SQLMap", category: "SQL Injection Tool", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Nikto", category: "Web Vulnerability Scanner", logo: "/placeholder.svg?height=60&width=120" },
  { name: "WireShark", category: "Network Analysis", logo: "/placeholder.svg?height=60&width=120" },
  { name: "JWT.io", category: "JWT Debugging", logo: "/placeholder.svg?height=60&width=120" },
]

const pricingTiers = [
  {
    name: "Single API Assessment",
    description: "Comprehensive testing for one API service",
    price: "$2,000",
    period: "per API",
    features: [
      "OWASP API Top 10 testing",
      "Authentication & authorization testing",
      "Input validation assessment",
      "Rate limiting and throttling tests",
      "Technical vulnerability report",
      "30-day remediation support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Multi-API Suite Testing",
    description: "Testing for multiple interconnected API services",
    price: "$5,500",
    period: "per API suite",
    features: [
      "Multiple API endpoint testing",
      "Cross-service authorization testing",
      "Business logic vulnerability assessment",
      "Advanced injection testing",
      "API gateway security review",
      "Executive & technical reports",
      "60-day support & retest included",
    ],
    cta: "Most Popular",
    popular: true,
  },
  {
    name: "Enterprise API Security",
    description: "Ongoing API security program with monitoring",
    price: "Custom",
    period: "pricing",
    features: [
      "Comprehensive API inventory",
      "Continuous security monitoring",
      "DevSecOps integration",
      "API security policy development",
      "Staff training and workshops",
      "24/7 security consultation",
      "Compliance and audit support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function APIPentestPage() {
  const [apiUrl, setApiUrl] = useState("")
  const [apiKey, setApiKey] = useState("")
  const [isTesting, setIsTesting] = useState(false)
  const [testResults, setTestResults] = useState<{
    endpoints: number
    vulnerabilities: Array<{
      severity: "Critical" | "High" | "Medium" | "Low"
      endpoint: string
      issue: string
      method: string
    }>
    riskScore: number
  } | null>(null)

  const handleApiTest = (e: React.FormEvent) => {
    e.preventDefault()
    if (!apiUrl.trim()) return

    setIsTesting(true)
    setTestResults(null)

    // Simulate API testing
    setTimeout(() => {
      setIsTesting(false)
      setTestResults({
        endpoints: Math.floor(Math.random() * 20) + 5,
        riskScore: Math.floor(Math.random() * 40) + 60,
        vulnerabilities: [
          {
            severity: "High",
            endpoint: "/api/users/{id}",
            issue: "Broken Object Level Authorization (BOLA)",
            method: "GET"
          },
          {
            severity: "Medium",
            endpoint: "/api/auth/login",
            issue: "Weak JWT token validation",
            method: "POST"
          },
          {
            severity: "Low",
            endpoint: "/api/data",
            issue: "Missing rate limiting",
            method: "GET"
          }
        ]
      })
    }, 3500)
  }

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Critical": return "text-purple-600 bg-purple-100"
      case "High": return "text-red-600 bg-red-100"
      case "Medium": return "text-orange-600 bg-orange-100"
      case "Low": return "text-yellow-600 bg-yellow-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  const getMethodColor = (method: string) => {
    switch (method.toUpperCase()) {
      case "GET": return "text-blue-600 bg-blue-100"
      case "POST": return "text-green-600 bg-green-100"
      case "PUT": return "text-orange-600 bg-orange-100"
      case "DELETE": return "text-red-600 bg-red-100"
      default: return "text-gray-600 bg-gray-100"
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#1A1A1A] to-[#3A0000] text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-mono mb-6">
                API Penetration Testing
              </h1>
              <p className="text-xl mb-8 max-w-lg">
                Comprehensive security testing for REST, GraphQL, and SOAP APIs. OWASP API Security Top 10 compliant testing with advanced business logic assessment.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="destructive" className="group">
                  <Link href="#demo">
                    Free API Security Scan
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="#pricing">View Pricing</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-red-500/10 rounded-lg backdrop-blur-sm border border-red-500/20 p-8">
                  {/* API visualization */}
                  <div className="h-full flex flex-col justify-center space-y-4">
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-blue-500 text-white">GET</Badge>
                      <div className="h-2 bg-blue-500/30 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-green-500 text-white">POST</Badge>
                      <div className="h-2 bg-green-500/30 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-orange-500 text-white">PUT</Badge>
                      <div className="h-2 bg-orange-500/30 rounded flex-1"></div>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Badge className="bg-red-500 text-white">DELETE</Badge>
                      <div className="h-2 bg-red-500/30 rounded flex-1"></div>
                    </div>
                  </div>
                  <Zap className="absolute bottom-4 right-4 h-8 w-8 text-white animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Types Testing */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">API Security Testing Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Specialized security testing for all major API types and architectures.
            </p>
          </div>

          <Tabs defaultValue="rest" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {apiTypes.map((api) => (
                <TabsTrigger key={api.id} value={api.id}>
                  {api.title.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {apiTypes.map((api) => (
              <TabsContent key={api.id} value={api.id}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-gray-100 rounded-full">{api.icon}</div>
                      <div>
                        <CardTitle className="text-2xl">{api.title}</CardTitle>
                        <CardDescription className="text-lg">{api.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="font-semibold mb-4">Security Vulnerabilities We Test:</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {api.vulnerabilities.map((vuln, index) => (
                          <div key={index} className="flex items-start">
                            <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                            <span className="text-sm">{vuln}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-4">Supported Methods/Operations:</h4>
                      <div className="flex flex-wrap gap-2">
                        {api.methods.map((method, index) => (
                          <Badge key={index} variant="outline" className={`text-xs ${getMethodColor(method)}`}>
                            {method}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href="/contact">Request {api.title}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Free API Security Scan */}
      <section id="demo" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Free API Security Scan</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a basic security assessment of your API endpoints. This scan covers common OWASP API Top 10 vulnerabilities.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleApiTest} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="api-url" className="block text-sm font-medium mb-2">
                      API Base URL:
                    </label>
                    <Input
                      id="api-url"
                      type="url"
                      value={apiUrl}
                      onChange={(e) => setApiUrl(e.target.value)}
                      placeholder="https://api.example.com"
                      className="w-full"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="api-key" className="block text-sm font-medium mb-2">
                      API Key (Optional):
                    </label>
                    <Input
                      id="api-key"
                      type="password"
                      value={apiKey}
                      onChange={(e) => setApiKey(e.target.value)}
                      placeholder="Bearer token or API key"
                      className="w-full"
                    />
                  </div>
                </div>

                <div className="flex justify-center">
                  <Button 
                    type="submit" 
                    disabled={!apiUrl.trim() || isTesting}
                    className="bg-red-600 hover:bg-red-700 flex items-center"
                  >
                    {isTesting ? "Scanning API..." : "Start Security Scan"}
                    <Play className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </form>

              {testResults && (
                <div className="mt-8 border-t pt-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold">API Security Scan Results</h3>
                    <div className="flex items-center space-x-4">
                      <Badge variant="outline">
                        {testResults.endpoints} endpoints found
                      </Badge>
                      <div className="flex items-center">
                        <span className="text-sm text-gray-500 mr-2">Risk Score:</span>
                        <div className="w-32 bg-gray-200 rounded-full h-2.5">
                          <div
                            className={`h-2.5 rounded-full ${
                              testResults.riskScore >= 80 ? 'bg-red-500' : 
                              testResults.riskScore >= 60 ? 'bg-orange-500' : 'bg-yellow-500'
                            }`}
                            style={{ width: `${testResults.riskScore}%` }}
                          ></div>
                        </div>
                        <span className="ml-2 font-medium">{testResults.riskScore}/100</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold">Security Issues Discovered:</h4>
                    {testResults.vulnerabilities.map((vuln, index) => (
                      <div key={index} className="bg-white p-4 rounded-lg border-l-4 border-l-red-500">
                        <div className="flex items-start justify-between">
                          <div className="flex-1">
                            <div className="flex items-center mb-2 space-x-2">
                              <Badge className={`text-xs ${getSeverityColor(vuln.severity)}`}>
                                {vuln.severity}
                              </Badge>
                              <Badge className={`text-xs ${getMethodColor(vuln.method)}`}>
                                {vuln.method}
                              </Badge>
                              <code className="text-sm bg-gray-100 px-2 py-1 rounded">
                                {vuln.endpoint}
                              </code>
                            </div>
                            <p className="text-sm text-gray-600">{vuln.issue}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 flex justify-center">
                    <Button variant="outline" className="flex items-center">
                      <Download className="mr-2 h-4 w-4" />
                      Download Detailed Report
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Testing Methodology */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">API Security Testing Methodology</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Systematic approach following OWASP API Security Testing guidelines and industry best practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {testingPhases.map((phase, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <div className="absolute -top-4 -left-4 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold">
                    {index + 1}
                  </div>
                  <CardTitle className="text-lg">{phase.phase}</CardTitle>
                  <CardDescription>{phase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-1">
                    {phase.activities.map((activity, i) => (
                      <li key={i} className="flex items-start text-sm">
                        <CheckCircle className="h-3 w-3 text-green-600 mr-2 mt-1 flex-shrink-0" />
                        <span>{activity}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tools & Technologies */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">API Security Testing Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional-grade tools for comprehensive API security assessment and testing.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {tools.map((tool, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <Image
                    src={tool.logo || "/placeholder.svg"}
                    alt={`${tool.name} logo`}
                    width={120}
                    height={60}
                    className="h-12 object-contain mx-auto mb-3"
                  />
                  <h3 className="font-semibold text-sm mb-1">{tool.name}</h3>
                  <p className="text-xs text-gray-500">{tool.category}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">API Security Testing Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional API penetration testing services with transparent, competitive pricing.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? "border-red-500 shadow-lg" : ""}`}>
                {tier.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <Badge className="bg-red-500">Most Popular</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle>{tier.name}</CardTitle>
                  <CardDescription>{tier.description}</CardDescription>
                  <div className="mt-4">
                    <span className="text-3xl font-bold">{tier.price}</span>
                    <span className="text-gray-500 ml-2">{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className={`w-full ${tier.popular ? "bg-red-600 hover:bg-red-700" : ""}`}>
                    <Link href="/contact">{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#1A1A1A] to-[#3A0000] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Secure Your APIs Today</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            APIs are the backbone of modern applications. Don't let API vulnerabilities become your weakest link. Get professional API penetration testing from certified experts.
          </p>
          <Button asChild size="lg" variant="destructive" className="group">
            <Link href="/contact">
              Schedule API Security Assessment
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}