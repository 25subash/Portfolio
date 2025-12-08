# Portfolio Website - Standalone HTML Version

This is a pure HTML/CSS/JavaScript version of the portfolio website.

## Files Structure

```
Portfolio HTML/
├── index.html          # Home page
├── about.html          # About page
├── projects.html       # Projects page with side panel
├── contact.html        # Contact page
├── resume.html         # Resume page with PDF viewer
├── styles.css          # All styling and animations
├── script.js           # Custom cursor and utilities
├── projects.js         # Projects data and panel logic
├── coryer.png          # Project image 1
├── dscribe.webp        # Project image 2
├── Subash_Resume.pdf   # Resume PDF
└── README.md           # This file
```

## How to Use

1. **Open the website**: Simply double-click `index.html` to open it in your default browser
2. **Navigate**: Use the navbar to move between pages
3. **View projects**: Click on any project card to open the side panel with details
4. **View resume**: On the resume page, click "View Resume" to show the PDF inline

## Features

### Animations
- **Home page**: Glitch animation on the hero name
- **About page**: Text shadow animation on title
- **Projects page**: Variable font animation on title
- **Contact page**: Split-text slide-in animation on title
- **Resume page**: Bouncing letters animation on title

### Custom Cursor
All pages feature a custom cursor with a lag effect for smooth tracking.

### Background Watermark
Each page has a unique watermark text:
- Home: "Hello There."
- About: "About Me."
- Projects: "Projects." (vertical)
- Resume: "Resume." (vertical)
- Contact: "Contact."

### Projects Side Panel
- Click any project card to open a detailed side panel
- Panel shows: title, subtitle, image, description, technologies, and website link
- Click outside the panel or the X button to close
- Scroll lock prevents background scrolling when panel is open

## Customization

### Add More Projects
Edit `projects.js` and add new project objects to the `projects` array:

```javascript
{
  title: "Your Project Name",
  subtitle: "Short description",
  description: "Full description of the project",
  technologies: ["Tech1", "Tech2", "Tech3"],
  website: "https://example.com",  // Optional
  image: "your-image.png"          // Optional
}
```

### Change Colors
Edit the CSS variables in `styles.css`:

```css
:root {
  --text: #6A6869;
  --color-primary: #d4d4d4;
  --color-secondary: #b8b8b8;
  /* etc. */
}
```

### Change Background Gradient
Modify the `html` background in `styles.css`:

```css
html {
  background: linear-gradient(135deg, #F8FAF5 0%, #FEF7F3 100%) !important;
}
```

## Browser Compatibility

Works best in modern browsers:
- Chrome/Edge (recommended)
- Firefox
- Safari

## Deployment

To deploy this website:

1. **GitHub Pages**: Upload all files to a GitHub repository and enable GitHub Pages
2. **Netlify/Vercel**: Drag and drop the entire folder
3. **Any web server**: Upload all files to your hosting provider

## Notes

- All fonts are loaded from Google Fonts CDN
- The Meta variable font (for Projects title) is loaded from axis-praxis.org
- Make sure all image files and the PDF are in the same directory as the HTML files
- No build process or dependencies required - just open and run!

## Support

For issues or questions, refer to the original Next.js project documentation.
