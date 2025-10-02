"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Globe, Mic, BarChart4, Stethoscope, ShoppingBag, Send, User, Bot, MessageSquare, Brain, Zap, Search, FileText, Languages, Volume2, Database, Shield } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const nlpServices = [
  {
    id: "chatbots",
    title: "Intelligent Chatbots",
    description: "Advanced conversational AI powered by large language models and natural language understanding.",
    icon: <MessageSquare className="h-6 w-6" />,
    features: [
      "Multi-turn conversation handling",
      "Context-aware responses",
      "Intent recognition & entity extraction",
      "Fallback & escalation management",
      "Custom knowledge base integration"
    ],
    applications: ["Customer support", "Sales assistance", "FAQ automation", "Lead qualification"]
  },
  {
    id: "sentiment-analysis",
    title: "Sentiment Analysis",
    description: "Real-time emotion detection and sentiment scoring from text, voice, and social media content.",
    icon: <Brain className="h-6 w-6" />,
    features: [
      "Multi-modal sentiment detection",
      "Emotion classification (joy, anger, fear, etc.)",
      "Social media monitoring",
      "Review & feedback analysis",
      "Brand reputation tracking"
    ],
    applications: ["Brand monitoring", "Customer feedback", "Social listening", "Market research"]
  },
  {
    id: "text-analytics",
    title: "Text Analytics & NLU",
    description: "Extract insights from unstructured text with named entity recognition, topic modeling, and summarization.",
    icon: <FileText className="h-6 w-6" />,
    features: [
      "Named entity recognition (NER)",
      "Topic modeling & classification",
      "Document summarization",
      "Keyword extraction",
      "Language detection"
    ],
    applications: ["Document processing", "Content analysis", "Research automation", "Data mining"]
  },
  {
    id: "language-translation",
    title: "Language Translation",
    description: "High-quality machine translation supporting 100+ languages with domain-specific models.",
    icon: <Languages className="h-6 w-6" />,
    features: [
      "Neural machine translation",
      "100+ language support",
      "Domain adaptation (legal, medical, etc.)",
      "Real-time translation API",
      "Quality confidence scoring"
    ],
    applications: ["Global communication", "Content localization", "Customer support", "Document translation"]
  }
]

const industryApplications = [
  {
    id: "customer-service",
    title: "Customer Service & Support",
    description: "Automate customer interactions with intelligent virtual assistants.",
    icon: <Stethoscope className="h-8 w-8 text-indigo-600" />,
    solutions: [
      "24/7 automated customer support",
      "Multi-channel integration (web, mobile, social)",
      "Ticket classification & routing",
      "Knowledge base query automation",
      "Escalation management"
    ],
    metrics: { resolution_rate: "85%", response_time: "< 2s", cost_reduction: "60%" }
  },
  {
    id: "ecommerce",
    title: "E-commerce & Retail",
    description: "Enhance shopping experiences with personalized AI assistants.",
    icon: <ShoppingBag className="h-8 w-8 text-indigo-600" />,
    solutions: [
      "Product recommendation engine",
      "Visual search & discovery",
      "Order tracking & support",
      "Personalized shopping assistance",
      "Inventory & pricing queries"
    ],
    metrics: { conversion_rate: "+35%", engagement: "+50%", cost_reduction: "45%" }
  },
  {
    id: "healthcare",
    title: "Healthcare & Medical",
    description: "Support healthcare providers with AI-powered communication tools.",
    icon: <Stethoscope className="h-8 w-8 text-indigo-600" />,
    solutions: [
      "Patient intake automation",
      "Symptom checker & triage",
      "Appointment scheduling",
      "Medical record summarization",
      "HIPAA-compliant interactions"
    ],
    metrics: { efficiency: "+40%", accuracy: "92%", cost_reduction: "35%" }
  },
  {
    id: "finance",
    title: "Banking & Finance",
    description: "Secure financial services with intelligent automation.",
    icon: <Shield className="h-8 w-8 text-indigo-600" />,
    solutions: [
      "Account management assistance",
      "Fraud detection & alerts",
      "Loan application processing",
      "Investment advisory support",
      "Regulatory compliance monitoring"
    ],
    metrics: { accuracy: "96%", processing_time: "-70%", cost_reduction: "50%" }
  }
]

