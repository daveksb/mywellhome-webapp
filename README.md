# MyWellHome - Healthcare Wellness Webapp

A modern React webapp for healthcare wellness services with a beautiful green theme, responsive design, and professional team showcase.

![MyWellHome Demo](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-brightgreen)

## 🌐 Live Demo

**Visit the live site**: https://daveksb.github.io/mywellhome-webapp

## ✨ Features

- 🏥 **Modern Healthcare Theme** - Professional green color scheme
- 📱 **Responsive Design** - Optimized for mobile and desktop
- 👥 **Team Showcase** - 6-person healthcare team with social links
- 🧭 **Single Page Navigation** - Smooth page transitions
- 🎨 **CSS Animations** - Hover effects and smooth transitions
- 📲 **Mobile App Promotion** - Direct link to mobile app

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **Vite** - Fast build tool and dev server
- **Vanilla CSS** - Custom CSS with CSS variables
- **GitHub Pages** - Free hosting
- **gh-pages** - Automated deployment

## 🚀 Quick Start

### Local Development

```bash
# Clone the repository
git clone https://github.com/daveksb/mywellhome-webapp.git
cd mywellhome-webapp

# Install dependencies
npm install

# Start development server
npm run dev
```

Open http://localhost:5173 to view in browser.

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 📦 Deploy to GitHub Pages

This project is configured for easy deployment to GitHub Pages. Follow these steps:

### Prerequisites

1. **GitHub Account** - Make sure you're logged into GitHub
2. **GitHub CLI** (optional but recommended) - Install from https://cli.github.com/

### Step 1: Create GitHub Repository

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit: MyWellHome webapp"

# Create GitHub repository and push
gh repo create your-repo-name --public --source=. --remote=origin --push
```

Or manually create a repository on GitHub and push:

```bash
git remote add origin https://github.com/yourusername/your-repo-name.git
git branch -M main
git push -u origin main
```

### Step 2: Configure for GitHub Pages

The project is already configured for GitHub Pages deployment. Key configurations:

**package.json:**
```json
{
  "homepage": "https://yourusername.github.io/your-repo-name",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

**vite.config.js:**
```javascript
export default defineConfig({
  plugins: [react()],
  base: '/your-repo-name/',  // Match your GitHub repo name
})
```

### Step 3: Deploy

```bash
# Install gh-pages package
npm install --save-dev gh-pages

# Deploy to GitHub Pages
npm run deploy
```

### Step 4: Enable GitHub Pages

1. Go to your GitHub repository
2. Click **Settings** tab
3. Scroll to **Pages** section
4. Under **Source**, select **Deploy from a branch**
5. Choose **gh-pages** branch
6. Click **Save**

Your site will be live at: `https://yourusername.github.io/your-repo-name`

## 🔧 Configuration

### Customizing Base URL

If you want to deploy to a different path or use a custom domain:

1. Update `base` in `vite.config.js`
2. Update `homepage` in `package.json`
3. Redeploy with `npm run deploy`

### Adding Images

Place images in the `public/` folder and reference them using:

```jsx
// For GitHub Pages compatibility
<img src={`${import.meta.env.BASE_URL}image-name.jpg`} alt="Description" />
```

## 📂 Project Structure

```
mywellhome-webapp/
├── public/
│   ├── health.png          # Healthcare illustration
│   └── vite.svg           # Vite logo
├── src/
│   ├── components/
│   │   ├── Contact.jsx    # Team showcase page
│   │   └── Contact.css    # Contact page styles
│   ├── App.jsx            # Main app component
│   ├── App.css            # Global styles
│   └── main.jsx           # App entry point
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🎨 Customization

### Color Theme

The app uses CSS custom properties for easy theme customization:

```css
:root {
  --primary-green: #2d5a27;
  --secondary-green: #4a7c59;
  --accent-green: #68bb59;
  --light-green: #a8d8a8;
  --very-light-green: #f0f8f0;
}
```

### Team Members

Edit the `teamMembers` array in `src/components/Contact.jsx`:

```javascript
const teamMembers = [
  {
    id: 1,
    name: "Your Name",
    role: "Your Role",
    image: "image-url",
    email: "your.email@domain.com",
    instagram: "your_instagram",
    facebook: "your_facebook"
  },
  // Add more team members...
];
```

### Mobile App Link

Update the mobile app link in `src/components/Contact.jsx`:

```jsx
<a href="https://your-app-link.com" target="_blank" rel="noopener noreferrer">
  Visit App Store
</a>
```

## 🚨 Troubleshooting

### Images Not Loading on Deployed Site

Make sure to use the correct image path:

```jsx
// ✅ Correct - works on both local and deployed
<img src={`${import.meta.env.BASE_URL}image.png`} />

// ❌ Incorrect - only works locally  
<img src="/image.png" />
```

### Build Fails

1. Clear node_modules and reinstall:
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. Check for any syntax errors in your code

### GitHub Pages Not Updating

1. Check if deployment succeeded: `npm run deploy`
2. Verify gh-pages branch exists in your repository
3. GitHub Pages can take a few minutes to update

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Deploy to GitHub Pages

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with deployment, please open an issue in the GitHub repository.

---

**Made with ❤️ and React** | **Deployed on GitHub Pages**