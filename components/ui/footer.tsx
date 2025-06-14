import Link from 'next/link';
import { Linkedin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">Seven Workflows</h3>
            <p className="text-gray-400 mb-6 max-w-md">
              Empowering businesses with cutting-edge AI solutions that automate processes, 
              accelerate growth, and dominate markets.
            </p>
            <div className="flex space-x-4">
              <Link 
                target="_blank"
                href="https://www.linkedin.com/in/ashutoshv19/" 
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </Link>
              <Link 
                target="_blank"
                href="mailto:ashutoshv262@gmail.com" 
                className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </Link>
       
            </div>
          </div>

          {/* Quick Links */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#services" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#about" className="text-gray-400 hover:text-white transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div> */}

          {/* Legal */}
          {/* <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div> */}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} Seven Workflows. All rights reserved.
          </p>
          <p className="text-gray-400 text-sm mt-4 sm:mt-0">
            Built with ❤️ for the future of AI
          </p>
        </div>
      </div>
    </footer>
  );
}