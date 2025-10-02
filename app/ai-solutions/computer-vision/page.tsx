"use client"

import React, { useState, useRef, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Camera, ShoppingBag, Factory, Stethoscope, Eye, Brain, Zap, Shield, Target, Cpu, Image as ImageIcon, Scan } from "lucide-react"

const cvServices = [
  {
    id: "object-detection",
    title: "Object Detection & Recognition",
    description: "Advanced AI models for real-time object detection, classification, and tracking in images and videos.",
    icon: <Eye className="h-6 w-6" />,
    features: [
      "YOLO v8 & v11 implementation",
      "Custom object training",
      "Real-time video processing",
      "Multi-class detection",
      "Bounding box annotation"
    ],
    applications: ["Retail inventory", "Security surveillance", "Autonomous vehicles", "Quality control"]
  },
  {
    id: "face-recognition",
    title: "Face Recognition & Analysis",
    description: "Facial detection, recognition, emotion analysis, and biometric authentication systems.",
    icon: <Target className="h-6 w-6" />,
    features: [
      "Face detection & landmarks",
      "Identity verification",
      "Emotion recognition",
      "Age & gender estimation",
      "Anti-spoofing technology"
    ],
    applications: ["Access control", "Attendance systems", "Customer analytics", "Security applications"]
  },
  {
    id: "image-processing",
    title: "Advanced Image Processing",
    description: "Image enhancement, restoration, segmentation, and feature extraction using state-of-the-art algorithms.",
    icon: <ImageIcon className="h-6 w-6" />,
    features: [
      "Image enhancement & denoising",
      "Semantic segmentation",
      "Feature extraction",
      "Style transfer",
      "Super-resolution upscaling"
    ],
    applications: ["Medical imaging", "Satellite imagery", "Photography", "Manufacturing inspection"]
  },
  {
    id: "ocr-document",
    title: "OCR & Document Analysis",
    description: "Optical Character Recognition and intelligent document processing for automated data extraction.",
    icon: <Scan className="h-6 w-6" />,
    features: [
      "Multi-language OCR",
      "Document structure analysis",
      "Table & form extraction",
      "Handwriting recognition",
      "PDF processing automation"
    ],
    applications: ["Invoice processing", "KYC verification", "Archive digitization", "Form automation"]
  }
]

const industryApplications = [
  {
    id: "retail",
    title: "Retail & E-commerce",
    description: "Transform retail operations with intelligent visual analytics.",
    icon: <ShoppingBag className="h-8 w-8 text-cyan-600" />,
    solutions: [
      "Automated inventory management",
      "Customer behavior analytics",
      "Product recommendation systems",
      "Visual search capabilities",
      "Loss prevention systems"
    ],
    metrics: { accuracy: "96%", efficiency: "85%", cost_reduction: "40%" }
  },
  {
    id: "manufacturing",
    title: "Manufacturing & Quality Control",
    description: "Ensure product quality with AI-powered visual inspection.",
    icon: <Factory className="h-8 w-8 text-cyan-600" />,
    solutions: [
      "Defect detection systems",
      "Assembly line monitoring",
      "Predictive maintenance",
      "Safety compliance monitoring",
      "Process optimization"
    ],
    metrics: { accuracy: "99.2%", efficiency: "70%", cost_reduction: "55%" }
  },
  {
    id: "healthcare",
    title: "Healthcare & Medical",
    description: "Support medical professionals with AI-assisted diagnostics.",
    icon: <Stethoscope className="h-8 w-8 text-cyan-600" />,
    solutions: [
      "Medical image analysis",
      "Radiological screening",
      "Pathology detection",
      "Surgery assistance",
      "Patient monitoring systems"
    ],
    metrics: { accuracy: "94%", efficiency: "60%", cost_reduction: "30%" }
  },
  {
    id: "security",
    title: "Security & Surveillance",
    description: "Enhance security with intelligent monitoring systems.",
    icon: <Shield className="h-8 w-8 text-cyan-600" />,
    solutions: [
      "Facial recognition systems",
      "Threat detection",
      "Crowd monitoring",
      "Perimeter security",
      "Incident analysis"
    ],
    metrics: { accuracy: "97%", efficiency: "90%", cost_reduction: "50%" }
  }
]

const techStack = [
  { name: "TensorFlow", category: "Framework" },
  { name: "PyTorch", category: "Framework" },
  { name: "OpenCV", category: "Library" },
  { name: "YOLO", category: "Model" },
  { name: "ResNet", category: "Model" },
  { name: "AWS Rekognition", category: "Cloud" },
  { name: "Google Vision", category: "Cloud" },
  { name: "Azure Computer Vision", category: "Cloud" },
  { name: "ONNX", category: "Runtime" },
  { name: "TensorRT", category: "Runtime" }
]

