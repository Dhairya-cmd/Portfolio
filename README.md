# Dhairya Upadhyaya — Developer Profile

Recruiter-facing technical profile site for **Dhairya Upadhyaya** (IT Support Specialist & iOS Developer). Content is taken from the professional resume — no placeholder copy.

**Stack:** Vite · React · TypeScript · Tailwind CSS · shadcn/ui primitives

## Run locally

```bash
npm install
npm run dev
```

Open [http://127.0.0.1:4321](http://127.0.0.1:4321).

```bash
npm run build    # production build → dist/
npm run preview  # preview the production build on port 4321
```

## Deploy to GitHub Pages

This project is configured for static hosting.

### Option A — GitHub Actions (recommended)

1. Push this repo to GitHub.
2. In **Settings → Pages**, set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/deploy-pages.yml` builds with `VITE_BASE=/<repo-name>/` and deploys `dist/` on every push to `main`.

### Option B — Manual / `gh-pages` branch

```bash
# Replace YOUR_REPO with the GitHub repository name
VITE_BASE=/YOUR_REPO/ npm run build
# Then upload the contents of dist/ to the gh-pages branch
# or use: npx gh-pages -d dist
```

### User / organization site (`username.github.io`)

If the repo is named `username.github.io`, build with root base:

```bash
VITE_BASE=/ npm run build
```

## Site sections

- **Hero** — name, citizenship, positioning, contact CTAs
- **About** — professional summary
- **Experience** — Dar Al-Handasah, iMobile Designs, Flitzen Technologies, IIT Bombay internship
- **Projects** — DChat (iOS)
- **Skills** — languages, mobile, tools, IT support, AI & soft skills
- **Education & recognition** — degrees, Ideation March win, Intel OpenVINO certificate
- **Contact** — email, phone, LinkedIn

## License

Personal portfolio content. All resume facts belong to Dhairya Upadhyaya.
