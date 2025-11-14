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
2. Click "New Project" → Import Git Repository → choose `nateeokrahist/CampusOne`.
3. Vercel usually detects Vite automatically. If asked, set:
   - Framework Preset: Vite
   - Build Command: npm run build
   - Output Directory: dist
4. Deploy and copy the public URL to share on LinkedIn.

Notes
- The project uses the Tailwind CDN in index.html so you don't need to set up Tailwind locally for the demo.
- If you want a TypeScript version using lucide-react, I can add tsconfig.json and update files for that — say so if you'd like that.
