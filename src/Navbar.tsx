// Navbar.tsx
import React, { useState, useEffect, useRef } from "react";
import { Infinity, X, Menu } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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
      const offset = 100; // Adjust based on your navbar height
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({ top: elementPosition - offset, behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="fixed w-full z-50 px-4 sm:px-6 lg:px-8 top-4">
      <nav className="w-[1300px] mx-auto bg-[#112240]/80 backdrop-blur-sm rounded-full border border-[#233554] shadow-lg">
        <div className="px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo Section */}
            <div className="flex items-center">
              <Infinity className="h-8 w-8 text-[#64ffda]" />
              <span className="ml-2 text-xl font-semibold">Fishers Of Men</span>
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <button
                  onClick={() => scrollToSection("DYS")}
                  className="text-[#8892b0] hover:text-[#64ffda] transition-colors capitalize"
                >
                  Discover Yourself
                </button>
                <button
                  onClick={() =>
                    window.open("https://fishers-of-men.pages.dev", "_blank")
                  }
                  className="text-[#8892b0] hover:text-[#64ffda] transition-colors capitalize"
                >
                  DSA
                </button>
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-[#8892b0] hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 mt-2">
              <div className="mx-4 bg-[#112240] rounded-lg border border-[#233554] shadow-lg">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  <button
                    onClick={() => scrollToSection("DYS")}
                    className="block px-3 py-2 text-[#8892b0] hover:text-[#64ffda] transition-colors w-full text-left capitalize rounded-md hover:bg-[#1a365d]/50"
                  >
                    DYS
                  </button>
                  <button
                    onClick={() =>
                      window.open("https://your-dsa-link.com", "_blank")
                    }
                    className="block px-3 py-2 text-[#8892b0] hover:text-[#64ffda] transition-colors w-full text-left capitalize rounded-md hover:bg-[#1a365d]/50"
                  >
                    DSA
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
