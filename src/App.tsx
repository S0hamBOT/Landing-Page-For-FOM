import React, { useEffect, useRef } from "react";
import {
  Code2,
  GitBranch,
  Bug,
  Infinity,
  Menu,
  X,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";

function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll(".animate-on-scroll").forEach((el) => {
      observerRef.current?.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#020617] via-[#0f172a] to-[#1e293b] text-white">
      {/* Navigation */}
      <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 top-4">
        <nav className="w-[1300px] mx-auto bg-[#112240]/80 backdrop-blur-sm rounded-full border border-[#233554] shadow-lg">
          <div className="px-4 sm:px-6">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <Infinity className="h-8 w-8 text-[#64ffda]" />
                <span className="ml-2 text-xl font-semibold">
                  Fishers Of Men
                </span>
              </div>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <div className="flex items-center space-x-8">
                  {["principles", "debugging", "agile", "karma"].map(
                    (section) => (
                      <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className="text-[#8892b0] hover:text-[#64ffda] transition-colors capitalize"
                      >
                        {section}
                      </button>
                    )
                  )}
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
                  {["principles", "debugging", "agile", "karma"].map(
                    (section) => (
                      <button
                        key={section}
                        onClick={() => scrollToSection(section)}
                        className="block px-3 py-2 text-[#8892b0] hover:text-[#64ffda] transition-colors w-full text-left capitalize rounded-md hover:bg-[#1a365d]/50"
                      >
                        {section}
                      </button>
                    )
                  )}
                </div>
              </div>
            </div>
          )}
        </nav>
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-8 relative z-10">
          {/* Image on the Left */}
          <div className="flex justify-center">
            <img
              src="/photos/without_bg_logo1.png"
              alt="Hero Image"
              className="max-w-md rounded-lg transform transition-transform duration-1000 ease-out hover:scale-105 opacity-0 animate-fade-in-scale"
            />
          </div>

          {/* Text on the Right */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-[#64ffda] to-[#a8fff0] text-transparent bg-clip-text opacity-0 transform translate-y-8 animate-fade-in-slide-up glowing-text">
              Where Code Meets Consciousness
            </h1>
            <p className="text-xl text-[#8892b0] max-w-3xl animate-scale-up">
              Bridging development with ancient wisdom.
            </p>
          </div>
        </div>

        {/* Inline Styles for Animations */}
        <style>{`
          @keyframes fadeInScale {
            0% {
              opacity: 0;
              transform: scale(0.9);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }

          .animate-fade-in-scale {
            animation: fadeInScale 1.5s ease-out forwards;
          }

          @keyframes fadeInSlideUp {
            0% {
              opacity: 0;
              transform: translateY(20px);
            }
            100% {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .animate-fade-in-slide-up {
            animation: fadeInSlideUp 1.5s ease-out forwards;
          }

          @keyframes scaleUp {
            0% {
              transform: scale(0.95);
            }
            100% {
              transform: scale(1);
            }
          }

          .animate-scale-up {
            animation: scaleUp 1s ease-out forwards;
          }

          
        `}</style>
      </section>

      {/* Code Your Life: A Blueprint from Software to Spirituality Section */}
      <section
        id="principles"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0">
            <div className="flex items-center justify-center mb-12">
              <Code2 className="h-12 w-12 text-[#64ffda] mr-4" />
              <h2 className="text-4xl font-bold text-white tracking-tight">
                Code with Purpose, Live with Purpose
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-[#8892b0] text-lg leading-relaxed">
                  <span className="text-[#64ffda] font-bold">Imagine:</span>{" "}
                  Every function has <strong>dharma</strong>, a role, a reason.
                  A structured app, a clear objective. This reflects{" "}
                  <strong>dharma</strong>, our inherent duty.
                  <br />
                  <br />
                  <span className="text-[#64ffda] font-bold">
                    Now, consider your life.
                  </span>{" "}
                  Clarity? Direction? Aimless code, messy software. Aimless
                  life, lost and unfulfilled. This stems from attachment.
                  <br />
                  <br />
                  <span className="text-[#64ffda] font-bold">
                    Spirituality, the compass.
                  </span>{" "}
                  'Why am I doing this?' This inquiry, <strong>yoga</strong>.
                  Life's more than work—growth, service, fulfillment. Design
                  life, not just live it.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/photos/purpose.png"
                  alt="Meditation and Code"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="karma"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0">
            <div className="flex items-center justify-center mb-12">
              <GitBranch className="h-12 w-12 text-[#64ffda] mr-4" />
              <h2 className="text-3xl font-bold">
                Serving a Higher Purpose: The True Joy of Contribution
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="rounded-lg overflow-hidden order-2 md:order-1">
                <img
                  src="/photos/contribution.png"
                  alt="Version Control"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <p className="text-[#8892b0] text-lg leading-relaxed">
                  <span className="text-[#64ffda] font-semibold">Imagine:</span>{" "}
                  You spend weeks writing the perfect open-source project.
                  Someone forks it, improves it, and doesn’t even credit you.
                  Ouch.
                  <br />
                  <br />
                  <span className="text-[#64ffda] font-semibold">
                    Now, consider your life.
                  </span>{" "}
                  Ever noticed how the best moments come from{" "}
                  <strong>helping others</strong>—not just chasing personal
                  gain? In coding, mentorship and ethical development make the
                  community stronger. In life, selfless service (<i>Seva</i>)
                  does the same.
                  <br />
                  <br />
                  <span className="text-[#64ffda] font-semibold">
                    Spirituality is the ultimate open-source contribution.
                  </span>{" "}
                  Shift from <i>"What can I get?"</i> to{" "}
                  <i>"How can I give?"</i>—whether through code, mentorship, or
                  just being kind. The most impactful projects (and lives) are
                  built on giving.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Agile Section */}
      <section
        id="principles"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0">
            <div className="flex items-center justify-center mb-12">
              <Bug className="h-12 w-12 text-[#64ffda] mr-4" />
              <h2 className="text-4xl font-bold text-white tracking-tight">
                Debugging the Mind: Removing Internal Bugs
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-[#8892b0] text-lg leading-relaxed">
                  <span className="text-[#64ffda] font-semibold">Imagine:</span>{" "}
                  You’re deep in code, everything looks fine… until you run it.{" "}
                  <i>Syntax error.</i> You fix it. Now, it’s an{" "}
                  <i>undefined variable.</i> Finally, the app works, but it’s
                  slower than a dial-up connection.
                  <br />
                  <br />
                  <span className="text-[#64ffda] font-semibold">
                    Now, consider your life.
                  </span>{" "}
                  Just like buggy code slows down execution, negative thoughts,
                  self-doubt, and distractions make life lag. Ever tried
                  focusing while overthinking? It’s like running a loop that
                  never breaks.
                  <br />
                  <br />
                  <span className="text-[#64ffda] font-semibold">
                    Spirituality is the ultimate debugger.
                  </span>{" "}
                  Mindfulness and meditation help us step through our mental
                  code, find the bottlenecks, and optimize our thoughts. A clear
                  mind means fewer crashes—both in code and in life.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img
                  src="/photos/debug.png"
                  alt="Meditation and Code"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Karma Section */}

      <section
        id="dys"
        className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="animate-on-scroll opacity-0">
            <div className="flex items-center justify-center mb-12">
              <BookOpen className="h-12 w-12 text-[#64ffda] mr-4" />
              <h2 className="text-3xl font-bold">
                Discover Yourself: The Ultimate Debugging Framework for Life
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              {/* Left Section: Image & Description */}
              <div className="rounded-lg overflow-hidden order-2 md:order-1">
                <img
                  src="/photos/hg_rsp.png"
                  alt="Self Discovery"
                  className="w-full h-full object-cover rounded-lg"
                  loading="lazy"
                />
                <div className="bg-[#1a1a2e] p-6 mt-4 rounded-lg shadow-lg text-[#8892b0]">
                  <h3 className="text-2xl font-bold text-white mb-4">
                    HG Radheshyam Das
                  </h3>

                  {/* Description */}
                  <div className="text-left">
                    <p>
                      <strong>- IIT Bombay Alumni</strong> (Topper of his
                      batch); served at Thermax and CECRI as Senior Design
                      Executive.
                    </p>
                    <p>
                      <strong>- Founding President</strong> of VOICE Youth Clubs
                      in Indian Universities (Vedic Oasis for Inspiration,
                      Culture and Education).
                    </p>
                    <p>
                      <strong>- President of ISKCON, Pune</strong> since 1997
                      with a community of 6000 members.
                    </p>
                    <p>
                      <strong>- Designer</strong> of internationally acclaimed
                      DISCOVER YOURSELF 8-session Course for youth and
                      corporates.
                    </p>
                    <p>
                      <strong>- Compiler of Youth Books</strong> like{" "}
                      <i>'Stress to Smile'</i>,{" "}
                      <i>'Ten Volume Gita for all made easy (GAME)'</i> etc.
                    </p>
                    <p>
                      <strong>- Global Excellence Award</strong> winner for
                      educating Youth in Bhagavad Gita.
                    </p>
                    <p>
                      <strong>- Youth Trainer</strong> for 30+ years in top
                      institutions like IITs, NITs, and reaches out to multiple
                      cities across India.
                    </p>
                    <p>
                      <strong>- Seminar Presenter</strong> at MIT Boston,
                      Stanford University, Texas A&M, University of Texas
                      Dallas, etc.
                    </p>
                    <p>
                      <strong>- Corporate Seminar Presenter</strong> at
                      Microsoft, Amazon, Bank of America, Infosys, Cognizant,
                      Persistent, etc.
                    </p>
                    <p>
                      <strong>- GDO(Global Duty Officer)</strong> for Western
                      youth outreach in USA, Canada for three months/year
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Section: DYS Course Photo */}
              <div className="space-y-6 order-1 md:order-2">
                <p className="text-[#8892b0] text-lg leading-relaxed">
                  <span className="text-[#64ffda] font-semibold">Imagine:</span>{" "}
                  You’ve started debugging your thoughts with mindfulness, but
                  what if you had a <strong>complete roadmap</strong> for life’s
                  biggest questions?
                  <br />
                  <br />
                  <span className="text-[#64ffda] font-semibold">
                    Just like coding has core concepts, self-awareness starts
                    with discovery.
                  </span>{" "}
                  The <strong>DYS (Discover Yourself)</strong> program is like a
                  <i>debugger for the soul</i>, helping you optimize life
                  itself.
                  <br />
                </p>

                <p className="text-[#8892b0] text-lg leading-relaxed">
                  <span className="text-[#64ffda] font-semibold">
                    Connecting to Mindfulness & Meditation:
                  </span>{" "}
                  Just like <i>"Practice mindfulness and meditation"</i>{" "}
                  improves focus, this course helps you step back, refactor your
                  beliefs, and build a strong foundation for life—just like a
                  well-structured codebase.
                </p>

                {/* DYS Image */}
                <div className="rounded-lg overflow-hidden mt-8">
                  <img
                    src="/photos/dys.png"
                    alt="Discover Yourself Course"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>

                {/* Know More Button */}
                <div className="mt-6 flex justify-center">
                  <a
                    href="YOUR_LINK_HERE"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 text-lg font-semibold text-white bg-[#2a3a55] rounded-lg shadow-lg hover:bg-[#64ffda] transition duration-300"
                  >
                    Know More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-[#8892b0]">
            Uniting the wisdom of ancient teachings with modern development
            practices
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
