import Link from "next/link";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-800">
      {/* Navigation */}
      <nav className="bg-black/20 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex-shrink-0 flex items-center">
                <span className="text-2xl font-bold text-white">🤖 Ronaldo Bot</span>
              </Link>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/#features" className="text-white hover:text-blue-300 transition-colors">
                Features
              </Link>
              <Link href="/#commands" className="text-white hover:text-blue-300 transition-colors">
                Commands
              </Link>
              <Link href="/privacy" className="text-blue-300 font-semibold">
                Privacy
              </Link>
              <Link href="/terms" className="text-white hover:text-blue-300 transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Privacy Policy Content */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          <p className="text-gray-300 mb-6">
            <strong>Last Updated:</strong> July 25, 2025
          </p>

          <div className="space-y-8 text-gray-200">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Introduction</h2>
              <p className="mb-4">
                Welcome to Ronaldo Bot! This Privacy Policy explains how we collect, use, and protect your information when you use our Discord bot service. By using Ronaldo Bot, you agree to the practices described in this policy.
              </p>
              <p>
                Ronaldo Bot is designed to help Discord users stay hydrated during voice chat sessions with minimal data collection and maximum privacy protection.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-blue-300 mb-3">2.1 Automatically Collected Information</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Discord User IDs:</strong> We temporarily store your Discord user ID during active hydration sessions to track participants.</li>
                <li><strong>Voice Channel Information:</strong> We monitor voice channel membership to determine when to start/stop sessions.</li>
                <li><strong>Guild (Server) IDs:</strong> We store server IDs to manage bot settings per server.</li>
                <li><strong>Channel IDs:</strong> We store text channel IDs where the bot sends reminders.</li>
              </ul>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">2.2 Information We Do NOT Collect</h3>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Voice chat audio or recordings</li>
                <li>Private messages or DMs</li>
                <li>Personal information (real names, emails, etc.)</li>
                <li>Message content outside of bot commands</li>
                <li>User activity outside of bot interactions</li>
                <li>Location data or IP addresses</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. How We Use Your Information</h2>
              <p className="mb-4">We use the collected information solely for the following purposes:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Session Management:</strong> Track who is participating in hydration reminder sessions</li>
                <li><strong>Voice Channel Monitoring:</strong> Determine when to automatically start/stop sessions</li>
                <li><strong>Reminder Delivery:</strong> Send water reminder messages to the correct channels and users</li>
                <li><strong>Bot Functionality:</strong> Execute slash commands and maintain session state</li>
              </ul>
              <p>
                <strong>We do not use your information for advertising, analytics, or any commercial purposes beyond providing the bot service.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. Data Storage and Retention</h2>
              <h3 className="text-xl font-semibold text-blue-300 mb-3">4.1 Temporary Storage</h3>
              <p className="mb-4">
                All user data is stored temporarily in memory (RAM) only during active bot sessions. This includes:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Active session participants</li>
                <li>Current voice channel members</li>
                <li>Pending session timeouts</li>
              </ul>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">4.2 Data Deletion</h3>
              <p className="mb-4">
                Your data is automatically deleted when:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>You leave a hydration session</li>
                <li>A session ends (no participants remaining)</li>
                <li>You leave the voice channel</li>
                <li>The bot restarts or goes offline</li>
              </ul>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">4.3 No Persistent Storage</h3>
              <p>
                <strong>Ronaldo Bot does not maintain any persistent databases or log files containing user information.</strong> All data is temporary and session-based only.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Data Sharing and Third Parties</h2>
              <p className="mb-4">
                <strong>We do not share, sell, or transfer your data to third parties.</strong> The only data sharing that occurs is:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Discord API:</strong> Standard Discord bot interactions as required for functionality</li>
                <li><strong>No Analytics Services:</strong> We do not use Google Analytics, tracking pixels, or similar services</li>
                <li><strong>No Advertising Networks:</strong> We do not share data with advertisers or marketing companies</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Your Rights and Control</h2>
              <h3 className="text-xl font-semibold text-blue-300 mb-3">6.1 Data Control</h3>
              <p className="mb-4">You have complete control over your data:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Leave Sessions:</strong> Use <code className="bg-gray-700 px-2 py-1 rounded">/ronaldo leave</code> to remove yourself from active sessions</li>
                <li><strong>Stop Participation:</strong> Leave the voice channel to automatically be removed from sessions</li>
                <li><strong>Server Removal:</strong> Server administrators can kick the bot to immediately clear all server data</li>
              </ul>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">6.2 Data Requests</h3>
              <p className="mb-4">
                Since we don't store persistent data, there is no personal data to request, download, or delete. All data is automatically cleared as described above.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Security Measures</h2>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>Memory-Only Storage:</strong> No persistent files or databases that could be compromised</li>
                <li><strong>Minimal Permissions:</strong> Bot requests only essential Discord permissions</li>
                <li><strong>No External Connections:</strong> Bot doesn't connect to external services or APIs</li>
                <li><strong>Regular Updates:</strong> Bot code is regularly updated for security best practices</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Children's Privacy (COPPA)</h2>
              <p className="mb-4">
                Ronaldo Bot is designed to be safe for users of all ages. Since we don't collect personal information and all data is temporary, we comply with COPPA requirements. However, Discord's own Terms of Service require users to be 13+ years old.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. International Users</h2>
              <p className="mb-4">
                Ronaldo Bot can be used internationally. Since we don't store persistent data, there are no cross-border data transfer concerns. All temporary data processing occurs in Discord's infrastructure according to their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Changes to This Privacy Policy</h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. When we do:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>We will update the "Last Updated" date at the top of this policy</li>
                <li>Significant changes will be announced in our support server (if applicable)</li>
                <li>Continued use of the bot constitutes acceptance of the updated policy</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Contact Information</h2>
              <p className="mb-4">
                If you have questions about this Privacy Policy or Ronaldo Bot's data practices, you can contact us through:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>GitHub:</strong> Open an issue on our GitHub repository</li>
                <li><strong>Discord:</strong> Join our support server (link in bot's status)</li>
                <li><strong>Bot Commands:</strong> All data management can be done through bot commands</li>
              </ul>
            </section>

            <section className="border-t border-white/20 pt-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Summary</h2>
              <div className="bg-green-900/30 border border-green-500/50 rounded-lg p-4">
                <p className="font-semibold text-green-300 mb-2">🔒 Your Privacy is Protected:</p>
                <ul className="list-disc list-inside space-y-1 text-green-200">
                  <li>No persistent data storage</li>
                  <li>No personal information collected</li>
                  <li>No data sharing with third parties</li>
                  <li>Automatic data deletion when sessions end</li>
                  <li>Complete user control over participation</li>
                </ul>
              </div>
            </section>
          </div>

          <div className="mt-8 pt-6 border-t border-white/20">
            <Link 
              href="/"
              className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
