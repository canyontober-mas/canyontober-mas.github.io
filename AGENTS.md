# AGENTS.md - Developer Guide & System Patterns

This file provides guidance to agents when working with code in this repository.

## ⚡ Core Architecture & "Database"
*   **Static SPA:** GitHub Pages site acting as a SPA via URL params (`pages/oem-detail.html?brand=toyota`).
*   **Data Source:** No backend. Content lives in `oem-data.js` (vehicle info) and `software-data.js`.
*   **Mock Auth/CMS:** `auth.js` and `cms.js` use `localStorage` to simulate login and admin edits.
    *   *Creds:* `admin@masllc.net` / `admin123` (Admin), `tech[ID]@masllc.net` / `M0bileF1x!` (Tech).
    *   *Persistence:* CMS edits (alerts/changelogs) are **local-only** and do not propagate to other users.

## 🔍 Non-Obvious System Behaviors
*   **Manual Search Indexing:** `script.js` contains a hardcoded `searchIndex` array. You **MUST** manually add new pages/tabs there; the site is not crawled.
*   **Deep-Linked Tabs:** Tabs rely on URL params (`?tab=calibration`). Ensure button `onclick` handlers match these params to support link sharing.
*   **Asset Pathing:** `oem-data.js` stores *filenames only* (e.g., `"logo.png"`). The rendering logic in `oem-detail.html` auto-prepends `../assets/images/[brand]/`.
    *   *Exception:* If an image path contains `http`, the prepending logic is skipped.

## ⚠️ Critical Gotchas
*   **No Inline Styles:** Strictly forbidden. Use utility classes from `styles.css`.
*   **Auth Loops:** `auth.js` redirects to `login.html` if `localStorage` is empty. Run `localStorage.clear()` to test "First Time Login".
*   **Brand Creation:** Do NOT create `honda.html`. Use `oem-detail.html?brand=honda` and add the data key "honda" to `oemLibrary` in `oem-data.js`.
*   **HTML Structure:** The `oem-detail.html` file has a script at the bottom that parses URL params and injects data. Do not remove this script block.
