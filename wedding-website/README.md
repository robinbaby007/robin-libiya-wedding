# Wedding Website - Robin Baby & Libiya Joseph

A modern, elegant wedding website built with HTML, CSS, and JavaScript.

## Features

- Full-screen hero section with parallax scrolling
- Smooth scroll navigation with sticky transparent navbar
- Our Love Story timeline section
- Event details with elegant cards
- Live countdown timer to the wedding date
- Photo gallery with lightbox preview
- Romantic quotes section
- RSVP form with validation
- Fully responsive (mobile-first design)
- Subtle scroll animations
- Google Fonts (Cormorant Garamond & Montserrat)

## How to Run

### Option 1: Direct Open
Simply double-click `index.html` to open in your default browser.

### Option 2: Local Server (Recommended)
For best results, serve with a local HTTP server:

**Using Python:**
```bash
python -m http.server 8000
```

**Using Node.js (npx):**
```bash
npx serve .
```

**Using VS Code:**
Install the "Live Server" extension and click "Go Live".

Then open `http://localhost:8000` in your browser.

## Project Structure

```
wedding-website/
  index.html          # Main HTML file
  css/
    styles.css        # All styles
  js/
    main.js           # All interactivity
  photos/             # Wedding photos
```

## Customization

### Update Event Details
Edit the event cards in `index.html` (search for "event-card") to add venue names and times.

### Add/Remove Photos
Add new photos to the `photos/` folder and add corresponding gallery items in `index.html`.

### Change Colors
Edit CSS variables in `styles.css` under `:root` to customize the color scheme.

## Tech Stack

- HTML5
- CSS3 (with CSS Variables)
- Vanilla JavaScript (ES6+)
- Google Fonts

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
