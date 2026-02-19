# Interactive Portfolio Website

## 🎨 Features

- **Eye-Tracking Hero Section**: Portrait with eyes that follow your cursor within a constrained radius
- **Custom Cursor**: Animated dot that expands and changes color on hover
- **Project Hover Previews**: Large preview images that follow your cursor when hovering over project names
- **Bi-lingual Support**: Toggle between Hebrew (RTL) and English (LTR)
- **Animated Thread Line**: Vertical line that grows as you scroll
- **Dark Mode**: Sophisticated dark theme (#0a0a0a background, #fafafa text)
- **Electric Blue Accent**: (#0047FF) for interactive elements

## 🚀 Getting Started

### Required Images

You need to add the following image files to the portfolio folder:

1. **face.png** - Portrait image (static background layer)
2. **eye.png** - Eyes image (will follow cursor)
3. **project1.jpg** - Project preview image
4. **project2.jpg** - Project preview image
5. **project3.jpg** - Project preview image

### Image Guidelines

- **face.png**: Should be a portrait without eyes (or with simple/blank eye area), 400x500px recommended
- **eye.png**: Just the eyes on transparent or dark background, approximately 120x60px
- **project images**: High-quality project screenshots, 500x350px or similar aspect ratio

## 📂 File Structure

```
portfolio/
├── index.html          # Main portfolio page
├── face.png           # Portrait base image
├── eye.png            # Eyes for tracking
├── project1.jpg       # Project preview 1
├── project2.jpg       # Project preview 2
├── project3.jpg       # Project preview 3
└── README.md          # This file
```

## 🎯 How to Use

1. Add your images to the portfolio folder
2. Open `index.html` in a modern web browser
3. Move your cursor around to see the interactive effects
4. Click the language toggle (top right) to switch between Hebrew and English
5. Hover over project names to see preview images

## ✨ Interactive Elements

### Eye Tracking
The eyes in the portrait follow your cursor within a 20px radius from their center position.

### Custom Cursor
- **Normal**: Small blue dot (12px)
- **On Hover**: Expands to 40px with acid green color
- Uses mix-blend-mode for visual interest

### Project Previews
Hover over any project name to see a large preview image that smoothly follows your cursor.

### Thread Line
A vertical line at the center of the screen that grows as you scroll down the page.

## 🎨 Customization

### Colors
Edit the CSS variables in the `<style>` section:
- Background: `#0a0a0a`
- Text: `#fafafa`
- Accent: `#0047FF` (Electric Blue)
- Secondary Accent: `#D1FF00` (Acid Green)

### Fonts
The website uses **Sentient** from Fontshare. To change:
```html
<link href="https://api.fontshare.com/v2/css?f[]=your-font@400,700&display=swap" rel="stylesheet">
```

### Content
All text is stored in the `translations` object in JavaScript. Edit both Hebrew and English versions.

## 🌐 Browser Support

Works best in modern browsers:
- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)

## 📝 Notes

- All JavaScript is inline for easy deployment
- Uses Tailwind CSS via CDN (no build process needed)
- Fully responsive design
- Optimized for smooth 60fps animations using `requestAnimationFrame`

Enjoy your interactive portfolio! 🚀
