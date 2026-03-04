# Architect Mode Rules

This file provides specific guidance for architectural planning in this repository.

## 🏗️ System Constraints & Patterns
*   **Static Site Architecture:** The system is hosted on GitHub Pages. There is **NO server-side processing**.
    *   *Constraint:* All dynamic functionality (Auth, CMS, Search) must be client-side JavaScript.
    *   *Constraint:* "Database" updates require a code commit to `oem-data.js`.
*   **Simulated Backend:** 
    *   `auth.js` and `cms.js` are mocks. They use `localStorage` to persist state *per device*. 
    *   *Architectural Decision:* Do not design features assuming a central database exists yet (though Supabase is on the roadmap).
*   **Routing Strategy:** 
    *   Uses a "Master Detail" pattern. `pages/oem-detail.html` is the *only* template for vehicle pages.
    *   *Pattern:* All vehicle data is injected via URL parameters (`?brand=x`) reading from a JSON object. Do not architect individual HTML files for brands.

## 🚀 Future Roadmap Considerations
*   **Supabase Integration:** The project is prepared for a switch to Supabase.
    *   *Plan:* `auth.js` and `cms.js` are isolated modules to make swapping them for real SDK calls easier.
    *   *Design:* Maintain this separation of concerns. Do not couple UI logic directly to storage logic.
