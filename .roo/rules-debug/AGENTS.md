# Debug Mode Rules

This file provides specific guidance for debugging tasks in this repository.

## 🐛 Common Issues & Fixes
*   **"Brand Not Found" Error:** Usually means the `?brand=xyz` URL parameter doesn't match a key in `oem-data.js`. Check capitalization (keys are case-sensitive).
*   **Images Not Loading:** 
    *   Check `oem-detail.html` rendering logic: it prepends `../assets/images/[brand]/`.
    *   Ensure the image is NOT stored in the root `assets/images/` unless it's a shared icon.
*   **Search Not Working:** The search bar doesn't work if the `searchIndex` in `script.js` has a syntax error. It fails silently. Check console for `Uncaught SyntaxError`.

## 🕵️‍♂️ Debugging Tools
*   **Auth State:** Inspect `Application > Local Storage > mas_user` to see current role and session data.
*   **CMS Data:** Inspect `Application > Local Storage > mas_cms_data` to see locally saved alerts/changelogs.
*   **URL Params:** The single-page architecture relies heavily on `window.location.search`. Manually manipulating URL params is the fastest way to test different views.
