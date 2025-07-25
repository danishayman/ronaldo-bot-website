import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-800">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-white">🤖 Ronaldo Bot</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#features" className="text-white hover:text-blue-300 transition-colors">
                Features
              </Link>
              <Link href="#commands" className="text-white hover:text-blue-300 transition-colors">
                Commands
              </Link>
              <Link href="/privacy" className="text-white hover:text-blue-300 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-white hover:text-blue-300 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block">Stay Hydrated Like</span>{' '}
                  <span className="block text-blue-400">A Champion! 🏆</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  SIUUUU! Ronaldo Bot helps you and your friends stay hydrated during Discord voice chats with motivational reminders inspired by Cristiano Ronaldo.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a
                      href="https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=2048&scope=bot%20applications.commands"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      ⚽ Invite to Discord
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <Link
                      href="#features"
                      className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-blue-100 hover:bg-blue-200 md:py-4 md:text-lg md:px-10 transition-colors"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
            <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center">
              <Image
                src="https://media.tenor.com/vm1WwOBQWUMAAAAM/euro2020-cristiano-ronaldo.gif"
                alt="Ronaldo Celebration"
                width={200}
                height={200}
                className="rounded-full"
                unoptimized
              />
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-12 bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Features</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Everything you need to stay hydrated
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
              Ronaldo Bot brings championship-level hydration to your Discord server with these amazing features.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  🎮
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">Voice Channel Integration</p>
                <p className="mt-2 ml-16 text-base text-gray-300">
                  Automatically monitors voice channels and creates hydration sessions for active users.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  ⏰
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">Customizable Intervals</p>
                <p className="mt-2 ml-16 text-base text-gray-300">
                  Set reminders from 30 to 180 minutes to match your session needs.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  👥
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">Multi-User Sessions</p>
                <p className="mt-2 ml-16 text-base text-gray-300">
                  Join/leave system allows friends to participate in group hydration goals.
                </p>
              </div>

              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  🎬
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-white">Ronaldo-Themed Content</p>
                <p className="mt-2 ml-16 text-base text-gray-300">
                  12+ unique GIFs and motivational quotes from the GOAT himself.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Commands Section */}
      <div id="commands" className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-blue-400 font-semibold tracking-wide uppercase">Commands</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
              Simple slash commands
            </p>
          </div>

          <div className="mt-10">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-lg p-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">/ronaldo start</h3>
                  <p className="text-gray-300 mb-2">Start a water reminder session</p>
                  <code className="bg-gray-700 text-green-400 px-2 py-1 rounded text-sm">
                    /ronaldo start interval:60
                  </code>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">/ronaldo stop</h3>
                  <p className="text-gray-300 mb-2">Stop the current session</p>
                  <code className="bg-gray-700 text-green-400 px-2 py-1 rounded text-sm">
                    /ronaldo stop
                  </code>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">/ronaldo join</h3>
                  <p className="text-gray-300 mb-2">Join an active session</p>
                  <code className="bg-gray-700 text-green-400 px-2 py-1 rounded text-sm">
                    /ronaldo join
                  </code>
                </div>
                
                <div className="bg-gray-800/50 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-white mb-2">/ronaldo leave</h3>
                  <p className="text-gray-300 mb-2">Leave the current session</p>
                  <code className="bg-gray-700 text-green-400 px-2 py-1 rounded text-sm">
                    /ronaldo leave
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-blue-600">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
            <span className="block">Ready to stay hydrated?</span>
            <span className="block">Add Ronaldo Bot today!</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-blue-100">
            Join thousands of Discord servers already using Ronaldo Bot to stay hydrated like champions.
          </p>
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=2048&scope=bot%20applications.commands"
            className="mt-8 w-full inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-blue-50 sm:w-auto transition-colors"
          >
            ⚽ Invite to Discord
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <Link href="/privacy" className="text-gray-400 hover:text-gray-300">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-gray-400 hover:text-gray-300">
              Terms of Service
            </Link>
          </div>
          <div className="mt-8 md:mt-0 md:order-1">
            <p className="text-center text-base text-gray-400">
              &copy; 2025 Ronaldo Bot. Made with ❤️ and lots of 💧
            </p>
            <p className="text-center text-sm text-gray-500 mt-2">
              SIUUUU! 🐐⚽ Remember: Champions stay hydrated! 🏆💧
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
