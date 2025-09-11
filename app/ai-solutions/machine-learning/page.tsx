"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Upload, Brain, TrendingUp, Target, Users, Shield, Zap, CheckCircle, Code, Database, BarChart3, LineChart, PieChart, Download, Play, Star } from "lucide-react"

const mlServices = [
  {
    id: "supervised",
    title: "Supervised Learning",
    description: "Leverage labeled data to build predictive models and classification systems",
    icon: <Target className="h-8 w-8 text-blue-600" />,
    techniques: [
      "Linear & Logistic Regression",
      "Random Forest & Decision Trees", 
      "Support Vector Machines (SVM)",
      "Neural Networks & Deep Learning",
      "Gradient Boosting (XGBoost, LightGBM)",
      "Ensemble Methods"
    ],
    useCases: [
      "Sales forecasting & revenue prediction",
      "Customer churn prediction",
      "Fraud detection & risk assessment", 
      "Medical diagnosis & healthcare analytics",
      "Quality control & defect detection",
      "Price optimization & demand forecasting"
    ]
  },
  {
    id: "unsupervised",
    title: "Unsupervised Learning",
    description: "Discover hidden patterns and insights from unlabeled data",
    icon: <Brain className="h-8 w-8 text-purple-600" />,
    techniques: [
      "K-Means & Hierarchical Clustering",
      "DBSCAN & Density-Based Clustering",
      "Principal Component Analysis (PCA)",
      "t-SNE & UMAP Dimensionality Reduction",
      "Anomaly Detection Algorithms",
      "Association Rule Mining"
    ],
    useCases: [
      "Customer segmentation & market analysis",
      "Anomaly detection in networks/systems",
      "Feature selection & data preprocessing",
      "Market basket analysis",
      "Gene sequence analysis",
      "Social network analysis"
    ]
  },
  {
    id: "reinforcement",
    title: "Reinforcement Learning",
    description: "Build intelligent agents that learn optimal decisions through interaction",
    icon: <Zap className="h-8 w-8 text-green-600" />,
    techniques: [
      "Q-Learning & Deep Q-Networks (DQN)",
      "Policy Gradient Methods",
      "Actor-Critic Algorithms",
      "Multi-Armed Bandit Problems",
      "Monte Carlo Tree Search",
      "Deep Reinforcement Learning"
    ],
    useCases: [
      "Autonomous vehicle navigation",
      "Algorithmic trading & portfolio management",
      "Game AI & strategy optimization",
      "Resource allocation & scheduling",
      "Robotics & control systems",
      "Personalized recommendation systems"
    ]
  },
  {
    id: "deep",
    title: "Deep Learning",
    description: "Advanced neural networks for complex pattern recognition tasks",
    icon: <Database className="h-8 w-8 text-red-600" />,
    techniques: [
      "Convolutional Neural Networks (CNN)",
      "Recurrent Neural Networks (RNN/LSTM)",
      "Transformer Architecture",
      "Generative Adversarial Networks (GAN)",
      "Autoencoders & Variational AE",
      "Transfer Learning & Fine-tuning"
    ],
    useCases: [
      "Computer vision & image recognition",
      "Natural language processing",
      "Speech recognition & synthesis",
      "Time series forecasting",
      "Generative content creation",
      "Medical imaging analysis"
    ]
  }
]

