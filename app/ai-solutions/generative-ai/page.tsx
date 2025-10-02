"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Sparkles, MessageCircle, Image as ImageIcon, Code, Download } from "lucide-react"

const useCases = [
  {
    id: "content",
    title: "Content Generation",
    description: "Generate high-quality text, articles, marketing copy, and creative content at scale.",
    icon: <MessageCircle className="h-8 w-8 text-purple-600" />,
    benefits: [
      "Generate marketing content 10x faster",
      "Maintain brand voice consistency",
      "Create personalized content for different audiences",
      "Support for 50+ languages",
    ],
  },
  {
    id: "images",
    title: "Image & Art Generation",
    description: "Create stunning visuals, artwork, and designs using AI-powered image generation.",
    icon: <ImageIcon className="h-8 w-8 text-purple-600" />,
    benefits: [
      "Generate custom images from text descriptions",
      "Create consistent brand visuals",
      "Produce variations of existing designs",
      "High-resolution output up to 4K",
    ],
  },
  {
    id: "code",
    title: "Code Generation",
    description: "Accelerate development with AI-generated code, documentation, and technical content.",
    icon: <Code className="h-8 w-8 text-purple-600" />,
    benefits: [
      "Generate code in 20+ programming languages",
      "Automated documentation creation",
      "Code optimization and refactoring",
      "Unit test generation",
    ],
  },
]

