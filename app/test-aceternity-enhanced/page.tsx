"use client";
import { TextRevealCard } from "@/components/ui/text-reveal-card";
import { FocusCards } from "@/components/ui/focus-cards";
import HeroSectionOne from "@/components/hero-section-demo-1";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

export default function TestAceternityPage() {
  // Sample data for FocusCards component
  const focusCardsData = [
    {
      title: "AstroBits Core",
      src: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop"
    },
    {
      title: "MCP System",
      src: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=600&fit=crop"
    },
    {
      title: "Voice-Driven Development",
      src: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&h=600&fit=crop"
    }
  ];

  // Sample data for BentoGrid
  const bentoItems = [
    {
      title: "AstroBits Core",
      description: "The development DNA that powers your universe",
      header: "🚀",
      icon: "⚡"
    },
    {
      title: "MCP System",
      description: "Model Context Protocol integration",
      header: "🔗",
      icon: "🌐"
    },
    {
      title: "Voice-Driven",
      description: "Natural language development",
      header: "🎤",
      icon: "💬"
    },
    {
      title: "Real Components",
      description: "Pulled from actual registries",
      header: "📦",
      icon: "✨"
    }
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section with Background Beams */}
      <section className="relative overflow-hidden py-20">
        <BackgroundBeams />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <TextGenerateEffect 
              words="✨ AstroBits Core - Enhanced Test"
              className="text-6xl font-bold mb-6"
            />
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real components installed via MCP and shadcn CLI - Now with enhanced process!
            </p>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Bento Grid Layout</h2>
            <p className="text-xl text-gray-300">Modern responsive grid with hover effects</p>
          </div>
          <BentoGrid className="max-w-4xl mx-auto">
            {bentoItems.map((item, i) => (
              <BentoGridItem
                key={i}
                title={item.title}
                description={item.description}
                header={item.header}
                icon={item.icon}
                className={i === 3 || i === 6 ? "md:col-span-2" : ""}
              />
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Text Reveal Card with Fake Image */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">3D Text Reveal Card</h2>
            <p className="text-xl text-gray-300">Move your mouse over the card to see the 3D effect</p>
          </div>
          <div className="flex justify-center">
            <TextRevealCard
              text="AstroBits Core"
              revealText="MCP-Powered Development System"
              imageUrl="https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop"
            />
          </div>
        </div>
      </section>

      {/* Focus Cards */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Focus Cards</h2>
            <p className="text-xl text-gray-300">Hover over cards to focus on them</p>
          </div>
          <FocusCards cards={focusCardsData} />
        </div>
      </section>

      {/* Hero Section Demo */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Hero Section Demo</h2>
            <p className="text-xl text-gray-300">Complex hero layout with animations</p>
          </div>
          <HeroSectionOne />
        </div>
      </section>

      {/* Status Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">✅ Enhanced Aceternity UI Status</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              <div className="text-center p-6 bg-green-500/20 rounded-lg border border-green-500/30">
                <div className="text-3xl font-bold text-green-400 mb-2">6</div>
                <div className="text-sm text-gray-300">Components</div>
              </div>
              <div className="text-center p-6 bg-blue-500/20 rounded-lg border border-blue-500/30">
                <div className="text-3xl font-bold text-blue-400 mb-2">Real</div>
                <div className="text-sm text-gray-300">Components</div>
              </div>
              <div className="text-center p-6 bg-purple-500/20 rounded-lg border border-purple-500/30">
                <div className="text-3xl font-bold text-purple-400 mb-2">MCP</div>
                <div className="text-sm text-gray-300">Installed</div>
              </div>
              <div className="text-center p-6 bg-amber-500/20 rounded-lg border border-amber-500/30">
                <div className="text-3xl font-bold text-amber-400 mb-2">Enhanced</div>
                <div className="text-sm text-gray-300">Process</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}