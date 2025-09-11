"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Database, Search, FileText, BookOpen, Download, Upload } from "lucide-react"

const useCases = [
  {
    id: "knowledge",
    title: "Enterprise Knowledge Base",
    description: "Transform your organization's documents into an intelligent, searchable knowledge system.",
    icon: <BookOpen className="h-8 w-8 text-emerald-600" />,
    benefits: [
      "Query complex documents with natural language",
      "Get accurate answers with source citations",
      "Integrate with existing document management systems",
      "Support for PDFs, Word docs, wikis, and databases",
    ],
  },
  {
    id: "customer",
    title: "AI-Powered Customer Support",
    description: "Enhance customer service with RAG-powered chatbots that provide accurate, contextual responses.",
    icon: <Search className="h-8 w-8 text-emerald-600" />,
    benefits: [
      "Reduce support ticket volume by 70%",
      "Provide 24/7 accurate customer assistance",
      "Maintain up-to-date product information",
      "Escalate complex queries to human agents",
    ],
  },
  {
    id: "research",
    title: "Research & Analysis",
    description: "Accelerate research processes by querying vast document collections and research papers.",
    icon: <FileText className="h-8 w-8 text-emerald-600" />,
    benefits: [
      "Search through thousands of documents instantly",
      "Generate summaries and insights from research",
      "Cross-reference information across sources",
      "Export findings with proper citations",
    ],
  },
]

