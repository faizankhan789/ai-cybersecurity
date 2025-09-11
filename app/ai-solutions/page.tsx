import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Brain, Eye, MessageSquare, Lightbulb, ChevronRight, Sparkles, Database, Cpu } from "lucide-react"
import TechStackShowcase from "@/components/tech-stack-showcase"
import PageTransition from "@/components/page-transition"

export default function AISolutionsPage() {
  return (
    <PageTransition>
      <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00F3FF] to-[#2A2A72] text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-orbitron mb-6">
                AI-Driven Solutions for Tomorrow's Challenges
              </h1>
              <p className="text-xl mb-8 max-w-lg">
                Harness the power of artificial intelligence to transform your business with cutting-edge technology and
                expert implementation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary" className="group">
                  <Link href="#services">
                    Explore Our Services
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="/contact">Schedule a Consultation</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-64 rounded-full bg-blue-500/20 animate-pulse"></div>
              </div>
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="h-32 w-32 text-white" />
              </div>
              <div
                className="absolute top-0 left-1/4 w-16 h-16 bg-cyan-300/30 rounded-full blur-xl animate-bounce"
                style={{ animationDuration: "3s" }}
              ></div>
              <div
                className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-blue-500/30 rounded-full blur-xl animate-bounce"
                style={{ animationDuration: "4s" }}
              ></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our AI Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From predictive analytics to computer vision, we offer comprehensive AI solutions tailored to your
              business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* Machine Learning Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-t-4 border-t-blue-500">
              <CardHeader>
                <div className="mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Machine Learning</CardTitle>
                <CardDescription>Predictive and prescriptive analytics solutions</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Leverage data-driven insights with custom ML models for fraud detection, demand forecasting, and more.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="group w-full justify-between">
                  <Link href="/ai-solutions/machine-learning">
                    Learn More
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Computer Vision Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-t-4 border-t-cyan-500">
              <CardHeader>
                <div className="mb-4 p-3 bg-cyan-100 rounded-full w-fit">
                  <Eye className="h-6 w-6 text-cyan-600" />
                </div>
                <CardTitle className="text-xl">Computer Vision</CardTitle>
                <CardDescription>Visual data processing capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Transform visual data into actionable insights with object detection, facial recognition, and AR
                  solutions.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="group w-full justify-between">
                  <Link href="/ai-solutions/computer-vision">
                    Learn More
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* NLP & Chatbots Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-t-4 border-t-indigo-500">
              <CardHeader>
                <div className="mb-4 p-3 bg-indigo-100 rounded-full w-fit">
                  <MessageSquare className="h-6 w-6 text-indigo-600" />
                </div>
                <CardTitle className="text-xl">NLP & Chatbots</CardTitle>
                <CardDescription>Conversational AI tools</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Enhance customer interactions with intelligent chatbots, sentiment analysis, and natural language
                  processing.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="group w-full justify-between">
                  <Link href="/ai-solutions/nlp-chatbots">
                    Learn More
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Generative AI Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-t-4 border-t-purple-500">
              <CardHeader>
                <div className="mb-4 p-3 bg-purple-100 rounded-full w-fit">
                  <Sparkles className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Generative AI</CardTitle>
                <CardDescription>Creative content generation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Generate high-quality text, images, code, and creative content using state-of-the-art generative models.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="group w-full justify-between">
                  <Link href="/ai-solutions/generative-ai">
                    Learn More
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* RAG Systems Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-t-4 border-t-emerald-500">
              <CardHeader>
                <div className="mb-4 p-3 bg-emerald-100 rounded-full w-fit">
                  <Database className="h-6 w-6 text-emerald-600" />
                </div>
                <CardTitle className="text-xl">RAG Systems</CardTitle>
                <CardDescription>Intelligent knowledge retrieval</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Combine retrieval and generation for accurate, contextual AI responses from your knowledge base.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="group w-full justify-between">
                  <Link href="/ai-solutions/rag">
                    Learn More
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Large Language Models Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-t-4 border-t-orange-500">
              <CardHeader>
                <div className="mb-4 p-3 bg-orange-100 rounded-full w-fit">
                  <Cpu className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Large Language Models</CardTitle>
                <CardDescription>Advanced language understanding</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Deploy and customize state-of-the-art LLMs for your specific use cases and requirements.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="group w-full justify-between">
                  <Link href="/ai-solutions/llm">
                    Learn More
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>

            {/* AI Consulting Card */}
            <Card className="group hover:shadow-lg transition-all duration-300 border-t-4 border-t-gray-500">
              <CardHeader>
                <div className="mb-4 p-3 bg-gray-100 rounded-full w-fit">
                  <Lightbulb className="h-6 w-6 text-gray-600" />
                </div>
                <CardTitle className="text-xl">AI Consulting</CardTitle>
                <CardDescription>End-to-end strategy support</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Get expert guidance on AI strategy, implementation, MLOps workflows, and team training.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="ghost" className="group w-full justify-between">
                  <Link href="/ai-solutions/consulting">
                    Learn More
                    <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our AI solutions have transformed businesses across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Case Study 1 */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-blue-500 to-cyan-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Badge className="bg-white text-blue-600">FINANCE</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Fraud Detection System for Banking</CardTitle>
                <CardDescription>Reduced fraudulent transactions by 87%</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Implemented a machine learning system that analyzes transaction patterns in real-time to identify and
                  prevent fraudulent activities.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/case-studies/fraud-detection">Read Case Study</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Case Study 2 */}
            <Card className="overflow-hidden">
              <div className="h-48 bg-gradient-to-r from-indigo-500 to-purple-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Badge className="bg-white text-indigo-600">HEALTHCARE</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>Medical Image Analysis</CardTitle>
                <CardDescription>Improved diagnostic accuracy by 42%</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Developed a computer vision system that assists radiologists in detecting abnormalities in medical
                  images with greater precision.
                </p>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline">
                  <Link href="/case-studies/medical-imaging">Read Case Study</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Tech Stack Showcase */}
      <TechStackShowcase />

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#2A2A72] to-[#6A1B9A] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Business with AI?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our AI experts to discuss your specific needs and discover how our solutions
            can drive innovation and growth.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="group">
              <Link href="/contact">
                Schedule a Consultation
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="bg-transparent border-white text-white hover:bg-white/10"
            >
              <Link href="/resources">Explore Resources</Link>
            </Button>
          </div>
        </div>
      </section>
      </main>
    </PageTransition>
  )
}

