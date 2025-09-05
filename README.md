# Readly - Book Summary Community

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18.3.1-blue.svg)](https://reactjs.org/)
[![Vite](https://img.shields.io/badge/Vite-7.1.4-646CFF.svg)](https://vitejs.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-2.56.0-3ECF8E.svg)](https://supabase.com/)

## 📖 Project Overview

**Readly** is a vibrant, community-driven platform that revolutionizes how people discover and engage with books. By providing concise, high-quality summaries of the world's best books, Readly empowers users to learn and grow in just a few minutes. Our platform fosters a collaborative environment where readers can share insights, reviews, and recommendations, building a global community of lifelong learners.

Whether you're a busy professional seeking quick knowledge boosts, a student exploring new subjects, or a book enthusiast wanting to connect with like-minded individuals, Readly is your gateway to a world of wisdom.

## ✨ Features

- 📚 **Comprehensive Book Summaries**: Access expertly crafted summaries across diverse categories including Self-Help, Business, Psychology, Productivity, and Finance
- ✍️ **Community Contributions**: Write and share your own book summaries to enrich the platform
- ❤️ **Personal Wishlist**: Curate your reading list with a personalized wishlist feature
- 🔐 **Secure Authentication**: User-friendly login and registration powered by Supabase
- 📊 **Personal Dashboard**: Track your reading progress and contributions
- 📱 **Responsive Design**: Seamless experience across desktop, tablet, and mobile devices
- 🌙 **Dark Mode Support**: Easy on the eyes with customizable themes
- 🎧 **Audio Summaries**: Listen to summaries on-the-go for maximum convenience
- 🔍 **Advanced Search**: Find books and summaries quickly with powerful search functionality
- 🏷️ **Category Organization**: Browse content organized by topics and genres

## 🛠️ Technologies Used

- **Frontend**: React 18 with TypeScript for robust, type-safe development
- **Build Tool**: Vite for lightning-fast development and optimized production builds
- **Styling**: Tailwind CSS with shadcn-ui component library for beautiful, accessible UI
- **Routing**: React Router for smooth client-side navigation
- **State Management**: React Query (TanStack Query) for efficient data fetching and caching
- **Backend & Auth**: Supabase for scalable backend services, real-time database, and secure authentication
- **UI Components**: Radix UI primitives with custom styling for consistent, accessible components
- **Icons**: Lucide React for crisp, scalable iconography

## 🚀 Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16 or higher) - [Download here](https://nodejs.org/)
- **npm** or **yarn** package manager (comes with Node.js)
- **Git** for version control

### Installation

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd pocket-summit
   ```

2. **Install dependencies**:
   ```bash
   npm install
   # or if you prefer yarn
   yarn install
   ```

3. **Set up Supabase** (if not already configured):
   - Create a Supabase project at [supabase.com](https://supabase.com)
   - Copy your project URL and anon key
   - Configure environment variables (see Environment Setup below)

4. **Start the development server**:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. **Open your browser** and navigate to `http://localhost:8080` (the port configured in vite.config.ts)

## 🔧 Environment Setup

Create a `.env.local` file in the root directory and add your Supabase credentials:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📦 Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run build:dev` - Build for development mode
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint for code quality checks

## 🚀 Deployment

### Build for Production

```bash
npm run build
# or
yarn build
```

### Deploy to Your Preferred Platform

Readly can be deployed to various platforms:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag-and-drop the `dist` folder or connect via Git
- **Railway**: Deploy with a single command
- **AWS S3 + CloudFront**: For scalable static hosting

### Environment Variables for Production

Ensure your production environment has the same Supabase variables as development.

## 🤝 Contributing

We welcome contributions from the community! Here's how you can get involved:

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes** and commit: `git commit -m 'Add amazing feature'`
4. **Push to the branch**: `git push origin feature/amazing-feature`
5. **Open a Pull Request**

### Development Guidelines

- Follow the existing code style and conventions
- Write clear, concise commit messages
- Test your changes thoroughly
- Update documentation as needed
- Ensure all tests pass before submitting

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact & Support

- **Email**: sarthakmahapatra303@gmail.com
- **GitHub Issues**: For bug reports and feature requests
- **Discord**: Join our community server (link coming soon!)

## 🙏 Acknowledgments

- Thanks to the open-source community for the amazing tools and libraries
- Special appreciation to all contributors and beta testers
- Inspired by the love of reading and continuous learning

---

**Happy Reading! 📚✨**
