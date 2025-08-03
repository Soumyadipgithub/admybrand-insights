# ADmyBRAND Insights - AI-Powered Analytics Dashboard

A modern, visually stunning analytics dashboard built for digital marketing agencies. This project showcases advanced UI/UX design patterns, responsive layouts, and interactive data visualization.

![Next.js](https://img.shields.io/badge/Next.js-14+-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4+-38B2AC?style=flat-square&logo=tailwind-css)

## 🚀 Features

### Core Dashboard Features
- **📊 Real-time Metrics Cards** - Revenue, Users, Conversions, Growth % with animated transitions
- **📈 Interactive Charts** - Line charts, bar charts, and donut charts powered by Recharts
- **📋 Advanced Data Table** - Sortable, filterable, paginated campaign data
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices

### UI/UX Excellence
- **🎨 Modern Design System** - Consistent color palette, typography, and spacing using an 8px grid
- **🌓 Dark/Light Mode** - System-aware theme switching with smooth transitions
- **✨ Micro-interactions** - Hover effects, loading states, and smooth animations
- **💫 Loading Skeletons** - Beautiful loading states for better perceived performance

### Technical Implementation
- **Next.js 14+** with App Router for optimal performance
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** with custom design tokens
- **shadcn/ui** components for consistent, accessible UI
- **Recharts** for interactive data visualization
- **TanStack Table** for advanced table functionality

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + CSS Variables
- **UI Components:** Custom shadcn/ui implementation
- **Charts:** Recharts
- **Tables:** TanStack Table
- **Icons:** Lucide React
- **Theme:** Next-themes compatible dark mode

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/admybrand-insights.git
cd admybrand-insights
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🏗️ Project Structure

```
admybrand-insights/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global styles and CSS variables
│   │   ├── layout.tsx       # Root layout with theme provider
│   │   └── page.tsx         # Main dashboard page
│   ├── components/
│   │   ├── ui/              # Reusable UI components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── badge.tsx
│   │   │   ├── input.tsx
│   │   │   └── skeleton.tsx
│   │   ├── charts/          # Chart components
│   │   │   ├── line-chart.tsx
│   │   │   ├── bar-chart.tsx
│   │   │   └── donut-chart.tsx
│   │   ├── metric-card.tsx  # Metric card component
│   │   ├── data-table.tsx   # Advanced data table
│   │   ├── sidebar.tsx      # Navigation sidebar
│   │   ├── layout.tsx       # Dashboard layout wrapper
│   │   ├── theme-provider.tsx
│   │   └── theme-toggle.tsx
│   └── lib/
│       ├── utils.ts         # Utility functions
│       └── mock-data.ts     # Sample data
├── tailwind.config.ts       # Tailwind configuration
└── package.json
```

## 🎨 Design System

### Color Palette
The dashboard uses a sophisticated color system with HSL values for easy theme customization:

- **Primary:** Purple (262.1, 83.3%, 57.8%)
- **Background:** Adaptive light/dark
- **Foreground:** High contrast text
- **Accent:** Subtle highlights
- **Muted:** Secondary elements

### Typography
- **Font:** Inter for optimal readability
- **Scale:** Consistent heading hierarchy
- **Weights:** 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing
- Based on an 8px grid system
- Consistent padding and margins
- Responsive spacing scales

## 🚀 Performance Optimizations

- **Code Splitting:** Automatic with Next.js App Router
- **Image Optimization:** Next.js Image component (when applicable)
- **CSS-in-JS:** Zero runtime with Tailwind CSS
- **Component Lazy Loading:** For heavy components
- **Memoization:** Strategic use of React.memo

## 🔧 Customization

### Theming
Edit the CSS variables in `src/app/globals.css` to customize the color scheme:

```css
:root {
  --primary: 262.1 83.3% 57.8%;
  --background: 0 0% 100%;
  /* ... other variables */
}
```

### Adding New Charts
1. Create a new component in `src/components/charts/`
2. Import and use Recharts components
3. Follow the existing pattern for consistent styling

### Extending the Data Table
The data table uses TanStack Table v8, making it easy to add:
- Custom filters
- Column visibility toggles
- Row selection
- Export functionality

## 📱 Responsive Design

The dashboard is fully responsive with breakpoints:
- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

Key responsive features:
- Collapsible sidebar on mobile
- Stacked cards on smaller screens
- Horizontal scroll for tables
- Optimized chart sizes

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🙏 Acknowledgments

- Built with AI assistance for rapid development
- Inspired by modern SaaS dashboards
- Uses open-source components and libraries

---

**Note:** This is a demonstration project showcasing modern web development practices and beautiful UI design. The data shown is mock data for demonstration purposes.