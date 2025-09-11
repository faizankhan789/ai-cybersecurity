"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Upload, BarChart, LineChart, PieChart, Download } from "lucide-react"

const useCases = [
  {
    id: "fraud",
    title: "Fraud Detection",
    description: "Identify suspicious patterns and prevent fraudulent transactions in real-time.",
    icon: <BarChart className="h-8 w-8 text-blue-600" />,
    benefits: [
      "Reduce false positives by up to 60%",
      "Real-time transaction monitoring",
      "Adaptive learning from new fraud patterns",
    ],
  },
  {
    id: "demand",
    title: "Demand Forecasting",
    description: "Predict future demand for products and services with high accuracy.",
    icon: <LineChart className="h-8 w-8 text-blue-600" />,
    benefits: [
      "Improve inventory management by 35%",
      "Reduce stockouts and overstock situations",
      "Optimize supply chain operations",
    ],
  },
  {
    id: "churn",
    title: "Customer Churn Prediction",
    description: "Identify at-risk customers before they leave and take proactive retention measures.",
    icon: <PieChart className="h-8 w-8 text-blue-600" />,
    benefits: [
      "Increase customer retention by 25%",
      "Personalized retention strategies",
      "Prioritize high-value customers",
    ],
  },
]

const pricingTiers = [
  {
    name: "Basic",
    description: "Pre-built models for common use cases",
    price: "$2,500",
    period: "per month",
    features: [
      "Access to pre-trained models",
      "Basic customization options",
      "Standard API access",
      "Email support",
      "Monthly model updates",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Pro",
    description: "Custom solutions for specific business needs",
    price: "$5,000",
    period: "per month",
    features: [
      "Custom model development",
      "Advanced feature engineering",
      "Premium API access with higher rate limits",
      "Priority support",
      "Bi-weekly model updates",
      "Model explainability reports",
    ],
    cta: "Go Pro",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Full MLOps implementation for large organizations",
    price: "Custom",
    period: "pricing",
    features: [
      "End-to-end MLOps pipeline",
      "On-premises or private cloud deployment",
      "Dedicated ML engineers",
      "24/7 support",
      "Continuous model training and deployment",
      "Custom integrations with existing systems",
      "Comprehensive documentation and training",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function MachineLearningPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [results, setResults] = useState<null | {
    prediction: string
    confidence: number
    chart: string
  }>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setSelectedFile(file)
    setResults(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFile) return

    setIsProcessing(true)

    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false)
      setResults({
        prediction: "10% increase in sales over next quarter",
        confidence: 87,
        chart: "/placeholder.svg?height=300&width=500",
      })
    }, 2000)
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00F3FF] to-[#2A2A72] text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">
                Build Smarter Systems with Machine Learning
              </h1>
              <p className="text-xl mb-8 max-w-lg">
                Leverage the power of data to make accurate predictions, automate decisions, and gain valuable insights
                for your business.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary" className="group">
                  <Link href="#demo">
                    Try Interactive Demo
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
                <div className="w-full h-full bg-blue-500/10 rounded-lg overflow-hidden">
                  {/* Animated data flow visualization */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <div
                      className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full animate-ping"
                      style={{ animationDuration: "1.5s" }}
                    ></div>
                    <div
                      className="absolute top-3/4 left-1/2 w-2 h-2 bg-white rounded-full animate-ping"
                      style={{ animationDuration: "2s" }}
                    ></div>
                    <div
                      className="absolute top-1/2 left-3/4 w-2 h-2 bg-white rounded-full animate-ping"
                      style={{ animationDuration: "2.5s" }}
                    ></div>
                    <div
                      className="absolute top-1/3 left-2/3 w-2 h-2 bg-white rounded-full animate-ping"
                      style={{ animationDuration: "1.8s" }}
                    ></div>
                    <div
                      className="absolute top-2/3 left-1/3 w-2 h-2 bg-white rounded-full animate-ping"
                      style={{ animationDuration: "2.2s" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Machine Learning Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our machine learning solutions can address your specific business challenges.
            </p>
          </div>

          <Tabs defaultValue="fraud" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {useCases.map((useCase) => (
                <TabsTrigger key={useCase.id} value={useCase.id}>
                  {useCase.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {useCases.map((useCase) => (
              <TabsContent key={useCase.id} value={useCase.id}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-blue-100 rounded-full">{useCase.icon}</div>
                      <div>
                        <CardTitle className="text-2xl">{useCase.title}</CardTitle>
                        <CardDescription className="text-lg">{useCase.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-semibold mb-4">Key Benefits:</h4>
                    <ul className="space-y-2">
                      {useCase.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href="/contact">Discuss Your {useCase.title} Needs</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Demo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upload a sample dataset to see our machine learning models in action.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept=".csv,.xlsx"
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="file-upload" className="flex flex-col items-center justify-center cursor-pointer">
                    <Upload className="h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="text-lg font-medium mb-2">Upload a dataset</h3>
                    <p className="text-sm text-gray-500 mb-4">Drag and drop or click to select a CSV or Excel file</p>
                    <Button type="button" variant="outline">
                      Select File
                    </Button>
                  </label>
                </div>

                {selectedFile && (
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-medium">
                      Selected file: <span className="font-bold">{selectedFile.name}</span>
                    </p>
                  </div>
                )}

                <div className="flex justify-center">
                  <Button type="submit" disabled={!selectedFile || isProcessing} className="w-full md:w-auto">
                    {isProcessing ? "Processing..." : "Generate Predictions"}
                  </Button>
                </div>
              </form>

              {results && (
                <div className="mt-8 border-t pt-8">
                  <h3 className="text-xl font-bold mb-4">Prediction Results</h3>
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-4">
                    <p className="text-lg font-medium mb-2">{results.prediction}</p>
                    <div className="flex items-center">
                      <span className="text-sm text-gray-500 mr-2">Confidence:</span>
                      <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div
                          className="bg-blue-600 h-2.5 rounded-full"
                          style={{ width: `${results.confidence}%` }}
                        ></div>
                      </div>
                      <span className="ml-2 text-sm font-medium">{results.confidence}%</span>
                    </div>
                  </div>
                  <div className="mt-4">
                    <h4 className="font-medium mb-2">Visualization</h4>
                    <div className="bg-white p-4 rounded-lg shadow-sm">
                      <Image
                        src={results.chart || "/placeholder.svg"}
                        alt="Prediction chart"
                        width={500}
                        height={300}
                        className="w-full h-auto"
                      />
                    </div>
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Button variant="outline" className="flex items-center">
                      <Download className="mr-2 h-4 w-4" />
                      Download Full Report
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Machine Learning Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage industry-leading technologies to build robust, scalable ML solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {[
              { name: "PyTorch", logo: "/placeholder.svg?height=60&width=120" },
              { name: "TensorFlow", logo: "/placeholder.svg?height=60&width=120" },
              { name: "Scikit-learn", logo: "/placeholder.svg?height=60&width=120" },
              { name: "XGBoost", logo: "/placeholder.svg?height=60&width=120" },
              { name: "Pandas", logo: "/placeholder.svg?height=60&width=120" },
            ].map((tech, index) => (
              <div key={index} className="flex flex-col items-center">
                <Image
                  src={tech.logo || "/placeholder.svg"}
                  alt={`${tech.name} logo`}
                  width={120}
                  height={60}
                  className="h-16 object-contain mb-2"
                />
                <span className="text-sm font-medium">{tech.name}</span>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline">
              <Link href="/resources/api-docs">View API Documentation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pricing Tiers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible options to meet your machine learning needs and budget.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? "border-blue-500 shadow-lg" : ""}`}>
                {tier.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <Badge className="bg-blue-500">Most Popular</Badge>
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
                        <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className={`w-full ${tier.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}>
                    <Link href="/contact">{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#2A2A72] to-[#6A1B9A] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Harness the Power of Machine Learning?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a free consultation with our ML experts to discuss your specific needs and discover how our
            solutions can drive innovation and growth.
          </p>
          <Button asChild size="lg" variant="secondary" className="group">
            <Link href="/contact">
              Schedule a Free ML Consultation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

