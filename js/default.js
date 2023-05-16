// Gets the user's preferred language
let userLang = navigator.language || navigator.userLanguage;

// Redirects the user to the website version in their preferred language
if (userLang === "en-us") {
    window.location.href = "https://hceresetti.github.io/mockdayCommando/index.html";
} else {
    window.location.href = "https://hceresetti.github.io/mockdayCommando/indice.html";
}