# 🚀 Modern React Portfolio Website

A complete, fully animated, and responsive portfolio website built with React, Tailwind CSS, and Framer Motion. Features a modern dark theme with orange accents, smooth page transitions, and professional UI/UX design.

![Portfolio Preview](https://via.placeholder.com/1200x600/0a0a0a/FF5722?text=Modern+Portfolio+Website)

## ✨ Features

- 🎨 **Modern Dark Theme** - Professional design with orange/red accent colors
- 🎭 **Smooth Animations** - Powered by Framer Motion for buttery smooth transitions
- 📱 **Fully Responsive** - Works flawlessly on mobile, tablet, and desktop
- 🧩 **Component-Based** - Clean, modular architecture for easy customization
- 🚀 **Fast Performance** - Built with Vite for lightning-fast development and builds
- 🎯 **SEO Ready** - Semantic HTML and proper meta tags
- 🔄 **Page Transitions** - Animated route changes with AnimatePresence
- 💼 **5 Showcase Projects** - Each project in its own component file
- 📊 **Skills Section** - Animated progress bars for technologies
- 📝 **Contact Form** - Interactive form with validation
- 🌐 **Social Links** - GitHub, LinkedIn, Instagram, Twitter integration

## 🛠️ Tech Stack

- **Frontend Framework:** React 18
- **Build Tool:** Vite 5
- **Routing:** React Router DOM v6
- **Styling:** Tailwind CSS 3
- **Animations:** Framer Motion 11
- **Icons:** SVG (inline)
- **Fonts:** Inter (Google Fonts)

## 📁 Project Structure

```
portfoli@bat/
├── public/
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Responsive navigation bar
│   │   ├── Footer.jsx           # Footer with social links
│   │   └── projects/
│   │       ├── FoodDeliveryApp.jsx
│   │       ├── EcommercePlatform.jsx
│   │       ├── MobileShop.jsx
│   │       ├── BankingUIUX.jsx
│   │       └── PortfolioV2.jsx
│   ├── pages/
│   │   ├── Home.jsx             # Hero, stats, featured projects
│   │   ├── About.jsx            # Bio, skills, experience
│   │   ├── Projects.jsx         # All projects with filters
│   │   └── Contact.jsx          # Contact form & info
│   ├── App.jsx                  # Main app component with routing
│   ├── main.jsx                 # Entry point
│   └── index.css                # Global styles & Tailwind
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

- Node.js 16+ and npm/yarn installed
- Basic knowledge of React

### Installation

1. **Navigate to the project directory:**

   ```powershell
   cd "c:\Users\Badmesh\Downloads\portfoli@bat"
   ```

2. **Install dependencies:**

   ```powershell
   npm install
   ```

3. **Start the development server:**

   ```powershell
   npm run dev
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000`

### Build for Production

```powershell
npm run build
```

The optimized files will be in the `dist/` folder.

### Preview Production Build

```powershell
npm run preview
```

## 🎨 Customization Guide

### 1. Update Personal Information

#### **Home Page (`src/pages/Home.jsx`):**

```jsx
// Line 71-73
<h1 className="heading-1 mb-6">
  Hi, I'm <span className="text-gradient">Your Name</span>
</h1>
```

#### **About Page (`src/pages/About.jsx`):**

```jsx
// Update bio section (lines 140-150)
<p className="text-lightGray mb-4 leading-relaxed">
  Your personal story here...
</p>
```

#### **Contact Page (`src/pages/Contact.jsx`):**

```jsx
// Lines 35-58 - Update contact information
const contactInfo = [
  {
    title: "Email",
    value: "your@email.com",
    link: "mailto:your@email.com",
  },
  // ... update phone and location
];
```

### 2. Change Colors

Edit `tailwind.config.js`:

```javascript
colors: {
  primary: '#FF5722',    // Change to your primary color
  secondary: '#FF6F3C',  // Change to your secondary color
  dark: '#0a0a0a',       // Background color
  darkGray: '#1a1a1a',   // Card background
  lightGray: '#a0a0a0',  // Text color
}
```

### 3. Update Projects

Each project is a separate component in `src/components/projects/`. To edit:

1. Open the project file (e.g., `FoodDeliveryApp.jsx`)
2. Update the features array
3. Update the tech stack
4. Change the demo and GitHub URLs
5. Modify the description

**Example:**

```jsx
const features = [
  "Your feature 1",
  "Your feature 2",
  // ...
];

const techStack = ["React", "Node.js", "Your Tech"];
```

### 4. Add a New Project

1. **Create new file:**

   ```
   src/components/projects/YourProject.jsx
   ```

2. **Copy template from existing project**

3. **Import in `Projects.jsx`:**

   ```jsx
   import YourProject from "../components/projects/YourProject";

   const projects = [
     // ... existing projects
     { id: 6, component: YourProject, category: ["all", "web"] },
   ];
   ```

### 5. Update Skills

In `src/pages/About.jsx` (lines 7-32):

```jsx
const skills = {
  frontend: [
    { name: "Your Skill", level: 95 },
    // ...
  ],
  // ... update backend and uiux too
};
```

### 6. Update Social Links

In `src/components/Footer.jsx` (lines 6-40) and `src/pages/Contact.jsx` (lines 73-116):

```jsx
const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/yourusername",
    // ...
  },
  // Update all links
];
```

### 7. Add Your Photos

1. Create `public/images/` folder
2. Add your images (profile.jpg, workspace.jpg, etc.)
3. Update image paths in components:

```jsx
// Instead of placeholder:
<img src="/images/your-photo.jpg" alt="Your Name" />
```

## 🎭 Animation Customization

All animations use Framer Motion. Common patterns:

```jsx
// Fade in from bottom
<motion.div
  initial={{ opacity: 0, y: 60 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Your content
</motion.div>

// Hover scale
<motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>
  Your content
</motion.div>
```

## 📱 Responsive Breakpoints

Tailwind CSS breakpoints used:

- **Mobile:** Default (< 640px)
- **Tablet:** `md:` (640px - 1024px)
- **Desktop:** `lg:` (> 1024px)

Example:

```jsx
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  {/* 1 column mobile, 2 tablet, 3 desktop */}
</div>
```

## 🐛 Troubleshooting

### Port Already in Use

```powershell
# Change port in vite.config.js
server: {
  port: 3001,  // Use different port
}
```

### Animations Not Working

Ensure Framer Motion is installed:

```powershell
npm install framer-motion
```

### Tailwind Classes Not Applying

Clear cache and restart:

```powershell
rm -rf node_modules
npm install
npm run dev
```

### Images Not Loading

Use absolute paths from public folder:

```jsx
<img src="/images/photo.jpg" alt="Description" />
```

## 🚀 Deployment

### Deploy to Netlify

1. Build the project:

   ```powershell
   npm run build
   ```

2. Drag and drop the `dist` folder to [Netlify](https://app.netlify.com/drop)

### Deploy to Vercel

1. Install Vercel CLI:

   ```powershell
   npm i -g vercel
   ```

2. Deploy:
   ```powershell
   vercel
   ```

### Deploy to GitHub Pages

1. Install gh-pages:

   ```powershell
   npm install --save-dev gh-pages
   ```

2. Update `package.json`:

   ```json
   {
     "homepage": "https://yourusername.github.io/portfolio",
     "scripts": {
       "predeploy": "npm run build",
       "deploy": "gh-pages -d dist"
     }
   }
   ```

3. Deploy:
   ```powershell
   npm run deploy
   ```

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## 👨‍💻 Author

**Your Name**

- Website: [yourwebsite.com](https://yourwebsite.com)
- GitHub: [@yourusername](https://github.com/yourusername)
- LinkedIn: [@yourusername](https://linkedin.com/in/yourusername)

## 🙏 Acknowledgments

- Design inspiration from modern portfolio trends
- Icons from Heroicons (via inline SVG)
- Fonts from Google Fonts (Inter)

---

**⭐ If you found this helpful, please give it a star!**

Made with ❤️ and React
# bat-res
