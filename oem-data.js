/* oem-data.js - Central Content Database */

const oemLibrary = {
    // --- TOYOTA (Existing) ---
    "toyota": {
        "brandName": "Toyota / Lexus",
        "logo": "icon-toyota.jpg",
        "jobAids": {
            "siLink": "https://techinfo.toyota.com",
            "siNote": "Use Bitwarden 'Multi-User Access' if you do not have a personal GTS+ sub.",
            "searchTerms": [
                {
                    "title": "Seat Weight Sensor (OCS) Initialization",
                    "copy": "\"The vehicle is brought to a workshop for repair due to an accident or collision\"",
                    "note": "Search for collision requirements."
                },
                {
                    "title": "Front Recognition Camera",
                    "copy": "\"Parts relating to the tires or suspension are replaced or adjusted\"",
                    "note": "Check both RM (Repair Manual) and New Car Features manual."
                }
            ]
        },
        "terminology": [
            { "term": "Adaptive Cruise Control (ACC)", "def": "Millimeter wave Radar, DRCC" },
            { "term": "Blind Spot Monitor (BSM)", "def": "Blind Spot Warning, RCTA" },
            { "term": "Lane Keep Assist (LKAS)", "def": "Front Recognition Camera, LDA" },
            { "term": "Intuitive Park Assist (IPA)", "def": "Ultrasonic Sensors, Clearance Warning" },
            { "term": "Panoramic View Monitor (PVM)", "def": "360 Cameras, Television Camera" },
            { "term": "Occupant Classification System (OCS)", "def": "Seat Weight Sensor (SWS)" }
        ],
        "scanTool": {
            "hardware": [
                "Laptop: Dell (Partition: Toyota)",
                "VCI: Cardaq 3+ or Mongoose Cable",
                "Access: Single-User Access (Must use personal GTS+ Sub)"
            ],
            "software": {
                "name": "GTS+",
                "update": "Run 'Agent Lite' application.",
                "warning": "License can only be active on 1 PC partition at a time. Hotline: (877) 762-7666",
                "image": "gts-plus-icon.png" 
            },
            "exceptions": {
                "model": "Toyota Supra",
                "note": "Uses BMW software logic (Toyota ISTA). Requires Volvo VOE cable or BMW ICOM.",
                "image": "toyota-ista-icon.png"
            },
            "workflow": [
                "1. Initial Health Check (Print PDF, Label: 'Invoice# Scan before clear')",
                "2. Clear DTCs (RoB data only clears if extra info retrieved)",
                "3. Final Health Check (Required to scan all modules again)"
            ]
        },
        "calibration": {
            "calculators": [
                { "name": "LKAS Calculator", "url": "#" },
                { "name": "BSM Calculator", "url": "#" }
            ],
            "setupNotes": "Toyota requires a pre-scan and post-scan. Bumper must be removed to inspect radar bracket.",
            "images": [
                { "src": "toyota-front-cam-setup.jpg", "caption": "Front Camera (Mat Setup)" },
                { "src": "toyota-rear-cam-setup.jpg", "caption": "Rear Camera (Mat Setup)" },
                { "src": "toyota-360-adj.jpg", "caption": "360 Adjustment Screen" }
            ]
        },
        "security": {
            "info": "Buying a PIN = $100 Line Item + Labor Line.",
            "requirements": [
                "Vehicle Owner's Driver's License",
                "Vehicle Title or Insurance",
                "Vehicle with License Plate visible",
                "VIN Tag",
                "Odometer (if available)"
            ],
            "notes": "All Keys Lost (AKL) requires LSID D1 + PIN. Adding a key does NOT require LSID if you have a working key."
        }
    },

    // --- HONDA / ACURA (New) ---
    "honda": {
        "brandName": "Honda / Acura",
        "logo": "icon-honda.jpg",
        
        // TAB 1: JOB AIDS
        "jobAids": {
            "siLink": "https://techinfo.honda.com",
            "siNote": "SINGLE USER. Check out subscription from Asset Library. Login via Bitwarden.",
            "searchTerms": [
                {
                    "title": "Position Statements",
                    "copy": "Link available in Assets Folder",
                    "note": "Refer to 'Post collision scan and calibration position statement' in Drive."
                },
                {
                    "title": "Seat Weight Sensor (SWS)",
                    "copy": "Occupant Detection System",
                    "note": "ALL Honda & Acura vehicles require SWS inspection/calibration if involved in a collision."
                }
            ]
        },

        // TAB 2: TERMINOLOGY
        "terminology": [
            { "term": "Millimeter Wave Radar", "def": "Adaptive Cruise Control (ACC)" },
            { "term": "Multipurpose Camera", "def": "LKAS, LDW, FCW (Lane Keep, Lane Dept, Forward Collision)" },
            { "term": "Monocular Camera", "def": "Combined ACC & LKAS (Single camera system)" },
            { "term": "Multiview Camera", "def": "360 Degree / Around View System" },
            { "term": "Blind Spot Information", "def": "Blind Spot Monitor, Rear Cross Traffic Alert" },
            { "term": "LaneWatch", "def": "Passenger side exterior mirror camera" },
            { "term": "Aiming", "def": "Honda term for Calibration" }
        ],

        // TAB 3: SCAN TOOL
        "scanTool": {
            "hardware": [
                "Laptop: Dell (Partition: Honda)",
                "VCI: Cardaq 3+ (Preferred) or Mongoose",
                "Drivers: Must install Cardaq 3+ drivers manually"
            ],
            "software": {
                "name": "iHDS / HDS",
                "update": "Use 'Honda Download Manager 2.0'. File > Check for Updates.",
                "warning": "Multi-User tool. If locked, use Bitwarden credentials to force login.",
                "image": "ihds-icon.png" 
            },
            "exceptions": {
                "model": "ECU Key Write",
                "note": "Required for some module replacements. See 'Honda ECU Key Write' slide deck.",
                "image": "ecu-key-write-slide.jpg"
            },
            "workflow": [
                "1. Launch iHDS (It will auto-select HDS or iHDS). Enter any 6-digit RO.",
                "2. HDS Clearing: Click Green Arrow > 'All DTC Check' > 'Clear DTC'.",
                "3. iHDS Clearing: Click Green Arrow > 'DTC' > 'ALL' button (top right).",
                "4. CRITICAL: Save SRS Data. Screenshot or Print PDF. Required on every car.",
                "5. Saving Scans: Use 'Microsoft Print to PDF'. Name: `RO - scan before/after`."
            ]
        },

        // TAB 4: CALIBRATION
        "calibration": {
            "calculators": [
                { "name": "Lanewatch Troubleshooting", "url": "#" },
                { "name": "360 Camera Guide", "url": "#" }
            ],
            "setupNotes": "Refer to driving support job aids for specific troubleshooting.",
            "images": [
                { "src": "honda-bsm-setup.png", "caption": "BSM Setup" },
                { "src": "honda-rear-cam.jpg", "caption": "Rear Camera" },
                { "src": "honda-front-cam.jpg", "caption": "Front Camera" },
                { "src": "honda-lanewatch.jpg", "caption": "LaneWatch Setup" },
                { "src": "honda-360-guide.jpg", "caption": "360 Camera Guide" }
            ]
        },

        // TAB 5: SECURITY
        "security": {
            "info": "Use Autel first. If no coverage, use iHDS Immobilizer Tool.",
            "requirements": [
                "D1 Paperwork (Must be completed by store if Autel fails)",
                "LSID (Required for PIN purchase)",
                "Tag @sched in Slack to begin D1 process",
                "Tag @LSID in Slack BEFORE purchasing PIN"
            ],
            "notes": "PIN purchase from store.honda.com requires D1 + LSID documents uploaded first."
        }
    }
};