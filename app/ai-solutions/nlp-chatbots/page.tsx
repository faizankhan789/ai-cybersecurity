"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Globe, Mic, BarChart4, Stethoscope, ShoppingBag, Send, User, Bot } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Slider } from "@/components/ui/slider"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"

const features = [
  {
    title: "Multilingual Support",
    description: "Our NLP models support over 100 languages with high accuracy translation and understanding.",
    icon: <Globe className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: "Voice Integration",
    description: "Convert speech to text and text to speech with natural-sounding voices in multiple languages.",
    icon: <Mic className="h-8 w-8 text-indigo-600" />,
  },
  {
    title: "CRM Automation",
    description: "Integrate with your CRM to automatically update customer records and track interactions.",
    icon: <BarChart4 className="h-8 w-8 text-indigo-600" />,
  },
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
      <section className="bg-gradient-to-br from-[#6A1B9A] to-[#4A148C] text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">Conversations Powered by AI</h1>
              <p className="text-xl mb-8 max-w-lg">
                Transform customer interactions with intelligent chatbots, sentiment analysis, and natural language
                processing.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary" className="group">
                  <Link href="#demo">
                    Try Interactive Chatbot
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="#features">Explore Features</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full relative">
                  {/* Chat bubbles animation */}
                  <div
                    className="absolute top-1/4 left-1/4 bg-white text-purple-900 p-4 rounded-lg rounded-bl-none shadow-lg transform -translate-x-1/2 animate-bounce"
                    style={{ animationDuration: "3s" }}
                  >
                    <p className="text-sm">How can I help you today?</p>
                  </div>
                  <div
                    className="absolute top-1/2 right-1/4 bg-purple-200 text-purple-900 p-4 rounded-lg rounded-br-none shadow-lg transform translate-x-1/2 animate-bounce"
                    style={{ animationDuration: "4s", animationDelay: "1s" }}
                  >
                    <p className="text-sm">I need information about your services.</p>
                  </div>
                  <div
                    className="absolute bottom-1/4 left-1/3 bg-white text-purple-900 p-4 rounded-lg rounded-bl-none shadow-lg transform -translate-x-1/2 animate-bounce"
                    style={{ animationDuration: "3.5s", animationDelay: "2s" }}
                  >
                    <p className="text-sm">Here's what we offer...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Key Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our NLP and chatbot solutions come with powerful features to enhance customer interactions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardHeader>
                  <div className="mb-4 p-3 bg-indigo-100 rounded-full w-fit">{feature.icon}</div>
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive Chatbot Demo</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Customize the chatbot's personality and see how it responds to your queries.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Card className="h-full">
                <CardHeader>
                  <CardTitle>Chat with our AI</CardTitle>
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
                            className={`p-3 rounded-lg ${message.role === "user" ? "bg-indigo-600 text-white" : "bg-white border"}`}
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
                          <div className="p-3 rounded-lg bg-white border">
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
                    <Button type="submit" size="icon">
                      <Send className="h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div>
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
            </div>
          </div>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our NLP and chatbot solutions can transform various industries.
            </p>
          </div>

          <Tabs defaultValue="healthcare" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              {industries.map((industry) => (
                <TabsTrigger key={industry.id} value={industry.id}>
                  {industry.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {industries.map((industry) => (
              <TabsContent key={industry.id} value={industry.id}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-indigo-100 rounded-full">{industry.icon}</div>
                      <div>
                        <CardTitle className="text-2xl">{industry.title}</CardTitle>
                        <CardDescription className="text-lg">{industry.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {industry.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <Image
                          src={industry.image || "/placeholder.svg"}
                          alt={industry.title}
                          width={500}
                          height={300}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href="/contact">Discuss Your {industry.title} Project</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#6A1B9A] to-[#4A148C] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Chatbot?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Create a customized chatbot for your business in just a few minutes.
          </p>
          <Button asChild size="lg" variant="secondary" className="group">
            <Link href="/contact">
              Build Your Chatbot in 5 Minutes
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

