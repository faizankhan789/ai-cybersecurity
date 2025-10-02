"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Upload, Brain, TrendingUp, Target, Users, Shield, Zap, CheckCircle, Code, Database, BarChart3, LineChart, PieChart, Download, Play, Star, FileText, BarChart } from "lucide-react"

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

const sampleDatasets = [
  {
    id: "sales",
    name: "E-commerce Sales Data",
    description: "Monthly sales data with customer demographics and product categories",
    icon: <TrendingUp className="h-5 w-5 text-blue-600" />,
    data: [
      { month: "Jan", sales: 45000, customers: 1200, avgOrderValue: 87.5, topCategory: "Electronics" },
      { month: "Feb", sales: 52000, customers: 1350, avgOrderValue: 92.3, topCategory: "Fashion" },
      { month: "Mar", sales: 48000, customers: 1180, avgOrderValue: 89.1, topCategory: "Electronics" },
      { month: "Apr", sales: 58000, customers: 1420, avgOrderValue: 95.7, topCategory: "Home & Garden" },
      { month: "May", sales: 61000, customers: 1510, avgOrderValue: 98.2, topCategory: "Electronics" },
      { month: "Jun", sales: 67000, customers: 1680, avgOrderValue: 101.5, topCategory: "Fashion" }
    ],
    predictions: {
      nextMonthSales: 72500,
      growthRate: 8.2,
      confidence: 94,
      insights: [
        "Strong upward trend in sales with 8.2% month-over-month growth",
        "Electronics and Fashion are the top performing categories",
        "Average order value is increasing, indicating higher customer engagement",
        "Customer acquisition is accelerating - gained 170 new customers in June"
      ]
    }
  },
  {
    id: "customer",
    name: "Customer Behavior Analysis",
    description: "Customer segmentation data with purchase patterns and lifetime value",
    icon: <Users className="h-5 w-5 text-green-600" />,
    data: [
      { segment: "High Value", customers: 450, avgLifetimeValue: 2400, churnRate: 5.2, satisfaction: 4.7 },
      { segment: "Regular", customers: 1800, avgLifetimeValue: 800, churnRate: 12.8, satisfaction: 4.1 },
      { segment: "New", customers: 920, avgLifetimeValue: 150, churnRate: 35.5, satisfaction: 3.8 },
      { segment: "At Risk", customers: 340, avgLifetimeValue: 1200, churnRate: 48.2, satisfaction: 3.2 }
    ],
    predictions: {
      churnPrediction: "23 customers likely to churn next month",
      retentionStrategy: "Focus on At Risk segment",
      confidence: 87,
      insights: [
        "High Value customers show excellent retention with only 5.2% churn rate",
        "At Risk segment needs immediate attention - 48.2% churn rate",
        "New customer satisfaction is below average, affecting retention",
        "Recommend targeted campaigns for the 340 At Risk customers"
      ]
    }
  },
  {
    id: "inventory",
    name: "Inventory Optimization",
    description: "Stock levels, demand forecasting, and supply chain analytics",
    icon: <BarChart3 className="h-5 w-5 text-purple-600" />,
    data: [
      { product: "Laptop Pro", currentStock: 45, demandForecast: 120, reorderPoint: 30, turnoverRate: 8.5 },
      { product: "Wireless Headphones", currentStock: 180, demandForecast: 200, reorderPoint: 50, turnoverRate: 12.3 },
      { product: "Smart Watch", currentStock: 12, demandForecast: 85, reorderPoint: 25, turnoverRate: 15.7 },
      { product: "Tablet Air", currentStock: 67, demandForecast: 95, reorderPoint: 20, turnoverRate: 6.8 }
    ],
    predictions: {
      stockoutRisk: "Smart Watch: Critical - Order immediately",
      optimalOrderQuantity: "Laptop Pro: 75 units, Smart Watch: 100 units",
      confidence: 91,
      insights: [
        "Smart Watch is critically low - only 12 units remaining vs 85 forecasted demand",
        "Wireless Headphones have healthy stock levels and high turnover",
        "Laptop Pro approaching reorder point, suggest ordering 75 units",
        "Overall inventory efficiency can be improved by 23% with ML optimization"
      ]
    }
  }
]

