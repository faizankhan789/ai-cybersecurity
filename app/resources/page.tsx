"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ArrowRight, Search, Download, FileText, BookOpen, Code, Shield, Brain, Zap } from "lucide-react"

// Resource type definitions
type Resource = {
  id: string
  title: string
  description: string
  type: "guide" | "tool" | "template" | "webinar" | "whitepaper"
  category: "ai" | "cybersecurity" | "integrated"
  image: string
  downloadCount: number
  link: string
  tags: string[]
}

// Sample resources data
const resources: Resource[] = [
  {
    id: "ml-model-templates",
    title: "ML Model Template Library",
    description: "A collection of Jupyter notebooks with pre-built machine learning models for common use cases.",
    type: "template",
    category: "ai",
    image: "/placeholder.svg?height=200&width=300",
    downloadCount: 1243,
    link: "/resources/ml-model-templates",
    tags: ["machine learning", "jupyter", "templates", "python"],
  },
  {
    id: "ethical-ai-webinar",
    title: "Ethical AI Design Best Practices",
    description: "Webinar recording and slides covering ethical considerations in AI development.",
    type: "webinar",
    category: "ai",
    image: "/placeholder.svg?height=200&width=300",
    downloadCount: 876,
    link: "/resources/ethical-ai-webinar",
    tags: ["ethics", "ai design", "bias mitigation", "transparency"],
  },
  {
    id: "owasp-top-10",
    title: "OWASP Top 10 Playbook",
    description: "Comprehensive guide to addressing the OWASP Top 10 web application security risks.",
    type: "guide",
    category: "cybersecurity",
    image: "/placeholder.svg?height=200&width=300",
    downloadCount: 2187,
    link: "/resources/owasp-top-10",
    tags: ["web security", "OWASP", "vulnerabilities", "remediation"],
  },
  {
    id: "password-analyzer",
    title: "Password Strength Analyzer",
    description: "Interactive tool to evaluate password strength and provide improvement recommendations.",
    type: "tool",
    category: "cybersecurity",
    image: "/placeholder.svg?height=200&width=300",
    downloadCount: 3542,
    link: "/resources/password-analyzer",
    tags: ["passwords", "authentication", "security tools"],
  },
  {
    id: "ai-pipelines-healthcare",
    title: "Securing AI Pipelines in Healthcare",
    description: "Whitepaper on implementing secure AI systems in healthcare environments.",
    type: "whitepaper",
    category: "integrated",
    image: "/placeholder.svg?height=200&width=300",
    downloadCount: 964,
    link: "/resources/ai-healthcare-security",
    tags: ["healthcare", "HIPAA", "AI security", "compliance"],
  },
  {
    id: "threat-detection-models",
    title: "AI-Powered Threat Detection Models",
    description: "Pre-trained models for identifying common security threats in network traffic.",
    type: "template",
    category: "integrated",
    image: "/placeholder.svg?height=200&width=300",
    downloadCount: 1876,
    link: "/resources/threat-detection-models",
    tags: ["threat detection", "machine learning", "network security"],
  },
]

// Resource type icons
const resourceTypeIcons = {
  guide: <BookOpen className="h-5 w-5" />,
  tool: <Code className="h-5 w-5" />,
  template: <FileText className="h-5 w-5" />,
  webinar: <FileText className="h-5 w-5" />,
  whitepaper: <FileText className="h-5 w-5" />,
}

