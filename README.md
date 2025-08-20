## Robotics

A React single-page application powered by Vite, React Router, and Sass. This project includes a compiled CSS pipeline from Sass, live-reload development server, and a clean page-based routing setup.

### Features
- Fast dev server and build with Vite
- React 19 with Strict Mode
- Client-side routing via React Router
- Sass authoring with automatic watch/compile
- ESLint configuration for React projects

### Tech Stack
- React 19
- Vite 6
- React Router DOM 7
- Sass 1.x
- ESLint 9

---

### Getting Started

Prerequisites:
- Node.js 18+ (LTS recommended)
- npm 9+ (bundled with Node)

Install dependencies:
```bash
npm install
```

Start the development server (runs Vite and Sass watcher concurrently):
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

Run linter:
```bash
npm run lint
```

---

### Available Scripts
- `npm run dev`: starts Vite on your network host and a Sass watch process
- `npm run build`: builds the app into `dist/`
- `npm run preview`: serves the built app from `dist/`
- `npm run lint`: runs ESLint across the project
- `npm run sass`: one-off compile from `Sass/main.scss` to `css/style.css`
- `npm run watch:sass`: watches and compiles Sass to CSS on changes

---

### Project Structure
```text
Robotics/
├─ src/
│  ├─ App.jsx
│  ├─ main.jsx
│  ├─ Layout/
│  │  └─ RootLayout.jsx
│  ├─ components/
│  │  ├─ Header.jsx
│  │  └─ Footer.jsx
│  └─ pages/
│     ├─ Home/
│     │  └─ Home.jsx
│     ├─ ProductAndService/
│     │  └─ ProductAndService.jsx
│     ├─ CaseStudy/
│     │  └─ CaseStudy.jsx
│     ├─ Research/
│     │  └─ Research.jsx
│     └─ Blog/
│        └─ Blog.jsx
├─ Sass/
│  ├─ abstract/ (variables, mixins)
│  ├─ base/ (base, typography, responsive, animations)
│  ├─ components/ (Header, Footer)
│  ├─ page/ (per-page styles)
│  └─ main.scss (entry file compiled to css/style.css)
├─ css/
│  ├─ style.css (generated)
│  └─ style.css.map (generated)
├─ public/
│  └─ assets served as-is
├─ vite.config.js
└─ package.json
```

---

### Routing
Routes are defined in `src/App.jsx` using `react-router-dom`:

- `/` → `Home`
- `/product-service` → `ProductAndService`
- `/case-study` → `CaseStudy`
- `/research` → `Research`
- `/blog` → `Blog`

All pages render within `RootLayout`.

---

### Styling with Sass
- Author styles in the `Sass/` directory. The entry file is `Sass/main.scss`.
- Compiled CSS is output to `css/style.css`.
- During development, `npm run dev` automatically watches Sass changes and recompiles.

If you need a one-off build, use:
```bash
npm run sass
```

---

### Deployment
1. Build the app: `npm run build`
2. Deploy the contents of the `dist/` directory to your static hosting provider (e.g., GitHub Pages, Netlify, Vercel, AWS S3).

For GitHub Pages (project site), you can deploy `dist/` to the `gh-pages` branch using your preferred method or an action.

---

### Contributing
1. Create a new branch from `main`
2. Make your changes
3. Ensure `npm run lint` passes
4. Commit with a clear message and open a pull request

---

### License
Add your license here (e.g., MIT). If absent, this repository is considered proprietary by default.
