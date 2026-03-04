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
    },

    // --- GENERAL MOTORS (New) ---
    "gm": {
        "brandName": "GM / Chevy / Cadillac",
        "logo": "icon-gm.png",
        
        // TAB 1: JOB AIDS
        "jobAids": {
            "siLink": "https://www.acdelcotds.com/subscriptions",
            "siNote": "Log in via Bitwarden (Techline Connect).",
            "docLink": "../assets/Job-Aids/GM-OE-Job-Aid.pdf",
            "docName": "View GM ADAS Job Aid",
            "searchTerms": [
                {
                    "title": "Frontview Camera Module",
                    "copy": "Windshield Replacement",
                    "note": "Required when windshield is replaced or camera is removed/reinstalled."
                },
                {
                    "title": "Long Range Radar Sensor",
                    "copy": "Front Bumper / Grille Work",
                    "note": "Radar often mounted behind emblem or in lower grille."
                },
                {
                    "title": "Video Processing Module",
                    "copy": "Surround Vision / 360 Camera",
                    "note": "Calibration required when cameras or modules are replaced."
                }
            ]
        },

        // TAB 2: TERMINOLOGY
        "terminology": [
            { "term": "RPO Code", "def": "Regular Production Option (3-digit code on glovebox sticker)" },
            { "term": "MDI 2", "def": "Multiple Diagnostic Interface (VCI Hardware)" },
            { "term": "Techline Connect", "def": "Main Application Wrapper (TLC)" },
            { "term": "GDS 2", "def": "Global Diagnostic System (Scan Tool Software)" },
            { "term": "SPS 2", "def": "Service Programming System (Module Programming)" },
            { "term": "GWM", "def": "Gateway Module (Cybersecurity Module)" },
            { "term": "PIT", "def": "Preliminary Information (TSB / Bulletin)" }
        ],

        // TAB 3: SCAN TOOL
        "scanTool": {
            "hardware": [
                "Laptop: Dell (Partition: GM)",
                "VCI: GM MDI 2 (Do not use Mongoose/Cardaq)",
                "Drivers: Bosch MDI Manager"
            ],
            "software": {
                "name": "Techline Connect",
                "update": "Launch 'Techline Connect' from desktop. Updates automatically.",
                "warning": "GDS2 lease expires every 7-14 days. Connect to internet to renew.",
                "image": "icon-techline-connect.png"
            },
            "exceptions": {
                "model": "Tech 2 Win",
                "note": "Legacy software for older GM vehicles (Pre-2014). Emulates handheld Tech 2.",
                "image": "icon-tech-2-win.png"
            },
            "sections": [
                {
                    "title": "Scanning and Updating",
                    "steps": [
                        {
                            "text": "Connect the MDI 2 to the vehicle and the laptop. Launch Techline Connect via the desktop icon.",
                            "images": ["gm-MDI-2.png", "icon-techline-connect.png"]
                        },
                        {
                            "text": "Upon launching, the TLC dashboard will appear. Click 'Connect Vehicle' to begin GDS2.",
                            "images": ["tlc-diagnostic-package-1.png"]
                        },
                        {
                            "text": "If working on an older vehicle (Pre-2014), you may need Tech2Win. Launch it separately if GDS2 fails to identify the VIN.",
                            "images": ["tech2win-main-menu.png"]
                        }
                    ]
                },
                {
                    "title": "Saving Scans (GDS2)",
                    "steps": [
                        {
                            "text": "In GDS2, perform a 'Vehicle Wide DTC Check'. Once complete, use the print icon.",
                            "images": ["tlc-create-report.png"]
                        },
                        {
                            "text": "Select 'Print to PDF' in the printer dialog. Name file: 'RO - Scan Before/After'.",
                            "images": ["tlc-print-dialogue.png"]
                        }
                    ]
                },
                {
                    "title": "Saving Scans (Tech2Win)",
                    "steps": [
                        {
                            "text": "Tech2Win simulates the old handheld. Navigate to 'Vehicle Control Systems' > 'DTC Display'.",
                            "images": ["tech2win-diagnostics.png"]
                        },
                        {
                            "text": "Take a screenshot (Win+Shift+S) of the code list. There is no native print-to-pdf function.",
                            "images": ["tech2win-all-dtcs.png"]
                        }
                    ]
                },
                {
                    "title": "RPO Codes",
                    "steps": [
                        {
                            "text": "GM Service Information relies on RPO codes (QR code or Sticker in glovebox/door jamb).",
                            "images": ["GM-RPO-attributes.png"]
                        },
                        {
                            "text": "Always verify the RPO code matches the procedure (e.g., UV2 vs UV3 for cameras).",
                            "images": ["tech2win-rpo.png"]
                        }
                    ]
                }
            ]
        },

        // TAB 4: CALIBRATION
        "calibration": {
            "calculators": [
                { "name": "RPO Code Lookup", "url": "#" },
                { "name": "Tire Circumference Calc", "url": "#" }
            ],
            "setupNotes": "GM 360 cameras use mats. Front camera uses a specific target board.",
            "images": [
                { "src": "gm-360-setup-1.png", "caption": "360 Mat Layout (Front)" },
                { "src": "gm-360-setup-2.png", "caption": "360 Mat Layout (Rear)" },
                { "src": "gm-360-setup-3.png", "caption": "Side Mat Alignment" },
                { "src": "gm-360-setup-4.png", "caption": "Final Verification" }
            ]
        },

        // TAB 5: SECURITY
        "security": {
            "info": "Global A vs Global B (VIP) Architecture.",
            "requirements": [
                "Techline Connect Login",
                "MDI 2 (Required for Global B)",
                "Stable Internet (Server-side auth)"
            ],
            "notes": "Global B vehicles (2020+ Corvette, Escalade, etc.) require the car to be online and unlocked via GM servers."
        }
    },

    // --- FORD / LINCOLN (New) ---
    "ford": {
        "brandName": "Ford / Lincoln",
        "logo": "icon-ford.jpg",
        
        // TAB 1: JOB AIDS
        "jobAids": {
            "siLink": "https://www.motorcraftservice.com",
            "siNote": "Use 'Ford PTS' login via Bitwarden. 2-Day passes available if needed.",
            "docLink": "../assets/Job-Aids/Ford-OE-Job-Aid.pdf",
            "docName": "View Ford ADAS Job Aid",
            "searchTerms": [
                {
                    "title": "Cruise Control Module (CCM) Alignment",
                    "copy": "Vertical & Horizontal Alignment",
                    "note": "Radar requires vertical mechanical adjustment followed by horizontal software alignment."
                },
                {
                    "title": "IPMA Camera Alignment",
                    "copy": "Image Processing Module A",
                    "note": "Required if windshield, camera, or IPMA is replaced, or structural repairs affecting windshield."
                },
                {
                    "title": "360 Degree View Camera Alignment",
                    "copy": "New camera or body component adjustment",
                    "note": "Required when any camera or body component it attaches to is removed/adjusted."
                }
            ]
        },

        // TAB 2: TERMINOLOGY
        "terminology": [
            { "term": "IPMA", "def": "Image Processing Module A (Front Camera / Windshield)" },
            { "term": "IPMB", "def": "Image Processing Module B (360 / Parking Cameras)" },
            { "term": "CCM", "def": "Cruise Control Module (Front Radar)" },
            { "term": "SOD-L / SOD-R", "def": "Side Obstacle Detection (Blind Spot / Rear Cross Traffic)" },
            { "term": "HUD", "def": "Head Up Display Module" },
            { "term": "PTBA", "def": "Pro Trailer Backup Assist" },
            { "term": "FDIM", "def": "Front Display Interface Module (Touchscreen)" },
            { "term": "Azimuth Check", "def": "Horizontal alignment check for cameras/sensors" },
            { "term": "Elevation Check", "def": "Vertical alignment check for cameras/sensors" }
        ],

        // TAB 3: SCAN TOOL
        "scanTool": {
            "hardware": [
                "Laptop: Dell (Partition: Ford)",
                "VCI: VCM 3 (Preferred) or VCM II",
                "Drivers: Ford VCI Manager"
            ],
            "software": {
                "name": "FDRS / IDS",
                "update": "Run 'Ford Diagnostic & Repair System' (FDRS) or IDS from desktop.",
                "warning": "FDRS = Newer vehicles (2018+). IDS = Legacy vehicles. See support chart.",
                "image": "icon-FDRS.png"
            },
            "exceptions": {
                "model": "Mach-E / F-150 Lightning",
                "note": "Requires FDRS exclusively. Ensure laptop is plugged in during updates.",
                "image": "FDRS-Support.png"
            },
            "sections": [
                {
                    "title": "Scanning and Updating",
                    "steps": [
                        {
                            "text": "Connect the VCM3 [ford-VCI.png]. In the event of a VCI recovery, refer to [Recovery Job Aid] slide deck.",
                            "images": ["ford-VCI.png"]
                        },
                        {
                            "text": "Verify scan tool is up to date, refer to [Toolbox>Software Center] for current version."
                        },
                        {
                            "text": "To launch either IDS or FDRS, double click on the appropriate desktop icon for which one you need.",
                            "images": ["icon-FDRS.png", "icon-IDS.png"]
                        },
                        {
                            "text": "To know which software to use, enter the VIN in PTS and it will tell you. You can also reference this chart as a generic guide for when FDRS started being used.",
                            "images": ["FDRS-Support.png", "FDRS-Support-Chart.png", "FDRS-Support-Lincoln.png"]
                        }
                    ]
                },
                {
                    "title": "Saving Scans",
                    "steps": [
                        {
                            "text": "IDS use the print log function. Follow [this] slide deck for a complete reference."
                        },
                        {
                            "text": "To save scans in FDRS, first perform a complete vehicle scan."
                        },
                        {
                            "text": "After the scan is complete, click the printer icon in the top right corner.",
                            "images": ["FDRS-Printing-Scans.png"]
                        },
                        {
                            "text": "After clicking the printer icon, these print options will appear. You can select either of the first 2 options. Option 1: Print DTC Results Table (Much easier to read and easier on the eyes) Option 2: Print All DTCs with Freeze Frame/Snapshot Data (More data is collected and shown in this report).",
                            "images": ["FDRS-Printing-Scans-1.png"]
                        }
                    ]
                },
                {
                    "title": "Saving Screenshots/Data",
                    "steps": [
                        {
                            "text": "CCM angle documentation after dynamic portion examples.",
                            "images": ["FDRS-DataLogger.png", "IDS-DataLogger.png"]
                        }
                    ]
                },
                {
                    "title": "Service Information Usage",
                    "steps": [
                        {
                            "text": "1. To access Ford service information, you will need to first check out one from the asset library."
                        },
                        {
                            "text": "2. After you have one checked out, you will need to launch Splashtop Business from your Toughbook laptop."
                        },
                        {
                            "text": "3. Search \"Ford SI\" and you will see 3 options pop up. Green outline indicates sub is currently being used by someone else."
                        },
                        {
                            "text": "4. Double click on the one you checked out from the library. A new window will open, and you will remote into a PC that has Ford PTS logged in."
                        },
                        {
                            "text": "5. If SI is logged out; the login credentials will be on the desktop. Open that folder and copy/paste the credentials into the login screen.",
                            "images": ["Splashtop-Ford-SI.png"]
                        }
                    ]
                }
            ]
        },

        // TAB 4: CALIBRATION
        "calibration": {
            "calculators": [
                { "name": "Tire Size Calculator", "url": "#" },
                { "name": "Ride Height Specs", "url": "#" }
            ],
            "setupNotes": "Ford often requires dynamic (road test) calibration for cameras. Radars need mechanical leveling first.",
            "images": [
                { "src": "Ford-360-Setup-1.png", "caption": "360 Camera Setup" },
                { "src": "Ford-360-Setup-2.png", "caption": "360 Camera Setup Part 2" },
                { "src": "Ford-Backup-Setup.png", "caption": "Backup Camera Setup" },
            ]
        },

        // TAB 5: SECURITY
        "security": {
            "info": "PATS (Passive Anti-Theft System) functions require NASTF credentials.",
            "requirements": [
                "NASTF VSP ID (Vehicle Security Professional)",
                "Ford LSID (Locksmith ID) linked to account",
                "Secure Data Release Model (SDRM) transaction"
            ],
            "notes": "Parameter Reset (Module swap) may not require LSID, but Key Programming usually does."
        }
    }
};