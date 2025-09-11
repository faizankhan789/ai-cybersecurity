"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, Brain, Clock } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const valueProps = [
  {
    title: "AI-Powered Threat Detection",
    description: "Reduces response time by 50% with real-time monitoring and automated incident analysis.",
    icon: <Clock className="h-10 w-10 text-purple-600" />,
    stat: "50%",
    statLabel: "Faster Response",
  },
  {
    title: "Secure AI Development",
    description: "Implement AI solutions with built-in security measures to protect sensitive data and models.",
    icon: <Brain className="h-10 w-10 text-blue-600" />,
    stat: "99.9%",
    statLabel: "Data Protection",
  },
  {
    title: "Integrated Defense Systems",
    description: "Combine AI analytics with security protocols for adaptive protection against evolving threats.",
    icon: <Shield className="h-10 w-10 text-red-600" />,
    stat: "85%",
    statLabel: "Threat Reduction",
  },
]

export default function ValueProposition() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">How AI & Cybersecurity Enhance Each Other</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{prop.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{prop.title}</h3>
                  <p className="text-gray-600 mb-4">{prop.description}</p>
                  <div className="flex items-center mt-auto">
                    <span className="text-3xl font-bold text-purple-700">{prop.stat}</span>
                    <span className="ml-2 text-sm text-gray-500">{prop.statLabel}</span>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

