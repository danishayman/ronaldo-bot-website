import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          <Link href="/privacy" className="text-gray-400 hover:text-gray-300 transition-colors">
            Privacy Policy
          </Link>
          <Link href="/terms" className="text-gray-400 hover:text-gray-300 transition-colors">
            Terms of Service
          </Link>
          <a 
            href="https://github.com/danishayman/Ronaldo-Bot" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            GitHub
          </a>
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
            &copy; 2025 Ronaldo Bot. Made with ❤️ and lots of 💧 by{" "}
            <a
              href="https://danishaiman.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-600 underline transition-colors"
            >
              danishayman
            </a>
            </p>
          <p className="text-center text-sm text-gray-500 mt-2">
            SIUUUU! 🐐⚽ Remember: Champions stay hydrated! 🏆💧
          </p>
        </div>
      </div>
    </footer>
  );
}
