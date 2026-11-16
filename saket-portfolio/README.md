# Saket Kumar — Portfolio Website

A responsive, multi-page React portfolio built with Vite, Tailwind CSS and Framer Motion.

## Portfolio positioning
This portfolio presents Saket Kumar's hands-on work in web development, video editing and content writing. Work is positioned as personally planned, created, edited, tested and reviewed by Saket.

## Included pages
- Home
- About Me
- Skills & Technologies
- Projects / My Work
- Video Editing Showcase
- Services
- Contact

## Requirements
- Node.js 18 or newer
- npm

## Run locally in VS Code
1. Extract the ZIP file.
2. Open the inner `saket-portfolio` folder in VS Code (the folder containing `package.json`).
3. Open Terminal → New Terminal.
4. Run:

   ```powershell
   npm.cmd install
   npm.cmd run dev
   ```

5. Open the local URL printed in the terminal (usually `http://localhost:5173`).

## Create a production build

```powershell
npm.cmd run build
```

Vite creates the production website in the `dist` folder.

## Before publishing
1. Add real screenshots and the public URL of the FASTag project in `src/pages/Projects.jsx`.
2. Add your actual video samples or public video links in `src/pages/Video.jsx`.
3. Review every service description and only advertise services you are ready to deliver.
4. The contact form currently opens the visitor's default email application with a pre-filled message. It does not store submissions. To receive enquiries without the visitor's email app, connect a form backend/service.
5. The planned projects are labelled as planned; update them only after completing the work yourself.

## Contact details
- Email: sak82saket@gmail.com
- Phone / WhatsApp: +91 6284108551

## Social profiles
- GitHub: https://github.com/THESak8
- LinkedIn: https://www.linkedin.com/in/1thesak8/
- Instagram: https://www.instagram.com/_bhayji/
- Facebook: https://www.facebook.com/profile.php?id=100049206765174

## Customization
- Main content and contact information: `src/data.js`
- Pages: `src/pages/`
- Shared navigation/footer: `src/components/`
- Styling: `src/index.css` and `tailwind.config.js`


## Deploying to Netlify

- Build command: `npm run build`
- Publish directory: `dist`
- The `public/_redirects` file keeps React Router pages working when visitors refresh a page or open a direct page URL.
