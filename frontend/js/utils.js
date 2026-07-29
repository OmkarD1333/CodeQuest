/**
 * utils.js — Shared utilities for CodeQuest
 * Included by all pages that need auth protection, navigation, or API calls.
 */

// Base URL for all backend API calls
const API_BASE = 'http://localhost:3000';

/**
 * AUTH_GUARD — Redirects to login if no user is stored in localStorage.
 * Call at the top of any page that requires authentication.
 * @returns {object|null} The parsed user object, or null (and redirects).
 */
function AUTH_GUARD() {
    const userString = localStorage.getItem('codeQuestUser');
    if (!userString) {
        window.location.assign('/pages/index.html');
        return null;
    }
    return JSON.parse(userString);
}

/**
 * logout — Clears the stored user session and redirects to login.
 */
function logout() {
    localStorage.removeItem('codeQuestUser');
    window.location.assign('/pages/index.html');
}

/**
 * bindLogoutButton — Attaches the logout handler to a button by ID.
 * @param {string} [buttonId='logout-btn'] - The ID of the logout button element.
 */
function bindLogoutButton(buttonId = 'logout-btn') {
    const btn = document.getElementById(buttonId);
    if (btn) {
        btn.addEventListener('click', logout);
    }
}
