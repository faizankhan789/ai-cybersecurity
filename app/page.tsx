import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Brain } from "lucide-react"
import ValueProposition from "@/components/value-proposition"
import IndustryUseCases from "@/components/industry-use-cases"
import TrustIndicators from "@/components/trust-indicators"

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section with Split Layout */}
      <section className="grid grid-cols-1 md:grid-cols-2 min-h-[80vh]">
        {/* AI Solutions Side */}
        <div className="bg-gradient-to-br from-[#00F3FF] to-[#2A2A72] text-white p-8 md:p-12 flex flex-col justify-center items-start animate-slideInLeft">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-orbitron opacity-0 animate-fadeInUp">AI-Driven Solutions</h2>
          <p className="text-lg md:text-xl mb-6 max-w-md opacity-0 animate-fadeInUp animation-delay-150">
            Harness the power of artificial intelligence to transform your business with cutting-edge machine learning,
            computer vision, and NLP solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeInUp animation-delay-300">
            <Button asChild variant="secondary" className="group hover-scale">
              <Link href="/ai-solutions">
                Explore AI Solutions
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 relative">
            <div className="absolute -top-16 -left-8 w-32 h-32 bg-blue-500/20 rounded-full blur-xl"></div>
            <div className="absolute top-8 -right-8 w-24 h-24 bg-teal-500/20 rounded-full blur-xl"></div>
            <Brain className="h-24 w-24 text-white/80" />
          </div>
        </div>

        {/* Cybersecurity Side */}
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#3A0000] text-white p-8 md:p-12 flex flex-col justify-center items-start animate-slideInRight">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 font-mono opacity-0 animate-fadeInUp animation-delay-150">Cybersecurity Services</h2>
          <p className="text-lg md:text-xl mb-6 max-w-md opacity-0 animate-fadeInUp animation-delay-300">
            Protect your digital assets with comprehensive security solutions including threat detection, network
            security, and incident response.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fadeInUp animation-delay-450">
            <Button asChild variant="destructive" className="group hover-scale">
              <Link href="/cybersecurity-services">
                Explore Security Services
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
          <div className="mt-12 relative">
            <div className="absolute -top-16 -left-8 w-32 h-32 bg-red-500/20 rounded-full blur-xl"></div>
            <div className="absolute top-8 -right-8 w-24 h-24 bg-orange-500/20 rounded-full blur-xl"></div>
            <Shield className="h-24 w-24 text-white/80" />
          </div>
        </div>
      </section>

      {/* Unified CTA */}
      <section className="bg-[#6A1B9A] text-white py-12 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Integrate AI & Security for Future-Ready Systems</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Discover how our integrated approach combines AI innovation with robust security measures to create
            resilient, intelligent systems.
          </p>
          <Button asChild size="lg" variant="secondary" className="group">
            <Link href="/integrated-solutions">
              Learn About Integrated Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Value Proposition Ribbon */}
      <ValueProposition />

      {/* Industry Use Cases */}
      <IndustryUseCases />

      {/* Trust Indicators */}
      <TrustIndicators />
    </main>
  )
}

