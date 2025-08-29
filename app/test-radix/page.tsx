import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/radix/accordion";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/radix/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/radix/tabs";
import { Button } from "@/components/ui/button";

export default function TestRadixPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            🎯 Radix UI Test Page
          </h1>
          <p className="text-xl text-gray-300">
            Testing Radix UI primitive components with AstroBits Core
          </p>
        </div>

        {/* Accordion Test */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Accordion Component</h2>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-white">What is Radix UI?</AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Radix UI provides unstyled, accessible components for building high‑quality design systems and web apps.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-white">How does it work with Shadcn/UI?</AccordionTrigger>
              <AccordionContent className="text-gray-300">
                Shadcn/UI is built on top of Radix UI primitives, providing styled components with the same accessibility features.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Dialog Test */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Dialog Component</h2>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-black">
                Open Dialog
              </Button>
            </DialogTrigger>
            <DialogContent className="bg-gray-800 border-gray-700">
              <DialogHeader>
                <DialogTitle className="text-white">Radix UI Dialog</DialogTitle>
                <DialogDescription className="text-gray-300">
                  This is a modal dialog built with Radix UI primitives.
                </DialogDescription>
              </DialogHeader>
              <p className="text-gray-300">
                Radix UI provides the foundation for accessible, unstyled components that you can style however you want.
              </p>
            </DialogContent>
          </Dialog>
        </div>

        {/* Tabs Test */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-white mb-4">Tabs Component</h2>
          <Tabs defaultValue="account" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-gray-800">
              <TabsTrigger value="account" className="text-white data-[state=active]:bg-blue-600">Account</TabsTrigger>
              <TabsTrigger value="password" className="text-white data-[state=active]:bg-blue-600">Password</TabsTrigger>
            </TabsList>
            <TabsContent value="account" className="text-gray-300 mt-4">
              <p>Account settings and preferences go here.</p>
            </TabsContent>
            <TabsContent value="password" className="text-gray-300 mt-4">
              <p>Password management and security settings.</p>
            </TabsContent>
          </Tabs>
        </div>

        {/* Status Section */}
        <div className="bg-white/5 rounded-lg p-6 border border-white/10">
          <h3 className="text-xl font-bold text-white mb-4">✅ Radix UI Status</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-green-500/20 rounded-lg">
              <div className="text-2xl font-bold text-green-400">3</div>
              <div className="text-sm text-gray-300">Components</div>
            </div>
            <div className="text-center p-4 bg-blue-500/20 rounded-lg">
              <div className="text-2xl font-bold text-blue-400">100%</div>
              <div className="text-sm text-gray-300">Accessible</div>
            </div>
            <div className="text-center p-4 bg-purple-500/20 rounded-lg">
              <div className="text-2xl font-bold text-purple-400">Ready</div>
              <div className="text-sm text-gray-300">Status</div>
            </div>
            <div className="text-center p-4 bg-amber-500/20 rounded-lg">
              <div className="text-2xl font-bold text-amber-400">MCP</div>
              <div className="text-sm text-gray-300">Powered</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}