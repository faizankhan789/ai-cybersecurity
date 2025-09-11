"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Cpu, Layers, Zap, Settings, Download, Send } from "lucide-react"

const useCases = [
  {
    id: "custom",
    title: "Custom Model Development",
    description: "Build domain-specific language models tailored to your industry and use cases.",
    icon: <Cpu className="h-8 w-8 text-indigo-600" />,
    benefits: [
      "Train models on your proprietary data",
      "Achieve higher accuracy for domain tasks",
      "Maintain complete data privacy and control",
      "Reduce inference costs with optimized models",
    ],
  },
  {
    id: "fine-tuning",
    title: "Model Fine-Tuning",
    description: "Enhance existing LLMs with your specific data and requirements for improved performance.",
    icon: <Settings className="h-8 w-8 text-indigo-600" />,
    benefits: [
      "Improve model performance by 40-60%",
      "Adapt to your specific use case and terminology",
      "Maintain model consistency and reliability",
      "Cost-effective alternative to full training",
    ],
  },
  {
    id: "deployment",
    title: "Enterprise Deployment",
    description: "Deploy and scale LLMs in your infrastructure with enterprise-grade security and performance.",
    icon: <Layers className="h-8 w-8 text-indigo-600" />,
    benefits: [
      "On-premises or cloud deployment options",
      "Auto-scaling based on demand",
      "Enterprise security and compliance",
      "24/7 monitoring and support",
    ],
  },
]

const modelTypes = [
  {
    name: "GPT-4 Turbo",
    description: "Latest OpenAI model with enhanced capabilities",
    parameters: "1.76T",
    contextWindow: "128K tokens",
    pricing: "$0.01/1K tokens",
  },
  {
    name: "Claude 3 Opus",
    description: "Anthropic's most capable model for complex tasks",
    parameters: "200B+",
    contextWindow: "200K tokens",
    pricing: "$0.015/1K tokens",
  },
  {
    name: "Llama 2 70B",
    description: "Meta's open-source model for commercial use",
    parameters: "70B",
    contextWindow: "4K tokens",
    pricing: "$0.0007/1K tokens",
  },
  {
    name: "Gemini Pro",
    description: "Google's multimodal AI model",
    parameters: "Unknown",
    contextWindow: "32K tokens",
    pricing: "$0.0005/1K tokens",
  },
]

const pricingTiers = [
  {
    name: "Developer",
    description: "For developers and small projects",
    price: "$49",
    period: "per month",
    features: [
      "Access to 5+ LLM models",
      "100K tokens per month included",
      "Standard API rate limits",
      "Community support",
      "Basic usage analytics",
    ],
    cta: "Start Building",
    popular: false,
  },
  {
    name: "Business",
    description: "For growing businesses and production apps",
    price: "$199",
    period: "per month",
    features: [
      "Access to all premium models",
      "1M tokens per month included",
      "Higher API rate limits",
      "Priority support",
      "Advanced analytics and monitoring",
      "Model fine-tuning capabilities",
    ],
    cta: "Scale Up",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations with custom needs",
    price: "Custom",
    period: "pricing",
    features: [
      "Unlimited token usage",
      "Custom model development",
      "On-premises deployment",
      "Dedicated infrastructure",
      "SLA guarantees",
      "White-glove implementation",
      "Advanced security features",
    ],
    cta: "Contact Sales",
    popular: false,
  },
]

