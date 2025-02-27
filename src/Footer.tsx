const Footer = () => {
  return (
    <footer className="bg-transparent text-gray-400 py-6">
      {/* Separator Line */}
      <div className="border-t border-gray-700 w-full mb-6"></div>

      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left - Branding */}
        <div className="text-center md:text-left">
          <h1 className="text-lg font-semibold text-white">Fishers Of Men</h1>
          <p className="text-sm mt-1">Inspiring Spiritual Growth & Purpose</p>
        </div>

        {/* Right - Contact and Social Links */}
        <div className="flex flex-col items-center md:items-end mt-4 md:mt-0">
          <p className="text-sm mb-1 hover:text-[#64ffda] transition text-white">
            sohamjadhav.tech@gmail.com
          </p>
          <div className="flex space-x-6 mt-2">
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/photos/soham.png"
                alt="Portfolio of Soham Jadhav"
                className="w-7 h-7 filter hover:scale-110 transition rounded-full"
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/github.svg"
                alt="GitHub"
                className="w-7 h-7 filter invert hover:scale-110 transition"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-7 h-7 filter invert hover:scale-110 transition"
              />
            </a>
            <a
              href="https://medium.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v5/icons/medium.svg"
                alt="Medium"
                className="w-7 h-7 filter invert hover:scale-110 transition"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm mt-6">
        © {new Date().getFullYear()} Fishers Of Men. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
