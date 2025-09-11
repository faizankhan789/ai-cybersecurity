import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const clients = [
  { name: "Microsoft", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Cisco", logo: "/placeholder.svg?height=60&width=120" },
  { name: "IBM", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Amazon", logo: "/placeholder.svg?height=60&width=120" },
  { name: "Google", logo: "/placeholder.svg?height=60&width=120" },
]

const testimonials = [
  {
    quote:
      "The integration of AI and cybersecurity solutions has transformed our approach to threat detection, reducing our response time by 60%.",
    author: "Sarah Johnson",
    position: "CTO, FinTech Solutions Inc.",
    company: "FinTech Solutions",
  },
  {
    quote:
      "Their AI-powered security platform has been instrumental in protecting our sensitive healthcare data while improving our diagnostic capabilities.",
    author: "Dr. Michael Chen",
    position: "CISO, Global Health Systems",
    company: "Global Health",
  },
]

const certifications = ["ISO 27001", "SOC 2 Type II", "GDPR Compliant", "HIPAA Compliant", "AI Ethics Certified"]

export default function TrustIndicators() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Trusted By Industry Leaders</h2>

        {/* Client Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 mb-16">
          {clients.map((client, index) => (
            <div key={index} className="grayscale hover:grayscale-0 transition-all duration-300">
              <Image
                src={client.logo || "/placeholder.svg"}
                alt={`${client.name} logo`}
                width={120}
                height={60}
                className="h-12 object-contain"
              />
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-gray-50">
              <CardContent className="p-6">
                <blockquote className="text-lg italic mb-4">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-gray-300 mr-4"></div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-600">{testimonial.position}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-6">Certifications & Compliance</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {certifications.map((cert, index) => (
              <Badge key={index} variant="outline" className="text-sm py-1 px-3">
                {cert}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

