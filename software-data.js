/* software-data.js - The "Spreadsheet" Data Source */

const softwareInventory = [
    // --- BMW ---
    {
        id: 1,
        oem: "BMW / Mini",
        tool: "ISTA",
        version: "4.57.31 (Main) / 4.57.30 (Prog)",
        date: "02/10/2026",
        status: "good", // good, caution, error
        downloadUrl: "https://onl-osmc-b2i.bmwgroup.com/static/ista/ISTAAOS_4.57.31.32361.zip", // Admin fills this
		downloadUrl_Prog: "https://onl-osmc-b2i.bmwgroup.com/static/ista/ISTAOSS_ProgrammingData_4-57-30.exe", // Admin fills this
        instructionsUrl: "https://docs.google.com/presentation/d/1x9hOweKg2nghnIFOSh85Sq64nqDBYPC6UMubMLvFgHE/edit?usp=sharing", // Admin fills this
        notes: "ICOM FW Level: 04-25-42"
    },
    // --- FORD ---
    {
        id: 2,
        oem: "Ford / Lincoln",
        tool: "FDRS",
        version: "47.6.2",
        date: "01/28/2026",
        status: "caution",
        downloadUrl: "https://www.fordservicecontent.com/Ford_Content/IDS/SoftwareUpdates/IDS-132.04_full.exe",
        instructionsUrl: "https://knowledge.boydgroup.com/knowledgearticles/view/84",
		downloadUrl_VCI: "https://www.fordservicecontent.com/Ford_Content/IDS/VCI_Software/VCI_Software_1.0.1.19.exe",
        notes: "Install the FULL release first. Use with RED FORD VCM2/VCM3"
    },
    {
        id: 3,
        oem: "Ford / Lincoln",
        tool: "IDS",
        version: "132.04 Full (Subscription)",
        date: "11/18/2025",
        status: "good",
        downloadUrl: "#",
        instructionsUrl: "#",
        notes: "IDS & FDRS can be used with VCM2/3 or CARDAQ 3 PLUS"
    },
    // --- GM Techline Connect ---
    {
        id: 4,
        oem: "GM",
        tool: "TLC",
        version: "25.7.28.0",
        date: "0728/2025",
        status: "good",
        downloadUrl: null, // No link available
        instructionsUrl: "https://knowledge.boydgroup.com/knowledgearticles/view/161",
        notes: "For TLC updates, programming, and license renewals: Launch TLC through the AC Delco portal"
    },
    // --- Honda ---
    {
        id: 5,
        oem: "Honda",
        tool: "iHDS",
        version: "1.013.003 --HDS 3.105.036",
        date: "01/08/2026",
        status: "good",
        downloadUrl: null, // No link available
        instructionsUrl: "https://docs.google.com/document/d/1P1o-9UCmh6KG-hmcX0hjIx7uQ6gmMbQmwnekT14q50E/edit?tab=t.3vzrcrm945lv#heading=h.sl9frbpcnyoj",
        notes: "Use Honda Download Manager 2.0"
    },
    // --- H/K/G ---
    {
        id: 6,
        oem: "H/K/G",
        tool: "KDS 2.0",
        version: "MNH-02-0056",
        date: "09/18/2024",
        status: "good",
        downloadUrl: null, // No link available
        instructionsUrl: "#",
        notes: "Login weeekly and check for updates"
    },
    // --- MERCEDES ---
    {
        id: 7,
        oem: "Mercedes-Benz",
        tool: "Xentry",
        version: "24.12.4",
        date: "12/04/2024",
        status: "error",
        downloadUrl: "#",
        instructionsUrl: "#",
        notes: "DO NOT RUN NEW VERSION. Add-ons OK."
    }
];

// Function to render this table
function renderSoftwareTable() {
    const tableBody = document.getElementById('softwareTableBody');
    if (!tableBody) return;

    tableBody.innerHTML = ''; // Clear existing

    softwareInventory.forEach(item => {
        // 1. Determine Status Pill
        let statusBadge = '';
        if (item.status === 'good') statusBadge = '<span class="status-green">Current</span>';
        if (item.status === 'caution') statusBadge = '<span class="status-warning">Caution</span>';
        if (item.status === 'error') statusBadge = '<span class="status-red">Do Not Update</span>';

        // 2. Build Button Links
        let links = '';
        if (item.downloadUrl) {
            links += `<a href="${item.downloadUrl}" class="action-btn" style="padding:4px 8px; font-size:0.75rem; margin-right:5px;">⬇️ DL</a>`;
        }
        if (item.downloadUrl_Prog) {
            links += `<a href="${item.downloadUrl}" class="action-btn" style="padding:4px 8px; font-size:0.75rem; margin-right:5px;">⬇️ DL Prog</a>`;
        }		
        if (item.downloadUrl_VCI) {
            links += `<a href="${item.downloadUrl}" class="action-btn" style="padding:4px 8px; font-size:0.75rem; margin-right:5px;">⬇️ DL VCI</a>`;
        }		
        if (item.instructionsUrl) {
            links += `<a href="${item.instructionsUrl}" class="action-btn" style="padding:4px 8px; font-size:0.75rem;">📄 Guide</a>`;
        }

        // 3. Create Row HTML
        const row = `
            <tr>
                <td>
                    <strong>${item.oem}</strong><br>
                    <span style="color:var(--text-muted); font-size:0.85rem;">${item.tool}</span>
                </td>
                <td>
                    <div style="font-weight:600;">${item.version}</div>
                    ${statusBadge}
                </td>
                <td>${item.date}</td>
                <td>
                    <div style="margin-bottom:5px;">${links}</div>
                    <div style="font-size:0.8rem; color:var(--text-muted); line-height:1.4;">${item.notes}</div>
                </td>
            </tr>
        `;
        tableBody.innerHTML += row;
    });
}

// Run on load
document.addEventListener('DOMContentLoaded', renderSoftwareTable);