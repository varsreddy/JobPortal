// Footer.jsx
import { Linkedin, Twitter, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800 py-3 mt-10 border-t border-gray-300">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Brand + Copyright */}
        <div className="text-left mb-4 md:mb-0">
          <h1 className="text-xl font-bold">JobHunt</h1>
          <p className="text-sm text-gray-600">
            © {new Date().getFullYear()} JobHunt. All rights reserved.
          </p>
        </div>

        {/* Right Side: Social Icons */}
        <div className="flex space-x-6">
          <a
            href="#"
            aria-label="LinkedIn"
            className=" hover:scale-110 transition-transform"
          >
            <Linkedin size={28} strokeWidth={2.5} />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:scale-110 transition-transform"
          >
            <Twitter size={28} strokeWidth={2.5} />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="hover:scale-110 transition-transform"
          >
            <Facebook size={28} strokeWidth={2.5} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
