let savedTheme = localStorage.getItem("tema");
applyTheme(savedTheme === "light" ? "light" : "dark");

function toggleTheme() {
    let isLight = document.body.classList.contains("light-theme");
    if (isLight) {
        applyTheme("dark");
    } else {
        applyTheme("light");
    }
}

function applyTheme(tema) {
    let icon = document.getElementById("theme-toggle-icon");
    if (tema === "light") {
        document.body.classList.add("light-theme");
        if (icon) icon.className = "fas fa-sun";
    } else {
        document.body.classList.remove("light-theme");
        if (icon) icon.className = "fas fa-moon";
    }
    localStorage.setItem("tema", tema);
}








let nomevisitante = sessionStorage.getItem('nomevisitante');
let idadevisitante = sessionStorage.getItem('idadevisitante');
    if (!idadevisitante || !nomevisitante) {
        nomevisitante = prompt("Bem-vindo ao site! Qual é o seu nome?");
        sessionStorage.setItem('nomevisitante', nomevisitante);
        idadevisitante = prompt("Olá, " + nomevisitante + "! O site possui conteúdo sensível. Por favor, informe sua idade para continuar:");
        sessionStorage.setItem('idadevisitante', idadevisitante);
        if (idadevisitante >= 18) {
        // ITEM 3: FEEDBACK POSITIVO
            alert("Parabéns, " + nomevisitante + "! Seu acesso foi liberado com sucesso.");
        } else {
            // ITEM 3: FEEDBACK NEGATIVO
            alert("Lamentamos, " + nomevisitante + ". Por segurança, o conteúdo sensível permanecerá oculto.");
        }
    }

    
    if (idadevisitante >= 18) {
        document.getElementById("conteudo18").style.filter = "none";
    } else {
        document.getElementById("conteudo18").style.filter = "blur(20px)";
        document.getElementById("conteudo18").style.pointerEvents = "none";
    }

        