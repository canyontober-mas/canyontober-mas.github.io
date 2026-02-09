/* cms.js - Simulates a Backend Database using LocalStorage */

// Default Data (Loads if nothing is saved yet)
const defaultData = {
    alert: {
        active: true,
        type: 'warning', // info, warning, error
        message: "⚠️ ALERT: FCA Secure Gateway server is currently intermittent. Use offline bypass if necessary."
    },
    changelog: [
        { date: "Jan 04", title: "Toyota Safety Sense 3.0", desc: "Added new radar target heights." },
        { date: "Jan 02", title: "Insurance Pricing", desc: "Updated State Farm agreement rates." },
        { date: "Dec 28", title: "App Update", desc: "Splashtop Streamer requires re-login." }
    ]
};

// 1. LOAD DATA
function getCMSData() {
    const data = localStorage.getItem('mas_cms_data');
    return data ? JSON.parse(data) : defaultData;
}

// 2. SAVE DATA
function saveCMSData(newData) {
    localStorage.setItem('mas_cms_data', JSON.stringify(newData));
    // If we are on the dashboard, refresh the view
    if (typeof renderDashboard === 'function') {
        renderDashboard();
    }
}

// 3. ADMIN FUNCTIONS (Called by Admin Page)
function updateAlert(message, type, isActive) {
    const data = getCMSData();
    data.alert = { message, type, active: isActive };
    saveCMSData(data);
    alert("System Alert Updated!");
}

function addChangelogItem(date, title, desc) {
    const data = getCMSData();
    // Add to top of list
    data.changelog.unshift({ date, title, desc });
    // Keep list short (max 10 items)
    if (data.changelog.length > 10) data.changelog.pop();
    saveCMSData(data);
    alert("Changelog Updated!");
    location.reload(); // Refresh admin list
}

function deleteChangelogItem(index) {
    const data = getCMSData();
    data.changelog.splice(index, 1);
    saveCMSData(data);
    location.reload(); // Refresh admin list
}

// 4. DASHBOARD FUNCTIONS (Called by Index Page)
function renderDashboard() {
    const data = getCMSData();
    
    // Render Alert
    const alertBanner = document.getElementById('dynamicAlert');
    if (alertBanner) {
        if (data.alert.active) {
            alertBanner.style.display = 'block';
            alertBanner.innerHTML = data.alert.message;
            // Set Color Class
            alertBanner.className = 'alert-banner'; // Reset
            alertBanner.classList.add(data.alert.type);
        } else {
            alertBanner.style.display = 'none';
        }
    }

    // Render Changelog
    const changelogContainer = document.getElementById('dynamicChangelog');
    if (changelogContainer) {
        changelogContainer.innerHTML = ''; // Clear current
        data.changelog.forEach(item => {
            const div = document.createElement('div');
            div.className = 'changelog-item';
            div.innerHTML = `
                <span class="date-badge">${item.date}</span>
                <strong>${item.title}</strong><br>
                ${item.desc}
            `;
            changelogContainer.appendChild(div);
        });
    }
}

// Auto-run render if we are on the dashboard
document.addEventListener("DOMContentLoaded", () => {
    // Check if elements exist before running
    if (document.getElementById('dynamicAlert')) {
        renderDashboard();
    }
});