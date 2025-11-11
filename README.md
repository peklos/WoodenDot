# 🪵 Woodendot - Adaptive Furniture Landing Page

> Modern, responsive landing page for furniture e-commerce crafted from Figma design with pure HTML, CSS, and JavaScript.

![Woodendot](https://img.shields.io/badge/Design-Figma-F24E1E?style=flat-square&logo=figma&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Responsive](https://img.shields.io/badge/Responsive-Yes-success?style=flat-square)

## 📋 Project Overview

A pixel-perfect, fully responsive landing page for **Woodendot** - a premium furniture brand. This project showcases modern web development practices with clean, maintainable code and smooth user experience.

**Design Source:** Figma
**Framework:** None (Pure Vanilla Stack)
**Contact:** [@swslt1616](https://t.me/swslt1616)

---

## ✨ Features

### 🎨 Design & Layout
- **Pixel-perfect implementation** from Figma design
- **Fully responsive** layout (mobile-first approach)
- **Custom CSS Grid & Flexbox** layouts
- **No CSS frameworks** (Bootstrap, Tailwind) - pure custom CSS
- **Smooth animations** and transitions
- **Modern typography** (Cardo, Roboto, Montserrat)

### 🚀 Technical Features
- **Vanilla JavaScript** - no jQuery or heavy frameworks
- **Intersection Observer API** for scroll animations and lazy loading
- **CSS Custom Properties** for maintainability
- **Semantic HTML5** markup
- **SEO-friendly** structure
- **Accessibility considerations** (ARIA labels, keyboard navigation)

### 🎯 Interactive Elements
- Sticky navigation with scroll effects
- Hero section with CTA button
- Product showcase with hover effects
- Instagram gallery integration
- Testimonials carousel
- Newsletter subscription form
- Scroll-to-top button
- Mobile-friendly hamburger menu

### 📱 Responsive Breakpoints
- **Desktop:** 1440px+ (large screens)
- **Laptop:** 1024px - 1440px
- **Tablet:** 768px - 1024px
- **Mobile:** 375px - 767px
- **Small Mobile:** < 375px

---

## 🗂️ Project Structure

```
WoodenDot/
│
├── index.html          # Main HTML file
├── styles.css          # All styles with responsive media queries
├── script.js           # JavaScript functionality
├── images/             # Local image assets
│   ├── living-room.webp
│   ├── home-office.webp
│   ├── dining-room.webp
│   ├── bedroom.webp
│   ├── alada-desk.webp
│   └── instagram-1.webp
│
└── README.md           # Project documentation
```

---

## 🎨 Page Sections

### 1. **Announcement Bar**
Top banner with promotional messaging (free shipping, returns policy)

### 2. **Navigation Header**
- Sticky header with logo-centered layout
- Left navigation: Wooden Furniture, About, Stories
- Right navigation: Search, Account, Cart
- Mobile hamburger menu for responsive design

### 3. **Hero Section**
- Full-width background image
- Centered headline and CTA button
- Smooth scroll interaction

### 4. **Features Bar**
Horizontal scrolling features:
- Free Shipping
- Awarded Product Design
- Ecofriendly Approach
- Crafted in Spain
- 4.8 Star Reviews

### 5. **Categories Grid**
Four-column grid (responsive):
- Living Room
- Home Office
- Dining Room
- Bedroom

### 6. **Product Showcases**
Alternating layout showcases for:
- **Cloe** - Modular Storage System
- **Pelican** - Shelves with hidden hooks
- **Alada** - Floating folding desk (New Favorite badge)
- **Alba Collection** - Modular bedside table & shelf
- **Batea Collection** - Tables with storage & tray tables

### 7. **Instagram Gallery**
Three-column grid with user-generated content and Instagram handles overlay

### 8. **Testimonials Carousel**
Auto-rotating customer reviews with dot navigation

### 9. **Values Section**
Four-column grid highlighting brand values:
- Design
- Footprint
- Made
- Wood

### 10. **Press Logos**
Featured publications and media coverage

### 11. **Footer**
- Four-column layout: About, Help, More, Newsletter
- Social media icons (Facebook, Instagram, WhatsApp)
- Payment methods display
- Copyright and legal links

### 12. **Scroll-to-Top Button**
Fixed position button that appears on scroll

---

## 💻 Technologies Used

### HTML5
- Semantic markup
- ARIA attributes for accessibility
- Optimized meta tags

### CSS3
- **Grid Layout** for complex layouts
- **Flexbox** for alignment and distribution
- **CSS Transitions & Animations**
- **Media Queries** for responsive design
- **Custom Properties** (CSS variables)
- **Advanced selectors** and pseudo-elements

### JavaScript (ES6+)
- **DOM Manipulation**
- **Event Listeners** (scroll, click, hover)
- **Intersection Observer API** for lazy loading
- **Smooth scroll** behavior
- **Carousel functionality**
- **Form validation**
- **Mobile menu toggle**
- **Performance optimizations** (debouncing, passive listeners)

---

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No build tools or dependencies required

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/peklos/WoodenDot.git
```

2. **Navigate to project directory**
```bash
cd WoodenDot
```

3. **Open in browser**
```bash
# Simply open index.html in your browser
# Or use a local server (recommended):

# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server

# VS Code Live Server extension
# Right-click index.html → "Open with Live Server"
```

4. **View in browser**
```
http://localhost:8000
```

---

## 📱 Responsive Design

The layout adapts seamlessly across all devices:

### Desktop (1024px+)
- Full navigation menu
- Multi-column grid layouts
- Hover effects and animations
- Large product images

### Tablet (768px - 1024px)
- Two-column category grid
- Stacked product showcases
- Optimized spacing and typography

### Mobile (< 768px)
- Hamburger menu navigation
- Single-column layouts
- Touch-optimized interactions
- Compressed images for performance

---

## 🎯 Key JavaScript Features

### Smooth Scrolling
```javascript
// Anchor links smooth scroll with header offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // ... smooth scroll implementation
    });
});
```

### Intersection Observer
```javascript
// Lazy loading and scroll animations
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Load image or trigger animation
        }
    });
});
```

### Testimonials Carousel
```javascript
// Auto-rotating carousel with manual controls
setInterval(() => {
    currentTestimonial = (currentTestimonial + 1) % dots.length;
    showTestimonial(currentTestimonial);
}, 5000);
```

### Scroll Effects
- Header shadow on scroll
- Hide/show navigation on scroll direction
- Scroll-to-top button visibility
- Parallax-like effects

---

## 🎨 CSS Architecture

### Reset & Base Styles
- Normalize CSS for cross-browser consistency
- Box-sizing border-box
- Smooth scroll behavior

### Component-Based Organization
Each section has dedicated styles:
- `.announcement-bar`
- `.header` / `.nav-container`
- `.hero`
- `.features-bar`
- `.categories`
- `.product-showcase`
- `.instagram-section`
- `.testimonials`
- `.values-section`
- `.footer`

### Responsive Utilities
```css
/* Mobile-first approach */
@media screen and (max-width: 767px) { /* Mobile */ }
@media screen and (max-width: 1024px) { /* Tablet */ }
@media screen and (min-width: 1441px) { /* Large Desktop */ }
```

---

## 🌟 Performance Optimizations

1. **WebP Images** - Modern image format for smaller file sizes
2. **Lazy Loading** - Images load on scroll using Intersection Observer
3. **Debounced Scroll Events** - Reduced scroll listener overhead
4. **Passive Event Listeners** - Improved scroll performance
5. **CSS Transitions** - Hardware-accelerated animations
6. **Minification Ready** - Clean, production-ready code
7. **No Framework Overhead** - Lightweight vanilla implementation

---

## 🎨 Design Highlights

### Color Palette
- **Primary Black:** `#000000`
- **Primary White:** `#ffffff`
- **Background Gray:** `#f7f7f7`
- **Text Gray:** `#54595f`
- **Accent Red:** `#bc1414`

