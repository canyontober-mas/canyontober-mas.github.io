/* auth.js - Handles Login, Logout, and User Sessions */

const DEFAULT_PASS = "M0bileF1x!";

// 1. LOGIN LOGIC
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = document.getElementById('email').value.toLowerCase();
        const password = document.getElementById('password').value;
        const errorBox = document.getElementById('errorBox');
        const resetSection = document.getElementById('resetSection');
        const submitBtn = document.getElementById('submitBtn');

        // SIMULATED BACKEND RESPONSE
        // In real life, this would send a fetch() request to Supabase
        
        // Scenario A: Admin Login
        if (email === 'admin@masllc.net' && password === 'admin123') {
            createSession(email, 'admin', 'Admin User');
            return;
        }

        // Scenario B: Tech Login (First Time)
        if (email.includes('@masllc.net') && password === DEFAULT_PASS) {
            // Check if we are already in reset mode
            if (resetSection.style.display === 'block') {
                // Handle the password change
                const newPass = document.getElementById('newPassword').value;
                const confirmPass = document.getElementById('confirmPassword').value;
                
                if (newPass !== confirmPass || newPass.length < 6) {
                    errorBox.innerText = "Passwords do not match or are too short.";
                    errorBox.style.display = 'block';
                    return;
                }
                
                // Success: "Save" new password and log in
                alert("Password updated successfully.");
                createSession(email, 'tech', extractTechID(email));
            } else {
                // Trigger Reset Mode
                errorBox.style.display = 'none';
                resetSection.style.display = 'block';
                submitBtn.innerText = "Update Password & Login";
                document.getElementById('password').disabled = true; // Lock old pass
            }
            return;
        }

        // Scenario C: Tech Login (Normal - Simulated)
        // For demo purposes, we accept any @masllc.net email with 'securePass'
        if (email.includes('@masllc.net') && password === 'securePass') {
            createSession(email, 'tech', extractTechID(email));
            return;
        }

        // Failure
        errorBox.innerText = "Invalid credentials. (Try 'tech128@masllc.net' / 'M0bileF1x!')";
        errorBox.style.display = 'block';
    });
}

// Helper: Extract ID from email (tech128@masllc.net -> #128)
function extractTechID(email) {
    const namePart = email.split('@')[0];
    // Remove non-numeric characters to find ID
    const numbers = namePart.replace(/\D/g,'');
    return numbers ? `#${numbers}` : 'Tech';
}

// 2. SESSION MANAGEMENT (LocalStorage)
function createSession(email, role, displayId) {
    const user = {
        email: email,
        role: role,
        id: displayId,
        isLoggedIn: true
    };
    localStorage.setItem('mas_user', JSON.stringify(user));
    window.location.href = 'index.html'; // Redirect to Dashboard
}

function logout() {
    localStorage.removeItem('mas_user');
    window.location.href = 'login.html'; // Redirect to Login
}

// 3. PAGE PROTECTION (Run on every page except login)
function checkAuth() {
    // Don't run this check on the login page itself
    if (window.location.pathname.includes('login.html')) return;

    const userStr = localStorage.getItem('mas_user');
    if (!userStr) {
        // Not logged in -> Kick to login page
        // Handle path differences (if in /pages/ folder)
        if (window.location.pathname.includes('/pages/')) {
            window.location.href = '../login.html';
        } else {
            window.location.href = 'login.html';
        }
    } else {
        // User is logged in -> Update UI
        const user = JSON.parse(userStr);
        updateUserUI(user);
    }
}

function updateUserUI(user) {
    // Find the profile element in the top bar
    const profileEl = document.querySelector('.user-profile');
    if (profileEl) {
        profileEl.innerHTML = `
            <span style="margin-right:10px; font-weight:bold;">${user.role === 'admin' ? 'Admin' : 'Tech ' + user.id}</span>
            <a href="#" onclick="logout()" style="font-size:0.8rem; color:#d32f2f;">Logout</a>
        `;
    }

    // Show Admin Features if Admin
    if (user.role === 'admin') {
        document.body.classList.add('is-admin'); // We will use CSS to show edit buttons
    }

    // SHOW ADMIN SIDEBAR LINK
    if (user.role === 'admin') {
        document.body.classList.add('is-admin');
        
        // Find sidebar list
        const navList = document.querySelector('.nav-links');
        if (navList && !document.getElementById('adminLink')) {
            const li = document.createElement('li');
            li.id = 'adminLink';
            // Adjust path depending on if we are in root or /pages/
            const path = window.location.pathname.includes('/pages/') ? 'admin.html' : 'pages/admin.html';
            li.innerHTML = `<a href="${path}" style="color:#ff9800;">⚙️ Admin Dashboard</a>`;
            navList.appendChild(li);
        }
    }
}

// Run protection immediately
checkAuth();