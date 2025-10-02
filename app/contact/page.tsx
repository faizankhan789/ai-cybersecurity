"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Star,
  Shield,
  Brain,
  Eye,
  Database,
  Zap,
  Users,
  Building,
  MessageSquare
} from "lucide-react"

const services = [
  { id: "machine-learning", name: "Machine Learning & AI", icon: <Brain className="h-4 w-4" /> },
  { id: "computer-vision", name: "Computer Vision", icon: <Eye className="h-4 w-4" /> },
  { id: "nlp-chatbots", name: "NLP & Chatbots", icon: <MessageSquare className="h-4 w-4" /> },
  { id: "generative-ai", name: "Generative AI", icon: <Zap className="h-4 w-4" /> },
  { id: "rag-systems", name: "RAG Systems", icon: <Database className="h-4 w-4" /> },
  { id: "cybersecurity", name: "Cybersecurity Services", icon: <Shield className="h-4 w-4" /> },
  { id: "penetration-testing", name: "Penetration Testing", icon: <Shield className="h-4 w-4" /> },
  { id: "threat-intelligence", name: "Threat Intelligence", icon: <Shield className="h-4 w-4" /> },
  { id: "compliance", name: "Compliance & Audit", icon: <Shield className="h-4 w-4" /> },
  { id: "integrated-solutions", name: "Integrated Solutions", icon: <Building className="h-4 w-4" /> }
]

const companyTypes = [
  "Startup (1-50 employees)",
  "SME (51-500 employees)", 
  "Enterprise (500+ employees)",
  "Government/Public Sector",
  "Non-profit Organization",
  "Educational Institution",
  "Healthcare Organization",
  "Financial Services",
  "Other"
]