export default function LLMPage() {
  const [selectedModel, setSelectedModel] = useState("gpt-4")
  const [prompt, setPrompt] = useState("")
  const [isGenerating, setIsGenerating] = useState(false)
  const [response, setResponse] = useState<{
    text: string
    model: string
    tokens: number
    latency: number
  } | null>(null)

  const handleGenerate = () => {
    if (!prompt.trim()) return

    setIsGenerating(true)
    setResponse(null)

    // Simulate LLM response
    setTimeout(() => {
      setIsGenerating(false)
      setResponse({
        text: `This is a simulated response from the ${selectedModel} model. In a real implementation, this would be the actual AI-generated response to your prompt: "${prompt}". The model would analyze your input, consider the context, and generate a relevant, coherent response based on its training data and parameters.`,
        model: selectedModel,
        tokens: Math.floor(Math.random() * 200) + 50,
        latency: Math.floor(Math.random() * 800) + 200
      })
    }, 2000)
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-600 to-purple-700 text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">
                Large Language Models (LLMs)
              </h1>
              <p className="text-xl mb-8 max-w-lg">
                Harness the power of state-of-the-art language models. From GPT-4 to custom models, we provide the infrastructure and expertise to integrate LLMs into your applications.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary" className="group">
                  <Link href="#demo">
                    Try LLM Playground
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
                  {/* Animated neural network visualization */}
                  <div className="absolute top-0 left-0 w-full h-full">
                    {/* Nodes */}
                    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="absolute top-1/2 left-1/3 w-4 h-4 bg-purple-400 rounded-full animate-pulse" style={{ animationDelay: "0.5s" }}></div>
                    <div className="absolute top-3/4 left-1/2 w-3 h-3 bg-pink-400 rounded-full animate-pulse" style={{ animationDelay: "1s" }}></div>
                    <div className="absolute top-1/3 left-2/3 w-4 h-4 bg-indigo-400 rounded-full animate-pulse" style={{ animationDelay: "1.5s" }}></div>
                    <div className="absolute top-2/3 left-3/4 w-3 h-3 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: "2s" }}></div>
                    
                    {/* Central processing node */}
                    <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
                    <Zap className="absolute top-1/2 left-1/2 h-6 w-6 text-white transform -translate-x-1/2 -translate-y-1/2" />
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
            <h2 className="text-3xl md:text-4xl font-bold mb-4">LLM Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From pre-trained models to custom solutions, we provide comprehensive LLM services tailored to your needs.
            </p>
          </div>

          <Tabs defaultValue="custom" className="w-full">
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
                      <div className="p-3 bg-indigo-100 rounded-full">{useCase.icon}</div>
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
                          <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href="/contact">Explore {useCase.title}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Model Comparison */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Available Models</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from the latest and most powerful language models for your specific use case.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {modelTypes.map((model, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{model.name}</CardTitle>
                  <CardDescription className="text-sm">{model.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Parameters:</span>
                    <span className="font-medium">{model.parameters}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Context:</span>
                    <span className="font-medium">{model.contextWindow}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-500">Pricing:</span>
                    <span className="font-medium text-indigo-600">{model.pricing}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full">
                    Try {model.name}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">LLM Playground</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Test different language models with your prompts and compare their responses in real-time.
            </p>
          </div>

          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                {/* Model Selection */}
                <div>
                  <label className="block text-sm font-medium mb-3">Select Model:</label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["gpt-4", "claude-3", "llama-2", "gemini"].map((model) => (
                      <button
                        key={model}
                        onClick={() => setSelectedModel(model)}
                        className={`p-3 text-sm rounded-lg border-2 transition-colors ${
                          selectedModel === model
                            ? "border-indigo-500 bg-indigo-50 text-indigo-700"
                            : "border-gray-200 hover:border-gray-300"
                        }`}
                      >
                        {model.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Prompt Input */}
                <div>
                  <label htmlFor="llm-prompt" className="block text-sm font-medium mb-2">
                    Enter your prompt:
                  </label>
                  <textarea
                    id="llm-prompt"
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="What would you like the AI to help you with? (e.g., 'Explain quantum computing in simple terms' or 'Write a professional email about...')"
                    className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent resize-none"
                    rows={4}
                  />
                </div>

                <div className="flex justify-center">
                  <Button 
                    onClick={handleGenerate}
                    disabled={!prompt.trim() || isGenerating}
                    className="bg-indigo-600 hover:bg-indigo-700 flex items-center"
                  >
                    {isGenerating ? "Generating..." : "Generate Response"}
                    <Send className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>

              {response && (
                <div className="mt-8 border-t pt-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold">Model Response</h3>
                    <div className="flex gap-4 text-sm text-gray-500">
                      <span>Model: {response.model}</span>
                      <span>Tokens: {response.tokens}</span>
                      <span>Latency: {response.latency}ms</span>
                    </div>
                  </div>
                  
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="text-gray-800 leading-relaxed whitespace-pre-wrap">{response.text}</p>
                  </div>

                  <div className="mt-4 flex justify-center">
                    <Button variant="outline" className="flex items-center">
                      <Download className="mr-2 h-4 w-4" />
                      Export Response
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">LLM Infrastructure</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on enterprise-grade infrastructure for reliable, scalable LLM deployment.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
            {[
              { name: "OpenAI", logo: "/placeholder.svg?height=60&width=120" },
              { name: "Anthropic", logo: "/placeholder.svg?height=60&width=120" },
              { name: "Hugging Face", logo: "/placeholder.svg?height=60&width=120" },
              { name: "AWS Bedrock", logo: "/placeholder.svg?height=60&width=120" },
              { name: "NVIDIA", logo: "/placeholder.svg?height=60&width=120" },
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
              <Link href="/resources/api-docs">View LLM API Documentation</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">LLM Service Pricing</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transparent, usage-based pricing for all your language model needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative ${tier.popular ? "border-indigo-500 shadow-lg" : ""}`}>
                {tier.popular && (
                  <div className="absolute top-0 right-0 transform translate-x-2 -translate-y-2">
                    <Badge className="bg-indigo-500">Most Popular</Badge>
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
                        <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-indigo-600"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className={`w-full ${tier.popular ? "bg-indigo-600 hover:bg-indigo-700" : ""}`}>
                    <Link href="/contact">{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-indigo-600 to-purple-700 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Power Your Applications with LLMs?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Whether you need access to existing models or want to develop custom solutions, our LLM platform provides the tools and expertise you need to succeed.
          </p>
          <Button asChild size="lg" variant="secondary" className="group">
            <Link href="/contact">
              Start Building with LLMs
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}