const pricingTiers = [
  {
    name: "Basic",
    description: "For small teams getting started with RAG",
    price: "$199",
    period: "per month",
    features: [
      "Up to 1,000 documents",
      "10,000 queries per month",
      "Basic embedding models",
      "Standard retrieval accuracy",
      "Email support",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    description: "Advanced RAG solutions for growing businesses",
    price: "$499",
    period: "per month",
    features: [
      "Up to 10,000 documents",
      "50,000 queries per month",
      "Advanced embedding models",
      "High-precision retrieval",
      "Custom knowledge base training",
      "Priority support",
    ],
    cta: "Go Professional",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Unlimited RAG power for large organizations",
    price: "Custom",
    period: "pricing",
    features: [
      "Unlimited documents and queries",
      "On-premises deployment",
      "Custom model fine-tuning",
      "Multi-language support",
      "Advanced security & compliance",
      "Dedicated account manager",
      "24/7 support",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function RAGPage() {
  const [query, setQuery] = useState("")
  const [selectedDocs, setSelectedDocs] = useState<File[]>([])
  const [isProcessing, setIsProcessing] = useState(false)
  const [searchResults, setSearchResults] = useState<{
    answer: string
    sources: Array<{
      title: string
      excerpt: string
      relevance: number
    }>
  } | null>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || [])
    setSelectedDocs(prev => [...prev, ...files])
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsProcessing(true)
    setSearchResults(null)

    // Simulate RAG processing
    setTimeout(() => {
      setIsProcessing(false)
      setSearchResults({
        answer: "Based on the uploaded documents, here's a comprehensive answer to your query. RAG systems combine the power of retrieval and generation to provide accurate, contextually relevant responses by first searching through your knowledge base and then generating answers based on the most relevant information found.",
        sources: [
          {
            title: "RAG Architecture Guide.pdf",
            excerpt: "Retrieval-Augmented Generation (RAG) is a technique that enhances large language models by providing them with relevant context from external knowledge sources...",
            relevance: 0.95
          },
          {
            title: "Implementation Best Practices.docx",
            excerpt: "When implementing RAG systems, it's crucial to consider vector database selection, embedding quality, and retrieval strategies for optimal performance...",
            relevance: 0.87
          },
          {
            title: "Use Cases Documentation.txt",
            excerpt: "RAG applications span across various domains including customer support, enterprise knowledge management, and research acceleration...",
            relevance: 0.82
          }
        ]
      })
    }, 2500)
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">
                Retrieval-Augmented Generation (RAG)
              </h1>
              <p className="text-xl mb-8 max-w-lg">
                Bridge the gap between your data and AI. RAG combines the power of information retrieval with generative AI to provide accurate, contextual, and up-to-date responses from your knowledge base.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary" className="group">
                  <Link href="#demo">
                    Try RAG Demo
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
                <div className="w-full h-full bg-white/10 rounded-lg overflow-hidden backdrop-blur-sm">
                  {/* Animated data flow visualization */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    <Database className="absolute top-1/4 left-1/4 h-8 w-8 text-blue-300 animate-pulse" />
                    <Search className="absolute top-1/2 left-1/2 h-6 w-6 text-yellow-300 animate-bounce" />
                    <FileText className="absolute top-3/4 left-3/4 h-6 w-6 text-green-300 animate-pulse" style={{ animationDelay: "0.5s" }} />
                    <BookOpen className="absolute top-1/3 left-2/3 h-7 w-7 text-purple-300 animate-pulse" style={{ animationDelay: "1s" }} />
                    {/* Connection lines */}
                    <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-white rounded-full animate-ping"></div>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">RAG Use Cases</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how RAG can transform your organization's approach to information access and knowledge management.
            </p>
          </div>

          <Tabs defaultValue="knowledge" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {useCases.map((useCase) => (
                <TabsTrigger key={useCase.id} value={useCase.id}>
                  {useCase.title.split(' ')[0]}
                </TabsTrigger>
              ))}
            </TabsList>

            {useCases.map((useCase) => (
              <TabsContent key={useCase.id} value={useCase.id}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-emerald-100 rounded-full">{useCase.icon}</div>
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
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href="/contact">Implement {useCase.title}</Link>
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive RAG Demo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Upload your documents and ask questions to see how RAG provides accurate answers with source citations.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Document Upload */}
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6">
                  <input
                    type="file"
                    id="doc-upload"
                    className="hidden"
                    accept=".pdf,.docx,.txt,.md"
                    multiple
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="doc-upload" className="flex flex-col items-center justify-center cursor-pointer">
                    <Upload className="h-10 w-10 text-gray-400 mb-3" />
                    <h3 className="text-lg font-medium mb-2">Upload Knowledge Documents</h3>
                    <p className="text-sm text-gray-500 mb-4 text-center">
                      Upload PDFs, Word docs, text files, or markdown files to build your knowledge base
                    </p>
                    <Button type="button" variant="outline">
                      Select Documents
                    </Button>
                  </label>
                </div>

                {selectedDocs.length > 0 && (
                  <div className="bg-emerald-50 p-4 rounded-lg">
                    <h4 className="font-medium mb-2">Uploaded Documents:</h4>
                    <ul className="space-y-1">
                      {selectedDocs.map((doc, index) => (
                        <li key={index} className="text-sm flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-emerald-600" />
                          {doc.name}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Query Section */}
                <form onSubmit={handleSearch} className="space-y-4">
                  <div>
                    <label htmlFor="query" className="block text-sm font-medium mb-2">
                      Ask a question about your documents:
                    </label>
                    <textarea
                      id="query"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder="What information are you looking for? (e.g., 'What are the key benefits of RAG?' or 'How does retrieval-augmented generation work?')"
                      className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent resize-none"
                      rows={3}
                    />
                  </div>

                  <div className="flex justify-center">
                    <Button 
                      type="submit" 
                      disabled={!query.trim() || isProcessing}
                      className="bg-emerald-600 hover:bg-emerald-700"
                    >
                      {isProcessing ? "Searching Knowledge Base..." : "Search & Generate Answer"}
                    </Button>
                  </div>
                </form>
              </div>

              {searchResults && (
                <div className="mt-8 border-t pt-8">
                  <h3 className="text-xl font-bold mb-4">RAG Response</h3>
                  
                  {/* Answer */}
                  <div className="bg-white p-4 rounded-lg shadow-sm mb-6">
                    <h4 className="font-semibold mb-2">Answer:</h4>
                    <p className="text-gray-800 leading-relaxed">{searchResults.answer}</p>
                  </div>

                  {/* Sources */}
                  <div className="mb-4">
                    <h4 className="font-semibold mb-3">Sources:</h4>
                    <div className="space-y-3">
                      {searchResults.sources.map((source, index) => (
                        <div key={index} className="bg-gray-50 p-4 rounded-lg">
                          <div className="flex items-start justify-between mb-2">
                            <h5 className="font-medium text-emerald-700">{source.title}</h5>
                            <Badge variant="secondary">{Math.round(source.relevance * 100)}% relevant</Badge>
                          </div>
                          <p className="text-sm text-gray-600 italic">"{source.excerpt}"</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <Button variant="outline" className="flex items-center">
                      <Download className="mr-2 h-4 w-4" />
                      Export Response with Citations
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our RAG Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on industry-leading vector databases and embedding models for optimal retrieval performance.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {[
              { name: "Pinecone", logo: "/placeholder.svg?height=60&width=120" },
              { name: "Weaviate", logo: "/placeholder.svg?height=60&width=120" },
              { name: "OpenAI", logo: "/placeholder.svg?height=60&width=120" },
              { name: "LangChain", logo: "/placeholder.svg?height=60&width=120" },
              { name: "Chroma", logo: "/placeholder.svg?height=60&width=120" },
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
              <Link href="/resources/api-docs">View RAG API Documentation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">RAG Pricing Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scale your knowledge management with flexible pricing that grows with your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? "border-emerald-500 shadow-lg" : ""}`}>
                {tier.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <Badge className="bg-emerald-500">Most Popular</Badge>
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
                        <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className={`w-full ${tier.popular ? "bg-emerald-600 hover:bg-emerald-700" : ""}`}>
                    <Link href="/contact">{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Unlock Your Knowledge Potential?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Transform how your organization accesses and leverages information with our advanced RAG solutions. Get started today and see the difference contextual AI can make.
          </p>
          <Button asChild size="lg" variant="secondary" className="group">
            <Link href="/contact">
              Start Your RAG Implementation
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}