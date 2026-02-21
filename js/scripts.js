/*!
* Start Bootstrap - Stylish Portfolio v6.0.5 (https://startbootstrap.com/theme/stylish-portfolio)
* Copyright 2013-2022 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-stylish-portfolio/blob/master/LICENSE)
*/

function getBrowserLanguage() {
    let supportedLanguages = ['nl', 'fr', 'en']; // The list of supported languages
    let browserLanguage = navigator.language.split('-')[0]; // Get the browser's language code

    // Check if the browser language is in the supported languages list
    if (supportedLanguages.indexOf(browserLanguage) !== -1) {
        return browserLanguage;
    }

    // If not found, return default language
    return 'nl'; // Default to Dutch if the browser language is not supported
}

function changeLanguage(language) {
    // Hide all elements
    document.querySelectorAll('[lang]').forEach(function(el) {
        if (el.tagName.toLowerCase() === 'html') return;
        el.style.display = 'none';
    });

    // Show only elements with the selected language
    document.querySelectorAll('[lang="' + language + '"]').forEach(function(el) {
        if (el.tagName.toLowerCase() === 'html') return;
        el.style.display = '';
    });
}

// Close mobile nav on link click
document.addEventListener('DOMContentLoaded', function() {
    var navLinks = document.querySelectorAll('.navbar-nav .nav-link:not(.dropdown-toggle)');
    var navCollapse = document.getElementById('navbarResponsive');
    navLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            if (navCollapse.classList.contains('show')) {
                new bootstrap.Collapse(navCollapse).hide();
            }
        });
    });
});

// Initialize the page with the default language
changeLanguage(getBrowserLanguage());
