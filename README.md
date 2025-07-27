# Ihor Fesina - Portfolio

A modern, responsive portfolio website built with Next.js and Tailwind CSS. This project showcases my professional experience, skills, and projects in an elegant, user-friendly interface.

## 🚀 Deploy

Check out the live version of the portfolio here:  
👉 [my-portfolio-fesina.vercel.app](https://my-portfolio-fesina.vercel.app/)

## 🚀 Features

- **Responsive Design** - Optimized for all devices and screen sizes
- **Smooth Navigation** - Interactive navigation with scroll-based active states
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Performance Optimized** - Built with Next.js for optimal loading speeds
- **SEO Friendly** - Proper meta tags and structured data
- **Dark Theme** - Elegant dark color scheme with teal accents

## 📋 Featured Projects

### Crypto Board
A comprehensive cryptocurrency tracking application built with React and TypeScript. Features real-time price monitoring, detailed statistics, interactive charts, and cryptocurrency information.

**Live Demo**: [crypto-tracker-tau-five.vercel.app](https://crypto-tracker-tau-five.vercel.app/)  
**GitHub**: [crypto-tracker](https://github.com/ihor-fesina/crypto-tracker)

**Key Features:**
- Real-time cryptocurrency prices and statistics
- Interactive price charts and historical data
- Detailed coin information and market analysis
- News integration via [Crypto News API](https://rapidapi.com/apiwizard/api/crypto-news51)
- Modern UI with TypeScript, Redux, and TailwindCSS
- Responsive design for all devices

**Tech Stack**: TypeScript, React, Redux Toolkit, RTK Query, TailwindCSS, Chart.js

## 🛠️ Tech Stack

- **Framework**: Next.js 15.3.5
- **Styling**: Tailwind CSS v4
- **Language**: TypeScript
- **Font**: Inter (Google Fonts)
- **Icons**: Custom SVG icons
- **Deployment**: Ready for Vercel deployment

## 📁 Project Structure

```
src/
├── app/
│   ├── (main)/              # Route group for main pages
│   │   └── page.tsx         # Homepage component
│   ├── components/          # App-level components
│   ├── globals.css          # Global styles
│   └── layout.tsx           # Root layout
├── components/
│   ├── common/              # Reusable components
│   │   ├── Navigation.tsx   # Navigation component
│   │   ├── Socials.tsx      # Social media links
│   │   └── ExperienceItem.tsx
│   ├── homepage/            # Homepage specific components
│   │   ├── About.tsx        # About section
│   │   └── ExperienceList.tsx
│   ├── layout/              # Layout components
│   │   ├── Sidebar.tsx      # Sidebar navigation
│   │   └── Footer.tsx       # Footer component
│   └── ui/                  # UI components and icons
│       └── icons/           # SVG icon components
└── constants/
    └── workExperience.json  # Work experience data
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to view the portfolio.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 🎨 Customization

### Colors
The color scheme is defined in `src/app/globals.css`:
- Primary colors: `--color-primary-bright`, `--color-primary-grey`
- Background: `--color-blue-dark`
- Accent: Teal (`teal-400`)

### Content
- Update personal information in `src/components/homepage/About.tsx`
- Modify work experience in `src/constants/workExperience.json`
- Update social links in `src/components/common/Socials.tsx`

## 📱 Responsive Design

The portfolio is fully responsive with:
- Mobile-first approach
- Tablet optimizations
- Desktop enhancements
- Touch-friendly interactions

## 🔧 Development

### Key Components

- **Navigation**: Smart scroll-based active state detection
- **About Section**: Professional introduction with experience calculation
- **Experience List**: Interactive work history with hover effects
- **Social Links**: Animated social media icons
- **Sidebar**: Sticky navigation with personal info

### Styling Approach

- Tailwind CSS for utility-first styling
- Custom CSS variables for consistent theming
- Smooth transitions and hover effects
- Modern glassmorphism effects

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contact

- **Email**: fesinaihor@gmail.com
- **LinkedIn**: [Ihor Fesina](https://www.linkedin.com/in/fesinaihor)
- **GitHub**: [fesinaihor](https://github.com/fesinaihor)

---

Built with ❤️ using Next.js and Tailwind CSS
