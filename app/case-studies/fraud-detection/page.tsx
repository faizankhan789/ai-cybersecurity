import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingDown, Shield, Clock, DollarSign, Users, CheckCircle2 } from "lucide-react"
import PageTransition from "@/components/page-transition"

export default function FraudDetectionCaseStudy() {
  return (
    <PageTransition>
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <Badge className="bg-white text-blue-600 mb-4">FINANCE</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Fraud Detection System for Banking
            </h1>
            <p className="text-xl mb-4 max-w-3xl">
              How we helped a major banking institution reduce fraudulent transactions by 87% using advanced machine learning techniques.
            </p>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-gray-600 mb-6">
              A leading banking institution was facing increasing financial losses due to fraudulent transactions. Their existing rule-based system was unable to keep pace with sophisticated fraud patterns, resulting in high false positive rates and customer dissatisfaction.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <TrendingDown className="h-8 w-8 text-red-500 mb-2" />
                  <CardTitle>$2.5M</CardTitle>
                  <CardDescription>Annual losses from fraud</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-orange-500 mb-2" />
                  <CardTitle>45%</CardTitle>
                  <CardDescription>False positive rate</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-yellow-500 mb-2" />
                  <CardTitle>30%</CardTitle>
                  <CardDescription>Customer complaint increase</CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Our Solution</h2>
            <p className="text-lg text-gray-600 mb-8">
              We developed an advanced machine learning system that analyzes transaction patterns in real-time, using multiple AI models to detect fraudulent activities with high precision.
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Real-time Transaction Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Implemented a streaming ML pipeline that processes and analyzes every transaction in under 50 milliseconds, enabling instant fraud detection without impacting user experience.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Ensemble Model Architecture
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Combined multiple machine learning models including Random Forest, XGBoost, and Neural Networks to achieve superior accuracy in fraud detection across various transaction types.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Adaptive Learning System
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Deployed continuous learning capabilities that allow the system to adapt to new fraud patterns automatically, maintaining high detection rates as fraud techniques evolve.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Explainable AI Dashboard
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Created an intuitive dashboard that provides fraud analysts with clear explanations for each flagged transaction, improving investigation efficiency and decision-making.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Results Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">Results & Impact</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <Shield className="h-8 w-8 text-green-500 mb-2" />
                  <CardTitle className="text-3xl">87%</CardTitle>
                  <CardDescription>Reduction in fraudulent transactions</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Detected and prevented fraud with unprecedented accuracy
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <TrendingDown className="h-8 w-8 text-blue-500 mb-2" />
                  <CardTitle className="text-3xl">68%</CardTitle>
                  <CardDescription>Decrease in false positives</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Significantly improved customer experience
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <DollarSign className="h-8 w-8 text-purple-500 mb-2" />
                  <CardTitle className="text-3xl">$2.2M</CardTitle>
                  <CardDescription>Annual savings achieved</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Direct impact on bottom line performance
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <Clock className="h-8 w-8 text-orange-500 mb-2" />
                  <CardTitle className="text-3xl">&lt; 50ms</CardTitle>
                  <CardDescription>Average detection time</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Real-time fraud prevention without delays
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-blue-500 to-cyan-500 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Protect Your Business from Fraud?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover how our AI-powered fraud detection solutions can safeguard your organization and reduce financial losses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">Schedule a Consultation</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
                <Link href="/ai-solutions">Explore More Solutions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </PageTransition>
  )
}
