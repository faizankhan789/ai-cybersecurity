"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Shield, Brain, AlertTriangle, CheckCircle2, Zap } from "lucide-react"

export default function IntegratedSolutionsPage() {
  const [logInput, setLogInput] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const [analysisResults, setAnalysisResults] = useState<null | {
    threats: { type: string; severity: "low" | "medium" | "high"; description: string }[]
    summary: string
  }>(null)

  const handleLogAnalysis = () => {
    if (!logInput.trim()) return

    setIsAnalyzing(true)
    setAnalysisResults(null)

    // Simulate AI analysis
    setTimeout(() => {
      setIsAnalyzing(false)

      // Generate mock threats based on input
      const threats = []

      if (logInput.toLowerCase().includes("login") || logInput.toLowerCase().includes("auth")) {
        threats.push({
          type: "Authentication Anomaly",
          severity: "high",
          description: "Multiple failed login attempts detected from unusual IP addresses.",
        })
      }

      if (logInput.toLowerCase().includes("api") || logInput.toLowerCase().includes("request")) {
        threats.push({
          type: "API Abuse",
          severity: "medium",
          description: "Unusual pattern of API requests suggesting potential data harvesting.",
        })
      }

      if (logInput.toLowerCase().includes("file") || logInput.toLowerCase().includes("upload")) {
        threats.push({
          type: "Malicious File",
          severity: "high",
          description: "Potential malware detected in uploaded file based on signature analysis.",
        })
      }

      // Add some random threats if none were triggered by keywords
      if (threats.length === 0) {
        const randomThreats = [
          {
            type: "Network Scan",
            severity: "low" as const,
            description: "Port scanning activity detected from external IP address.",
          },
          {
            type: "Unusual Data Transfer",
            severity: "medium" as const,
            description: "Large data egress detected outside of normal business hours.",
          },
          {
            type: "Privilege Escalation",
            severity: "medium" as const,
            description: "User account attempting to access restricted resources.",
          },
        ]

        // Add 1-2 random threats
        const numThreats = Math.floor(Math.random() * 2) + 1
        for (let i = 0; i < numThreats; i++) {
          threats.push(randomThreats[Math.floor(Math.random() * randomThreats.length)])
        }
      }

      setAnalysisResults({
        threats,
        summary: `AI analysis complete. ${threats.length} potential threat${threats.length !== 1 ? "s" : ""} identified. ${
          threats.filter((t) => t.severity === "high").length > 0
            ? "Immediate attention recommended."
            : "Continued monitoring advised."
        }`,
      })
    }, 2000)
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2A2A72] to-[#6A1B9A] text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Where AI Meets Ironclad Security</h1>
              <p className="text-xl mb-8 max-w-lg">
                Discover the powerful synergy between artificial intelligence and cybersecurity for comprehensive
                protection and intelligent threat detection.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 group">
                  <Link href="#ai-threat-scanner">
                    Try AI Threat Scanner
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="#case-study">View Case Study</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  {/* AI Robot shielding server animation */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative">
                      {/* Server */}
                      <div className="w-32 h-40 bg-gray-800 rounded-lg relative z-10 border border-gray-700 flex flex-col items-center justify-center">
                        <div className="w-28 h-4 bg-gray-700 rounded mb-2"></div>
                        <div className="w-28 h-4 bg-gray-700 rounded mb-2"></div>
                        <div className="w-28 h-4 bg-gray-700 rounded mb-2"></div>
                        <div className="w-6 h-6 absolute bottom-2 right-2 rounded-full bg-green-500 animate-pulse"></div>
                      </div>

                      {/* Shield effect */}
                      <div className="absolute inset-0 z-20 flex items-center justify-center">
                        <div className="w-48 h-48 rounded-full border-4 border-purple-500 opacity-50 animate-pulse"></div>
                      </div>

                      {/* AI Robot */}
                      <div className="absolute -left-20 top-0 z-30">
                        <div className="relative">
                          <Brain className="h-16 w-16 text-blue-400" />
                          <div className="absolute -top-1 -right-1 w-4 h-4 bg-purple-500 rounded-full animate-ping"></div>
                        </div>
                      </div>

                      {/* Shield */}
                      <div className="absolute -right-16 top-4 z-30">
                        <Shield className="h-12 w-12 text-red-500" />
                      </div>

                      {/* Connection lines */}
                      <svg className="absolute inset-0 z-0" width="100%" height="100%" viewBox="0 0 100 100">
                        <line
                          x1="20"
                          y1="30"
                          x2="40"
                          y2="40"
                          stroke="#6A1B9A"
                          strokeWidth="1"
                          strokeDasharray="2 2"
                          className="animate-pulse"
                        />
                        <line
                          x1="60"
                          y1="40"
                          x2="80"
                          y2="30"
                          stroke="#6A1B9A"
                          strokeWidth="1"
                          strokeDasharray="2 2"
                          className="animate-pulse"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Securing AI Systems */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-blue-600">SECURING AI</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Protecting AI Systems from Threats</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              As AI becomes more prevalent, securing these systems against unique threats is critical.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold mb-4">Adversarial Attack Prevention</h3>
              <p className="text-gray-600 mb-6">
                Adversarial attacks manipulate AI models by introducing specially crafted inputs designed to cause
                misclassification or erroneous outputs.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-bold">Robust Model Training</p>
                    <p className="text-gray-600">
                      Training models with adversarial examples to improve resilience against attacks.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-bold">Input Sanitization</p>
                    <p className="text-gray-600">
                      Validating and preprocessing inputs to detect and filter potential adversarial examples.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-bold">Ensemble Methods</p>
                    <p className="text-gray-600">
                      Using multiple models with different architectures to increase attack resistance.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Model Encryption & Protection</h3>
              <p className="text-gray-600 mb-6">
                Protecting proprietary AI models and their sensitive training data from theft, reverse engineering, and
                unauthorized access.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-bold">Homomorphic Encryption</p>
                    <p className="text-gray-600">
                      Performing computations on encrypted data without decrypting it first.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-bold">Secure Enclaves</p>
                    <p className="text-gray-600">
                      Running models in hardware-protected trusted execution environments.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle2 className="h-6 w-6 text-blue-600 mr-2 flex-shrink-0" />
                  <div>
                    <p className="font-bold">Model Watermarking</p>
                    <p className="text-gray-600">
                      Embedding digital watermarks to detect unauthorized use or theft of models.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg border border-blue-100">
            <h3 className="text-xl font-bold mb-4 flex items-center">
              <AlertTriangle className="h-5 w-5 text-blue-600 mr-2" />
              Common AI Security Vulnerabilities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-bold mb-2">Data Poisoning</h4>
                <p className="text-sm text-gray-600">
                  Injecting malicious data into training datasets to compromise model performance.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-bold mb-2">Model Inversion</h4>
                <p className="text-sm text-gray-600">
                  Extracting private training data by analyzing model outputs and behavior.
                </p>
              </div>
              <div className="p-4 bg-white rounded-lg shadow-sm">
                <h4 className="font-bold mb-2">Transfer Learning Attacks</h4>
                <p className="text-sm text-gray-600">
                  Exploiting vulnerabilities in pre-trained models used as foundations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI for Cybersecurity */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-red-600">AI-POWERED SECURITY</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Enhancing Security with AI</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Leveraging artificial intelligence to detect, analyze, and respond to cyber threats with unprecedented
              speed and accuracy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <div className="mb-4 p-3 bg-red-100 rounded-full w-fit">
                  <Brain className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>ML-Powered SIEM</CardTitle>
                <CardDescription>
                  Security Information and Event Management enhanced with machine learning
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Traditional SIEM systems struggle with the volume and complexity of modern security data. AI-powered
                  SIEM solutions use machine learning to:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                    <span>Detect anomalies that rule-based systems would miss</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                    <span>Reduce false positives by up to 90%</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                    <span>Correlate events across disparate systems</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                    <span>Adapt to evolving threat landscapes</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-gray-500">99.7% Detection Rate</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm text-gray-500">Real-time Analysis</span>
                  </div>
                </div>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <div className="mb-4 p-3 bg-red-100 rounded-full w-fit">
                  <Zap className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Log Analysis Automation</CardTitle>
                <CardDescription>Intelligent processing of security logs and events</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-6">
                  Manual log analysis is time-consuming and prone to human error. AI-powered log analysis:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                    <span>Processes millions of log entries in seconds</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                    <span>Identifies patterns indicating potential breaches</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                    <span>Learns from historical incidents to improve detection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                    <span>Provides actionable insights with context</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <div className="flex items-center justify-between w-full">
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-sm text-gray-500">85% Time Reduction</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-sm text-gray-500">Continuous Learning</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="mt-12">
            <h3 className="text-2xl font-bold mb-6 text-center">The AI Security Advantage</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">200x</div>
                <p className="text-gray-700">Faster threat detection compared to manual analysis</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">90%</div>
                <p className="text-gray-700">Reduction in false positive alerts</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">73%</div>
                <p className="text-gray-700">More zero-day threats identified</p>
              </div>
              <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-lg text-center">
                <div className="text-4xl font-bold text-purple-600 mb-2">60%</div>
                <p className="text-gray-700">Cost reduction in security operations</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section id="case-study" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4 bg-purple-600">CASE STUDY</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              AI-Powered Phishing Detection + Zero-Trust Network for a Bank
            </h2>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="text-lg mb-6">
                    A multinational bank with over 50,000 employees was experiencing an increasing number of
                    sophisticated phishing attacks that were bypassing traditional security measures.
                  </p>
                  <h3 className="text-xl font-bold mb-4">Our Integrated Solution</h3>
                  <p className="mb-4">
                    We implemented a hybrid solution combining AI-powered phishing detection with a zero-trust network
                    architecture:
                  </p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                      <span>
                        <span className="font-bold">AI Email Analysis:</span> Machine learning models trained to detect
                        subtle indicators of phishing attempts
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                      <span>
                        <span className="font-bold">Behavioral Analysis:</span> AI monitoring of user behavior to detect
                        anomalies indicating compromised accounts
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                      <span>
                        <span className="font-bold">Zero-Trust Implementation:</span> "Never trust, always verify"
                        approach for all network access
                      </span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                      <span>
                        <span className="font-bold">Continuous Authentication:</span> Real-time verification of user
                        identity throughout sessions
                      </span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-bold mb-4">Results</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-purple-600">98%</p>
                      <p className="text-sm">Phishing Detection</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-purple-600">87%</p>
                      <p className="text-sm">Reduction in Incidents</p>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-purple-600">$3.2M</p>
                      <p className="text-sm">Annual Savings</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-bold mb-4">Client Profile</h3>
                    <p className="mb-4">
                      <span className="font-medium">Industry:</span> Banking & Finance
                    </p>
                    <p className="mb-4">
                      <span className="font-medium">Size:</span> 50,000+ employees
                    </p>
                    <p className="mb-4">
                      <span className="font-medium">Challenge:</span> Sophisticated phishing attacks bypassing
                      traditional security
                    </p>
                    <p>
                      <span className="font-medium">Timeline:</span> 4 months from concept to full deployment
                    </p>
                  </div>
                  <div className="mt-6 p-4 bg-purple-50 rounded-lg">
                    <h4 className="font-bold mb-2">Key Innovation</h4>
                    <p className="text-sm">
                      The integration of AI-based threat detection with zero-trust principles created a security system
                      that continuously learns and adapts to new threats while maintaining strict access controls.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button asChild className="bg-purple-600 hover:bg-purple-700">
                  <Link href="/contact">Request Similar Solution</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* AI Threat Scanner */}
      <section id="ai-threat-scanner" className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Threat Scanner</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of AI-driven threat detection. Paste log data below for instant analysis.
            </p>
          </div>

          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardContent className="p-6">
              <div className="mb-6">
                <label htmlFor="log-input" className="block text-sm font-medium mb-2">
                  Paste Log Data
                </label>
                <Textarea
                  id="log-input"
                  value={logInput}
                  onChange={(e) => setLogInput(e.target.value)}
                  placeholder="Paste server logs, authentication logs, or network traffic data here..."
                  className="bg-gray-700 border-gray-600 text-white h-40"
                />
                <p className="mt-2 text-xs text-gray-400">
                  Example: "192.168.1.1 - - [10/Oct/2023:13:55:36 -0700] 'POST /api/login HTTP/1.1' 200 2326
                  'Mozilla/5.0'"
                </p>
              </div>

              <div className="flex justify-center mb-8">
                <Button
                  onClick={handleLogAnalysis}
                  disabled={!logInput.trim() || isAnalyzing}
                  className="bg-purple-600 hover:bg-purple-700"
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze with AI"}
                </Button>
              </div>

              {analysisResults && (
                <div className="border-t border-gray-700 pt-6">
                  <h3 className="text-xl font-bold mb-4">Analysis Results</h3>

                  <div className="mb-6 p-4 bg-gray-700 rounded-lg">
                    <p className="text-gray-300">{analysisResults.summary}</p>
                  </div>

                  <h4 className="font-semibold mb-3">Detected Threats</h4>
                  <div className="space-y-3">
                    {analysisResults.threats.map((threat, index) => (
                      <div key={index} className="p-3 bg-gray-700 rounded-lg">
                        <div className="flex items-center justify-between mb-2">
                          <div className="font-bold">{threat.type}</div>
                          <Badge
                            className={`
                            ${
                              threat.severity === "high"
                                ? "bg-red-600"
                                : threat.severity === "medium"
                                  ? "bg-yellow-600"
                                  : "bg-blue-600"
                            }
                          `}
                          >
                            {threat.severity.toUpperCase()}
                          </Badge>
                        </div>
                        <p className="text-sm text-gray-300">{threat.description}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 text-center">
                    <Button asChild variant="outline" className="border-gray-600">
                      <Link href="/contact">Get Full Security Assessment</Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Integration Approaches */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Integration Approaches</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how AI and cybersecurity can be integrated in your organization.
            </p>
          </div>

          <Tabs defaultValue="enterprise" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="enterprise">Enterprise</TabsTrigger>
              <TabsTrigger value="midmarket">Mid-Market</TabsTrigger>
              <TabsTrigger value="startup">Startup</TabsTrigger>
            </TabsList>

            <TabsContent value="enterprise">
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise Integration</CardTitle>
                  <CardDescription>
                    For organizations with complex infrastructure and dedicated security teams
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold mb-4">Implementation Strategy</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Phased deployment across business units</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Integration with existing SIEM and SOC</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Custom AI model training with proprietary data</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Comprehensive security governance framework</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-4">Key Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Enterprise-wide threat visibility</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Automated response to common threats</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Regulatory compliance automation</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Reduced security operations costs</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="bg-purple-600 hover:bg-purple-700">
                    <Link href="/contact">Request Enterprise Consultation</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="midmarket">
              <Card>
                <CardHeader>
                  <CardTitle>Mid-Market Integration</CardTitle>
                  <CardDescription>For growing organizations with moderate security resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold mb-4">Implementation Strategy</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Managed security service integration</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Pre-trained AI models with customization</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Cloud-based deployment for scalability</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Hybrid security operations model</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-4">Key Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Enterprise-grade security at mid-market cost</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Rapid deployment and time-to-value</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Flexible scaling as organization grows</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Balanced automation and human expertise</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="bg-purple-600 hover:bg-purple-700">
                    <Link href="/contact">Request Mid-Market Solution</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>

            <TabsContent value="startup">
              <Card>
                <CardHeader>
                  <CardTitle>Startup Integration</CardTitle>
                  <CardDescription>For early-stage companies with limited security resources</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="font-bold mb-4">Implementation Strategy</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>SaaS-based security solutions</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Pre-configured AI security tools</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Security-as-a-Service model</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Focus on critical assets protection</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="font-bold mb-4">Key Benefits</h3>
                      <ul className="space-y-2">
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Low upfront investment</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Quick implementation (days, not months)</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Built-in compliance for common standards</span>
                        </li>
                        <li className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                          <span>Outsourced security expertise</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="bg-purple-600 hover:bg-purple-700">
                    <Link href="/contact">Request Startup Package</Link>
                  </Button>
                </CardFooter>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#2A2A72] to-[#6A1B9A] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Integrate AI & Security?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our cross-domain experts to discover how integrated AI and cybersecurity
            solutions can transform your organization.
          </p>
          <Button asChild size="lg" className="bg-white text-purple-700 hover:bg-gray-100 group">
            <Link href="/contact">
              Schedule a Cross-Domain Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

