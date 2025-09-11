import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Lightbulb, Search, Code, Database, Server } from "lucide-react"

export default function AIConsultingPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#6A1B9A] to-[#2A2A72] text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">From Idea to Implementation</h1>
              <p className="text-xl mb-8 max-w-lg">
                Our AI consulting services guide you through every step of your AI journey, from strategy development to
                deployment and beyond.
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
                <div className="w-full h-full relative">
                  {/* Roadmap animation */}
                  <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
                    <div className="flex items-center">
                      <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                        <Database className="h-6 w-6 text-purple-600" />
                      </div>
                      <div className="h-1 flex-grow bg-white"></div>
                      <div className="w-12 h-12 rounded-full bg-white/70 flex items-center justify-center">
                        <Code className="h-6 w-6 text-purple-600/70" />
                      </div>
                      <div className="h-1 flex-grow bg-white/70"></div>
                      <div className="w-12 h-12 rounded-full bg-white/50 flex items-center justify-center">
                        <Server className="h-6 w-6 text-purple-600/50" />
                      </div>
                    </div>
                    <div className="flex justify-between text-sm">
                      <div className="text-center">
                        <span className="font-bold">Data</span>
                      </div>
                      <div className="text-center">
                        <span className="font-bold">Model</span>
                      </div>
                      <div className="text-center">
                        <span className="font-bold">Deployment</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Consulting Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI consulting services to help you navigate the complex world of artificial intelligence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4 p-3 bg-purple-100 rounded-full w-fit">
                  <Search className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>AI Readiness Assessment</CardTitle>
                <CardDescription>Evaluate your organization's readiness for AI adoption</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                    <span>Data infrastructure evaluation</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                    <span>Technical capability assessment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                    <span>Opportunity identification</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                    <span>ROI potential analysis</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Request Assessment</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4 p-3 bg-purple-100 rounded-full w-fit">
                  <Lightbulb className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>AI Strategy Development</CardTitle>
                <CardDescription>Create a comprehensive AI roadmap for your organization</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                    <span>Business goals alignment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                    <span>Use case prioritization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                    <span>Technology stack selection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                    <span>Implementation timeline planning</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Develop Strategy</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4 p-3 bg-purple-100 rounded-full w-fit">
                  <Code className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>MLOps Implementation</CardTitle>
                <CardDescription>Build robust ML pipelines for continuous delivery</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                    <span>CI/CD pipeline setup</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                    <span>Model versioning and tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                    <span>Automated testing frameworks</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                    <span>Monitoring and alerting systems</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Implement MLOps</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card className="hover:shadow-lg transition-all duration-300">
              <CardHeader>
                <div className="mb-4 p-3 bg-purple-100 rounded-full w-fit">
                  <Server className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Team Training & Development</CardTitle>
                <CardDescription>Upskill your team with AI expertise</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                    <span>Customized training programs</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                    <span>Hands-on workshops</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                    <span>Knowledge transfer sessions</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                    <span>Ongoing mentorship</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/contact">Train Your Team</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our 4-Step Process</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology to guide your AI journey from concept to reality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                1
              </div>
              <CardHeader>
                <CardTitle>Discover</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We assess your current capabilities, identify opportunities, and define clear objectives for your AI
                  initiatives.
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-purple-600"></div>
                    <span>Stakeholder interviews</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-purple-600"></div>
                    <span>Data inventory</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-purple-600"></div>
                    <span>Opportunity mapping</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                2
              </div>
              <CardHeader>
                <CardTitle>Design</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We create a comprehensive strategy and roadmap tailored to your specific business needs and goals.
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-purple-600"></div>
                    <span>Solution architecture</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-purple-600"></div>
                    <span>Technology selection</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-purple-600"></div>
                    <span>Implementation planning</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                3
              </div>
              <CardHeader>
                <CardTitle>Develop</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We build, test, and refine your AI solutions using agile methodologies and best practices.
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-purple-600"></div>
                    <span>Prototype development</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-purple-600"></div>
                    <span>Iterative testing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-purple-600"></div>
                    <span>Performance optimization</span>
                  </li>
                </ul>
              </CardContent>
            </Card>

            <Card className="relative">
              <div className="absolute -top-4 -left-4 w-8 h-8 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">
                4
              </div>
              <CardHeader>
                <CardTitle>Deploy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  We implement your AI solutions in production, ensuring smooth integration and ongoing support.
                </p>
                <ul className="space-y-1 text-sm">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-purple-600"></div>
                    <span>Production deployment</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-purple-600"></div>
                    <span>Monitoring setup</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1 w-1 rounded-full bg-purple-600"></div>
                    <span>Knowledge transfer</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Client Success */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">Real results from our AI consulting engagements.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="overflow-hidden">
              <div className="h-32 bg-gradient-to-r from-purple-500 to-blue-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Badge className="bg-white text-purple-600">LOGISTICS</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>200% Efficiency Gain</CardTitle>
                <CardDescription>Global Logistics Provider</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Implemented an AI-driven route optimization system that doubled delivery efficiency and reduced fuel
                  costs by 30%.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">ROI Timeline</span>
                  <span className="font-medium">6 months</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-32 bg-gradient-to-r from-blue-500 to-cyan-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Badge className="bg-white text-blue-600">FINANCE</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>$4.5M Cost Reduction</CardTitle>
                <CardDescription>Investment Banking Firm</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Developed an AI-powered risk assessment system that improved accuracy by 40% and reduced operational
                  costs.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">ROI Timeline</span>
                  <span className="font-medium">12 months</span>
                </div>
              </CardContent>
            </Card>

            <Card className="overflow-hidden">
              <div className="h-32 bg-gradient-to-r from-cyan-500 to-teal-500 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Badge className="bg-white text-cyan-600">HEALTHCARE</Badge>
                </div>
              </div>
              <CardHeader>
                <CardTitle>35% Diagnostic Improvement</CardTitle>
                <CardDescription>Regional Hospital Network</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Implemented an AI diagnostic assistant that improved early detection rates and reduced misdiagnoses.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">ROI Timeline</span>
                  <span className="font-medium">9 months</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#6A1B9A] to-[#2A2A72] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your AI Journey?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Download our AI Strategy Playbook to learn how to build a successful AI roadmap for your organization.
          </p>
          <Button asChild size="lg" variant="secondary" className="group">
            <Link href="/resources/ai-strategy-playbook">
              Download Our AI Strategy Playbook
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

