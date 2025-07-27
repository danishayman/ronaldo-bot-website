import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--discord-bg-primary)' }}>
      {/* Navigation */}
      <nav style={{ backgroundColor: 'var(--discord-bg-tertiary)' }} className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold" style={{ color: 'var(--discord-text-primary)' }}>
                  🤖 Ronaldo Bot
                </span>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <Link 
                href="#features" 
                className="font-medium transition-colors hover:underline"
                style={{ color: 'var(--discord-text-secondary)' }}
              >
                Features
              </Link>
              <Link 
                href="#commands" 
                className="font-medium transition-colors hover:underline"
                style={{ color: 'var(--discord-text-secondary)' }}
              >
                Commands
              </Link>
              <Link 
                href="/privacy" 
                className="font-medium transition-colors hover:underline"
                style={{ color: 'var(--discord-text-secondary)' }}
              >
                Privacy
              </Link>
              <Link 
                href="/terms" 
                className="font-medium transition-colors hover:underline"
                style={{ color: 'var(--discord-text-secondary)' }}
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-20 text-center">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-5xl sm:text-6xl font-extrabold mb-6" style={{ color: 'var(--discord-text-primary)' }}>
                Stay Hydrated Like{' '}
                <span style={{ color: 'var(--discord-brand)' }}>A Champion!</span>{' '}
                <span className="text-4xl">🏆</span>
              </h1>
              <p className="text-xl mb-8 max-w-3xl mx-auto" style={{ color: 'var(--discord-text-secondary)' }}>
                SIUUUU! Ronaldo Bot helps you and your friends stay hydrated during Discord voice chats with motivational reminders inspired by Cristiano Ronaldo.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <a
                  href="https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=2048&scope=bot%20applications.commands"
                  className="px-8 py-4 text-lg font-semibold rounded-lg transition-all transform hover:scale-105 flex items-center gap-2"
                  style={{ 
                    backgroundColor: 'var(--discord-brand)', 
                    color: 'white'
                  }}
                >
                  ⚽ Invite to Discord
                </a>
                <Link
                  href="#features"
                  className="px-8 py-4 text-lg font-semibold rounded-lg border-2 transition-all"
                  style={{ 
                    borderColor: 'var(--discord-brand)',
                    color: 'var(--discord-brand)',
                    backgroundColor: 'transparent'
                  }}
                >
                  Learn More
                </Link>
              </div>

              {/* Hero Image */}
              <div className="flex justify-center">
                <div 
                  className="w-80 h-80 rounded-2xl p-4 flex items-center justify-center"
                  style={{ backgroundColor: 'var(--discord-bg-secondary)' }}
                >
                  <Image
                    src="https://media.tenor.com/vm1WwOBQWUMAAAAM/euro2020-cristiano-ronaldo.gif"
                    alt="Ronaldo Celebration"
                    width={300}
                    height={300}
                    className="rounded-xl"
                    unoptimized
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id="features" className="py-20" style={{ backgroundColor: 'var(--discord-bg-secondary)' }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wide uppercase mb-2" style={{ color: 'var(--discord-brand)' }}>
              Features
            </h2>
            <p className="text-4xl font-extrabold mb-4" style={{ color: 'var(--discord-text-primary)' }}>
              Everything you need to stay hydrated
            </p>
            <p className="text-xl max-w-2xl mx-auto" style={{ color: 'var(--discord-text-secondary)' }}>
              Ronaldo Bot brings championship-level hydration to your Discord server with these amazing features.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
            <div 
              className="p-6 rounded-lg border"
              style={{ 
                backgroundColor: 'var(--discord-bg-chat)',
                borderColor: 'var(--discord-border)'
              }}
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mr-4"
                  style={{ backgroundColor: 'var(--discord-brand)' }}
                >
                  🎮
                </div>
                <h3 className="text-xl font-semibold" style={{ color: 'var(--discord-text-primary)' }}>
                  Voice Channel Integration
                </h3>
              </div>
              <p style={{ color: 'var(--discord-text-secondary)' }}>
                Automatically monitors voice channels and creates hydration sessions for active users.
              </p>
            </div>

            <div 
              className="p-6 rounded-lg border"
              style={{ 
                backgroundColor: 'var(--discord-bg-chat)',
                borderColor: 'var(--discord-border)'
              }}
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mr-4"
                  style={{ backgroundColor: 'var(--discord-green)' }}
                >
                  ⏰
                </div>
                <h3 className="text-xl font-semibold" style={{ color: 'var(--discord-text-primary)' }}>
                  Customizable Intervals
                </h3>
              </div>
              <p style={{ color: 'var(--discord-text-secondary)' }}>
                Set reminders from 30 to 180 minutes to match your session needs.
              </p>
            </div>

            <div 
              className="p-6 rounded-lg border"
              style={{ 
                backgroundColor: 'var(--discord-bg-chat)',
                borderColor: 'var(--discord-border)'
              }}
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mr-4"
                  style={{ backgroundColor: 'var(--discord-yellow)' }}
                >
                  👥
                </div>
                <h3 className="text-xl font-semibold" style={{ color: 'var(--discord-text-primary)' }}>
                  Multi-User Sessions
                </h3>
              </div>
              <p style={{ color: 'var(--discord-text-secondary)' }}>
                Join/leave system allows friends to participate in group hydration goals.
              </p>
            </div>

            <div 
              className="p-6 rounded-lg border"
              style={{ 
                backgroundColor: 'var(--discord-bg-chat)',
                borderColor: 'var(--discord-border)'
              }}
            >
              <div className="flex items-center mb-4">
                <div 
                  className="w-12 h-12 rounded-lg flex items-center justify-center text-2xl mr-4"
                  style={{ backgroundColor: 'var(--discord-red)' }}
                >
                  🎬
                </div>
                <h3 className="text-xl font-semibold" style={{ color: 'var(--discord-text-primary)' }}>
                  Ronaldo-Themed Content
                </h3>
              </div>
              <p style={{ color: 'var(--discord-text-secondary)' }}>
                12+ unique GIFs and motivational quotes from the GOAT himself.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Commands Section */}
      <div id="commands" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-sm font-semibold tracking-wide uppercase mb-2" style={{ color: 'var(--discord-brand)' }}>
              Commands
            </h2>
            <p className="text-4xl font-extrabold" style={{ color: 'var(--discord-text-primary)' }}>
              Simple slash commands
            </p>
          </div>

          <div 
            className="rounded-lg p-8"
            style={{ 
              backgroundColor: 'var(--discord-bg-secondary)',
              border: `1px solid var(--discord-border)`
            }}
          >
            <div className="grid gap-6 md:grid-cols-2">
              <div 
                className="p-6 rounded-lg"
                style={{ backgroundColor: 'var(--discord-bg-chat)' }}
              >
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--discord-text-primary)' }}>
                  /ronaldo start
                </h3>
                <p className="mb-4" style={{ color: 'var(--discord-text-secondary)' }}>
                  Start a water reminder session
                </p>
                <div 
                  className="px-3 py-2 rounded text-sm font-mono"
                  style={{ 
                    backgroundColor: 'var(--discord-bg-tertiary)',
                    color: 'var(--discord-green)'
                  }}
                >
                  /ronaldo start interval:60
                </div>
              </div>
              
              <div 
                className="p-6 rounded-lg"
                style={{ backgroundColor: 'var(--discord-bg-chat)' }}
              >
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--discord-text-primary)' }}>
                  /ronaldo stop
                </h3>
                <p className="mb-4" style={{ color: 'var(--discord-text-secondary)' }}>
                  Stop the current session
                </p>
                <div 
                  className="px-3 py-2 rounded text-sm font-mono"
                  style={{ 
                    backgroundColor: 'var(--discord-bg-tertiary)',
                    color: 'var(--discord-green)'
                  }}
                >
                  /ronaldo stop
                </div>
              </div>
              
              <div 
                className="p-6 rounded-lg"
                style={{ backgroundColor: 'var(--discord-bg-chat)' }}
              >
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--discord-text-primary)' }}>
                  /ronaldo join
                </h3>
                <p className="mb-4" style={{ color: 'var(--discord-text-secondary)' }}>
                  Join an active session
                </p>
                <div 
                  className="px-3 py-2 rounded text-sm font-mono"
                  style={{ 
                    backgroundColor: 'var(--discord-bg-tertiary)',
                    color: 'var(--discord-green)'
                  }}
                >
                  /ronaldo join
                </div>
              </div>
              
              <div 
                className="p-6 rounded-lg"
                style={{ backgroundColor: 'var(--discord-bg-chat)' }}
              >
                <h3 className="text-lg font-semibold mb-3" style={{ color: 'var(--discord-text-primary)' }}>
                  /ronaldo leave
                </h3>
                <p className="mb-4" style={{ color: 'var(--discord-text-secondary)' }}>
                  Leave the current session
                </p>
                <div 
                  className="px-3 py-2 rounded text-sm font-mono"
                  style={{ 
                    backgroundColor: 'var(--discord-bg-tertiary)',
                    color: 'var(--discord-green)'
                  }}
                >
                  /ronaldo leave
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20" style={{ backgroundColor: 'var(--discord-brand)' }}>
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-extrabold text-white mb-4">
            Ready to stay hydrated?
          </h2>
          <h3 className="text-3xl font-bold text-white mb-6">
            Add Ronaldo Bot today!
          </h3>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of Discord servers already using Ronaldo Bot to stay hydrated like champions.
          </p>
          <a
            href="https://discord.com/api/oauth2/authorize?client_id=YOUR_CLIENT_ID&permissions=2048&scope=bot%20applications.commands"
            className="inline-flex items-center px-8 py-4 text-lg font-semibold rounded-lg bg-white text-blue-600 hover:bg-gray-100 transition-all transform hover:scale-105"
          >
            ⚽ Invite to Discord
          </a>
        </div>
      </div>

      {/* Footer */}
      <footer style={{ backgroundColor: 'var(--discord-bg-tertiary)' }}>
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              <Link 
                href="/privacy" 
                className="hover:underline transition-colors"
                style={{ color: 'var(--discord-text-secondary)' }}
              >
                Privacy Policy
              </Link>
              <Link 
                href="/terms" 
                className="hover:underline transition-colors"
                style={{ color: 'var(--discord-text-secondary)' }}
              >
                Terms of Service
              </Link>
            </div>
            <div className="mt-8 md:mt-0 md:order-1">
              <p className="text-center text-base" style={{ color: 'var(--discord-text-secondary)' }}>
                &copy; 2025 Ronaldo Bot. Made with ❤️ and lots of 💧
              </p>
              <p className="text-center text-sm mt-2" style={{ color: 'var(--discord-text-muted)' }}>
                SIUUUU! 🐐⚽ Remember: Champions stay hydrated! 🏆💧
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
