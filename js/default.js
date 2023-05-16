// Gets the user's preferred language
let userLang = navigator.language || navigator.userLanguage;

// Redirects the user to the website version in their preferred language
if (userLang === "en-US") {
    window.location.href = "https://hceresetti.github.io/mockdaycommando/";
} else {
    window.location.href = "https://hceresetti.github.io/mockdaycommando/index.html";
}