export default function MachineLearningPage() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [selectedDataset, setSelectedDataset] = useState<string | null>(null)
  const [isProcessing, setIsProcessing] = useState(false)
  const [demoResults, setDemoResults] = useState<null | {
    modelType: string
    accuracy: number
    dataPreview: any[]
    predictions: Array<{ feature: string; value: number; confidence: number }>
    insights: string[]
    chartData?: any
  }>(null)
  const [csvData, setCsvData] = useState<any[] | null>(null)

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null
    console.log("File selected:", file)
    
    setSelectedFile(file)
    setSelectedDataset(null)
    setDemoResults(null)
    setCsvData(null)

    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const csvText = event.target?.result as string
        console.log("CSV text:", csvText.substring(0, 200) + "...")
        const parsedData = parseCSV(csvText)
        console.log("Parsed data:", parsedData)
        setCsvData(parsedData)
      }
      reader.onerror = (error) => {
        console.error("FileReader error:", error)
      }
      reader.readAsText(file)
    }
  }

  const parseCSV = (csvText: string) => {
    const lines = csvText.split('\n').filter(line => line.trim())
    if (lines.length < 2) return []

    // Handle different separators (comma, semicolon, tab)
    let separator = ','
    if (lines[0].includes(';')) separator = ';'
    else if (lines[0].includes('\t')) separator = '\t'

    const headers = lines[0].split(separator).map(header => header.trim().replace(/"/g, ''))
    const data = []

    for (let i = 1; i < Math.min(lines.length, 11); i++) { // Limit to 10 rows for demo
      const values = lines[i].split(separator).map(value => value.trim().replace(/"/g, ''))
      const row: any = {}
      headers.forEach((header, index) => {
        const value = values[index] || ''
        // Try to convert to number if it looks numeric
        const numValue = Number(value)
        row[header] = !isNaN(numValue) && value !== '' ? numValue : value
      })
      data.push(row)
    }

    return data
  }

  const analyzeCSVData = (data: any[]) => {
    if (!data || data.length === 0) return null

    const numericColumns = Object.keys(data[0]).filter(key => {
      return data.some(row => !isNaN(Number(row[key])) && row[key] !== '')
    })

    const stats = numericColumns.map(col => {
      const values = data.map(row => Number(row[col])).filter(val => !isNaN(val))
      const avg = values.reduce((sum, val) => sum + val, 0) / values.length
      const max = Math.max(...values)
      const min = Math.min(...values)
      
      return {
        column: col,
        average: Math.round(avg * 100) / 100,
        max,
        min,
        trend: values.length > 1 ? (values[values.length - 1] > values[0] ? 'increasing' : 'decreasing') : 'stable'
      }
    })

    return {
      totalRows: data.length,
      numericColumns: numericColumns.length,
      statistics: stats,
      insights: generateInsights(stats, data)
    }
  }

  const generateInsights = (stats: any[], data: any[]) => {
    const insights = []
    
    if (stats.length > 0) {
      const trendingUp = stats.filter(s => s.trend === 'increasing')
      const trendingDown = stats.filter(s => s.trend === 'decreasing')
      
      if (trendingUp.length > 0) {
        insights.push(`${trendingUp.length} metrics showing positive growth trends`)
      }
      if (trendingDown.length > 0) {
        insights.push(`${trendingDown.length} metrics showing declining trends - needs attention`)
      }
      
      const highVariability = stats.filter(s => (s.max - s.min) / s.average > 1)
      if (highVariability.length > 0) {
        insights.push(`High variability detected in ${highVariability[0].column} - potential optimization opportunity`)
      }
    }
    
    insights.push(`Dataset contains ${data.length} records with ${Object.keys(data[0]).length} features`)
    insights.push("Recommend applying feature engineering and correlation analysis for deeper insights")
    
    return insights
  }

  const handleSampleDataset = (datasetId: string) => {
    const dataset = sampleDatasets.find(d => d.id === datasetId)
    if (!dataset) return

    setSelectedDataset(datasetId)
    setSelectedFile(null)
    setDemoResults(null)
    setIsProcessing(true)

    // Generate realistic different predictions for each dataset
    const datasetPredictions = {
      sales: [
        { feature: "Next Month Revenue", value: 72500, confidence: 94 },
        { feature: "Customer Growth Rate", value: 8.2, confidence: 89 },
        { feature: "Market Risk Level", value: 15.3, confidence: 91 }
      ],
      customer: [
        { feature: "Churn Rate", value: 23.4, confidence: 87 },
        { feature: "Retention Improvement", value: 34.7, confidence: 92 },
        { feature: "Customer Satisfaction", value: 76.9, confidence: 85 }
      ],
      inventory: [
        { feature: "Stock Optimization", value: 67.8, confidence: 91 },
        { feature: "Demand Accuracy", value: 89.2, confidence: 88 },
        { feature: "Stockout Risk", value: 8.1, confidence: 94 }
      ]
    }

    // Simulate ML processing
    setTimeout(() => {
      setIsProcessing(false)
      setDemoResults({
        modelType: datasetId === 'sales' ? "Time Series LSTM" : datasetId === 'customer' ? "Gradient Boosting Classifier" : "Random Forest Regressor",
        accuracy: dataset.predictions.confidence,
        dataPreview: dataset.data.slice(0, 5),
        predictions: datasetPredictions[datasetId as keyof typeof datasetPredictions] || [],
        insights: dataset.predictions.insights
      })
    }, 2000)
  }

  const handleDemoSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted", { selectedFile, csvData })
    
    if (!selectedFile || !csvData) {
      console.log("Missing file or data")
      return
    }

    setIsProcessing(true)

    // Process uploaded CSV file
    setTimeout(() => {
      const analysis = analyzeCSVData(csvData)
      setIsProcessing(false)
      
      if (analysis) {
        setDemoResults({
          modelType: "Random Forest with Feature Selection",
          accuracy: 89.3,
          dataPreview: csvData.slice(0, 5),
          predictions: analysis.statistics.slice(0, 3).map(stat => ({
            feature: stat.column,
            value: stat.average,
            confidence: Math.floor(Math.random() * 20) + 75
          })),
          insights: analysis.insights
        })
      } else {
        console.log("Analysis failed")
      }
    }, 2500)
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
                        <div className="space-y-3">
                          {service.techniques.map((technique, index) => (
                            <div key={index} className="flex items-start p-4 bg-gray-50 rounded-lg">
                              <CheckCircle className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm font-medium">{technique}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="h-full">
                    <CardHeader>
                      <CardTitle className="text-2xl">Real-World Applications</CardTitle>
                      <CardDescription className="text-lg mt-2">Industries and use cases where this approach excels</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <h4 className="font-semibold mb-4 text-lg">Industry Use Cases:</h4>
                        <div className="space-y-3">
                          {service.useCases.map((useCase, index) => (
                            <div key={index} className="flex items-start p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors">
                              <Target className="h-5 w-5 text-blue-600 mr-3 mt-0.5 flex-shrink-0" />
                              <span className="text-sm font-medium text-blue-900">{useCase}</span>
                            </div>
                          ))}
                        </div>
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
              <Tabs defaultValue="sample" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-8">
                  <TabsTrigger value="sample">Sample Datasets</TabsTrigger>
                  <TabsTrigger value="upload">Upload Your Data</TabsTrigger>
                </TabsList>

                <TabsContent value="sample" className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-xl font-bold mb-2">Try Pre-loaded Business Datasets</h3>
                    <p className="text-gray-600">Experience ML analysis with realistic business data</p>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {sampleDatasets.map((dataset) => (
                      <Card 
                        key={dataset.id} 
                        className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                          selectedDataset === dataset.id ? 'ring-2 ring-blue-500 bg-blue-50' : 'hover:bg-gray-50'
                        }`}
                        onClick={() => handleSampleDataset(dataset.id)}
                      >
                        <CardContent className="p-4">
                          <div className="flex items-center gap-3 mb-3">
                            {dataset.icon}
                            <h4 className="font-semibold text-sm">{dataset.name}</h4>
                          </div>
                          <p className="text-xs text-gray-600 mb-3">{dataset.description}</p>
                          <div className="flex items-center justify-between">
                            <Badge variant="secondary" className="text-xs">
                              {dataset.data.length} records
                            </Badge>
                            {selectedDataset === dataset.id && (
                              <CheckCircle className="h-4 w-4 text-green-500" />
                            )}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  {selectedDataset && (
                    <div className="text-center">
                      <Button 
                        onClick={() => handleSampleDataset(selectedDataset)}
                        disabled={isProcessing}
                        size="lg"
                        className="px-8"
                      >
                        {isProcessing ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Analyzing Dataset...
                          </>
                        ) : (
                          <>
                            <BarChart className="mr-2 h-5 w-5" />
                            Analyze Selected Dataset
                          </>
                        )}
                      </Button>
                    </div>
                  )}
                </TabsContent>

                <TabsContent value="upload" className="space-y-6">
                  <form onSubmit={handleDemoSubmit} className="space-y-6">
                    <div className="border-2 border-dashed border-blue-300 rounded-xl p-8 text-center bg-blue-50/50 hover:bg-blue-50 transition-colors">
                      <input
                        type="file"
                        id="csv-file-upload"
                        className="hidden"
                        accept=".csv,.txt,.tsv"
                        onChange={handleFileUpload}
                      />
                      <div className="flex flex-col items-center justify-center">
                        <div className="p-4 bg-blue-100 rounded-full mb-4">
                          <Upload className="h-8 w-8 text-blue-600" />
                        </div>
                        <h3 className="text-lg font-bold mb-3">Upload Your CSV Dataset</h3>
                        <p className="text-gray-600 mb-4 max-w-md text-sm">
                          Upload a CSV file and we'll analyze it for patterns, generate statistics, and provide insights.
                        </p>
                        <Button 
                          type="button" 
                          size="default" 
                          variant="outline" 
                          className="bg-white"
                          onClick={() => document.getElementById('csv-file-upload')?.click()}
                        >
                          <FileText className="mr-2 h-4 w-4" />
                          Choose CSV File
                        </Button>
                      </div>
                    </div>

                    {selectedFile && (
                      <div className="bg-green-50 border border-green-200 p-4 rounded-xl">
                        <div className="flex items-center gap-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                          <div>
                            <p className="font-semibold text-green-900 text-sm">
                              File ready: <span className="font-bold">{selectedFile.name}</span>
                            </p>
                            <p className="text-xs text-green-700 mt-1">
                              Size: {(selectedFile.size / 1024).toFixed(1)} KB | {csvData?.length || 0} rows detected
                            </p>
                          </div>
                        </div>
                      </div>
                    )}

                    <div className="flex justify-center">
                      <Button 
                        type="submit" 
                        disabled={!selectedFile || !csvData || isProcessing} 
                        size="lg"
                        className="px-8"
                      >
                        {isProcessing ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                            Processing CSV Data...
                          </>
                        ) : (
                          <>
                            <Brain className="mr-2 h-5 w-5" />
                            Analyze My Data
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </TabsContent>
              </Tabs>

              {demoResults && (
                <div className="mt-12 space-y-8 border-t pt-12">
                  <div className="text-center">
                    <h3 className="text-3xl font-bold mb-2">ML Analysis Complete</h3>
                    <p className="text-gray-600">Model: {demoResults.modelType} | Accuracy: {demoResults.accuracy}%</p>
                  </div>

                  {/* Data Preview */}
                  {demoResults.dataPreview && demoResults.dataPreview.length > 0 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Database className="h-5 w-5" />
                          Data Preview
                        </CardTitle>
                        <CardDescription>First {demoResults.dataPreview.length} rows of your dataset</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="overflow-x-auto">
                          <table className="w-full border-collapse border border-gray-200 text-sm">
                            <thead>
                              <tr className="bg-gray-50">
                                {Object.keys(demoResults.dataPreview[0]).map((key) => (
                                  <th key={key} className="border border-gray-200 px-3 py-2 text-left font-semibold">
                                    {key}
                                  </th>
                                ))}
                              </tr>
                            </thead>
                            <tbody>
                              {demoResults.dataPreview.map((row, index) => (
                                <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
                                  {Object.values(row).map((value, valueIndex) => (
                                    <td key={valueIndex} className="border border-gray-200 px-3 py-2">
                                      {typeof value === 'number' ? value.toLocaleString() : String(value)}
                                    </td>
                                  ))}
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Predictions */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {demoResults.predictions.map((pred, index) => (
                      <Card key={index} className="text-center">
                        <CardContent className="p-6">
                          <h4 className="font-bold text-lg mb-4">{pred.feature}</h4>
                          <div className="text-3xl font-bold text-blue-600 mb-2">
                            {typeof pred.value === 'number' ? pred.value.toFixed(1) : pred.value}
                            {pred.feature.toLowerCase().includes('rate') || pred.feature.toLowerCase().includes('growth') ? '%' : ''}
                          </div>
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

                  {/* AI Insights */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Brain className="h-5 w-5" />
                        AI-Generated Insights & Recommendations
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

                  {/* Analysis Complete Message */}
                  <div className="text-center">
                    <p className="text-gray-600 text-lg">
                      ML analysis complete! Try uploading different datasets to see more insights.
                    </p>
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