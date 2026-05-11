# Crochet Bags

Landing page mobile-first para bolsos de crochet.

## Local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Test

```bash
npm test
```

## Publish (GitHub Pages)

This project is configured to auto-deploy to GitHub Pages via GitHub Actions.

1. Push this repository to GitHub.
2. Ensure your default branch is `main` or `master`.
3. In GitHub, go to **Settings → Pages**.
4. Under **Build and deployment**, set **Source** to **GitHub Actions**.
5. Push to `main` or `master` to trigger deployment.

The workflow file is at `.github/workflows/deploy.yml` and publishes the Vite `dist/` folder.
