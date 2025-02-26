import React, { useEffect, useRef } from 'react';
import { Code2, GitBranch, Bug, Infinity, Menu, X } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e293b] text-white">
      {/* Navigation */}
      <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 top-4">
        <nav className="max-w-4xl mx-auto bg-[#112240]/80 backdrop-blur-sm rounded-full border border-[#233554] shadow-lg">
          <div className="px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Infinity className="h-8 w-8 text-[#64ffda]" />
                <span className="ml-2 text-xl font-semibold">DevKarma</span>
              </div>
              
              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-8">
                  {['principles', 'debugging', 'agile', 'karma'].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="text-[#8892b0] hover:text-[#64ffda] transition-colors capitalize"
                    >
                      {section}
                    </button>
                  ))}
                </div>
              </div>

              {/* Mobile Navigation Button */}
              <div className="md:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="text-[#8892b0] hover:text-white"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2">
              <div className="mx-4 bg-[#112240] rounded-lg border border-[#233554] shadow-lg">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {['principles', 'debugging', 'agile', 'karma'].map((section) => (
                    <button
                      key={section}
                      onClick={() => scrollToSection(section)}
                      className="block px-3 py-2 text-[#8892b0] hover:text-[#64ffda] transition-colors w-full text-left capitalize rounded-md hover:bg-[#1a365d]/50"
                    >
                      {section}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 bg-gradient-to-r from-[#64ffda] to-[#a8fff0] text-transparent bg-clip-text">
            Where Code Meets Consciousness
          </h1>
          <p className="text-xl text-[#8892b0] max-w-3xl mx-auto">
            Discover the profound connection between software development and the timeless wisdom of the Bhagavad Gita
          </p>
        </div>
      </section>

      {/* Clean Code Principles Section */}
      <section id="principles" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="animate-on-scroll opacity-0">
          <div className="flex items-center justify-center mb-12">
            <Code2 className="h-12 w-12 text-[#64ffda] mr-4" />
            <h2 className="text-3xl font-bold">Clean Code & Mindful Living</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-[#8892b0]">
                "Just as a well-organized codebase brings clarity and efficiency, the Gita teaches us that a disciplined mind leads to clarity of purpose."
              </p>
              <pre className="bg-[#112240] p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">
{`// The path of clean code
function purifyCode(codebase) {
  return codebase
    .removeRedundancy()
    .maintainClarity()
    .followPrinciples();
}`}
                </code>
              </pre>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?auto=format&fit=crop&q=80&w=800"
                alt="Meditation and Code"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Debugging Section */}
      <section id="debugging" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="animate-on-scroll opacity-0">
          <div className="flex items-center justify-center mb-12">
            <Bug className="h-12 w-12 text-[#64ffda] mr-4" />
            <h2 className="text-3xl font-bold">Debugging & Self-Reflection</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&q=80&w=800"
                alt="Reflection"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <p className="text-[#8892b0]">
                "Like debugging reveals the root cause of software issues, self-reflection illuminates the source of our challenges."
              </p>
              <pre className="bg-[#112240] p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">
{`// The practice of reflection
function introspect(mind) {
  const patterns = observe(mind);
  const insights = analyze(patterns);
  return transform(insights);
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Agile Section */}
      <section id="agile" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="animate-on-scroll opacity-0">
          <div className="flex items-center justify-center mb-12">
            <Infinity className="h-12 w-12 text-[#64ffda] mr-4" />
            <h2 className="text-3xl font-bold">Agile & Adaptability</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-[#8892b0]">
                "The Gita teaches us to act without attachment to results, just as Agile methodology embraces change and adaptation."
              </p>
              <pre className="bg-[#112240] p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">
{`// Embracing change
class AgileSpirit {
  adapt(change) {
    this.embrace(change);
    this.learn();
    this.grow();
  }
}`}
                </code>
              </pre>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=800"
                alt="Agile Development"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Karma Section */}
      <section id="karma" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="animate-on-scroll opacity-0">
          <div className="flex items-center justify-center mb-12">
            <GitBranch className="h-12 w-12 text-[#64ffda] mr-4" />
            <h2 className="text-3xl font-bold">Version Control & Karma</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden order-2 md:order-1">
              <img
                src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&q=80&w=800"
                alt="Version Control"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="space-y-6 order-1 md:order-2">
              <p className="text-[#8892b0]">
                "Like version control tracks every change in our code, karma records every action in our journey."
              </p>
              <pre className="bg-[#112240] p-4 rounded-lg overflow-x-auto">
                <code className="text-sm">
{`// The law of karma
async function karmaFlow() {
  const actions = await perform(duty);
  const results = await manifest(actions);
  return evolve(results);
}`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#8892b0]">
            Uniting the wisdom of ancient teachings with modern development practices
          </p>
          <div className="mt-8 flex justify-center space-x-6">
            <Infinity className="h-6 w-6 text-[#64ffda]" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;