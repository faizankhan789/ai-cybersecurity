import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const techStacks = {
  frameworks: [
    { name: "TensorFlow", logo: "/tensorflow.png" },
    { name: "PyTorch", logo: "/pytorch.png" },
    { name: "Scikit-learn", logo: "/scikit-learn.png" },
    { name: "Keras", logo: "/keras.png" },
    { name: "OpenCV", logo: "/opencv.png" },
  ],
  cloud: [
    { name: "AWS", logo: "/aws.png" },
    { name: "Google Cloud", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Azure", logo: "/azure.png" },
    { name: "IBM Watson", logo: "/placeholder.svg?height=60&width=120" },
  ],
  tools: [
    { name: "Jupyter", logo: "/jupyter.png" },
    { name: "MLflow", logo: "/placeholder.svg?height=60&width=120" },
    { name: "Kubeflow", logo: "/placeholder.svg?height=60&width=120" },
    { name: "DVC", logo: "/placeholder.svg?height=60&width=120" },
  ],
}

export default function TechStackShowcase() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Tech Stack</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We leverage industry-leading technologies to build robust, scalable AI solutions.
          </p>
        </div>

        <Tabs defaultValue="frameworks" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mb-8">
            <TabsTrigger value="frameworks">Frameworks & Libraries</TabsTrigger>
            <TabsTrigger value="cloud">Cloud Platforms</TabsTrigger>
            <TabsTrigger value="tools">MLOps Tools</TabsTrigger>
          </TabsList>

          <TabsContent value="frameworks">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center">
                  {techStacks.frameworks.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <Image
                        src={tech.logo || "/placeholder.svg"}
                        alt={`${tech.name} logo`}
                        width={120}
                        height={60}
                        className="h-16 object-contain mb-2"
                      />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button asChild variant="outline">
                    <Link href="/resources/documentation">View API Documentation</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cloud">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                  {techStacks.cloud.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <Image
                        src={tech.logo || "/placeholder.svg"}
                        alt={`${tech.name} logo`}
                        width={120}
                        height={60}
                        className="h-16 object-contain mb-2"
                      />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button asChild variant="outline">
                    <Link href="/resources/cloud-deployment">Cloud Deployment Guides</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="tools">
            <Card>
              <CardContent className="p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
                  {techStacks.tools.map((tech, index) => (
                    <div key={index} className="flex flex-col items-center">
                      <Image
                        src={tech.logo || "/placeholder.svg"}
                        alt={`${tech.name} logo`}
                        width={120}
                        height={60}
                        className="h-16 object-contain mb-2"
                      />
                      <span className="text-sm font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <Button asChild variant="outline">
                    <Link href="/resources/mlops">MLOps Best Practices</Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}

