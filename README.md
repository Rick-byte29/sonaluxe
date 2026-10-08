# Sona Luxe Unisex Salon

Five-route static salon site. Routes: /, /services/, /offers/, /gallery/, /visit/.

The logo and 34 unique image assets were extracted from publicly accessible Instagram photos and reel covers on 8 October 2026. Individual post and carousel access required sign-in; this is not a complete full-resolution export. Puja prices were transcribed from the original poster, valid 1–18 October 2026. All website CTA links use the user-specified 9101035255. Five testimonials are labelled illustrative samples. The map uses the user-specified Bengtol Gate, Chirang, Assam search location; it is not a verified business pin.

Serve dist with any static host. Each route has its own index.html, with shared app.js and style.css. No dependency installation or build required. Scroll motion is driven by viewport position and repeats in either direction; content stays visible, with a reduced-motion override. The image archive is available on the Gallery page.

## Hosting from GitHub

Use the `dist` directory as the static output directory. On Vercel select Framework Preset: Other, leave the build command empty, and use Output Directory: dist. The included vercel.json sets the output directory. No dependencies or build step are required.

The latest version includes a three-second branded loading screen and gentler frame-rate-independent scroll motion.
