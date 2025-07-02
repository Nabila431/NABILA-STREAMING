import { renderHomePage } from './pages/home.page.js';
import { renderProfilePage } from './pages/profile.page.js';

document.getElementById('homeLink').addEventListener('click', () => {
    renderHomePage();
});

document.getElementById('profileLink').addEventListener('click', () => {
    renderProfilePage();
});

// Render Home Page by default
renderHomePage();