const pricingTiers = [
  {
    name: "Starter",
    description: "Perfect for small teams and individual creators",
    price: "$99",
    period: "per month",
    features: [
      "10,000 tokens per month",
      "Basic text and image generation",
      "Standard API access",
      "Email support",
      "Pre-built templates",
    ],
    cta: "Start Creating",
    popular: false,
  },
  {
    name: "Professional",
    description: "Advanced features for growing businesses",
    price: "$299",
    period: "per month",
    features: [
      "100,000 tokens per month",
      "Advanced generation models",
      "Custom model fine-tuning",
      "Priority API access",
      "24/7 chat support",
      "Custom integrations",
    ],
    cta: "Go Professional",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Unlimited power for large organizations",
    price: "Custom",
    period: "pricing",
    features: [
      "Unlimited token usage",
      "On-premises deployment",
      "Dedicated AI infrastructure",
      "Custom model development",
      "SLA guarantees",
      "Dedicated account manager",
      "Advanced security & compliance",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function GenerativeAIPage() {
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [generatedContent, setGeneratedContent] = useState<{
    type: string
    content: string
    image?: string
  } | null>(null)

  const handleGenerate = (type: string) => {
    if (!prompt.trim()) return

    setIsGenerating(true)
    setGeneratedContent(null)

    // Simulate generation
    setTimeout(() => {
      setIsGenerating(false)
      
      let content = ""
      let image = ""
      
      switch (type) {
        case "text":
          content = "Here's a sample generated text based on your prompt: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Our AI has analyzed your request and created this engaging content that matches your specified tone and style. This is just a preview of what our advanced language models can produce for you."
          break
        case "image":
          content = "Image generated successfully!"
          image = "/placeholder.svg?height=400&width=600"
          break
        case "code":
          content = `function generateAIContent(prompt) {
  // AI-generated function based on your requirements
  const response = await aiModel.generate({
    prompt: prompt,
    maxTokens: 1000,
    temperature: 0.7
  });
  
  return response.content;
}`
          break
      }
      
      setGeneratedContent({ type, content, image })
    }, 3000)
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br gradient-animate from-purple-600 via-pink-600 to-purple-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="shimmer-effect absolute inset-0 opacity-30"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8 hero-animate-in">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-pink-200 bg-clip-text text-transparent">
                  Generative AI Solutions
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed">
                  Transform your creative process with advanced generative AI models that create stunning content, images, code, and innovative solutions at scale.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary" className="group bg-white text-black hover:bg-gray-100 text-lg px-8 py-4 h-auto">
                  <Link href="#demo">
                    Try AI Generator
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
                  <div className="text-2xl font-bold">10B+</div>
                  <div className="text-gray-300">Parameters</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50+</div>
                  <div className="text-gray-300">Languages</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">4K</div>
                  <div className="text-gray-300">Resolution</div>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 hero-float lg:opacity-40">
              <div className="absolute inset-0">
                <Image
                  src="/GenAI_banner.png"
                  alt="Generative AI Banner"
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Generative AI Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive generative AI solutions that transform ideas into reality across multiple modalities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((useCase) => (
              <Card key={useCase.id} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-purple-200">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {useCase.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{useCase.title}</CardTitle>
                  <CardDescription className="text-gray-600">{useCase.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold text-gray-900 mb-4">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {useCase.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start text-gray-700">
                        <div className="w-2 h-2 rounded-full bg-purple-500 mt-2 mr-3 flex-shrink-0"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact">Explore {useCase.title}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="min-h-screen flex flex-col justify-center py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Interactive AI Generator</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of generative AI firsthand. Enter a prompt and watch our AI create amazing content across multiple formats.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <label htmlFor="prompt" className="block text-sm font-medium mb-2">
                    Enter your prompt:
                  </label>
                  <textarea
                    id="prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Describe what you want to create... (e.g., 'Write a professional email about project updates' or 'Generate an image of a futuristic city')"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent resize-none"
                    rows={4}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <Button 
                    onClick={() => handleGenerate("text")}
                    disabled={!prompt.trim() || isGenerating}
                    className="bg-purple-600 hover:bg-purple-700"
                  >
                    {isGenerating ? "Generating..." : "Generate Text"}
                  </Button>
                  <Button 
                    onClick={() => handleGenerate("image")}
                    disabled={!prompt.trim() || isGenerating}
                    variant="outline"
                  >
                    {isGenerating ? "Generating..." : "Generate Image"}
                  </Button>
                  <Button 
                    onClick={() => handleGenerate("code")}
                    disabled={!prompt.trim() || isGenerating}
                    variant="outline"
                  >
                    {isGenerating ? "Generating..." : "Generate Code"}
                  </Button>
                </div>
              </div>

              {generatedContent && (
                <div className="mt-8 border-t pt-8">
                  <h3 className="text-xl font-bold mb-4">Generated Content</h3>
                  <div className="bg-white p-4 rounded-lg shadow-sm">
                    {generatedContent.type === "image" && generatedContent.image && (
                      <div className="mb-4">
                        <Image
                          src={generatedContent.image}
                          alt="AI Generated Image"
                          width={600}
                          height={400}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    )}
                    {generatedContent.type === "code" ? (
                      <pre className="bg-gray-900 text-green-400 p-4 rounded-lg overflow-x-auto text-sm">
                        <code>{generatedContent.content}</code>
                      </pre>
                    ) : (
                      <p className="whitespace-pre-wrap">{generatedContent.content}</p>
                    )}
                  </div>
                  <div className="mt-4 flex justify-center">
                    <Button variant="outline" className="flex items-center">
                      <Download className="mr-2 h-4 w-4" />
                      Download Result
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="min-h-screen flex flex-col justify-center py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Powered by Advanced AI Models</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We leverage the latest generative AI technologies to deliver exceptional results.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {[
              { name: "GPT-4", logo: "/placeholder.svg?height=60&width=120" },
              { name: "DALL-E", logo: "/placeholder.svg?height=60&width=120" },
              { name: "Claude", logo: "/placeholder.svg?height=60&width=120" },
              { name: "Midjourney", logo: "/placeholder.svg?height=60&width=120" },
              { name: "Stability AI", logo: "/placeholder.svg?height=60&width=120" },
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
      <section id="pricing" className="min-h-screen flex flex-col justify-center py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing Plans</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan for your generative AI needs, from individual creators to enterprise teams.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? "border-purple-500 shadow-lg" : ""}`}>
                {tier.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <Badge className="bg-purple-500">Most Popular</Badge>
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
                        <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className={`w-full ${tier.popular ? "bg-purple-600 hover:bg-purple-700" : ""}`}>
                    <Link href="/contact">{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-purple-600 to-pink-600 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Creative Process?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join thousands of creators, businesses, and developers who are already using our generative AI platform to bring their ideas to life.
          </p>
          <Button asChild size="lg" variant="secondary" className="group">
            <Link href="/contact">
              Start Creating with AI Today
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}