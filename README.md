# 🐱 Purrfect Kittens

A delightful website that displays random kitten pictures with fun cat facts! Perfect for sharing with friends and family who love cats.

![Purrfect Kittens Preview](https://img.shields.io/badge/status-ready-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue)

## ✨ Features

- 🖼️ **Random Kitten Images** - Fresh adorable kittens from The Cat API
- 💡 **Fun Cat Facts** - Learn something new with each kitten!
- 🎨 **Cute Design** - Playful pastel colors and smooth animations
- 📱 **Responsive** - Works great on desktop and mobile
- 🔢 **Kitten Counter** - Track how many kittens you've viewed (saved locally!)
- ⌨️ **Keyboard Support** - Press Space for more kittens!

## 🚀 Quick Start

### Option 1: Open Directly
Simply open `index.html` in your web browser!

```bash
# macOS
open index.html

# Windows
start index.html

# Linux
xdg-open index.html
```

### Option 2: Local Server (Recommended)
For the best experience, run a local server:

```bash
# Using Python 3
python3 -m http.server 8000

# Using Node.js (if you have npx)
npx serve

# Using PHP
php -S localhost:8000
```

Then visit `http://localhost:8000` in your browser.

## 📁 Project Structure

```
purrfect-kittens/
├── index.html          # Main HTML file
├── css/
│   └── styles.css      # All styling
├── js/
│   └── app.js          # JavaScript logic
├── README.md           # This file
└── PLAN.md             # Project requirements & plan
```

## 🎨 Design

The website features a **cute and playful** design with:

- **Colors**: Soft pink, lavender, mint green on cream background
- **Fonts**: Fredoka One (headings) + Nunito (body)
- **Animations**: Bouncing paws, floating decorations, smooth transitions
- **Accessibility**: Keyboard navigation, reduced motion support

## 🛠️ Technologies

- **HTML5** - Semantic markup
- **CSS3** - Custom properties, flexbox, animations
- **Vanilla JavaScript** - ES6+, Fetch API, localStorage
- **The Cat API** - Random cat images

## 🌐 Deployment to GitHub Pages

1. Create a new repository on GitHub
2. Push this project to the repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Purrfect Kittens 🐱"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/purrfect-kittens.git
   git push -u origin main
   ```
3. Go to repository **Settings** → **Pages**
4. Under "Source", select **main** branch
5. Click **Save**
6. Your site will be live at `https://YOUR_USERNAME.github.io/purrfect-kittens/`

## 🐾 Usage Tips

- **Click the button** or **press Space** to see a new kitten
- Your kitten view count is saved in your browser
- Works offline after the first load (images are cached)

## 📝 API Credits

- **Kitten Images**: [The Cat API](https://thecatapi.com/) - Free tier
- **Fallback Images**: [placekitten](https://placekitten.com/)

## 🤝 Contributing

Feel free to fork this project and make it your own! Some ideas:
- Add a favorites feature
- Include more cat facts
- Add sound effects
- Create a dark mode

## 📄 License

MIT License - Feel free to use this project however you'd like!

---

Made with 💕 for kitten lovers everywhere

*Meow!* 🐱