const budgetRanges = [
  "< $10,000",
  "$10,000 - $50,000",
  "$50,000 - $100,000", 
  "$100,000 - $500,000",
  "$500,000+",
  "To be discussed"
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    companyType: "",
    jobTitle: "",
    services: [] as string[],
    budget: "",
    timeline: "",
    projectDescription: "",
    hasDataSecurity: false,
    hasComplianceRequirements: false,
    newsletter: false
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }))
  }

  const handleServiceToggle = (serviceId: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(serviceId)
        ? prev.services.filter(s => s !== serviceId)
        : [...prev.services, serviceId]
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <main className="flex flex-col min-h-screen">
        <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-blue-50 px-4">
          <Card className="max-w-2xl w-full text-center">
            <CardContent className="p-12">
              <div className="mb-6">
                <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-4" />
                <h1 className="text-3xl font-bold text-green-800 mb-2">Thank You!</h1>
                <p className="text-lg text-green-700">Your message has been sent successfully.</p>
              </div>
              <div className="space-y-4 text-gray-700">
                <p>We've received your inquiry and will get back to you within 24 hours.</p>
                <p>Our experts are excited to discuss how we can help transform your business with AI and cybersecurity solutions.</p>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild>
                  <Link href="/">Return to Home</Link>
                </Button>
                <Button asChild variant="outline">
                  <Link href="/resources">Explore Resources</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </main>
    )
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] text-white py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <Badge className="bg-white/20 text-white border-white/30 mb-4">
            Get In Touch
          </Badge>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron mb-6">
            Let's Build the Future Together
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business with AI and cybersecurity? Our experts are here to discuss your unique challenges and create tailored solutions.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                  <Mail className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Email Us</h3>
                <p className="text-gray-600 mb-2">Get in touch via email</p>
                <p className="font-medium text-blue-600">hello@aicybersecurity.com</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-4">
                  <Phone className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Call Us</h3>
                <p className="text-gray-600 mb-2">Speak with our experts</p>
                <p className="font-medium text-green-600">+1 (555) 123-4567</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="p-3 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Business Hours</h3>
                <p className="text-gray-600 mb-2">Monday - Friday</p>
                <p className="font-medium text-purple-600">9:00 AM - 6:00 PM EST</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Your Project</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Tell us about your needs and we'll create a custom solution that drives real results for your business.
            </p>
          </div>

          <Card className="shadow-xl">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Personal Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    Contact Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">First Name *</label>
                      <Input
                        type="text"
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange("firstName", e.target.value)}
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Last Name *</label>
                      <Input
                        type="text"
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange("lastName", e.target.value)}
                        placeholder="Enter your last name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email Address *</label>
                      <Input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@company.com"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone Number</label>
                      <Input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange("phone", e.target.value)}
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                {/* Company Information */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                    <Building className="h-5 w-5 text-blue-600" />
                    Company Information
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Name *</label>
                      <Input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => handleInputChange("company", e.target.value)}
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Job Title</label>
                      <Input
                        type="text"
                        value={formData.jobTitle}
                        onChange={(e) => handleInputChange("jobTitle", e.target.value)}
                        placeholder="Your role/position"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Company Type</label>
                      <Select onValueChange={(value) => handleInputChange("companyType", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select company type" />
                        </SelectTrigger>
                        <SelectContent>
                          {companyTypes.map((type) => (
                            <SelectItem key={type} value={type}>{type}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Budget Range</label>
                      <Select onValueChange={(value) => handleInputChange("budget", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          {budgetRanges.map((range) => (
                            <SelectItem key={range} value={range}>{range}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Services of Interest */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Services of Interest</h3>
                  <p className="text-gray-600 mb-4">Select all services you're interested in:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {services.map((service) => (
                      <div key={service.id} className="flex items-center space-x-3">
                        <Checkbox
                          id={service.id}
                          checked={formData.services.includes(service.id)}
                          onCheckedChange={() => handleServiceToggle(service.id)}
                        />
                        <label 
                          htmlFor={service.id} 
                          className="flex items-center gap-2 text-sm font-medium cursor-pointer"
                        >
                          {service.icon}
                          {service.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Project Details */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Project Details</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Timeline</label>
                      <Select onValueChange={(value) => handleInputChange("timeline", value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need this completed?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP</SelectItem>
                          <SelectItem value="1-month">Within 1 month</SelectItem>
                          <SelectItem value="3-months">Within 3 months</SelectItem>
                          <SelectItem value="6-months">Within 6 months</SelectItem>
                          <SelectItem value="flexible">Flexible timeline</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Project Description *</label>
                      <Textarea
                        required
                        rows={6}
                        value={formData.projectDescription}
                        onChange={(e) => handleInputChange("projectDescription", e.target.value)}
                        placeholder="Please describe your project, challenges you're facing, and what you hope to achieve..."
                        className="resize-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Additional Requirements */}
                <div>
                  <h3 className="text-xl font-semibold mb-4">Additional Requirements</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="data-security"
                        checked={formData.hasDataSecurity}
                        onCheckedChange={(checked) => handleInputChange("hasDataSecurity", checked as boolean)}
                      />
                      <label htmlFor="data-security" className="text-sm font-medium cursor-pointer">
                        This project involves sensitive data or security requirements
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="compliance"
                        checked={formData.hasComplianceRequirements}
                        onCheckedChange={(checked) => handleInputChange("hasComplianceRequirements", checked as boolean)}
                      />
                      <label htmlFor="compliance" className="text-sm font-medium cursor-pointer">
                        We have specific compliance requirements (GDPR, HIPAA, SOX, etc.)
                      </label>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletter}
                        onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                      />
                      <label htmlFor="newsletter" className="text-sm font-medium cursor-pointer">
                        Send me updates about AI and cybersecurity trends
                      </label>
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <div className="pt-6 border-t">
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full md:w-auto px-8"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </Button>
                  <p className="text-sm text-gray-500 mt-3">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our expertise.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="p-3 bg-blue-100 rounded-full w-fit mx-auto mb-4">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">98% Success Rate</h3>
                <p className="text-gray-600 text-sm">Proven track record of successful project delivery</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="p-3 bg-green-100 rounded-full w-fit mx-auto mb-4">
                  <Users className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">500+ Clients</h3>
                <p className="text-gray-600 text-sm">Trusted by companies worldwide</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="p-3 bg-purple-100 rounded-full w-fit mx-auto mb-4">
                  <Shield className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">Enterprise Security</h3>
                <p className="text-gray-600 text-sm">Bank-level security and compliance</p>
              </CardContent>
            </Card>
            
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="p-3 bg-orange-100 rounded-full w-fit mx-auto mb-4">
                  <Clock className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                <p className="text-gray-600 text-sm">Round-the-clock expert assistance</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}