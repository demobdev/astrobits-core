"use client"

import * as React from "react"
import { Check, Copy, ExternalLink, Github, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"

export function GetStartedModal() {
  const [copied, setCopied] = React.useState<string | null>(null)

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(type)
      setTimeout(() => setCopied(null), 2000)
    } catch (err) {
      console.error('Failed to copy: ', err)
    }
  }

  const githubRepo = "https://github.com/demobdev/astrobits-core"
  const npmInstall = "npm create astrobits-core@latest"
  const gitClone = "git clone https://github.com/demobdev/astrobits-core.git"

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="w-full sm:w-auto px-6 sm:px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm sm:text-base font-medium">
          Get Started
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">🚀 Get Started with AstroBits Core</DialogTitle>
          <DialogDescription className="text-base">
            Choose your preferred way to get started with AstroBits Core
          </DialogDescription>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Quick Start Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Download className="size-5" />
              Quick Start
            </h3>
            <div className="space-y-3">
              <div>
                <Label htmlFor="npm-install" className="text-sm font-medium">
                  Create new project
                </Label>
                <div className="flex gap-2 mt-1">
                  <Input
                    id="npm-install"
                    value={npmInstall}
                    readOnly
                    className="font-mono text-sm"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(npmInstall, "npm")}
                    className="shrink-0"
                  >
                    {copied === "npm" ? <Check className="size-4" /> : <Copy className="size-4" />}
                  </Button>
                </div>
              </div>
              
              <div>
                <Label htmlFor="git-clone" className="text-sm font-medium">
                  Clone repository
                </Label>
                <div className="flex gap-2 mt-1">
                  <Input
                    id="git-clone"
                    value={gitClone}
                    readOnly
                    className="font-mono text-sm"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(gitClone, "git")}
                    className="shrink-0"
                  >
                    {copied === "git" ? <Check className="size-4" /> : <Copy className="size-4" />}
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* GitHub Section */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold flex items-center gap-2">
              <Github className="size-5" />
              GitHub Repository
            </h3>
            <div className="space-y-3">
              <div>
                <Label htmlFor="github-url" className="text-sm font-medium">
                  Repository URL
                </Label>
                <div className="flex gap-2 mt-1">
                  <Input
                    id="github-url"
                    value={githubRepo}
                    readOnly
                    className="font-mono text-sm"
                  />
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => copyToClipboard(githubRepo, "github")}
                    className="shrink-0"
                  >
                    {copied === "github" ? <Check className="size-4" /> : <Copy className="size-4" />}
                  </Button>
                </div>
              </div>
              
              <div className="flex gap-2">
                <Button
                  onClick={() => window.open(githubRepo, '_blank')}
                  className="flex-1"
                  variant="outline"
                >
                  <Github className="size-4 mr-2" />
                  View on GitHub
                  <ExternalLink className="size-4 ml-2" />
                </Button>
                <Button
                  onClick={() => window.open(`${githubRepo}/archive/refs/heads/main.zip`, '_blank')}
                  className="flex-1"
                  variant="outline"
                >
                  <Download className="size-4 mr-2" />
                  Download ZIP
                </Button>
              </div>
            </div>
          </div>

          <Separator />

          {/* Documentation Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">📚 Documentation</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Button
                variant="outline"
                onClick={() => window.open('/docs/getting-started', '_blank')}
                className="justify-start"
              >
                <ExternalLink className="size-4 mr-2" />
                Getting Started Guide
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('/docs/mcp', '_blank')}
                className="justify-start"
              >
                <ExternalLink className="size-4 mr-2" />
                MCP Integration
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('/docs/ui', '_blank')}
                className="justify-start"
              >
                <ExternalLink className="size-4 mr-2" />
                UI Libraries
              </Button>
              <Button
                variant="outline"
                onClick={() => window.open('/docs/auth', '_blank')}
                className="justify-start"
              >
                <ExternalLink className="size-4 mr-2" />
                Authentication
              </Button>
            </div>
          </div>

          {/* Success Message */}
          {copied && (
            <div className="fixed bottom-4 right-4 bg-green-500 text-white px-4 py-2 rounded-lg shadow-lg transition-opacity">
              <div className="flex items-center gap-2">
                <Check className="size-4" />
                Copied to clipboard!
              </div>
            </div>
          )}
        </div>
      </DialogContent>
    </Dialog>
  )
}
