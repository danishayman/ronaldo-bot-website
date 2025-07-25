import Link from "next/link";

export default function Terms() {
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
              <Link href="/privacy" className="text-white hover:text-blue-300 transition-colors">
                Privacy
              </Link>
              <Link href="/terms" className="text-blue-300 font-semibold">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Terms of Service Content */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          <p className="text-gray-300 mb-6">
            <strong>Last Updated:</strong> July 25, 2025
          </p>

          <div className="space-y-8 text-gray-200">
            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">1. Acceptance of Terms</h2>
              <p className="mb-4">
                By inviting, using, or interacting with Ronaldo Bot (the "Bot") in any Discord server, you agree to be bound by these Terms of Service ("Terms"). If you disagree with any part of these terms, you may not use the Bot.
              </p>
              <p>
                These Terms apply to all users of the Bot, including server administrators, moderators, and regular members.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">2. Description of Service</h2>
              <p className="mb-4">
                Ronaldo Bot is a Discord bot designed to help users stay hydrated during voice chat sessions by providing:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Timed water reminder notifications</li>
                <li>Voice channel monitoring for automatic session management</li>
                <li>Group hydration session coordination</li>
                <li>Motivational content inspired by Cristiano Ronaldo</li>
              </ul>
              <p>
                The Bot operates through Discord's slash command system and provides health-focused reminders to encourage proper hydration.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">3. Acceptable Use</h2>
              
              <h3 className="text-xl font-semibold text-blue-300 mb-3">3.1 Permitted Uses</h3>
              <p className="mb-4">You may use the Bot for:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Personal hydration reminders during Discord voice chats</li>
                <li>Group hydration sessions with friends or community members</li>
                <li>Health and wellness activities in appropriate Discord servers</li>
                <li>Gaming, study, or work session hydration support</li>
              </ul>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">3.2 Prohibited Uses</h3>
              <p className="mb-4">You may NOT use the Bot for:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Spamming or flooding channels with excessive commands</li>
                <li>Attempting to exploit or hack the Bot's functionality</li>
                <li>Using the Bot in violation of Discord's Terms of Service</li>
                <li>Commercial purposes without explicit permission</li>
                <li>Harassment, abuse, or inappropriate behavior towards other users</li>
                <li>Attempting to reverse engineer or copy the Bot's code</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">4. User Responsibilities</h2>
              
              <h3 className="text-xl font-semibold text-blue-300 mb-3">4.1 Server Administration</h3>
              <p className="mb-4">Server administrators are responsible for:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Ensuring the Bot is used appropriately in their server</li>
                <li>Managing permissions and access to Bot commands</li>
                <li>Addressing any misuse by server members</li>
                <li>Complying with Discord's Terms of Service and Community Guidelines</li>
              </ul>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">4.2 General Users</h3>
              <p className="mb-4">All users are responsible for:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Using Bot commands respectfully and appropriately</li>
                <li>Not interfering with other users' hydration sessions</li>
                <li>Following server rules and Discord's Community Guidelines</li>
                <li>Reporting any Bot issues or abuse to server administrators</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">5. Health and Safety Disclaimer</h2>
              <div className="bg-yellow-900/30 border border-yellow-500/50 rounded-lg p-4 mb-4">
                <p className="font-semibold text-yellow-300 mb-2">⚠️ Important Health Notice:</p>
                <ul className="list-disc list-inside space-y-1 text-yellow-200">
                  <li>Ronaldo Bot provides general hydration reminders for wellness purposes only</li>
                  <li>The Bot is NOT a medical device or health monitoring system</li>
                  <li>Hydration reminders are not personalized medical advice</li>
                  <li>Consult healthcare professionals for specific hydration needs</li>
                  <li>Users with medical conditions should follow their doctor's guidance</li>
                </ul>
              </div>
              <p>
                <strong>The Bot's developers are not responsible for any health-related consequences of following or not following the hydration reminders.</strong>
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">6. Bot Availability and Performance</h2>
              
              <h3 className="text-xl font-semibold text-blue-300 mb-3">6.1 Service Availability</h3>
              <p className="mb-4">
                We strive to maintain Bot availability but cannot guarantee 100% uptime. The Bot may be unavailable due to:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Scheduled maintenance and updates</li>
                <li>Discord API issues or outages</li>
                <li>Technical difficulties or server problems</li>
                <li>Emergency security measures</li>
              </ul>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">6.2 No Service Level Agreement</h3>
              <p>
                This is a free service provided without any service level agreements or uptime guarantees. We are not liable for any inconvenience caused by Bot downtime.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">7. Intellectual Property</h2>
              
              <h3 className="text-xl font-semibold text-blue-300 mb-3">7.1 Bot Content</h3>
              <p className="mb-4">
                The Bot includes content inspired by Cristiano Ronaldo for motivational purposes. We respect intellectual property rights and use:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Publicly available GIFs and media (properly attributed)</li>
                <li>Inspirational quotes in fair use context</li>
                <li>Original motivational content created for the Bot</li>
              </ul>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">7.2 User Rights</h3>
              <p>
                Users retain all rights to their own Discord messages and interactions. The Bot does not claim ownership of user-generated content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">8. Privacy and Data</h2>
              <p className="mb-4">
                Your privacy is important to us. Our data practices are detailed in our <Link href="/privacy" className="text-blue-300 hover:text-blue-200 underline">Privacy Policy</Link>, which includes:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Minimal data collection (temporary session data only)</li>
                <li>No persistent storage of personal information</li>
                <li>Automatic data deletion when sessions end</li>
                <li>No data sharing with third parties</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">9. Limitation of Liability</h2>
              <div className="bg-red-900/30 border border-red-500/50 rounded-lg p-4 mb-4">
                <p className="font-semibold text-red-300 mb-2">📋 Legal Disclaimer:</p>
                <div className="text-red-200 space-y-2">
                  <p>
                    <strong>TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE BOT IS PROVIDED "AS IS" WITHOUT WARRANTIES OF ANY KIND.</strong>
                  </p>
                  <p>
                    We shall not be liable for any direct, indirect, incidental, special, consequential, or punitive damages arising from your use of the Bot.
                  </p>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-blue-300 mb-3">9.1 Specific Limitations</h3>
              <p className="mb-4">We are not responsible for:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Health consequences related to hydration choices</li>
                <li>Discord server management or moderation issues</li>
                <li>Data loss due to Discord or technical issues</li>
                <li>Interference with other bots or Discord features</li>
                <li>Misuse of the Bot by server members</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">10. Termination</h2>
              
              <h3 className="text-xl font-semibold text-blue-300 mb-3">10.1 Termination by Users</h3>
              <p className="mb-4">You may stop using the Bot at any time by:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Leaving active hydration sessions</li>
                <li>Removing the Bot from your Discord server (if you're an admin)</li>
                <li>Not using Bot commands</li>
              </ul>

              <h3 className="text-xl font-semibold text-blue-300 mb-3">10.2 Termination by Us</h3>
              <p className="mb-4">We reserve the right to restrict or terminate Bot access for:</p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>Violation of these Terms of Service</li>
                <li>Abuse or misuse of Bot functionality</li>
                <li>Violation of Discord's Terms of Service</li>
                <li>Technical or security reasons</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">11. Discord Terms Compliance</h2>
              <p className="mb-4">
                By using Ronaldo Bot, you also agree to comply with:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><a href="https://discord.com/terms" className="text-blue-300 hover:text-blue-200 underline">Discord's Terms of Service</a></li>
                <li><a href="https://discord.com/guidelines" className="text-blue-300 hover:text-blue-200 underline">Discord's Community Guidelines</a></li>
                <li>Your Discord server's specific rules and guidelines</li>
              </ul>
              <p>
                Violations of Discord's terms may result in Bot restrictions or removal from your server.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">12. Changes to Terms</h2>
              <p className="mb-4">
                We may modify these Terms of Service at any time. When we do:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li>We will update the "Last Updated" date</li>
                <li>Significant changes will be announced through appropriate channels</li>
                <li>Continued use of the Bot constitutes acceptance of the updated terms</li>
                <li>If you disagree with changes, you should stop using the Bot</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">13. Contact and Support</h2>
              <p className="mb-4">
                For questions about these Terms of Service or Bot support:
              </p>
              <ul className="list-disc list-inside mb-4 space-y-2">
                <li><strong>GitHub Issues:</strong> Report bugs or request features on our repository</li>
                <li><strong>Discord Support:</strong> Join our support server (if available)</li>
                <li><strong>Documentation:</strong> Check our comprehensive README and guides</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-white mb-4">14. Governing Law</h2>
              <p>
                These Terms of Service are governed by applicable laws. Any disputes shall be resolved through appropriate legal channels. By using the Bot, you consent to the jurisdiction of competent courts for any legal matters.
              </p>
            </section>

            <section className="border-t border-white/20 pt-6">
              <h2 className="text-2xl font-semibold text-white mb-4">Summary</h2>
              <div className="bg-blue-900/30 border border-blue-500/50 rounded-lg p-4">
                <p className="font-semibold text-blue-300 mb-2">🤝 Simple Terms:</p>
                <ul className="list-disc list-inside space-y-1 text-blue-200">
                  <li>Use the Bot responsibly for hydration reminders</li>
                  <li>Follow Discord's rules and server guidelines</li>
                  <li>The Bot is for wellness, not medical advice</li>
                  <li>We respect your privacy and data</li>
                  <li>Service provided "as is" without guarantees</li>
                  <li>Be kind and help create a positive community</li>
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
