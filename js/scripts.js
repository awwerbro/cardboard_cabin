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
        el.style.display = 'none';
    });

    // Show only elements with the selected language
    document.querySelectorAll('[lang="' + language + '"]').forEach(function(el) {
        el.style.display = '';
    });
}

// Initialize the page with the default language
changeLanguage(getBrowserLanguage());
