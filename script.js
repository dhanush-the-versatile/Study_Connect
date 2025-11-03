document.addEventListener('DOMContentLoaded', () => {

    // --- Theme Toggler ---
    const themeToggleBtn = document.getElementById('theme-toggle');
    const body = document.body;
    const themeIcon = themeToggleBtn.querySelector('i');

    // Function to set the theme
    function setTheme(theme) {
        body.className = theme + '-theme';
        themeIcon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
        localStorage.setItem('theme', theme);
    }

    // Check for saved theme in localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);

    // Toggle theme on button click
    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        setTheme(newTheme);
    });

    
    // --- Hamburger Menu ---
    const hamburgerBtn = document.getElementById('hamburger-btn');
    const mobileNav = document.getElementById('mobile-nav');
    const overlay = document.getElementById('overlay');

    function toggleMenu() {
        hamburgerBtn.classList.toggle('active');
        mobileNav.classList.toggle('active');
        overlay.classList.toggle('active');
        // Prevent scrolling when menu is open
        body.style.overflow = mobileNav.classList.contains('active') ? 'hidden' : 'auto';
    }

    // Open/close menu on hamburger click
    hamburgerBtn.addEventListener('click', toggleMenu);

    // Close menu when clicking the overlay
    overlay.addEventListener('click', toggleMenu);

    // Close menu when clicking a link in the mobile nav
    mobileNav.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            if (mobileNav.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

});