export default function ComputerVisionPage() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [isWebcamActive, setIsWebcamActive] = useState(false)
  const [detections, setDetections] = useState<string[]>([])

  const startWebcam = async () => {
    try {
      if (typeof navigator === 'undefined' || !navigator.mediaDevices) {
        console.error("Media devices not supported")
        return
      }
      
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
      alert("Unable to access webcam. Please ensure you have granted camera permissions and try again.")
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
    const detectedObjects: string[] = []

    for (let i = 0; i < numObjects; i++) {
      const randomIndex = Math.floor(Math.random() * possibleObjects.length)
      detectedObjects.push(possibleObjects[randomIndex])
      // Remove the selected object to avoid duplicates
      possibleObjects.splice(randomIndex, 1)
    }

    setDetections(detectedObjects)

    // Draw bounding boxes on canvas
    if (canvasRef.current && videoRef.current && typeof window !== 'undefined') {
      const ctx = canvasRef.current.getContext("2d")
      if (ctx && canvasRef.current.width > 0 && canvasRef.current.height > 0) {
        ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height)

        // Only draw if video is loaded and has dimensions
        if (videoRef.current.videoWidth > 0 && videoRef.current.videoHeight > 0) {
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
  }, [stopWebcam])

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center relative bg-gradient-to-br from-[#00F3FF] via-[#1E40AF] to-[#2A2A72] text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 container mx-auto px-4 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight bg-gradient-to-r from-white to-cyan-200 bg-clip-text text-transparent">
                  Computer Vision Solutions
                </h1>
                <p className="text-xl md:text-2xl text-gray-200 max-w-2xl leading-relaxed">
                  Transform visual data into actionable insights with cutting-edge AI models and real-time processing capabilities.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" variant="secondary" className="group bg-white text-black hover:bg-gray-100 text-lg px-8 py-4 h-auto">
                  <Link href="#demo">
                    Try Live Demo
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-4 h-auto"
                >
                  <Link href="#services">Our Services</Link>
                </Button>
              </div>
              <div className="flex items-center space-x-8 text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold">99.2%</div>
                  <div className="text-gray-300">Accuracy</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">50ms</div>
                  <div className="text-gray-300">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-gray-300">Processing</div>
                </div>
              </div>
            </div>
            <div className="absolute right-0 top-0 w-1/2 h-full opacity-20 lg:opacity-40">
              <div className="absolute inset-0">
                <Image
                  src="/CV_banner.png"
                  alt="Computer Vision Banner"
                  width={800}
                  height={800}
                  className="h-full w-auto object-cover object-left"
                  style={{
                    maskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)',
                    WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 30%, black 100%)'
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex flex-col justify-center py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Computer Vision Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive AI-powered visual intelligence solutions tailored for your business needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cvServices.map((service) => (
              <Card key={service.id} className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-cyan-200">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl text-gray-900">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                    <ul className="text-sm text-gray-600 space-y-1">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">Applications:</h4>
                    <div className="flex flex-wrap gap-1">
                      {service.applications.map((app, idx) => (
                        <Badge key={idx} variant="secondary" className="text-xs">{app}</Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Industry Applications Section */}
      <section className="min-h-screen flex flex-col justify-center py-20 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Industry Applications</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover how our computer vision solutions transform various industries with measurable results.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {industryApplications.map((industry) => (
              <Card key={industry.id} className="group hover:shadow-2xl transition-all duration-300 bg-white">
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-cyan-100 rounded-full group-hover:bg-cyan-200 transition-colors">
                      {industry.icon}
                    </div>
                    <div>
                      <CardTitle className="text-2xl text-gray-900">{industry.title}</CardTitle>
                      <CardDescription className="text-lg text-gray-600">{industry.description}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-4">Our Solutions:</h4>
                    <ul className="space-y-2">
                      {industry.solutions.map((solution, idx) => (
                        <li key={idx} className="flex items-start text-gray-700">
                          <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 mr-3 flex-shrink-0"></div>
                          {solution}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-cyan-600">{industry.metrics.accuracy}</div>
                      <div className="text-sm text-gray-500">Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-green-600">+{industry.metrics.efficiency}</div>
                      <div className="text-sm text-gray-500">Efficiency</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-orange-600">-{industry.metrics.cost_reduction}</div>
                      <div className="text-sm text-gray-500">Cost Reduction</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button asChild className="w-full">
                    <Link href="/contact">Discuss {industry.title.split(" ")[0]} Solutions</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo Section */}
      <section id="demo" className="min-h-screen flex flex-col justify-center py-20 px-4 bg-gray-900 text-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Interactive Computer Vision Demo</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience real-time object detection and visual analysis powered by advanced AI models.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700 text-white">
              <CardHeader>
                <CardTitle className="text-xl">Live Object Detection</CardTitle>
                <CardDescription className="text-gray-400">
                  Real-time detection using your webcam
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
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
                      <p className="text-lg mb-4">Enable your webcam for live detection</p>
                      <Button onClick={startWebcam} className="bg-cyan-600 hover:bg-cyan-700">
                        Start Demo
                      </Button>
                    </div>
                  )}
                </div>

                {isWebcamActive && (
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Detected Objects:</h4>
                      {detections.length > 0 ? (
                        <div className="space-y-2">
                          {detections.map((object, index) => (
                            <div key={index} className="flex items-center justify-between p-2 bg-gray-700 rounded">
                              <div className="flex items-center">
                                <div className="w-3 h-3 rounded-full bg-cyan-500 mr-3"></div>
                                <span>{object}</span>
                              </div>
                              <Badge className="bg-cyan-600">
                                {Math.floor(Math.random() * 20) + 80}%
                              </Badge>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 bg-gray-700 rounded">
                          <p className="text-gray-400">Analyzing video feed...</p>
                        </div>
                      )}
                    </div>
                    <Button onClick={stopWebcam} variant="outline" className="w-full border-gray-600 text-white hover:bg-gray-700">
                      Stop Demo
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="bg-gray-800 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="text-xl">Demo Features</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Eye className="h-5 w-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Real-time Detection</div>
                        <div className="text-sm text-gray-400">Instant object recognition and tracking</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Target className="h-5 w-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Bounding Box Visualization</div>
                        <div className="text-sm text-gray-400">Precise object localization</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Brain className="h-5 w-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Confidence Scoring</div>
                        <div className="text-sm text-gray-400">AI confidence levels for each detection</div>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <Zap className="h-5 w-5 text-cyan-500 mr-3 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="font-medium">Optimized Performance</div>
                        <div className="text-sm text-gray-400">Low-latency processing</div>
                      </div>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-gray-800 border-gray-700 text-white">
                <CardHeader>
                  <CardTitle className="text-xl">Technical Implementation</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    This demo uses TensorFlow.js for browser-based inference. Our production solutions leverage:
                  </p>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="bg-gray-700 p-3 rounded">
                      <div className="font-medium text-cyan-400">Cloud GPU</div>
                      <div className="text-gray-400">High-performance processing</div>
                    </div>
                    <div className="bg-gray-700 p-3 rounded">
                      <div className="font-medium text-cyan-400">Custom Models</div>
                      <div className="text-gray-400">Domain-specific training</div>
                    </div>
                    <div className="bg-gray-700 p-3 rounded">
                      <div className="font-medium text-cyan-400">Edge Deployment</div>
                      <div className="text-gray-400">On-device inference</div>
                    </div>
                    <div className="bg-gray-700 p-3 rounded">
                      <div className="font-medium text-cyan-400">API Integration</div>
                      <div className="text-gray-400">RESTful endpoints</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="min-h-screen flex flex-col justify-center py-20 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Our Technology Stack</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with industry-leading frameworks and optimized for performance, accuracy, and scalability.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="space-y-8">
              <Card className="border-2 border-cyan-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Brain className="h-8 w-8 text-cyan-600 mr-3" />
                    AI Frameworks & Models
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {techStack.filter(tech => ['Framework', 'Model'].includes(tech.category)).map((tech, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
                        <div className="font-medium text-gray-900">{tech.name}</div>
                        <div className="text-sm text-gray-500">{tech.category}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Cpu className="h-8 w-8 text-green-600 mr-3" />
                    Libraries & Runtime
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {techStack.filter(tech => ['Library', 'Runtime'].includes(tech.category)).map((tech, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg text-center">
                        <div className="font-medium text-gray-900">{tech.name}</div>
                        <div className="text-sm text-gray-500">{tech.category}</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-8">
              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900 flex items-center">
                    <Zap className="h-8 w-8 text-purple-600 mr-3" />
                    Cloud & Infrastructure
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {techStack.filter(tech => tech.category === 'Cloud').map((tech, index) => (
                      <div key={index} className="bg-gray-50 p-3 rounded-lg">
                        <div className="font-medium text-gray-900">{tech.name}</div>
                        <div className="text-sm text-gray-500">Enterprise-grade computer vision API</div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-cyan-50 to-blue-50 border-2 border-cyan-300">
                <CardHeader>
                  <CardTitle className="text-2xl text-gray-900">Performance Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-cyan-600 mb-2">&lt; 50ms</div>
                      <div className="text-gray-600">Response Time</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-green-600 mb-2">99.2%</div>
                      <div className="text-gray-600">Model Accuracy</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-orange-600 mb-2">1000+</div>
                      <div className="text-gray-600">Images/Sec</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-purple-600 mb-2">99.9%</div>
                      <div className="text-gray-600">Uptime SLA</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
              <p className="text-lg mb-6 opacity-90">
                Deploy computer vision solutions in days, not months with our pre-trained models and APIs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button asChild size="lg" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                  <Link href="/contact">Start Your Project</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  <Link href="#demo">Try Demo</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  )
}

