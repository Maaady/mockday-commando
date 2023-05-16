// Gets the user's preferred language
let userLang = navigator.language || navigator.userLanguage;

// Redirects the user to the website version in their preferred language
if (userLang === "pt-BR") {
    window.location.href = "https://hceresetti.github.io/mockdayCommando/pt-BR";
} else {
    window.location.href = "https://hceresetti.github.io/mockdayCommando/en-US";
}