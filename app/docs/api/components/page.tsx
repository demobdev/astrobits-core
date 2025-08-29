"use client"

import DocsLayout from "@/components/DocsLayout"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Box, Clock, FileText, Settings } from "lucide-react"

export default function ComponentsAPIPage() {
  return (
    <DocsLayout
      title="Components API - Component library API reference"
      breadcrumbs={[{"title":"Home","href":"/"},{"title":"Documentation","href":"/docs"},{"title":"Components","href":"/docs/components"},{"title":"Components API","href":"/docs/api/components/page"}]}
    >
      <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 rounded-full text-sm font-medium mb-6">
            <Box className="size-4" />
            Components API
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 tracking-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Components API
            </span>
          </h1>
          
          <p className="text-xl sm:text-2xl mb-8 text-muted-foreground max-w-4xl mx-auto">
            Component library API reference
          </p>
        </div>

        {/* Placeholder Content */}
        <Card className="mb-16 border-2 border-blue-200 dark:border-blue-800 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950/20 dark:to-purple-950/20">
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold mb-4">Coming Soon</CardTitle>
            <p className="text-lg text-muted-foreground">
              Comprehensive documentation for Components API is being prepared.
            </p>
          </CardHeader>
          <CardContent>
            <div className="grid gap-6 md:grid-cols-3 text-center">
              <div>
                <div className="w-16 h-16 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Box className="size-8 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Components API</h3>
                <p className="text-muted-foreground">Component library API reference</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-purple-100 dark:bg-purple-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="size-8 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Documentation</h3>
                <p className="text-muted-foreground">Comprehensive guides and examples</p>
              </div>
              <div>
                <div className="w-16 h-16 bg-pink-100 dark:bg-pink-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Settings className="size-8 text-pink-600 dark:text-pink-400" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Configuration</h3>
                <p className="text-muted-foreground">Setup and configuration options</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </DocsLayout>
  )
}