const industryApplications = [
  {
    industry: "Healthcare & Life Sciences",
    icon: <Shield className="h-6 w-6 text-red-500" />,
    applications: [
      "Drug discovery & molecular analysis",
      "Medical imaging & diagnostic assistance",
      "Personalized treatment recommendations",
      "Clinical trial optimization",
      "Electronic health record analysis",
      "Epidemic modeling & prediction"
    ]
  },
  {
    industry: "Financial Services",
    icon: <TrendingUp className="h-6 w-6 text-green-500" />,
    applications: [
      "Algorithmic trading & portfolio management",
      "Credit scoring & risk assessment", 
      "Fraud detection & prevention",
      "Regulatory compliance monitoring",
      "Customer lifetime value prediction",
      "Market sentiment analysis"
    ]
  },
  {
    industry: "E-commerce & Retail",
    icon: <Users className="h-6 w-6 text-blue-500" />,
    applications: [
      "Personalized product recommendations",
      "Dynamic pricing optimization",
      "Inventory management & demand forecasting",
      "Customer behavior analytics",
      "Supply chain optimization",
      "Visual search & product matching"
    ]
  },
  {
    industry: "Manufacturing & IoT",
    icon: <BarChart3 className="h-6 w-6 text-orange-500" />,
    applications: [
      "Predictive maintenance & equipment monitoring",
      "Quality control & defect detection",
      "Production optimization & scheduling",
      "Energy consumption optimization",
      "Smart factory automation",
      "Supply chain analytics"
    ]
  }
]

const techStack = [
  { 
    category: "ML Frameworks",
    tools: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras", "XGBoost", "LightGBM"]
  },
  {
    category: "Data Processing", 
    tools: ["Pandas", "NumPy", "Apache Spark", "Dask", "Ray", "Polars"]
  },
  {
    category: "MLOps & Deployment",
    tools: ["MLflow", "Kubeflow", "AWS SageMaker", "Docker", "Kubernetes", "Apache Airflow"]
  },
  {
    category: "Cloud Platforms",
    tools: ["AWS", "Google Cloud", "Azure", "Databricks", "Snowflake", "BigQuery"]
  }
]

const pricingTiers = [
  {
    name: "Starter",
    description: "Perfect for small businesses exploring ML potential",
    price: "$3,500",
    period: "per month",
    features: [
      "Pre-built ML models & templates",
      "Basic data preprocessing & analysis",
      "Standard API integration",
      "Email support (48h response)",
      "Monthly performance reports",
      "Up to 10K predictions/month",
      "Basic model explainability"
    ],
    cta: "Start Your ML Journey",
    popular: false,
  },
  {
    name: "Professional",
    description: "Custom ML solutions for growing businesses",
    price: "$8,500",
    period: "per month", 
    features: [
      "Custom model development & training",
      "Advanced feature engineering",
      "A/B testing & model validation", 
      "Priority support (24h response)",
      "Bi-weekly model retraining",
      "Up to 100K predictions/month",
      "Advanced analytics dashboard",
      "Model monitoring & drift detection"
    ],
    cta: "Scale with Custom ML",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "End-to-end MLOps for large organizations",
    price: "Custom",
    period: "pricing",
    features: [
      "Full MLOps pipeline implementation",
      "Multi-environment deployment (dev/staging/prod)",
      "Dedicated ML engineering team",
      "24/7 support & monitoring",
      "Continuous integration/deployment",
      "Unlimited predictions",
      "Custom infrastructure setup",
      "Comprehensive documentation & training",
      "SLA guarantees & compliance"
    ],
    cta: "Transform with Enterprise ML",
    popular: false,
  },
]

const successStories = [
  {
    company: "FinTech Startup",
    industry: "Financial Services",
    challenge: "Reduce loan default rates and improve risk assessment",
    solution: "Implemented ensemble ML models combining gradient boosting with deep learning",
    results: [
      "45% reduction in default rates",
      "$2.3M saved annually in bad loans",
      "30% faster loan approval process"
    ]
  },
  {
    company: "E-commerce Platform", 
    industry: "Retail",
    challenge: "Improve product recommendations and increase conversion rates",
    solution: "Built hybrid recommendation system using collaborative filtering and deep learning",
    results: [
      "38% increase in click-through rates",
      "25% boost in average order value",
      "15% improvement in customer retention"
    ]
  },
  {
    company: "Manufacturing Company",
    industry: "Industrial",
    challenge: "Predict equipment failures and optimize maintenance schedules",
    solution: "Deployed IoT sensors with time-series ML models for predictive maintenance",
    results: [
      "60% reduction in unplanned downtime",
      "$1.8M savings in maintenance costs",
      "40% increase in equipment lifespan"
    ]
  }
]

