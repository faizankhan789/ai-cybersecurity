import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Activity, Eye, Clock, Users, CheckCircle2, Brain } from "lucide-react"
import PageTransition from "@/components/page-transition"

export default function MedicalImagingCaseStudy() {
  return (
    <PageTransition>
      <main className="flex flex-col min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-indigo-500 to-purple-500 text-white py-20 px-4">
          <div className="container mx-auto max-w-6xl">
            <Badge className="bg-white text-indigo-600 mb-4">HEALTHCARE</Badge>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Medical Image Analysis
            </h1>
            <p className="text-xl mb-4 max-w-3xl">
              How we improved diagnostic accuracy by 42% using advanced computer vision to assist radiologists in detecting abnormalities in medical images.
            </p>
          </div>
        </section>

        {/* Challenge Section */}
        <section className="py-20 px-4 bg-white">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-gray-600 mb-6">
              A large healthcare network was struggling with increasing patient volumes and limited radiology staff. Diagnostic errors were rising, and the time required for image analysis was creating bottlenecks in patient care delivery.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <Card>
                <CardHeader>
                  <Clock className="h-8 w-8 text-red-500 mb-2" />
                  <CardTitle>45 min</CardTitle>
                  <CardDescription>Average analysis time per scan</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Users className="h-8 w-8 text-orange-500 mb-2" />
                  <CardTitle>300+</CardTitle>
                  <CardDescription>Daily imaging cases per radiologist</CardDescription>
                </CardHeader>
              </Card>
              <Card>
                <CardHeader>
                  <Activity className="h-8 w-8 text-yellow-500 mb-2" />
                  <CardTitle>12%</CardTitle>
                  <CardDescription>Missed abnormality detection rate</CardDescription>
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
              We developed an AI-powered computer vision system that assists radiologists by automatically detecting and highlighting potential abnormalities in X-rays, CT scans, and MRI images.
            </p>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Deep Learning Image Analysis
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Trained convolutional neural networks on over 1 million labeled medical images to detect various abnormalities including tumors, fractures, and infections with high precision.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Multi-Modal Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Developed a unified system capable of analyzing multiple imaging modalities (X-ray, CT, MRI) with specialized models optimized for each type of scan.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    Attention Mapping Visualization
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Implemented visual attention maps that highlight areas of concern, allowing radiologists to quickly focus on critical regions and validate AI findings.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-500" />
                    PACS Integration
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Seamlessly integrated with existing Picture Archiving and Communication Systems (PACS) for smooth workflow integration without disrupting existing processes.
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
                  <Eye className="h-8 w-8 text-green-500 mb-2" />
                  <CardTitle className="text-3xl">42%</CardTitle>
                  <CardDescription>Improvement in diagnostic accuracy</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Significantly reduced missed abnormalities
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <Clock className="h-8 w-8 text-blue-500 mb-2" />
                  <CardTitle className="text-3xl">60%</CardTitle>
                  <CardDescription>Reduction in analysis time</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Faster patient diagnosis and treatment
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <Brain className="h-8 w-8 text-purple-500 mb-2" />
                  <CardTitle className="text-3xl">95.8%</CardTitle>
                  <CardDescription>AI detection accuracy rate</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Consistently high performance across all modalities
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-orange-500">
                <CardHeader>
                  <Users className="h-8 w-8 text-orange-500 mb-2" />
                  <CardTitle className="text-3xl">500+</CardTitle>
                  <CardDescription>Additional cases handled daily</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    Increased radiologist productivity
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Testimonial Section */}
        <section className="py-20 px-4 bg-gray-50">
          <div className="container mx-auto max-w-4xl">
            <Card className="border-t-4 border-t-indigo-500">
              <CardHeader>
                <CardTitle className="text-2xl">What the Client Says</CardTitle>
              </CardHeader>
              <CardContent>
                <blockquote className="text-lg text-gray-600 italic mb-4">
                  "This AI system has transformed our radiology department. It acts as a safety net, catching abnormalities that might have been missed during busy shifts. Our radiologists now have more confidence in their diagnoses, and patient outcomes have improved significantly."
                </blockquote>
                <p className="font-semibold text-gray-800">Dr. Sarah Johnson</p>
                <p className="text-gray-600">Chief of Radiology, Metropolitan Health Network</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 bg-gradient-to-br from-indigo-500 to-purple-500 text-white">
          <div className="container mx-auto max-w-4xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Transform Your Healthcare Services with AI
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Discover how our computer vision solutions can improve diagnostic accuracy and patient care in your healthcare facility.
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
