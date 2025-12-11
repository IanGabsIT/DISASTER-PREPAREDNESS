# Sustainable Living Hub

A comprehensive educational website about sustainable living practices, built with pure HTML and CSS (no JavaScript).

## 🌟 Features

- **Pure HTML & CSS** - No JavaScript required, works everywhere
- **Responsive Design** - Optimized for all devices and screen sizes
- **Accessibility** - Proper semantic HTML and ARIA labels
- **Fast Loading** - No scripts or external dependencies
- **Educational Content** - Detailed guides on sustainable practices

## 📁 File Structure

```
SustainableLiving/
├── index.html              # Main page with horizontal slider
├── sustainable.css         # Main stylesheet
├── reduce-reuse-recycle.html    # Sample practice page
├── energy-conservation.html     # Sample practice page
└── README.md              # This file
```

## 🎯 Website Sections

### Main Page (`index.html`)
- **Hero Section** - Introduction to sustainable living
- **Horizontal Slider** - 7 key sustainable practices with navigation
- **Benefits Section** - Why sustainable living matters
- **Daily Tips** - Practical actions for home, shopping, and transport
- **Resources** - Books, websites, apps, and organizations
- **About Section** - Platform information

### Practice Pages
Each practice has its own detailed page with:
- **Video Background** - Engaging visual content
- **Sticky Navigation** - Easy section jumping
- **Detailed Information** - Comprehensive guides
- **Statistics** - Impact metrics and benefits
- **Implementation Tips** - How to get started

## 🎨 Design Features

### Color Scheme
- **Primary**: Green tones (#22c55e, #16a34a, #15803d)
- **Background**: Dark green theme (#0a1f0a, #1a2d1a)
- **Text**: Light colors for contrast (#f0fdf4, #bbf7d0)
- **Accents**: Bright green for interactive elements

### Components
- **CSS-Only Carousel** - Radio button controlled slider
- **Smooth Animations** - CSS transitions and transforms
- **Interactive Cards** - Hover effects and visual feedback
- **Responsive Grid** - Adapts to different screen sizes

## 🚀 Getting Started

1. **Open `index.html`** in any web browser
2. **Navigate** using the horizontal slider or click on practice cards
3. **Explore** detailed practice pages for in-depth information
4. **Customize** colors, content, or add more practice pages

## 📝 Customization

### Adding New Practices
1. Add a new slide to the carousel in `index.html`
2. Create a new practice page (copy existing page structure)
3. Update navigation links and content
4. Modify CSS colors if needed

### Changing Colors
Edit the CSS custom properties in `sustainable.css`:
```css
:root {
  --clr-accent: #22c55e;    /* Change primary green */
  --clr-bg: #0a1f0a;       /* Change background */
  --clr-text: #f0fdf4;     /* Change text color */
}
```

### Adding Images
- Replace image URLs in the HTML files
- Use high-quality images (900px+ width recommended)
- Ensure proper alt text for accessibility

## 🛠️ Technical Details

### CSS-Only Carousel
- Uses hidden `<input type="radio">` elements for state management
- CSS `:checked` selectors control slide positioning
- `transform: translateX()` for smooth sliding
- Label elements styled as navigation buttons

### Responsive Design
- Mobile-first approach with `clamp()` for fluid typography
- CSS Grid and Flexbox for layouts
- Media queries for mobile optimization

### Performance
- No JavaScript = faster loading
- CSS-only animations = smooth performance
- Minimal external dependencies
- Optimized for all devices

## 🌍 Educational Content

The website covers 7 key sustainable practices:

1. **♻️ Reduce, Reuse, Recycle** - Waste management fundamentals
2. **⚡ Energy Conservation** - Efficient energy use and renewable sources
3. **💧 Water Conservation** - Preserving water resources
4. **🚗 Sustainable Transportation** - Eco-friendly mobility options
5. **🏠 Green Living** - Eco-friendly home practices
6. **🥗 Sustainable Food** - Conscious food choices
7. **🤝 Community Action** - Collective environmental efforts

Each practice includes benefits, statistics, and implementation tips tailored for the Philippines context.

## 📱 Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge
- **Mobile**: iOS Safari, Android Chrome
- **No JavaScript**: Works even with JS disabled
- **Responsive**: Adapts to all screen sizes

## 🤝 Contributing

This is an educational project. Feel free to:
- Add more sustainable practice pages
- Improve the content and design
- Translate to other languages
- Add local Philippine context

## 📄 License

Educational use only. Built for environmental awareness and sustainable living education.