// Resource category icons
const resourceCategoryIcons = {
  ai: <Brain className="h-5 w-5" />,
  cybersecurity: <Shield className="h-5 w-5" />,
  integrated: <Zap className="h-5 w-5" />,
}

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("all")

  // Filter resources based on search query and active category
  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = activeCategory === "all" || resource.category === activeCategory

    return matchesSearch && matchesCategory
  })

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#2A2A72] to-[#6A1B9A] text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Empower Your Team with Expertise</h1>
              <p className="text-xl mb-8 max-w-lg">
                Access our comprehensive library of resources to enhance your knowledge of AI and cybersecurity.
              </p>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <Input
                  type="text"
                  placeholder="Search resources..."
                  className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-gray-400 w-full"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <Brain className="h-8 w-8 text-blue-300 mb-2" />
                  <h3 className="font-bold mb-1">AI Resources</h3>
                  <p className="text-sm text-gray-300">Models, templates, and best practices</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg">
                  <Shield className="h-8 w-8 text-red-300 mb-2" />
                  <h3 className="font-bold mb-1">Security Resources</h3>
                  <p className="text-sm text-gray-300">Guides, tools, and playbooks</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg col-span-2">
                  <Zap className="h-8 w-8 text-purple-300 mb-2" />
                  <h3 className="font-bold mb-1">Integrated Solutions</h3>
                  <p className="text-sm text-gray-300">Combined AI and security resources</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resource Filters */}
      <section className="py-8 px-4 bg-gray-50 border-b">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="all" value={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="all">All Resources</TabsTrigger>
              <TabsTrigger value="ai" className="flex items-center gap-2">
                <Brain className="h-4 w-4" />
                <span>AI</span>
              </TabsTrigger>
              <TabsTrigger value="cybersecurity" className="flex items-center gap-2">
                <Shield className="h-4 w-4" />
                <span>Cybersecurity</span>
              </TabsTrigger>
              <TabsTrigger value="integrated" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                <span>Integrated</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          {filteredResources.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredResources.map((resource) => (
                <Card key={resource.id} className="group hover:shadow-lg transition-all duration-300">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={resource.image || "/placeholder.svg"}
                      alt={resource.title}
                      width={300}
                      height={200}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-2 left-2 flex gap-2">
                      <Badge
                        className={`
                        ${
                          resource.category === "ai"
                            ? "bg-blue-600"
                            : resource.category === "cybersecurity"
                              ? "bg-red-600"
                              : "bg-purple-600"
                        }
                      `}
                      >
                        <div className="flex items-center gap-1">
                          {resourceCategoryIcons[resource.category]}
                          <span>
                            {resource.category === "ai"
                              ? "AI"
                              : resource.category === "cybersecurity"
                                ? "Security"
                                : "Integrated"}
                          </span>
                        </div>
                      </Badge>
                      <Badge variant="outline" className="bg-white/80">
                        <div className="flex items-center gap-1">
                          {resourceTypeIcons[resource.type]}
                          <span>{resource.type.charAt(0).toUpperCase() + resource.type.slice(1)}</span>
                        </div>
                      </Badge>
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle>{resource.title}</CardTitle>
                    <CardDescription>{resource.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {resource.tags.slice(0, 3).map((tag, index) => (
                        <Badge key={index} variant="secondary" className="bg-gray-100">
                          {tag}
                        </Badge>
                      ))}
                      {resource.tags.length > 3 && (
                        <Badge variant="secondary" className="bg-gray-100">
                          +{resource.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-between items-center">
                    <div className="flex items-center text-sm text-gray-500">
                      <Download className="h-4 w-4 mr-1" />
                      <span>{resource.downloadCount.toLocaleString()}</span>
                    </div>
                    <Button asChild>
                      <Link href={resource.link}>{resource.type === "tool" ? "Try Tool" : "Download"}</Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="mb-4">
                <Search className="h-12 w-12 text-gray-300 mx-auto" />
              </div>
              <h3 className="text-xl font-bold mb-2">No resources found</h3>
              <p className="text-gray-600 mb-6">We couldn't find any resources matching your search criteria.</p>
              <Button
                onClick={() => {
                  setSearchQuery("")
                  setActiveCategory("all")
                }}
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Resources */}
            <Card>
              <CardHeader>
                <div className="mb-4 p-3 bg-blue-100 rounded-full w-fit">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle>AI Resources</CardTitle>
                <CardDescription>Models, templates, and best practices</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                    <span>ML Model Template Library</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                    <span>Ethical AI Design Best Practices</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-blue-600"></div>
                    <span>NLP Model Evaluation Framework</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="?category=ai">View All AI Resources</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Cybersecurity Resources */}
            <Card>
              <CardHeader>
                <div className="mb-4 p-3 bg-red-100 rounded-full w-fit">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle>Cybersecurity Resources</CardTitle>
                <CardDescription>Guides, tools, and playbooks</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                    <span>OWASP Top 10 Playbook</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                    <span>Password Strength Analyzer</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-red-600"></div>
                    <span>Incident Response Templates</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="?category=cybersecurity">View All Security Resources</Link>
                </Button>
              </CardFooter>
            </Card>

            {/* Integrated Resources */}
            <Card>
              <CardHeader>
                <div className="mb-4 p-3 bg-purple-100 rounded-full w-fit">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Integrated Solutions</CardTitle>
                <CardDescription>Combined AI and security resources</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                    <span>Securing AI Pipelines in Healthcare</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                    <span>AI-Powered Threat Detection Models</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                    <span>Adversarial Defense Strategies</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="?category=integrated">View All Integrated Resources</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Newsletter Subscription */}
      <section className="py-16 px-4 bg-gradient-to-br from-[#2A2A72] to-[#6A1B9A] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Stay Updated</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for weekly updates on the latest in AI and cybersecurity.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
            />
            <Button className="bg-white text-purple-700 hover:bg-gray-100">Subscribe</Button>
          </div>
          <p className="text-sm text-gray-300 mt-4">We respect your privacy. Unsubscribe at any time.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Need Custom Resources?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Our team can create tailored resources specific to your organization's needs.
          </p>
          <Button asChild size="lg" className="bg-purple-600 hover:bg-purple-700 group">
            <Link href="/contact">
              Request Custom Resources
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