export default function MachineLearningPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [demoResults, setDemoResults] = useState<null | {
    modelType: string
    accuracy: number
    predictions: Array<{ feature: string; value: number; confidence: number }>
    insights: string[]
  }>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    setSelectedFile(file)
    setDemoResults(null)
  }

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!selectedFile) return

    setIsProcessing(true)

    // Simulate advanced ML processing
    setTimeout(() => {
      setIsProcessing(false)
      setDemoResults({
        modelType: "Random Forest Ensemble",
        accuracy: 94.7,
        predictions: [
          { feature: "Revenue Growth", value: 23.8, confidence: 92 },
          { feature: "Customer Retention", value: 87.3, confidence: 89 },
          { feature: "Churn Risk Score", value: 12.4, confidence: 95 }
        ],
        insights: [
          "High correlation detected between customer engagement and retention rates",
          "Seasonal patterns identified in revenue data suggesting Q4 optimization opportunity", 
          "Top 3 features contribute to 78% of model predictive power"
        ]
      })
    }, 3000)
  }

  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="h-[90vh] flex items-center bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        
        {/* Background Image - Full Width */}
        <div className="absolute inset-0 flex justify-end">
          <div className="w-1/2 h-full relative">
            <Image
              src="/Ml_banner.png"
              alt="Machine Learning Banner"
              fill
              className="object-cover object-right"
              style={{
                maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 70%, rgba(0,0,0,0) 100%)'
              }}
              priority
            />
          </div>
        </div>
        
        <div className="container mx-auto max-w-7xl relative z-10 px-4 py-2">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6 items-center h-[75vh]">
            <div className="space-y-4 lg:space-y-5">
              <div>
                <Badge className="bg-white/20 text-white border-white/30 mb-3 text-xs">
                  Enterprise-Grade ML Solutions
                </Badge>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold font-orbitron mb-3 lg:mb-4 leading-tight">
                  Transform Your Business with 
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                    Machine Learning
                  </span>
                </h1>
                <p className="text-sm sm:text-base lg:text-lg mb-5 lg:mb-6 max-w-2xl leading-relaxed">
                  Unlock the power of data-driven decision making with our comprehensive machine learning solutions. 
                  From predictive analytics to intelligent automation, we build custom ML systems that drive measurable business outcomes.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button asChild size="default" variant="secondary" className="group bg-white text-gray-900 hover:bg-gray-100">
                  <Link href="#demo">
                    Try Interactive Demo
                    <Play className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button
                  asChild
                  size="default"
                  variant="outline"
                  className="bg-transparent border-white text-white hover:bg-white/10"
                >
                  <Link href="#pricing">View Pricing & Solutions</Link>
                </Button>
              </div>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6 pt-2">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="text-xs sm:text-sm">98% Client Satisfaction</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-green-400" />
                  <span className="text-xs sm:text-sm">500+ Models Deployed</span>
                </div>
              </div>
            </div>
            <div className="relative h-full lg:block">
              {/* This div is just for grid layout spacing */}
            </div>
          </div>
        </div>
      </section>

      {/* ML Services Overview */}
      <section className="min-h-screen flex flex-col justify-center py-8 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Comprehensive ML Solutions</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
              From supervised learning to deep neural networks, we master every aspect of machine learning to solve your most complex business challenges.
            </p>
          </div>

          <Tabs defaultValue="supervised" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12 h-auto">
              {mlServices.map((service) => (
                <TabsTrigger key={service.id} value={service.id} className="flex flex-col items-center p-4 space-y-2">
                  <div className="p-2 bg-gray-100 rounded-lg">
                    {service.icon}
                  </div>
                  <span className="font-semibold text-sm">{service.title}</span>
                </TabsTrigger>
              ))}
            </TabsList>

            {mlServices.map((service) => (
              <TabsContent key={service.id} value={service.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  <Card className="h-full">
                    <CardHeader>
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full">
                          {service.icon}
                        </div>
                        <div>
                          <CardTitle className="text-2xl">{service.title}</CardTitle>
                          <CardDescription className="text-lg mt-2">{service.description}</CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Core Techniques:</h4>
                        <div className="grid grid-cols-1 gap-2">
                          {service.techniques.map((technique, index) => (
                            <div key={index} className="flex items-center p-3 bg-gray-50 rounded-lg">
                              <CheckCircle className="h-4 w-4 text-green-500 mr-3 flex-shrink-0" />
                              <span className="text-sm font-medium">{technique}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-xl">Real-World Applications</CardTitle>
                      <CardDescription>Industries and use cases where this approach excels</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {service.useCases.map((useCase, index) => (
                          <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                            <Target className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm font-medium text-blue-900">{useCase}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild className="w-full">
                        <Link href="/contact">Discuss Your {service.title} Needs</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Industry Applications */}
      <section className="min-h-screen flex flex-col justify-center py-8 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Solutions</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              Tailored ML applications across diverse industries, each with unique challenges and opportunities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {industryApplications.map((industry, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full">
                      {industry.icon}
                    </div>
                    <CardTitle className="text-xl">{industry.industry}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 gap-3">
                    {industry.applications.map((app, appIndex) => (
                      <div key={appIndex} className="flex items-center p-3 bg-white rounded-lg border border-gray-100">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                        <span className="text-sm font-medium">{app}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section id="demo" className="min-h-screen flex flex-col justify-center py-8 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Interactive ML Demo</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the power of our ML algorithms with real data. Upload your dataset and see instant predictions with detailed insights.
            </p>
          </div>

          <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50">
            <CardContent className="p-8">
              <form onSubmit={handleDemoSubmit} className="space-y-8">
                <div className="border-2 border-dashed border-blue-300 rounded-xl p-12 text-center bg-blue-50/50 hover:bg-blue-50 transition-colors">
                  <input
                    type="file"
                    id="file-upload"
                    className="hidden"
                    accept=".csv,.xlsx,.json"
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="file-upload" className="flex flex-col items-center justify-center cursor-pointer">
                    <div className="p-6 bg-blue-100 rounded-full mb-6">
                      <Upload className="h-12 w-12 text-blue-600" />
                    </div>
                    <h3 className="text-2xl font-bold mb-4">Upload Your Dataset</h3>
                    <p className="text-gray-600 mb-6 max-w-md">
                      Drag and drop or click to select CSV, Excel, or JSON files. Our AI will automatically detect patterns and generate predictions.
                    </p>
                    <Button type="button" size="lg" variant="outline" className="bg-white">
                      <Upload className="mr-2 h-5 w-5" />
                      Choose File
                    </Button>
                  </label>
                </div>

                {selectedFile && (
                  <div className="bg-green-50 border border-green-200 p-6 rounded-xl">
                    <div className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-green-600" />
                      <div>
                        <p className="font-semibold text-green-900">
                          File uploaded successfully: <span className="font-bold">{selectedFile.name}</span>
                        </p>
                        <p className="text-sm text-green-700 mt-1">
                          Size: {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-center">
                  <Button 
                    type="submit" 
                    disabled={!selectedFile || isProcessing} 
                    size="lg"
                    className="px-12 py-6 text-lg"
                  >
                    {isProcessing ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Processing with ML Pipeline...
                      </>
                    ) : (
                      <>
                        <Brain className="mr-3 h-5 w-5" />
                        Generate ML Predictions
                      </>
                    )}
                  </Button>
                </div>
              </form>

              {demoResults && (
                <div className="mt-12 space-y-8 border-t pt-12">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-2">ML Analysis Complete</h3>
                    <p className="text-gray-600">Model: {demoResults.modelType} | Accuracy: {demoResults.accuracy}%</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {demoResults.predictions.map((pred, index) => (
                      <Card key={index} className="text-center">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-lg mb-4">{pred.feature}</h4>
                          <div className="text-3xl font-bold text-blue-600 mb-2">{pred.value}%</div>
                          <div className="flex items-center justify-center">
                            <span className="text-sm text-gray-500 mr-2">Confidence:</span>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                              <div
                                className="bg-gradient-to-r from-green-500 to-blue-600 h-2 rounded-full"
                                style={{ width: `${pred.confidence}%` }}
                              ></div>
                            </div>
                            <span className="ml-2 text-sm font-medium">{pred.confidence}%</span>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Brain className="h-5 w-5" />
                        AI-Generated Insights
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        {demoResults.insights.map((insight, index) => (
                          <div key={index} className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                            <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                            </div>
                            <p className="text-sm text-blue-900 font-medium">{insight}</p>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>

                  <div className="flex justify-center gap-4">
                    <Button variant="outline" size="lg">
                      <Download className="mr-2 h-5 w-5" />
                      Download Full Report
                    </Button>
                    <Button size="lg">
                      <Link href="/contact" className="flex items-center">
                        Schedule ML Consultation
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </Link>
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Stories */}
      <section className="min-h-screen flex flex-col justify-center py-8 px-4 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Success Stories</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Real results from real clients - see how our ML solutions have transformed businesses across industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline">{story.industry}</Badge>
                    <Star className="h-5 w-5 text-yellow-500 fill-current" />
                  </div>
                  <CardTitle className="text-xl">{story.company}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-sm text-red-600 mb-2">Challenge:</h4>
                    <p className="text-sm text-gray-700">{story.challenge}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-blue-600 mb-2">Solution:</h4>
                    <p className="text-sm text-gray-700">{story.solution}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-green-600 mb-3">Results:</h4>
                    <div className="space-y-2">
                      {story.results.map((result, resultIndex) => (
                        <div key={resultIndex} className="flex items-center gap-2">
                          <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm font-medium text-green-700">{result}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="min-h-screen flex flex-col justify-center py-8 px-4 bg-white">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our ML Technology Stack</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              We leverage cutting-edge tools and frameworks to build robust, scalable, and production-ready ML solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {techStack.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <Code className="h-4 w-4 text-blue-600 mr-3" />
                        <span className="font-medium text-sm">{tool}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild variant="outline" size="lg">
              <Link href="/resources/api-docs">
                <Code className="mr-2 h-5 w-5" />
                Explore Our API Documentation
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="min-h-screen flex flex-col justify-center py-8 px-4 bg-gray-50">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Flexible Pricing Options</h2>
            <p className="text-lg text-gray-600 max-w-4xl mx-auto">
              From startup-friendly packages to enterprise-scale deployments, find the perfect ML solution for your budget and requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <Card key={index} className={`relative hover:shadow-xl transition-all duration-300 ${tier.popular ? "border-blue-500 shadow-xl scale-105" : "hover:scale-105"}`}>
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 text-sm">
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription className="text-base mt-2">{tier.description}</CardDescription>
                  <div className="mt-6">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-gray-500 ml-2">{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="pb-8">
                  <ul className="space-y-4">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-sm font-medium">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button asChild className={`w-full ${tier.popular ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" : ""}`}>
                    <Link href="/contact">{tier.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Need a custom solution? We're here to help.</p>
            <Button asChild variant="outline" size="lg">
              <Link href="/contact">Schedule a Free ML Strategy Session</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="min-h-screen flex flex-col justify-center py-8 px-4 bg-gradient-to-br from-[#667eea] via-[#764ba2] to-[#f093fb] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Revolutionize Your Business with ML?</h2>
          <p className="text-lg mb-8 max-w-3xl mx-auto leading-relaxed">
            Join hundreds of companies that have transformed their operations with our machine learning expertise. 
            Schedule a free consultation with our ML engineers to explore your possibilities.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button asChild size="lg" variant="secondary" className="group bg-white text-gray-900 hover:bg-gray-100">
              <Link href="/contact">
                Get Started with Free ML Consultation
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white/10">
              <Link href="/resources">
                Explore ML Resources & Case Studies
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}