# InstaHub UI

A modern Instagram-like social media platform built with **Next.js 16**, **React 19**, and **Tailwind CSS**. Features a beautiful UI with dark mode support, real-time interactions, and a responsive design.

## 🚀 Features

- **Authentication**
  - User login and registration
  - Password reset functionality
  - Social login integration

- **Home Feed**
  - Infinite scrolling post feed
  - User stories carousel
  - Suggested users recommendations
  - Post interactions (like, comment, share)

- **Explore**
  - Discover new content with grid layout
  - Search and filter posts
  - Trending posts discovery

- **Post Management**
  - Create, edit, and delete posts
  - Multi-media support (images, carousel)
  - Post captions and hashtags
  - Comment system with nested replies

- **User Experience**
  - Dark/Light mode toggle with `next-themes`
  - Responsive design for mobile, tablet, and desktop
  - Smooth animations and transitions
  - Accessible UI components

- **UI Components**
  - Custom component library built with shadcn/ui
  - Dropdown menus, dialogs, buttons
  - Form inputs with validation
  - Carousels and sliders (Swiper)

## 🛠 Tech Stack

**Frontend:**
- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4
- Shadcn UI Components

**Libraries:**
- Swiper - Carousel/slider functionality
- Emoji Picker React - Emoji selection
- Lucide React - Beautiful icons
- next-themes - Theme management
- clsx & tailwind-merge - CSS utilities

**Development:**
- ESLint - Code linting
- PostCSS - CSS processing

## 📋 Prerequisites

- Node.js 18+ or Bun
- npm or yarn package manager

## 🚀 Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/instahub-ui.git
cd instahub-ui

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application in your browser.

The app will hot-reload as you make changes to the code.

### Build

Build the application for production:

```bash
npm run build
```

### Start Production Server

Run the production-optimized application:

```bash
npm start
```

### Linting

Check code quality with ESLint:

```bash
npm run lint
```

## 📁 Project Structure

```
instahub_ui/
├── src/
│   ├── app/                          # Next.js app directory
│   │   ├── (auth)/                   # Authentication routes
│   │   │   ├── login/                # Login page
│   │   │   ├── register/             # Registration page
│   │   │   └── forgot-password/      # Password recovery
│   │   ├── (public)/                 # Public routes
│   │   │   ├── (home)/               # Home feed page
│   │   │   │   └── components/
│   │   │   │       ├── PostCard/     # Individual post component
│   │   │   │       ├── StoryList/    # Stories carousel
│   │   │   │       └── SuggestionList/ # Suggested users
│   │   │   └── explore/              # Explore page
│   │   └── layout.tsx                # Root layout
│   ├── components/                   # Shared components
│   │   ├── PostCommentsDialog/       # Comments modal
│   │   ├── CarouselButton/           # Carousel controls
│   │   └── ui/                       # Base UI components
│   ├── assets/                       # Static assets
│   │   ├── icons/                    # SVG icons
│   │   └── images/                   # Images
│   ├── data/                         # Mock data
│   │   ├── post.ts                   # Post mock data
│   │   ├── explore.ts                # Explore page data
│   │   ├── stories.ts                # Stories data
│   │   └── suggestion.data.ts        # User suggestions
│   ├── hooks/                        # Custom React hooks
│   ├── layouts/                      # Layout components
│   │   └── Sidebar/                  # Main sidebar navigation
│   ├── lib/                          # Utility functions
│   │   ├── formatCount.ts            # Format numbers (1K, 1M)
│   │   └── utils.ts                  # General utilities
│   ├── types/                        # TypeScript type definitions
│   │   └── post.types.ts             # Post-related types
│   ├── styles/                       # Global styles
│   │   ├── globals.css               # Global CSS
│   │   ├── variables.css             # CSS variables
│   │   └── container.css             # Container styles
│   └── services/                     # API services & external integrations
├── public/                           # Public static files
├── components.json                   # Shadcn components config
├── next.config.ts                    # Next.js configuration
├── tsconfig.json                     # TypeScript configuration
├── tailwind.config.ts                # Tailwind CSS config
├── postcss.config.mjs                # PostCSS config
└── package.json                      # Dependencies
```

## 🎨 Components Overview

### Pages

- **Login** - User authentication with email/password and social login
- **Register** - New user registration with profile setup
- **Home** - Main feed with posts, stories, and suggestions
- **Explore** - Discover new content and trending posts

### Shared Components

- **PostCard** - Displays individual posts with media and interactions
- **PostCommentsDialog** - Modal for viewing and adding comments
- **StoryList** - Carousel of user stories
- **SuggestionList** - Recommended users to follow
- **ExploreGrid** - Grid layout for explore page
- **PostActions** - Like, comment, share buttons

### UI Components

Base components built with shadcn/ui:
- Button
- Dialog / Modal
- Dropdown Menu
- Input / Forms
- Select
- Switch / Toggle

## 🎯 Key Features Implementation

### Authentication Flow
- Located in `src/app/(auth)/`
- Supports login, registration, and password reset
- Social login integration ready

### Home Feed
- Infinite scrolling posts
- Story carousel with swiper
- Real-time-like interactions
- User suggestions sidebar

### Post Comments
- Shared modal dialog component
- Comment threading support
- Rich text input with emoji picker

### Dark Mode
- Theme toggle in sidebar
- Persistent theme storage with `next-themes`
- Tailwind CSS dark mode utilities

## 🔧 Configuration Files

### Tailwind CSS (`tailwind.config.ts`)
Configured with custom components, animations, and extends for responsive design.

### Next.js (`next.config.ts`)
Optimized for image handling, routing, and performance.

### TypeScript (`tsconfig.json`)
Strict mode enabled for type safety.

## 📦 Environment Setup

Create a `.env.local` file in the root directory:

```bash
NEXT_PUBLIC_API_URL=http://localhost:3001
```

## 🚢 Deployment

### Vercel (Recommended)

The easiest way to deploy is using [Vercel](https://vercel.com):

```bash
npm install -g vercel
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

### Other Platforms

- **Netlify**: Connect your GitHub repo
- **AWS Amplify**: Deploy via Git
- **Railway**: Push to deploy

## 📝 Development Workflow

1. Create a feature branch: `git checkout -b feat/feature-name`
2. Make your changes and commit: `git commit -am 'feat: add feature'`
3. Push to the branch: `git push origin feat/feature-name`
4. Create a Pull Request

## 🤝 Contributing

Contributions are welcome! Please follow these guidelines:

1. Follow the existing code style
2. Use TypeScript for type safety
3. Keep components small and focused
4. Write meaningful commit messages
5. Test responsiveness on mobile devices

## 📝 Commit Message Convention

```
feat: add new feature
fix: fix a bug
refactor: refactor code
style: code style changes
docs: documentation updates
chore: dependencies and configuration updates
test: add or update tests
```

## 🐛 Known Issues

- None currently

## 🔮 Future Enhancements

- [ ] Direct messaging system
- [ ] Push notifications
- [ ] Post scheduling
- [ ] Stories with filters
- [ ] Live streaming support
- [ ] Advanced analytics
- [ ] Content moderation tools
- [ ] Multi-language support

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [React Documentation](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Shadcn UI](https://ui.shadcn.com)
- [TypeScript](https://www.typescriptlang.org/docs)

## 📞 Support

For questions or issues, please open an issue on the GitHub repository.

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

**Built with ❤️ by the InstaHub Team**

Last updated: July 17, 2026