const techStack = [
  { name: "GPT-4 & Claude", category: "LLM" },
  { name: "BERT & RoBERTa", category: "NLU" },
  { name: "spaCy & NLTK", category: "Library" },
  { name: "Hugging Face", category: "Platform" },
  { name: "OpenAI API", category: "Service" },
  { name: "AWS Comprehend", category: "Cloud" },
  { name: "Google Dialogflow", category: "Platform" },
  { name: "Rasa", category: "Framework" }
]

const industries = [
  {
    id: "healthcare",
    title: "Healthcare",
    description: "Virtual assistants for patient intake, symptom checking, and appointment scheduling.",
    icon: <Stethoscope className="h-8 w-8 text-indigo-600" />,
    benefits: [
      "24/7 patient support",
      "Reduced administrative workload",
      "Improved patient experience",
      "HIPAA-compliant conversations",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "ecommerce",
    title: "E-commerce",
    description: "Product recommendation chatbots and customer service automation.",
    icon: <ShoppingBag className="h-8 w-8 text-indigo-600" />,
    benefits: [
      "Personalized product recommendations",
      "Automated order tracking",
      "Instant responses to common questions",
      "Increased conversion rates",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
]

const personalities = [
  { id: "friendly", name: "Friendly", description: "Warm, approachable, and conversational" },
  { id: "professional", name: "Professional", description: "Formal, concise, and business-oriented" },
  { id: "technical", name: "Technical", description: "Detailed, precise, and knowledge-focused" },
]

export default function NLPChatbotsPage() {
  const [chatMessages, setChatMessages] = useState<{ role: "user" | "bot"; content: string }[]>([
    { role: "bot", content: "Hello! I'm a demo chatbot. How can I help you today?" },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [selectedPersonality, setSelectedPersonality] = useState("friendly")
  const [responseLength, setResponseLength] = useState([50])
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    // Add user message
    const newMessages = [...chatMessages, { role: "user", content: inputMessage }]
    setChatMessages(newMessages)
    setInputMessage("")
    setIsTyping(true)

    // Simulate bot response based on personality
    setTimeout(() => {
      let botResponse = ""

      if (selectedPersonality === "friendly") {
        botResponse = `I'd be happy to help with that! ${generateFriendlyResponse(inputMessage)}`
      } else if (selectedPersonality === "professional") {
        botResponse = `Thank you for your inquiry. ${generateProfessionalResponse(inputMessage)}`
      } else {
        botResponse = `Based on your request, ${generateTechnicalResponse(inputMessage)}`
      }

      // Adjust length based on slider
      const targetLength = responseLength[0]
      if (botResponse.length > targetLength) {
        botResponse = botResponse.substring(0, targetLength) + "..."
      }

      setChatMessages([...newMessages, { role: "bot", content: botResponse }])
      setIsTyping(false)
    }, 1500)
  }

  const generateFriendlyResponse = (query: string) => {
    if (query.toLowerCase().includes("hello") || query.toLowerCase().includes("hi")) {
      return "It's great to meet you! How are you doing today? Is there something specific I can help you with?"
    } else if (query.toLowerCase().includes("help")) {
      return "I'd love to help! I can answer questions, provide information, or just chat. What's on your mind?"
    } else {
      return "Thanks for sharing that with me! I'm here to assist with whatever you need. Is there anything specific you'd like to know more about?"
    }
  }

  const generateProfessionalResponse = (query: string) => {
    if (query.toLowerCase().includes("hello") || query.toLowerCase().includes("hi")) {
      return "Welcome. How may I assist you with your business needs today?"
    } else if (query.toLowerCase().includes("help")) {
      return "I can provide assistance with a range of business inquiries. Please specify your requirements."
    } else {
      return "I understand your request. Here is the information you need. Please let me know if you require further clarification."
    }
  }

  const generateTechnicalResponse = (query: string) => {
    if (query.toLowerCase().includes("hello") || query.toLowerCase().includes("hi")) {
      return "Initializing conversation. System ready for technical queries. Please specify parameters."
    } else if (query.toLowerCase().includes("help")) {
      return "Technical assistance module activated. I can provide detailed technical specifications, troubleshooting procedures, and implementation guidance."
    } else {
      return "Analysis complete. The technical specifications indicate that the optimal approach would involve implementing a structured methodology with defined parameters and controlled variables."
    }
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-[#6A1B9A] via-[#8B5CF6] to-[#4A148C] gradient-animate text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="shimmer-effect absolute inset-0 opacity-30"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8 hero-animate-in">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                  NLP & Chatbot Solutions
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed">
                  Transform customer interactions with intelligent conversational AI, sentiment analysis, and advanced natural language processing.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary" className="group bg-white text-black hover:bg-gray-100 text-lg px-8 py-4 h-auto">
                  <Link href="#demo">
                    Try Interactive Demo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 h-auto"
                >
                  <Link href="#services">Our Services</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold">100+</div>
                  <div className="text-gray-300">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">98%</div>
                  <div className="text-gray-300">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">&lt; 100ms</div>
                  <div className="text-gray-300">Response Time</div>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 lg:opacity-40 hero-float">
              <div className="absolute inset-0">
                <Image
                  src="/NLP_banner.png"
                  alt="NLP & Chatbots Banner"
                  width={800}
                  height={800}
                  className="h-full w-auto object-cover object-left"
                  style={{
                    maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex flex-col justify-center py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">NLP & Chatbot Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive natural language processing and conversational AI solutions for every business need.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {nlpServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-indigo-200">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-2 mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.applications.map((app, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">{app}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications Section */}
      <section className="min-h-screen flex flex-col justify-center py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Industry Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform customer interactions across industries with our specialized NLP and chatbot solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {industryApplications.map((industry) => (
              <Card key={industry.id} className="group hover:shadow-2xl transition-all duration-300 bg-white">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-indigo-100 rounded-full group-hover:bg-indigo-200 transition-colors">
                      {industry.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">{industry.title}</CardTitle>
                      <CardDescription className="text-lg text-gray-600">{industry.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Our Solutions:</h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <div className="w-2 h-2 rounded-full bg-indigo-500 mt-2 mr-3 flex-shrink-0"></div>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-indigo-600">{industry.metrics.resolution_rate || industry.metrics.conversion_rate || industry.metrics.efficiency || industry.metrics.accuracy}</div>
                      <div className="text-sm text-gray-500">{industry.metrics.resolution_rate ? 'Resolution Rate' : industry.metrics.conversion_rate ? 'Conversion Rate' : industry.metrics.efficiency ? 'Efficiency' : 'Accuracy'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">{industry.metrics.response_time || industry.metrics.engagement || industry.metrics.accuracy || industry.metrics.processing_time}</div>
                      <div className="text-sm text-gray-500">{industry.metrics.response_time ? 'Response Time' : industry.metrics.engagement ? 'Engagement' : industry.metrics.accuracy ? 'Accuracy' : 'Processing Time'}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">-{industry.metrics.cost_reduction}</div>
                      <div className="text-sm text-gray-500">Cost Reduction</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact">Discuss {industry.title.split(" ")[0]} Solutions</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section id="demo" className="min-h-screen flex flex-col justify-center py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Interactive Chatbot Demo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience our conversational AI technology with customizable personality and response settings.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Chat with our AI Assistant</CardTitle>
                  <CardDescription>Type a message to start the conversation</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="bg-gray-50 rounded-lg p-4 h-[400px] overflow-y-auto mb-4">
                    {chatMessages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex mb-4 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`flex items-start max-w-[80%] ${message.role === "user" ? "flex-row-reverse" : ""}`}
                        >
                          <div
                            className={`flex-shrink-0 h-8 w-8 rounded-full flex items-center justify-center ${message.role === "user" ? "bg-indigo-100 ml-2" : "bg-indigo-600 mr-2"}`}
                          >
                            {message.role === "user" ? (
                              <User className="h-4 w-4 text-indigo-600" />
                            ) : (
                              <Bot className="h-4 w-4 text-white" />
                            )}
                          </div>
                          <div
                            className={`p-3 rounded-lg ${message.role === "user" ? "bg-indigo-600 text-white" : "bg-white border shadow-sm"}`}
                          >
                            {message.content}
                          </div>
                        </div>
                      </div>
                    ))}
                    {isTyping && (
                      <div className="flex mb-4 justify-start">
                        <div className="flex items-start max-w-[80%]">
                          <div className="flex-shrink-0 h-8 w-8 rounded-full bg-indigo-600 mr-2 flex items-center justify-center">
                            <Bot className="h-4 w-4 text-white" />
                          </div>
                          <div className="p-3 rounded-lg bg-white border shadow-sm">
                            <div className="flex space-x-1">
                              <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                              <div
                                className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                                style={{ animationDelay: "0.2s" }}
                              ></div>
                              <div
                                className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                                style={{ animationDelay: "0.4s" }}
                              ></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                  <form onSubmit={handleSendMessage} className="flex gap-2">
                    <Input
                      value={inputMessage}
                      onChange={(e) => setInputMessage(e.target.value)}
                      placeholder="Type your message..."
                      className="flex-grow"
                    />
                    <Button type="submit" size="icon" className="bg-indigo-600 hover:bg-indigo-700">
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Customize Chatbot</CardTitle>
                  <CardDescription>Adjust settings to see different responses</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-sm font-medium mb-3">Personality</h3>
                      <RadioGroup
                        value={selectedPersonality}
                        onValueChange={setSelectedPersonality}
                        className="space-y-3"
                      >
                        {personalities.map((personality) => (
                          <div key={personality.id} className="flex items-start space-x-2">
                            <RadioGroupItem value={personality.id} id={personality.id} />
                            <div className="grid gap-1">
                              <Label htmlFor={personality.id} className="font-medium">
                                {personality.name}
                              </Label>
                              <p className="text-sm text-gray-500">{personality.description}</p>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>
                    </div>

                    <div>
                      <h3 className="text-sm font-medium mb-3">Response Length</h3>
                      <Slider
                        value={responseLength}
                        onValueChange={setResponseLength}
                        min={20}
                        max={200}
                        step={10}
                        className="mb-2"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>Concise</span>
                        <span>Detailed</span>
                      </div>
                    </div>

                    <div className="pt-4 border-t">
                      <h3 className="text-sm font-medium mb-2">Current Settings</h3>
                      <div className="bg-gray-50 p-3 rounded-md text-sm">
                        <p>
                          <span className="font-medium">Personality:</span>{" "}
                          {personalities.find((p) => p.id === selectedPersonality)?.name}
                        </p>
                        <p>
                          <span className="font-medium">Response Length:</span> {responseLength[0]} characters
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-indigo-200">
                <CardHeader>
                  <CardTitle className="text-lg">Demo Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start">
                      <MessageSquare className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>Multi-turn conversations</div>
                    </li>
                    <li className="flex items-start">
                      <Brain className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>Context-aware responses</div>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>Customizable personality</div>
                    </li>
                    <li className="flex items-start">
                      <Volume2 className="h-4 w-4 text-indigo-500 mr-2 mt-0.5 flex-shrink-0" />
                      <div>Natural language understanding</div>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="min-h-screen flex flex-col justify-center py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with state-of-the-art NLP frameworks and large language models for superior performance.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="border-2 border-indigo-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Brain className="h-8 w-8 text-indigo-600 mr-3" />
                    Large Language Models
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {techStack.filter(tech => ['LLM', 'Service'].includes(tech.category)).map((tech, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
                        <div className="font-medium text-gray-900">{tech.name}</div>
                        <div className="text-sm text-gray-500">{tech.category}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Database className="h-8 w-8 text-green-600 mr-3" />
                    NLP Libraries & Frameworks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {techStack.filter(tech => ['NLU', 'Library', 'Framework'].includes(tech.category)).map((tech, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
                        <div className="font-medium text-gray-900">{tech.name}</div>
                        <div className="text-sm text-gray-500">{tech.category}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Zap className="h-8 w-8 text-purple-600 mr-3" />
                    Cloud Platforms
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {techStack.filter(tech => ['Cloud', 'Platform'].includes(tech.category)).map((tech, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <div className="font-medium text-gray-900">{tech.name}</div>
                        <div className="text-sm text-gray-500">Enterprise-grade NLP platform</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-indigo-50 to-purple-50 border-2 border-indigo-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-indigo-600 mb-2">98%</div>
                      <div className="text-gray-600">Intent Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">&lt; 100ms</div>
                      <div className="text-gray-600">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">100+</div>
                      <div className="text-gray-600">Languages</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                      <div className="text-gray-600">Uptime SLA</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Deploy Your Chatbot?</h3>
              <p className="text-lg mb-6 opacity-90">
                Get started with our NLP and chatbot solutions in minutes with pre-built templates and easy integration.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="#demo">Try Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

