# 🤖⚽ Ronaldo Bot Website

> **SIUUUU!** 🐐 The official landing page for the championship-level Discord hydration bot inspired by Cristiano Ronaldo! 🏆💧

![Next.js](https://img.shields.io/badge/Next.js-15.4.4-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4.0-38bdf8?style=for-the-badge&logo=tailwind-css)

## 🌟 What is this?

This is the official website for **Ronaldo Bot** - a Discord water reminder bot that helps users stay hydrated during voice chat sessions with motivational content inspired by the GOAT himself, Cristiano Ronaldo! 

The website serves as the main landing page where users can:
- 📖 Learn about the bot's features
- 🎮 Invite the bot to their Discord server
- 📚 Read documentation and commands
- 📝 Access privacy policy and terms of service

## ✨ Features

### 🎨 Design & UI
- 🌙 **Discord-themed dark mode** with custom CSS variables
- 📱 **Fully responsive** design that looks great on all devices
- 🎭 **Modern animations** and hover effects
- 🍔 **Mobile-friendly navigation** with hamburger menu
- 🖼️ **Hero section** with Ronaldo celebration GIF

### 🚀 Technical Features
- ⚡ **Next.js 15** with App Router and Turbopack
- 🎯 **TypeScript** for type safety
- 🎨 **Tailwind CSS 4** for styling
- 📦 **Component-based architecture**
- 🔧 **ESLint** configuration for code quality

### 📄 Pages
- 🏠 `/` - Main landing page with features and bot invite
- 🔒 `/privacy` - Comprehensive privacy policy
- 📋 `/terms` - Terms of service

## 📁 Project Structure

```
ronaldo-bot-website/
├── 📁 app/
│   ├── 🏠 page.tsx              # Main landing page
│   ├── 🎨 layout.tsx            # Root layout with metadata
│   ├── 🌍 globals.css           # Global styles & Discord theme
│   ├── 🖼️ favicon.ico           # Site favicon
│   ├── 📁 privacy/
│   │   └── 📄 page.tsx          # Privacy policy page
│   └── 📁 terms/
│       └── 📄 page.tsx          # Terms of service page
├── 📁 components/
│   ├── 🍔 MobileMenu.tsx        # Mobile navigation component
│   ├── 🧭 Navigation.tsx        # Desktop navigation component
│   └── 🦶 Footer.tsx            # Footer component
├── 📁 public/
│   ├── 📄 file.svg              # File icon
│   ├── 🌐 globe.svg             # Globe icon
│   ├── ▶️ next.svg              # Next.js logo
│   ├── 🚀 vercel.svg            # Vercel logo
│   └── 🪟 window.svg            # Window icon
├── ⚙️ next.config.ts            # Next.js configuration
├── 🎨 tailwind.config.ts        # Tailwind CSS configuration
├── 📦 package.json              # Dependencies and scripts
├── 🔧 tsconfig.json             # TypeScript configuration
├── 🧹 eslint.config.mjs         # ESLint configuration
├── 🎨 postcss.config.mjs        # PostCSS configuration
└── 📖 README.md                 # This file!
```

## 🚀 Quick Start

### 📋 Prerequisites
- 🟢 **Node.js** 18+ 
- 📦 **npm** or **yarn** package manager

### 🛠️ Installation

1. **Clone the repository** 📥
```bash
git clone https://github.com/yourusername/ronaldo-bot-website.git
cd ronaldo-bot-website
```

2. **Install dependencies** 📦
```bash
npm install
# or
yarn install
```

3. **Start development server** 🚀
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser** 🌐  
Navigate to [http://localhost:3000](http://localhost:3000) to see the website!

### 🎯 Available Scripts

| Command | Description | Emoji |
|---------|-------------|-------|
| `npm run dev` | Start development server with Turbopack | 🚀 |
| `npm run build` | Build for production | 🏗️ |
| `npm run start` | Start production server | ▶️ |
| `npm run lint` | Run ESLint for code quality | 🔍 |

## 🎨 Customization

### 🎭 Discord Theme Variables
The website uses CSS custom properties for Discord-themed colors in `app/globals.css`:

```css
:root {
  --discord-bg-primary: #36393f;
  --discord-bg-secondary: #2f3136;
  --discord-bg-tertiary: #202225;
  --discord-brand: #5865f2;
  --discord-green: #57f287;
  /* ... and more! */
}
```

### 🔗 Bot Invite URL
**Invite Ronaldo Bot to your Discord server:** 
🤖 [**Add Ronaldo Bot to Discord**](https://discord.com/oauth2/authorize?client_id=1397772507804864572)

Update the Discord bot invite URL in `app/page.tsx`:
```typescript
// Replace with your actual Discord application client ID
href="https://discord.com/oauth2/authorize?client_id=[YOUR_CLIENT_ID]"
```

## 🚀 Deployment

### 🔷 Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with one click! ✨

### 🔷 Netlify
1. Build the project: `npm run build`
2. Upload the `out` folder to [Netlify](https://netlify.com)

### 🔷 Other Platforms
This Next.js project can be deployed on any platform that supports Node.js applications.

## 🤖 About Ronaldo Bot

The bot featured on this website helps Discord users stay hydrated during voice chat sessions with:

- ⏰ **Customizable reminder intervals** (30-180 minutes)
- 🎮 **Voice channel integration** and monitoring
- 👥 **Multi-user session management** with join/leave system
- 🎬 **Ronaldo-themed motivational content** (12+ unique GIFs)
- 🔒 **Privacy-focused design** with no persistent data storage
- ⚡ **Simple slash commands** for easy interaction

### 🎮 Bot Commands
- `/ronaldo start` - Start a hydration session ⚽
- `/ronaldo stop` - Stop the current session 🛑
- `/ronaldo join` - Join an active session 🤝
- `/ronaldo leave` - Leave the current session 👋

## 🤝 Contributing

We welcome contributions! Here's how you can help:

1. 🍴 **Fork the repository**
2. 🌿 **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. 💻 **Make your changes**
4. ✅ **Commit your changes** (`git commit -m 'Add some amazing feature'`)
5. 📤 **Push to the branch** (`git push origin feature/amazing-feature`)
6. 🔀 **Open a Pull Request**

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- ⚽ **Cristiano Ronaldo** for the inspiration (SIUUUU! 🐐)
- 💙 **Discord** for the amazing platform
- ⚛️ **Next.js team** for the incredible framework
- 🎨 **Tailwind CSS** for the utility-first styling

## 📞 Support

Having issues? Need help? 

- 🐛 **Report bugs**: [GitHub Issues](https://github.com/yourusername/ronaldo-bot-website/issues)
- 💬 **Join our Discord**: [Coming Soon!]
- 📧 **Email**: [your-email@example.com]

---

<div align="center">

**Made with ❤️ and lots of 💧**

🐐⚽ **SIUUUU!** ⚽🐐

*Remember: Champions stay hydrated!* 🏆💧

</div>
