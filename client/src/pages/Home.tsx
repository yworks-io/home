import { Code2, Zap, Database, Cpu } from "lucide-react";

/**
 * YiBot Workstation - Geek Edition
 * 
 * Design Philosophy: Minimal & Tech-focused
 * - Dark background (#0a0a0a)
 * - Neon green (#00ff00) accents
 * - Monospace font throughout
 * - Minimal animations
 * - Clean, sparse layout
 */

export default function Home() {
  const capabilities = [
    {
      id: "research",
      title: "Research & Analysis",
      description: "Deep research capabilities for comprehensive insights",
      icon: Database,
    },
    {
      id: "content",
      title: "Content Curation",
      description: "Intelligent content discovery and organization",
      icon: Code2,
    },
    {
      id: "automation",
      title: "Task Automation",
      description: "Automate complex workflows and tasks",
      icon: Zap,
    },
    {
      id: "integration",
      title: "Multi-Tool Integration",
      description: "Seamless integration with APIs and services",
      icon: Cpu,
    },
  ];

  const useCases = [
    {
      title: "Research & Intelligence",
      description: "Gather, analyze, and synthesize information from diverse sources",
    },
    {
      title: "Content Discovery",
      description: "Discover and curate relevant content tailored to your needs",
    },
    {
      title: "Workflow Automation",
      description: "Automate complex processes and integrate multiple tools",
    },
    {
      title: "Data Analysis",
      description: "Process and analyze structured data for actionable insights",
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-gray-300 bg-gradient-to-b from-gray-50 to-white shadow-md">
        <div className="container flex items-center justify-between h-16">
          <div className="flex items-center gap-3">
            <img src="/images/yworks-logo.webp" alt="YWorks Logo" className="h-10 w-auto" />
          </div>
          <div className="flex items-center gap-8">
            <a href="#capabilities" className="text-xs text-gray-700 hover:text-gray-900 transition-colors font-mono">capabilities</a>
            <a href="#usecases" className="text-xs text-gray-700 hover:text-gray-900 transition-colors font-mono">use_cases</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-16 overflow-hidden">
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto animate-slide-up">
            <div className="mb-8">
              <span className="text-xs text-primary font-mono">$ yibot --init</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-4 font-mono">
              YiBot
            </h1>
            
            <p className="text-sm text-muted-foreground mb-8 leading-relaxed font-mono">
              An autonomous AI agent designed to assist with research,<br />
              content curation, data analysis, and workflow automation.<br />
              Powered by cutting-edge language models and autonomous<br />
              reasoning capabilities.
            </p>

            <button className="px-4 py-2 bg-primary text-primary-foreground text-xs font-mono hover:opacity-80 transition-opacity border border-primary">
              learn_more →
            </button>
          </div>
        </div>
      </section>

      {/* Capabilities Section */}
      <section id="capabilities" className="py-16 relative">
        <div className="container relative z-10">
          <div className="mb-12">
            <h2 className="text-2xl font-bold font-mono mb-2">core_capabilities</h2>
            <div className="w-12 h-px bg-primary"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <div
                  key={capability.id}
                  className="group relative animate-slide-up border border-border p-6 hover:border-primary transition-colors"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <Icon className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-sm font-bold font-mono">{capability.title}</h3>
                      <p className="text-xs text-muted-foreground mt-1 font-mono">
                        {capability.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section id="usecases" className="py-16 relative">
        <div className="container relative z-10">
          <div className="mb-12">
            <h2 className="text-2xl font-bold font-mono mb-2">use_cases</h2>
            <div className="w-12 h-px bg-primary"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="group relative animate-slide-up border border-border p-6 hover:border-primary transition-colors"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="mb-3">
                  <span className="text-xs text-primary font-mono">[{index}]</span>
                </div>
                <h3 className="text-sm font-bold font-mono mb-2">{useCase.title}</h3>
                <p className="text-xs text-muted-foreground font-mono leading-relaxed">
                  {useCase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 relative">
        <div className="container relative z-10">
          <div className="max-w-2xl mx-auto border border-border p-8 animate-slide-up">
            <h2 className="text-xl font-bold font-mono mb-4">about</h2>
            <p className="text-xs text-muted-foreground mb-4 leading-relaxed font-mono">
              YiBot is an autonomous AI agent built to handle complex tasks that require reasoning,
              research, and integration across multiple tools and data sources. Whether you need to
              gather intelligence, analyze data, or automate workflows, YiBot provides intelligent
              assistance powered by advanced language models and autonomous capabilities.
            </p>
            <p className="text-xs text-muted-foreground font-mono leading-relaxed">
              Designed for professionals who need reliable, intelligent assistance in their work,
              YiBot combines natural language understanding with the ability to interact with
              external systems and APIs to accomplish your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border py-8 mt-16">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <img src="/images/yworks-logo.webp" alt="YWorks Logo" className="h-6 w-auto" />
              </div>
              <p className="text-xs text-muted-foreground font-mono">yibot_workstation</p>
            </div>
            
            <div>
              <h4 className="text-xs font-bold font-mono text-primary mb-3">connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="https://x.com/yworks_io" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono">
                    x.com/yworks_io
                  </a>
                </li>
                <li>
                  <a href="https://paragraph.com/@yworks" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono">
                    paragraph.com/@yworks
                  </a>
                </li>
                <li>
                  <a href="https://www.moltbook.com/u/YiBot" target="_blank" rel="noopener noreferrer" className="text-xs text-muted-foreground hover:text-primary transition-colors font-mono">
                    moltbook.com/u/YiBot
                  </a>
                </li>
              </ul>
            </div>
            
            <div className="text-xs text-muted-foreground font-mono">
              © 2026 yibot. all rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
