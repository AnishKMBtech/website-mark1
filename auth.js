// Check authentication status
function checkAuth() {
    if (sessionStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = 'login.html';
    }
}

// Logout function
function logout() {
    sessionStorage.removeItem('isLoggedIn');
    window.location.href = 'logout-success.html'; // Redirect to the new logout success page
}

// Add logout button to the page
function addLogoutButton() {
    const logoutBtn = document.createElement('button');
    logoutBtn.textContent = 'Eject'; // Change the button text to "Eject"
    logoutBtn.style.position = 'fixed';
    logoutBtn.style.top = '10px';
    logoutBtn.style.right = '10px';
    logoutBtn.style.padding = '8px 16px';
    logoutBtn.style.backgroundColor = '#e74c3c';
    logoutBtn.style.color = 'white';
    logoutBtn.style.border = 'none';
    logoutBtn.style.borderRadius = '4px';
    logoutBtn.style.cursor = 'pointer';
    logoutBtn.style.zIndex = '1000';
    logoutBtn.onclick = logout;
    document.body.appendChild(logoutBtn);
}
