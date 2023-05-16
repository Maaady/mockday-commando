// Gets the user's preferred language
let userLang = navigator.userLanguage;

// Redirects the user to the website version in their preferred language
if (userLang === "en-US") {
    window.location.href = "https://hceresetti.github.io/mockdayCommando/index.html";
} else {
    window.location.href = "https://hceresetti.github.io/mockdayCommando/indice.html";
}