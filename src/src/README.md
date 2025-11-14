```markdown
# CampusOne — Demo

A small React + Vite demo UI (CampusOne) built for quick hosting and sharing.

What this repo contains
- A simple, self-contained React demo (src/CampusOne.jsx) using inline SVG icons and Tailwind CDN for styling.
- Vite config and package.json to run locally or build for deployment.

Quick start (run locally)
1. Clone your repo (or skip if already on machine):
   git clone https://github.com/nateeokrahist/CampusOne.git
   cd CampusOne

2. Switch to the work branch (if you want to test the branch first):
   git checkout add-campusone-demo

3. Install dependencies:
   npm install

4. Start the dev server:
   npm run dev

5. Open the app in your browser:
   http://localhost:5173

Deploying (recommended: Vercel)
1. Go to https://vercel.com and sign in with your GitHub account.
2. Import repository `nateeokrahist/CampusOne`.
3. When configuring the project, set:
   - Framework Preset: Vite (Vercel usually detects this automatically)
   - Build Command: npm run build
   - Output Directory: dist
4. Deploy. Vercel will give a public URL you can share on LinkedIn.

Notes and tips
- The project uses the Tailwind CDN in index.html so you don't need to set up Tailwind locally for the demo.
- If you prefer a TypeScript version (campusone_app.tsx) it requires adding TypeScript and lucide-react; I can give exact changes for that if you want.
- Add an `og-image.png` at the repo root if you want a nicer preview when posting the Vercel URL to LinkedIn.

If you want me to create a short LinkedIn blurb for the final demo URL, tell me the final URL and I’ll draft one you can copy/paste.
```
