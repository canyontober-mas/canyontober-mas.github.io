# Project: MAS Technician Portal (ADAS One Stop Shop)

## Overview
A high-fidelity, mobile-first web portal for ADAS field technicians. It replaces a static 512-page Word document with a responsive, searchable Knowledge Base. The UI is designed to mimic a "venture-backed SaaS product" (stripe-like quality) using modern CSS, Glassmorphism, and the Inter font.

## Tech Stack
*   **Frontend:** HTML5, CSS3 (Custom Variables), Vanilla JavaScript (ES6+).
*   **Hosting:** GitHub Pages (Static HTML).
*   **Database (Current):** Javascript objects (`oem-data.js`, `software-data.js`) and `localStorage` for CMS simulation.
*   **Database (Future):** Supabase (PostgreSQL + Auth).
*   **Fonts:** Google Fonts "Inter".

## Architecture & Patterns
*   **Data-Driven Templates:** Do NOT create individual HTML files for new vehicle brands.
    *   **Pattern:** Use `pages/oem-detail.html?brand=xyz`.
    *   **Data Source:** Edit `oem-data.js` to add content, images, and tabs for new brands.
*   **Mock Backend:**
    *   `auth.js`: Simulates login/session management via `localStorage`. Handles "Admin" vs "Tech" roles.
    *   `cms.js`: Simulates Admin CRUD operations (Alerts, Changelogs) via `localStorage`.
*   **CSS System:**
    *   All styles are in `styles.css`.
    *   Use CSS Variables (e.g., `--primary`, `--bg-body`, `--radius-lg`) for consistency.
    *   **Strict Rule:** No inline styles. Use utility classes (e.g., `.status-green`, `.copy-block`).

## Key File Structure
*   `index.html`: Dashboard entry point (requires auth).
*   `login.html`: Entry gate.
*   `oem-data.js`: The JSON structure holding all 512 pages of specific vehicle data.
*   `software-data.js`: The inventory list for the Toolbox Software Center.
*   `styles.css`: The "Mega Overhaul" stylesheet containing all SaaS visual effects.
*   `.nojekyll`: Required for GitHub Pages to serve files correctly without processing.

## Development Workflow
1.  **Running Locally:** Serve the root directory via a simple HTTP server (e.g., `python3 -m http.server`).
2.  **Deployment:** Push to `main` branch on GitHub. GitHub Pages serves static files.
3.  **Authentication:**
    *   **Admin Creds:** `admin@masllc.net` / `admin123`
    *   **Tech Creds:** `tech1282@masllc.net` / `M0bileF1x!` (Triggers reset flow).

## Coding Standards
*   **Visual Style:**
    *   Use **Glassmorphism** for headers (`backdrop-filter: blur(12px)`).
    *   Use deep shadows (`box-shadow`) instead of borders where possible.
    *   Buttons should "lift" on hover (`transform: translateY(-2px)`).
*   **HTML:**
    *   Use semantic tags (`<nav>`, `<main>`, `<header>`).
*   **JavaScript:**
    *   Use `document.addEventListener('DOMContentLoaded')` for init logic.
    *   Keep logic modular (separate `cms.js` from `auth.js`).

## Roadmap / Next Steps **Not in order of importance**
1.  **Supabase Integration:** Replace `cms.js` and `auth.js` with real Supabase Client SDK.
2.  **Admin Interface:** Expand `pages/admin.html` to allow editing `oem-data` via a UI (currently code-only).
3.  **Search Indexing:** Ensure `script.js` index is updated when new data is added to `software-data.js` or `oem-data.js`.
4.  **CSS Modularity:** Break down `styles.css` into modular componentsfor maintainability and efficiency.
5.  **Security considerations** Review codebase for secrets and security vulnerabilites.
