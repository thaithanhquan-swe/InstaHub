# 📸 InstaHub - Instagram Clone

InstaHub is a modern social media application built with **Next.js 16**, **React 19**, and **Tailwind CSS**. It provides an Instagram-like experience with features including feed, explore, comments, and interactive system.

---

## 🎯 About

InstaHub is developed for learning and practicing modern web technologies. The application features a beautiful interface, dark mode support, and is optimized for mobile devices.

---

## ✨ Key Features

### 🔐 Authentication
- Sign up and login functionality
- Password reset (forgot password)
- Social login integration (ready to use)

### 📝 Home Feed
- View posts from followed users
- Stories carousel - watch stories from friends
- Suggested users to follow
- Like, comment, and share posts

### 🔍 Explore
- Discover new content
- Grid layout for browsing
- Explore trending posts

### 💬 Comments & Interactions
- View and write comments
- Emoji picker for adding emojis
- Like posts and comments
- Share posts

### 🌓 User Experience
- Dark mode / Light mode toggle
- Responsive design (mobile, tablet, desktop)
- Smooth animations
- Accessible components

---

## 🛠 Tech Stack

### Frontend
- **Next.js 16** - React framework with App Router
- **React 19** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS 4** - Styling
- **Shadcn UI** - Component library

### UI Libraries
- **Swiper** - Carousel/slider functionality
- **Lucide React** - Beautiful icons
- **Emoji Picker React** - Emoji selection
- **next-themes** - Dark mode management

### Development
- **ESLint** - Code linting
- **PostCSS** - CSS processing

---

## 📁 Project Structure

```
InstaHub/
├── instahub_ui/                    # Frontend (Next.js)
│   ├── src/
│   │   ├── app/
│   │   │   ├── (auth)/             # Authentication routes
│   │   │   │   ├── login/
│   │   │   │   ├── register/
│   │   │   │   └── forgot-password/
│   │   │   └── (public)/           # Public routes
│   │   │       ├── (home)/         # Home feed
│   │   │       └── explore/        # Explore page
│   │   ├── components/             # Shared components
│   │   ├── hooks/                  # Custom hooks
│   │   ├── lib/                    # Utilities & helpers
│   │   ├── types/                  # TypeScript types
│   │   ├── data/                   # Mock data
│   │   ├── styles/                 # Global styles
│   │   └── services/               # API services
│   ├── package.json
│   ├── next.config.ts
│   ├── tsconfig.json
│   └── tailwind.config.ts
└── README.md                       # This file
```

---

## 🚀 Getting Started

### 📋 Prerequisites
- **Node.js 18+** or **Bun**
- **npm**, **yarn**, or **pnpm**

### ⚙️ Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/InstaHub.git
cd InstaHub

# Navigate to frontend directory
cd instahub_ui

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### 🏃 Run Development Server

```bash
npm run dev
```

Open your browser and visit [http://localhost:3000](http://localhost:3000)

The app will automatically reload when you make changes to the code.

### 📦 Build for Production

```bash
npm run build
npm start
```

### 🔍 Lint Code

```bash
npm run lint
```

---

## 📂 Main Components

### Pages
- **Login** - Sign in with email/password
- **Register** - Create new account
- **Home** - Main feed with posts, stories, and suggestions
- **Explore** - Discover new content

### Shared Components
- **PostCard** - Display a single post
- **PostCommentsDialog** - Modal for viewing/writing comments
- **StoryList** - Stories carousel
- **SuggestionList** - List of suggested users
- **ExploreGrid** - Grid of posts for explore page
- **PostActions** - Buttons for like, comment, share

### Base UI Components
- Button
- Dialog/Modal
- Dropdown Menu
- Input/Form
- Select
- Switch

---

## 🔧 Configuration

### Environment Variables

Create `.env.local` file in `instahub_ui/`:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3001
```

### Tailwind Config (`tailwind.config.ts`)
Pre-configured with custom colors, animations, and responsive breakpoints.

### TypeScript (`tsconfig.json`)
Strict mode enabled for type safety.

---

## 📝 Development Workflow

### 1. Create Feature Branch
```bash
git checkout -b feat/feature-name
```

### 2. Make changes and commit
```bash
git add .
git commit -m "feat: add new feature"
```

### 3. Push and create Pull Request
```bash
git push origin feat/feature-name
```

---

## 📋 Commit Convention

```
feat:     Add new feature
fix:      Fix a bug
refactor: Refactor code
style:    CSS/styling changes
docs:     Documentation
chore:    Update dependencies, config
test:     Add/update tests
```

**Examples:**
```bash
git commit -m "feat: add post creation feature"
git commit -m "fix: fix comment dialog not closing"
git commit -m "refactor: extract PostHeader component"
```

---

## 🚢 Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
cd instahub_ui
vercel
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

Run:
```bash
docker build -t instahub .
docker run -p 3000:3000 instahub
```

### Deploy on Other Platforms
- **Netlify** - Connect GitHub repo
- **AWS Amplify** - Push to deploy
- **Railway** - Easy deployment
- **Render** - Or other PaaS providers

---

## 🎯 Upcoming Features

- [ ] Direct messaging (1-1 Chat)
- [ ] Push notifications
- [ ] Schedule posts
- [ ] Stories filters & stickers
- [ ] Live streaming
- [ ] Analytics dashboard
- [ ] Content moderation
- [ ] Multi-language support (i18n)
- [ ] Video posts
- [ ] Hashtag system

---

## 🤝 Contributing

We welcome all contributions! Here are the guidelines:

1. Follow existing code style
2. Use TypeScript for type safety
3. Keep components small and focused
4. Write meaningful commit messages
5. Test on mobile devices

---

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Shadcn UI](https://ui.shadcn.com)
- [TypeScript](https://www.typescriptlang.org)

---

## 🐛 Issues & Bugs

If you find any bugs or issues, please:
1. Check [Issues](../../issues) to see if already reported
2. Create a new issue with detailed description
3. Or contact us directly

---

## 📄 License

MIT License - See LICENSE file for details.

---

## 👥 Team

Built by [Your Name / Team Name]

---

## 📞 Contact

- 💬 Discord: [Link]
- 📧 Email: contact@instahub.dev
- 🐦 Twitter: [@instahub]

---

**Thank you for your interest in InstaHub!** ❤️

If you like the project, please give us a star ⭐ to support us!

Last updated: July 17, 2026
