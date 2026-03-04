# Code Mode Rules

This file provides specific guidance for coding tasks in this repository.

## 🛠️ Data & State Management
*   **Data Entry:** When adding new vehicles to `oem-data.js`, ensure keys match the `?brand=` URL parameter exactly.
*   **Search Updates:** AFTER adding content, you must update the `searchIndex` array in `script.js` or the content will be invisible to search.
*   **State Persistence:** `cms.js` writes to `localStorage`. To make "permanent" changes for all users, you must edit the `defaultData` object in `cms.js` directly.

## 🧩 Component & UI Patterns
*   **Tab Logic:** Do not write custom tab switchers. Use the global `openTab(tabName)` function in `script.js` which handles URL state updates.
*   **Image Handling:** When adding images to `oem-data.js`:
    *   Use filename ONLY (e.g., `setup.jpg`) for local assets.
    *   System expects images in `assets/images/[brand]/`.
*   **Glassmorphism:** Use `backdrop-filter: blur(12px)` classes for headers/modals; do not implement custom blur styles.

## 🧪 Testing & Validation
*   **Auth Reset:** To test the "New User" flow, execute `localStorage.removeItem('mas_user')` in the console.
*   **Admin Mode:** To test admin features locally, log in with `admin@masllc.net`. Admin UI elements are hidden via CSS (`.is-admin`) unless this specific user is active.
