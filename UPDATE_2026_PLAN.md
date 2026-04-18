# 2026 Update Plan

This project still installs and builds on Node `v20.19.4`, but it is an old Create React App codebase and should be treated as a legacy app.

## Current State

- Uses `react-scripts` / Create React App in [package.json](/Users/MAC/Projects/MyProjects/hasibul-portfolio/package.json:20).
- Uses React 17 in [package.json](/Users/MAC/Projects/MyProjects/hasibul-portfolio/package.json:16).
- Uses React Router 5 in [package.json](/Users/MAC/Projects/MyProjects/hasibul-portfolio/package.json:19).
- Uses Material UI v4 in [package.json](/Users/MAC/Projects/MyProjects/hasibul-portfolio/package.json:10).
- Uses legacy `ReactDOM.render` in [src/index.js](/Users/MAC/Projects/MyProjects/hasibul-portfolio/src/index.js:7).
- Has stale default CRA test in [src/App.test.js](/Users/MAC/Projects/MyProjects/hasibul-portfolio/src/App.test.js:4).
- Has invalid JSX like `class=` and a misused `react-scroll` `Link` in [src/Components/Navbar/Navbar.js](/Users/MAC/Projects/MyProjects/hasibul-portfolio/src/Components/Navbar/Navbar.js:9).
- Loads Bootstrap and jQuery from CDN in [public/index.html](/Users/MAC/Projects/MyProjects/hasibul-portfolio/public/index.html:21).

## What I Verified

- `npm run build` passes.
- `npm test -- --watchAll=false` fails because the default CRA test was never updated.
- `npm audit --omit=dev` reports 67 vulnerabilities, mostly inherited through the CRA toolchain.

## Recommended Strategy

Do this in two phases:

1. Stabilize the current app so you can safely edit content and ship small changes.
2. Migrate off CRA to Vite, then upgrade React and other major packages.

Trying to do all dependency upgrades at once will create unnecessary breakage.

## Step By Step

### Phase 1: Make the legacy app safe to work on

1. Use Node 20 LTS.
   Run:
   ```bash
   node -v
   npm -v
   ```

2. Install dependencies cleanly.
   Run:
   ```bash
   rm -rf node_modules
   npm install
   ```

3. Start the app and confirm the baseline.
   Run:
   ```bash
   npm start
   npm run build
   ```

4. Fix JSX correctness issues before any migration.
   Update all `class=` to `className=`.
   Replace the broken `react-scroll` brand `Link` with either:
   - a normal `<a href="#home">`
   - or a proper `react-scroll` `Link` using a valid `to` prop

5. Fix the test suite.
   Replace the default CRA test with a real test for visible page content like `Hasibul Islam` or `My Projects`.

6. Remove dead or unused dependencies.
   Check whether these are still needed:
   - `@material-ui/core`
   - `@material-ui/icons`
   - `firebase`
   - `react-countdown`
   - `react-scroll`
   - `web-vitals`

7. Reduce CDN dependency where possible.
   This project currently depends on Bootstrap and jQuery loaded from HTML.
   For 2026, prefer:
   - Bootstrap CSS only, installed via npm if you still want Bootstrap
   - no jQuery at all

8. Refresh portfolio content first.
   Update:
   - resume link
   - social links
   - project list
   - about text
   - copyright year

### Phase 2: Migrate off Create React App

9. Create a new branch for the migration.
   Run:
   ```bash
   git checkout -b chore/migrate-cra-to-vite
   ```

10. Replace CRA with Vite.
    High-level work:
    - remove `react-scripts`
    - add `vite`
    - add `@vitejs/plugin-react`
    - move HTML template handling from CRA style to Vite style
    - update scripts to `vite`, `vite build`, `vite preview`

11. Move the entry point to React 18 or 19-compatible root rendering.
    Replace `ReactDOM.render` with `createRoot`.

12. Upgrade React and React DOM together.
    Recommended target after Vite migration:
    - `react`
    - `react-dom`

13. Upgrade routing.
    Move from `react-router-dom` v5 to current v7 patterns only after the build tool migration is stable.

14. Replace Material UI v4 if it is actually in use.
    If needed, migrate to MUI v6+.
    If not used, remove it completely.

15. Re-run quality checks after each major change.
    Run:
    ```bash
    npm run build
    npm test -- --watchAll=false
    npm audit
    ```

### Phase 3: Make it feel current in 2026

16. Update the visual design.
    This portfolio is functional but dated. Focus on:
    - cleaner typography
    - better spacing
    - improved mobile layout
    - stronger project cards
    - updated hero copy

17. Add real metadata.
    Update:
    - page title
    - description
    - Open Graph tags
    - favicon / social preview image

18. Improve performance basics.
    - compress large images
    - convert heavy PNGs to WebP where practical
    - lazy-load non-critical images if needed

19. Add deployment setup.
    Good static hosting options:
    - Vercel
    - Netlify
    - Cloudflare Pages
    - GitHub Pages

20. Document the project for future maintenance.
    Update `README.md` with:
    - required Node version
    - install steps
    - run/build steps
    - deployment steps

## Suggested Order For You

If your goal is to start editing this project again without wasting time, do this order:

1. Fix JSX issues and the broken test.
2. Update portfolio content.
3. Remove unused packages.
4. Migrate CRA to Vite.
5. Upgrade React and router.
6. Refresh design and deploy.

## Notes

- As of February 14, 2025, React officially deprecated Create React App and recommends migrating existing apps to a framework or a build tool like Vite.
- For this repo, Vite is the best practical target because this is a small client-side portfolio site, not a complex full-stack React app.
