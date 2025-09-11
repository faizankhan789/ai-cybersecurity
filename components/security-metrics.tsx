"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Clock, Lock, AlertTriangle } from "lucide-react"

const metrics = [
  {
    title: "Threats Blocked",
    value: "1.2M+",
    period: "monthly",
    icon: <Shield className="h-10 w-10 text-red-600" />,
    increment: 127,
  },
  {
    title: "Response Time",
    value: "<15",
    period: "minutes",
    icon: <Clock className="h-10 w-10 text-orange-600" />,
    increment: 0,
  },
  {
    title: "Protected Endpoints",
    value: "50K+",
    period: "devices",
    icon: <Lock className="h-10 w-10 text-yellow-600" />,
    increment: 42,
  },
  {
    title: "Vulnerabilities Patched",
    value: "8.5K",
    period: "monthly",
    icon: <AlertTriangle className="h-10 w-10 text-green-600" />,
    increment: 85,
  },
]

export default function SecurityMetrics() {
  const [isVisible, setIsVisible] = useState(false)
  const [counters, setCounters] = useState<number[]>(metrics.map(() => 0))

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (isVisible) {
      const interval = setInterval(() => {
        setCounters((prev) =>
          prev.map((count, i) => {
            const target = Number.parseInt(metrics[i].value.replace(/[^0-9.]/g, "")) || 0
            if (count < target) {
              return Math.min(count + (metrics[i].increment || 1), target)
            }
            return count
          }),
        )
      }, 30)

      return () => clearInterval(interval)
    }
  }, [isVisible])

  return (
    <section className="py-16 px-4 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="h-full bg-gray-900 text-white border-gray-800 hover:border-red-900 transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="mb-4">{metric.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{metric.title}</h3>
                  <div className="flex items-baseline mt-auto">
                    <span className="text-3xl font-bold text-red-500">
                      {metric.title === "Response Time"
                        ? "<15"
                        : metric.value.includes("K")
                          ? `${counters[index]}K+`
                          : metric.value.includes("M")
                            ? `${counters[index]}M+`
                            : counters[index]}
                    </span>
                    <span className="ml-2 text-sm text-gray-400">{metric.period}</span>
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