### Typography
- **Headings:** Roboto (Bold 700)
- **Body:** Cardo (Regular 400, Italic)
- **Accents:** Montserrat (Regular 400)

### Spacing System
- Consistent padding and margins
- Golden ratio-inspired spacing
- Responsive scaling

---

## 🔧 Customization

### Changing Colors
Edit CSS custom properties in `styles.css`:
```css
:root {
    --primary-color: #000;
    --accent-color: #bc1414;
    --background: #f7f7f7;
}
```

### Adding New Sections
Follow the existing HTML structure pattern:
```html
<section class="your-section">
    <div class="container">
        <!-- Your content -->
    </div>
</section>
```

### Modifying Breakpoints
Adjust media queries in `styles.css`:
```css
@media screen and (max-width: YOUR_BREAKPOINT) {
    /* Responsive styles */
}
```

---

## 📞 Contact

**Telegram:** [@swslt1616](https://t.me/swslt1616)

For inquiries about:
- Custom web development
- Figma to HTML/CSS conversion
- Responsive design projects
- Frontend consulting

---

## 📄 License

This project is a commercial work created as a custom order. All rights reserved.

---

## 🙏 Acknowledgments

- **Design:** Provided via Figma
- **Images:** Unsplash contributors (replaced from Pexels)
- **Fonts:** Google Fonts (Cardo, Roboto, Montserrat)
- **Icons:** Custom SVG implementations

---

## 🚀 Future Enhancements

Potential improvements for future versions:
- [ ] Add shopping cart functionality
- [ ] Integrate real product database
- [ ] Implement search functionality
- [ ] Add product filtering
- [ ] Connect newsletter to email service
- [ ] Add blog section
- [ ] Implement multi-language support
- [ ] Add customer reviews system
- [ ] Create admin panel
- [ ] Integrate payment gateway

---

## 📊 Browser Support

- ✅ Chrome/Edge (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Opera (latest)
- ✅ iOS Safari (12+)
- ✅ Chrome Android (latest)

---

## 🐛 Known Issues

No known issues at this time. Please report bugs via Telegram contact.

---

**Built with ❤️ and attention to detail**

*Furniture designed to live in harmony, creating distinctive and timeless spaces.*
