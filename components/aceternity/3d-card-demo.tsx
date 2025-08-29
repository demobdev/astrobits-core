"use client"

import { useState, useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Sparkles, 
  Rocket, 
  Star, 
  Zap,
  ArrowRight,
  ExternalLink
} from "lucide-react"

interface ThreeDCardDemoProps {
  className?: string
}

export function ThreeDCardDemo({ className }: ThreeDCardDemoProps) {
  const ref = useRef<HTMLDivElement>(null)
  const [isHovered, setIsHovered] = useState(false)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(
    mouseYSpring,
    [-0.5, 0.5],
    ["17.5deg", "-17.5deg"]
  )
  const rotateY = useTransform(
    mouseXSpring,
    [-0.5, 0.5],
    ["-17.5deg", "17.5deg"]
  )

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
    setIsHovered(false)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative w-80 h-96 ${className}`}
    >
      <div
        style={{
          transform: "translateZ(-75px)",
          transformStyle: "preserve-3d",
        }}
        className="absolute inset-4 rounded-2xl bg-gradient-to-br from-purple-600/20 to-pink-600/20 backdrop-blur-xl border border-white/10"
      />

      <Card
        style={{
          transform: "translateZ(50px)",
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/50 dark:to-pink-950/50 border-2 border-purple-200/50 dark:border-purple-800/50 backdrop-blur-sm"
      >
        <CardHeader className="text-center pb-4">
          <motion.div
            style={{
              transform: "translateZ(75px)",
            }}
            className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4"
          >
            <Sparkles className="size-8 text-white" />
          </motion.div>
          <motion.div
            style={{
              transform: "translateZ(75px)",
            }}
          >
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              AstroBits Core
            </CardTitle>
            <CardDescription className="text-base mt-2">
              Next-Generation Development Platform
            </CardDescription>
          </motion.div>
        </CardHeader>

        <CardContent className="space-y-4">
          <motion.div
            style={{
              transform: "translateZ(50px)",
            }}
            className="space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Performance</span>
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`size-4 ${
                      i < 4 ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Features</span>
              <Badge variant="secondary" className="bg-purple-100 text-purple-700 dark:bg-purple-900/20 dark:text-purple-300">
                <Zap className="size-3 mr-1" />
                Advanced
              </Badge>
            </div>

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Integration</span>
              <Badge variant="secondary" className="bg-pink-100 text-pink-700 dark:bg-pink-900/20 dark:text-pink-300">
                <Rocket className="size-3 mr-1" />
                Seamless
              </Badge>
            </div>
          </motion.div>

          <motion.div
            style={{
              transform: "translateZ(75px)",
            }}
            className="pt-4"
          >
            <Button 
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white"
              size="sm"
            >
              <ExternalLink className="size-4 mr-2" />
              Explore Features
              <ArrowRight className="size-4 ml-2" />
            </Button>
          </motion.div>
        </CardContent>

        {/* Glow effect */}
        <motion.div
          style={{
            transform: "translateZ(25px)",
          }}
          className="absolute inset-0 rounded-xl bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </Card>
    </motion.div>
  )
}
