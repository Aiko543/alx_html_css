// Hamburger Menu Toggle
document.addEventListener('DOMContentLoaded', function() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');

    hamburger.addEventListener('click', function() {
        // Toggle active class on hamburger for animation
        hamburger.classList.toggle('active');
        
        // Toggle active class on nav menu to show/hide
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on a navigation link
    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navMenu.contains(event.target);
        const isClickOnHamburger = hamburger.contains(event.target);
        
        if (!isClickInsideNav && !isClickOnHamburger) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});