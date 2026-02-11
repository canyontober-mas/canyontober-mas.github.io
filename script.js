/* script.js */

// 1. SIMPLE SEARCH DATABASE
// In a static site, we manually list the pages/sections we want searchable.
// As you add pages, you add lines here.
const searchIndex = [
	{ title: "Software Version Table", url: "toolbox.html?tab=software", category: "Toolbox" },
	{ title: "AutoZone Discount PIN", url: "toolbox.html?tab=perks", category: "Benefit" },
	{ title: "Discount Tire Code", url: "toolbox.html?tab=perks", category: "Benefit" },
	{ title: "Maintenance Schedule", url: "toolbox.html?tab=fleet", category: "Fleet" },
	{ title: "Van Oil Change Intervals", url: "toolbox.html?tab=fleet", category: "Fleet" },
	{ title: "Laptop Partitions (Dell 1 vs 2)", url: "toolbox.html?tab=it", category: "IT" },
	{ title: "Tablet VCI Pairing Code", url: "toolbox.html?tab=it", category: "IT" },
    { title: "Toyota Radar Setup", url: "oem-toyota.html?tab=calibration", category: "OEM" },
    { title: "Toyota Camera Setup", url: "oem-toyota.html?tab=calibration", category: "OEM" },
    { title: "Toyota Techstream VCI", url: "oem-toyota.html?tab=scantool", category: "OEM" },
    { title: "Toyota Security (NASTF/D1)", url: "oem-toyota.html?tab=security", category: "OEM" },
    { title: "Invoice Pricing (State Farm/Geico)", url: "operations.html", category: "SOP" },
    { title: "Google Drive Uploads", url: "operations.html", category: "SOP" },
    { title: "Laptop Partitions", url: "toolbox.html", category: "Toolbox" },
    { title: "Autel Support Contact", url: "directory.html", category: "Contact" },
    { title: "Wiring Repair SOP", url: "operations.html", category: "SOP" },
	{ title: "Geico Insurance Pricing", url: "operations.html?tab=pricing", category: "Billing" },
	{ title: "State Farm Pricing", url: "operations.html?tab=pricing", category: "Billing" },
	{ title: "Write-Up: Calibration Fail", url: "operations.html?tab=writeups", category: "Templates" },
	{ title: "Write-Up: Aftermarket Windshield", url: "operations.html?tab=writeups", category: "Templates" },
	{ title: "Gerber WiFi Password", url: "operations.html?tab=admin", category: "Admin" }
];

// 2. SEARCH FUNCTION
const searchInput = document.querySelector('.search-input');
const mainContent = document.querySelector('.main-content');

// Check if search input exists (it's on every page)
if (searchInput) {
    // Create a results container dynamically
    const resultsBox = document.createElement('div');
    resultsBox.className = 'search-results-dropdown';
    document.querySelector('.search-container').appendChild(resultsBox);

    searchInput.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        resultsBox.innerHTML = ''; // Clear previous

        if (query.length < 2) {
            resultsBox.style.display = 'none';
            return;
        }

        // Filter the database
        const results = searchIndex.filter(item => 
            item.title.toLowerCase().includes(query)
        );

        if (results.length > 0) {
            resultsBox.style.display = 'block';
            results.forEach(result => {
                const div = document.createElement('div');
                div.className = 'search-result-item';
                div.innerHTML = `
                    <span class="badge ${result.category.toLowerCase()}">${result.category}</span>
                    <a href="${result.url}">${result.title}</a>
                `;
                resultsBox.appendChild(div);
            });
        } else {
            resultsBox.style.display = 'none';
        }
    });

    // Close dropdown when clicking outside
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.search-container')) {
            resultsBox.style.display = 'none';
        }
    });
}

// 3. TAB HANDLING & PERSISTENCE
// This checks the URL for ?tab=calibration and opens that tab automatically.
document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const tabParam = urlParams.get('tab');

    if (tabParam) {
        // Find the button that opens this tab and click it
        const tabBtn = document.querySelector(`.tab-btn[onclick*="'${tabParam}'"]`);
        if (tabBtn) {
            tabBtn.click();
        }
    }
});

// Update the openTab function to change the URL (so techs can share links)
function openTab(tabName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab-content");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab-btn");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    
    // Highlight the clicked button
    const activeBtn = document.querySelector(`.tab-btn[onclick*="'${tabName}'"]`);
    if(activeBtn) activeBtn.classList.add("active");

    // Update URL without reloading
    const newUrl = new URL(window.location);
    newUrl.searchParams.set('tab', tabName);
    window.history.pushState({}, '', newUrl);
}