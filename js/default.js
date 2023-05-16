// Obtém o idioma preferido do usuário
let userLang = navigator.language || navigator.userLanguage; 

// Redireciona o usuário para a versão do sítio eletrônico em seu idioma preferido
if (userLang === "pt-BR" && !window.location.href.includes("/pt-BR")) {
    window.location.href = "https://hceresetti.github.io/mockdaycommando-br";
} else if (!window.location.href.includes("/en-US")) {
    window.location.href = "https://hceresetti.github.io/mockdaycommando";
}