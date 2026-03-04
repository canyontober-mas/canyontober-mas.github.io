# Ask Mode Rules

This file provides context for answering questions about this repository.

## 📚 Documentation Sources
*   **"Database" is Code:** The definitive source for vehicle data is `oem-data.js`, not a database schema.
*   **"Inventory" is Code:** The software list is in `software-data.js`.
*   **Search Logic:** The "Search Index" is a hardcoded array in `script.js`. If a user asks "Why isn't page X showing up in search?", checking this array is the answer.

## 💡 Key Concepts & Terminology
*   **"CMS":** Refers to the *local* admin panel in `pages/admin.html` and `cms.js`. It is NOT a real CMS like WordPress.
*   **"Auth":** Refers to the *simulated* login in `auth.js`. There are no real user accounts, just hardcoded checks for specific emails or domains (`@masllc.net`).
*   **"OEM Library":** The collection of vehicle specific pages. This is the core value of the portal.
