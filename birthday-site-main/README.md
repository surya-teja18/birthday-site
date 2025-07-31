# Birthday Special Website 🎂

A beautiful, interactive birthday celebration website with countdown, interactive cake, and animated birthday card.

## Features ✨

- **Countdown Timer** - Counts down to the special birthday
- **Interactive Birthday Cake** - Click to blow out candles with animations
- **Enhanced Birthday Card** - Multi-page animated card with beautiful messages
- **Confetti & Animations** - Beautiful particle effects and animations
- **Background Music** - Birthday song plays during celebration
- **Responsive Design** - Works perfectly on all devices

## Tech Stack 🛠️

- **Next.js 15** - React framework
- **Framer Motion** - Smooth animations
- **Tailwind CSS** - Beautiful styling
- **Lucide React** - Beautiful icons

## Deployment to Netlify 🚀

### Option 1: GitHub Integration (Recommended)

1. **Push to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/birthday-site.git
   git push -u origin main
   ```

2. **Deploy on Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub account
   - Select your repository
   - Build settings:
     - Build command: `npm run build`
     - Publish directory: `out`
   - Click "Deploy site"

### Option 2: Manual Upload

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload to Netlify:**
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `out` folder to deploy

## Local Development 🏠

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build
```

## Customization 🎨

- **Change Birthday Date:** Edit the `birthdayDate` in `src/app/page.jsx`
- **Custom Messages:** Edit the card content in `src/components/enhanced-birthday-card.jsx`
- **Background Music:** Replace `/public/birthday.mp3` with your preferred song
- **Colors & Styling:** Modify Tailwind classes in the components

## Live Demo 🌐

Your site will be available at: `https://your-site-name.netlify.app`

---

Made with ❤️ for a special birthday celebration!
