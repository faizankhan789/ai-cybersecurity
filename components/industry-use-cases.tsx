"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Building, ShoppingBag, Stethoscope, BadgeDollarSign } from "lucide-react"

const industries = [
  {
    id: "healthcare",
    name: "Healthcare",
    icon: <Stethoscope className="h-5 w-5" />,
    title: "AI Diagnostics + Security Compliance",
    description:
      "AI-powered diagnostic tools with HIPAA-compliant security measures to protect patient data while improving treatment outcomes.",
    benefits: ["Reduced diagnostic errors by 40%", "100% HIPAA compliance", "Secure patient data processing"],
  },
  {
    id: "finance",
    name: "Finance",
    icon: <BadgeDollarSign className="h-5 w-5" />,
    title: "AI Chatbots + Fraud Detection",
    description:
      "Intelligent customer service bots integrated with real-time fraud detection systems for secure banking operations.",
    benefits: ["24/7 customer support", "93% fraud detection rate", "Reduced operational costs by 35%"],
  },
  {
    id: "retail",
    name: "Retail",
    icon: <ShoppingBag className="h-5 w-5" />,
    title: "Computer Vision + Payment Security",
    description:
      "Visual product recognition systems with secure payment processing to enhance shopping experiences while protecting transactions.",
    benefits: [
      "Seamless checkout experience",
      "End-to-end encrypted transactions",
      "Inventory accuracy improved by 65%",
    ],
  },
  {
    id: "manufacturing",
    name: "Manufacturing",
    icon: <Building2 className="h-5 w-5" />,
    title: "Predictive Maintenance + OT Security",
    description:
      "AI-driven equipment monitoring with specialized operational technology security to prevent downtime and cyber attacks.",
    benefits: ["Maintenance costs reduced by 30%", "Protected industrial control systems", "99.8% operational uptime"],
  },
  {
    id: "government",
    name: "Government",
    icon: <Building className="h-5 w-5" />,
    title: "NLP Analysis + Critical Infrastructure Protection",
    description:
      "Natural language processing for public service optimization with advanced security for critical government infrastructure.",
    benefits: ["Streamlined citizen services", "Hardened security posture", "Regulatory compliance assured"],
  },
]

export default function IndustryUseCases() {
  const [activeTab, setActiveTab] = useState("healthcare")

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Industry Use Cases</h2>

        <Tabs defaultValue="healthcare" value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-5 mb-8">
            {industries.map((industry) => (
              <TabsTrigger key={industry.id} value={industry.id} className="flex items-center gap-2">
                {industry.icon}
                <span className="hidden md:inline">{industry.name}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {industries.map((industry) => (
            <TabsContent key={industry.id} value={industry.id}>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">{industry.title}</CardTitle>
                  <CardDescription>{industry.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <h4 className="font-semibold mb-2">Key Benefits:</h4>
                  <ul className="space-y-2">
                    {industry.benefits.map((benefit, index) => (
                      <li key={index} className="flex items-start">
                        <div className="mr-2 mt-1 h-1.5 w-1.5 rounded-full bg-purple-600"></div>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}

