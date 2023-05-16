// Gets the user's preferred language
let userLang = navigator.userLanguage;

// Redirects the user to the website version in their preferred language
if (userLang === "pt-BR") {
    window.location.href = "https://hceresetti.github.io/mockdaycommando/indice.html";
} else {
    window.location.href = "https://hceresetti.github.io/mockdaycommando/index.html";
}