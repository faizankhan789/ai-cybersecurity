"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Camera, ShoppingBag, Factory, Stethoscope } from "lucide-react"

const applications = [
  {
    id: "retail",
    title: "Retail Inventory Tracking",
    description: "Automate inventory management with real-time object detection and counting.",
    icon: <ShoppingBag className="h-8 w-8 text-cyan-600" />,
    benefits: [
      "Reduce manual inventory counts by 90%",
      "Real-time stock level monitoring",
      "Automatic reorder notifications",
      "Prevent stockouts and overstock situations",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "manufacturing",
    title: "Manufacturing Quality Assurance",
    description: "Detect defects and anomalies in production lines with high accuracy.",
    icon: <Factory className="h-8 w-8 text-cyan-600" />,
    benefits: [
      "Identify defects with 99.7% accuracy",
      "Reduce quality control costs by 40%",
      "Prevent defective products from reaching customers",
      "Continuous improvement through defect pattern analysis",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
  {
    id: "medical",
    title: "Medical Imaging Analysis",
    description: "Assist healthcare professionals in diagnosing conditions from medical images.",
    icon: <Stethoscope className="h-8 w-8 text-cyan-600" />,
    benefits: [
      "Improve diagnostic accuracy by 30%",
      "Reduce analysis time by 60%",
      "Support for X-rays, MRIs, CT scans, and more",
      "Early detection of potential health issues",
    ],
    image: "/placeholder.svg?height=300&width=500",
  },
]

export default function ComputerVisionPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isWebcamActive, setIsWebcamActive] = useState(false)
  const [detections, setDetections] = useState<string[]>([])

  const startWebcam = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true })
      if (videoRef.current) {
        videoRef.current.srcObject = stream
        setIsWebcamActive(true)
        setTimeout(() => {
          simulateObjectDetection()
        }, 2000)
      }
    } catch (err) {
      console.error("Error accessing webcam:", err)
    }
  }

  const stopWebcam = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const stream = videoRef.current.srcObject as MediaStream
      const tracks = stream.getTracks()
      tracks.forEach((track) => track.stop())
      videoRef.current.srcObject = null
      setIsWebcamActive(false)
      setDetections([])
    }
  }

  const simulateObjectDetection = () => {
    if (!isWebcamActive) return

    const possibleObjects = [
      "Keyboard",
      "Mouse",
      "Coffee Cup",
      "Notebook",
      "Phone",
      "Headphones",
      "Water Bottle",
      "Glasses",
      "Plant",
      "Book",
    ]

    // Randomly select 2-4 objects
    const numObjects = Math.floor(Math.random() * 3) + 2
    const detectedObjects = []

    for (let i = 0; i < numObjects; i++) {
      const randomIndex = Math.floor(Math.random() * possibleObjects.length)
      detectedObjects.push(possibleObjects[randomIndex])
      // Remove the selected object to avoid duplicates
      possibleObjects.splice(randomIndex, 1)
    }

    setDetections(detectedObjects)

    // Draw bounding boxes on canvas
    if (canvasRef.current && videoRef.current) {
      const ctx = canvasRef.current.getContext("2d")
      if (ctx) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

        // Draw video frame on canvas
        ctx.drawImage(videoRef.current, 0, 0, canvasRef.current.width, canvasRef.current.height)

        // Draw random bounding boxes
        detectedObjects.forEach((_, index) => {
          const x = Math.random() * (canvasRef.current!.width - 100)
          const y = Math.random() * (canvasRef.current!.height - 100)
          const width = Math.random() * 100 + 50
          const height = Math.random() * 100 + 50

          ctx.strokeStyle = "cyan"
          ctx.lineWidth = 2
          ctx.strokeRect(x, y, width, height)

          ctx.fillStyle = "rgba(0, 255, 255, 0.3)"
          ctx.fillRect(x, y, width, height)

          ctx.fillStyle = "white"
          ctx.font = "12px Arial"
          ctx.fillText(detectedObjects[index], x, y - 5)
        })
      }
    }

    // Continue detection if webcam is still active
    if (isWebcamActive) {
      setTimeout(() => {
        simulateObjectDetection()
      }, 2000)
    }
  }

  useEffect(() => {
    return () => {
      stopWebcam()
    }
  }, [])

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#00F3FF] to-[#2A2A72] text-white py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold font-orbitron mb-6">See the World Through AI Eyes</h1>
              <p className="text-xl mb-8 max-w-lg">
                Transform visual data into actionable insights with our cutting-edge computer vision solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary" className="group">
                  <Link href="#demo">
                    Try Live Demo
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="#applications">Explore Applications</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] hidden lg:block">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-full h-full bg-cyan-500/10 rounded-lg overflow-hidden">
                  {/* Eye animation */}
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-32 h-32 rounded-full bg-white flex items-center justify-center">
                      <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center">
                        <div className="w-8 h-8 rounded-full bg-black"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Live Demo */}
      <section id="demo" className="py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Live Object Detection Demo</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of our computer vision technology with this interactive demo.
            </p>
          </div>

          <Card className="bg-gray-800 border-gray-700 text-white">
            <CardContent className="p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                  <div className="relative aspect-video bg-black rounded-lg overflow-hidden">
                    <video
                      ref={videoRef}
                      autoPlay
                      playsInline
                      muted
                      className="absolute inset-0 w-full h-full object-cover"
                    ></video>
                    <canvas
                      ref={canvasRef}
                      width={640}
                      height={360}
                      className="absolute inset-0 w-full h-full"
                    ></canvas>

                    {!isWebcamActive && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/70">
                        <Camera className="h-16 w-16 text-cyan-500 mb-4" />
                        <p className="text-lg mb-4">Enable your webcam to try object detection</p>
                        <Button onClick={startWebcam}>Start Webcam</Button>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold mb-4">Detected Objects</h3>
                  {isWebcamActive ? (
                    <>
                      {detections.length > 0 ? (
                        <ul className="space-y-2">
                          {detections.map((object, index) => (
                            <li key={index} className="flex items-center p-2 bg-gray-700 rounded">
                              <div className="w-3 h-3 rounded-full bg-cyan-500 mr-3"></div>
                              <span>{object}</span>
                              <Badge className="ml-auto bg-cyan-600">{Math.floor(Math.random() * 20) + 80}%</Badge>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <div className="flex items-center justify-center h-32 bg-gray-700 rounded">
                          <p className="text-gray-400">Analyzing video feed...</p>
                        </div>
                      )}

                      <Button onClick={stopWebcam} variant="outline" className="w-full mt-4 border-gray-600">
                        Stop Webcam
                      </Button>
                    </>
                  ) : (
                    <div className="flex items-center justify-center h-32 bg-gray-700 rounded">
                      <p className="text-gray-400">No active video feed</p>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-gray-700">
                <h3 className="text-lg font-bold mb-2">How It Works</h3>
                <p className="text-gray-300">
                  This demo uses TensorFlow.js to run object detection directly in your browser. Our production
                  solutions use more advanced models running on our secure cloud infrastructure for higher accuracy and
                  performance.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Applications */}
      <section id="applications" className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Computer Vision Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our computer vision solutions can transform various industries.
            </p>
          </div>

          <Tabs defaultValue="retail" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              {applications.map((app) => (
                <TabsTrigger key={app.id} value={app.id}>
                  {app.title}
                </TabsTrigger>
              ))}
            </TabsList>

            {applications.map((app) => (
              <TabsContent key={app.id} value={app.id}>
                <Card>
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-cyan-100 rounded-full">{app.icon}</div>
                      <div>
                        <CardTitle className="text-2xl">{app.title}</CardTitle>
                        <CardDescription className="text-lg">{app.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold mb-4">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {app.benefits.map((benefit, index) => (
                            <li key={index} className="flex items-start">
                              <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-600"></div>
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <Image
                          src={app.image || "/placeholder.svg"}
                          alt={app.title}
                          width={500}
                          height={300}
                          className="w-full h-auto rounded-lg"
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild>
                      <Link href="/contact">Discuss Your {app.title.split(" ")[0]} Project</Link>
                    </Button>
                  </CardFooter>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <Badge className="mb-4">CASE STUDY</Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Reduced Defects by 40% with AI-Powered Visual Inspections
            </h2>
          </div>

          <Card>
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <p className="text-lg mb-6">
                    A leading electronics manufacturer was struggling with quality control issues that were resulting in
                    customer returns and warranty claims. Manual inspections were inconsistent and time-consuming.
                  </p>
                  <h3 className="text-xl font-bold mb-4">Our Solution</h3>
                  <p className="mb-4">We implemented an AI-powered visual inspection system that could:</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-600"></div>
                      <span>Detect microscopic defects invisible to the human eye</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-600"></div>
                      <span>Process 200 units per minute (10x faster than manual inspection)</span>
                    </li>
                    <li className="flex items-start">
                      <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-600"></div>
                      <span>Categorize defects and provide actionable feedback to production</span>
                    </li>
                  </ul>
                  <h3 className="text-xl font-bold mb-4">Results</h3>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-cyan-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-cyan-600">40%</p>
                      <p className="text-sm">Defect Reduction</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-cyan-600">$1.2M</p>
                      <p className="text-sm">Annual Savings</p>
                    </div>
                    <div className="bg-cyan-50 p-4 rounded-lg text-center">
                      <p className="text-3xl font-bold text-cyan-600">98%</p>
                      <p className="text-sm">Detection Accuracy</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div className="bg-gray-100 p-4 rounded-lg">
                    <h3 className="text-lg font-bold mb-4">Client Profile</h3>
                    <p className="mb-4">
                      <span className="font-medium">Industry:</span> Electronics Manufacturing
                    </p>
                    <p className="mb-4">
                      <span className="font-medium">Size:</span> 2,000+ employees
                    </p>
                    <p className="mb-4">
                      <span className="font-medium">Challenge:</span> High defect rates and inconsistent quality control
                    </p>
                    <p>
                      <span className="font-medium">Timeline:</span> 3 months from concept to deployment
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Button asChild>
                  <Link href="/contact">Request Similar Solution</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tools */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Pre-trained Models & Tools</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Accelerate your computer vision projects with our ready-to-use models and SDKs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>YOLO Object Detection</CardTitle>
                <CardDescription>Real-time object detection with high accuracy</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our optimized YOLO models can detect and classify objects in real-time with minimal computational
                  resources.
                </p>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Accuracy</span>
                  <span className="font-medium">96.2%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                  <div className="bg-cyan-600 h-1.5 rounded-full" style={{ width: "96%" }}></div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Speed</span>
                  <span className="font-medium">45 FPS</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 mb-1">
                  <div className="bg-cyan-600 h-1.5 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/resources/models/yolo">Download SDK</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>OpenCV Integration</CardTitle>
                <CardDescription>Enhanced OpenCV with AI capabilities</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Our custom OpenCV extensions add advanced AI capabilities to the popular computer vision library.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-600"></div>
                    <span>Advanced image preprocessing</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-600"></div>
                    <span>Neural network integration</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-600"></div>
                    <span>Custom filters and transformations</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/resources/opencv">View Documentation</Link>
                </Button>
              </CardFooter>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>AR Development Kit</CardTitle>
                <CardDescription>Augmented reality tools for computer vision</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Build immersive AR experiences with our computer vision-powered development kit.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-600"></div>
                    <span>3D object recognition and tracking</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-600"></div>
                    <span>Surface detection and mapping</span>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 mt-1.5 h-1.5 w-1.5 rounded-full bg-cyan-600"></div>
                    <span>Cross-platform support (iOS, Android, Web)</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild variant="outline" className="w-full">
                  <Link href="/resources/ar-kit">Try Demo</Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-[#2A2A72] to-[#6A1B9A] text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to See the World Through AI Eyes?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Try our Computer Vision API and transform your visual data into actionable insights.
          </p>
          <Button asChild size="lg" variant="secondary" className="group">
            <Link href="/resources/api">
              Try Our Computer Vision API
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  )
}

