import Link from "next/link";

interface NavigationProps {
  currentPage?: 'home' | 'privacy' | 'terms';
}

export default function Navigation({ currentPage = 'home' }: NavigationProps) {
  return (
    <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <span className="text-2xl font-bold text-white">🤖 Ronaldo Bot</span>
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link 
              href="/#features" 
              className={`transition-colors ${currentPage === 'home' ? 'text-blue-300' : 'text-white hover:text-blue-300'}`}
            >
              Features
            </Link>
            <Link 
              href="/#commands" 
              className={`transition-colors ${currentPage === 'home' ? 'text-blue-300' : 'text-white hover:text-blue-300'}`}
            >
              Commands
            </Link>
            <Link 
              href="/privacy" 
              className={`transition-colors ${currentPage === 'privacy' ? 'text-blue-300 font-semibold' : 'text-white hover:text-blue-300'}`}
            >
              Privacy
            </Link>
            <Link 
              href="/terms" 
              className={`transition-colors ${currentPage === 'terms' ? 'text-blue-300 font-semibold' : 'text-white hover:text-blue-300'}`}
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
