# 🎮 Pixel Portfolio

A retro-styled personal portfolio website featuring a pixel-art aesthetic with coffee and coding themes.

![Portfolio Screenshot](public/avatar.png)

## ✨ Features

- **Retro Pixel-Art Design**: Complete with pixel-perfect styling using 'Press Start 2P' font
- **Custom Cursor**: Unique tilted cursor icon for enhanced user experience
- **Animated Background**: Dynamic decorations including coffee cups, code symbols, terminal windows, and more
- **Responsive Navigation**: Clean tab-based navigation between About, Experience, and Contact sections
- **Smooth Transitions**: Fade animations between different views
- **Coffee & Coding Theme**: Visual elements that blend coffee culture with programming aesthetics

## 🛠️ Tech Stack

- **React 18**: Modern React with functional components and hooks
- **Vite**: Fast build tool and dev server
- **CSS3**: Custom properties, animations, and pixel-art rendering
- **Google Fonts**: Press Start 2P for authentic retro typography

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── avatar.png          # Profile avatar image
│   ├── background.png      # Background texture
│   └── cursor-medium.png   # Custom cursor icon
├── src/
│   ├── App.jsx            # Main application component
│   ├── App.css            # Core application styles
│   ├── Decorations.jsx    # Background decoration components
│   ├── Decorations.css    # Decoration styling and animations
│   ├── index.css          # Global styles and theme variables
│   └── main.jsx           # Application entry point
└── package.json
```

## 🎨 Design Features

### Color Palette
- **Coffee Cream**: #E8D4B8
- **Coffee Medium**: #8B6F56
- **Coffee Tan**: #C9A579
- **Accent Warm**: #C97D60
- **Accent Peach**: #E8A598

### Animations
- Floating elements
- Steam rising from coffee cups
- Sparkling decorations
- Terminal cursor blinking
- Rotating geometric shapes

## 🏗️ Build for Production

```bash
npm run build
```

The build output will be in the `dist/` directory, ready for deployment.

## 📝 Customization

### Adding Your Information
1. Update the avatar image in `public/avatar.png`
2. Edit the About section in `App.jsx`
3. Add your experience details
4. Update contact links

### Modifying Theme Colors
Edit CSS variables in `src/index.css`:
```css
:root {
  --coffee-cream: #E8D4B8;
  --coffee-medium: #8B6F56;
  /* ... other colors */
}
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

Built with ☕ and 💻 by Samir
