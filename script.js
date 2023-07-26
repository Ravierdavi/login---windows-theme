let windowsImage = document.querySelector("#windows-image")
let windowsNumber = document.querySelector("#windows-number")
let windowsFundoMobile = document.querySelector("#bg-mobile")
let windowsFundoTablet = document.querySelector("#bg-tablet")
let windowsFundoBigscreen = document.querySelector("#bg-bigscreen")
let menu = document.querySelector("#menu-ativo")
menu.style.display = "none"

function verificarTamanhoDaTela() {
    if (window.innerWidth >= 1200) {
        menu.style.display = "none"
    } else if (window.innerWidth >= 768) {
        menu.style.display = "none"
    } else {
        menu.style.display = "none"
    }
}

function ativarMenu() {
    if (menu.style.display == "none") {
        menu.style.display = "block"
    } else {
        menu.style.display = "none"
    }
}

function desativarMenu() {
        menu.style.display = "none"
}

// Temas do windows
function mudarTema(versaoWindows) {
    menu.style.display = "none"
    if (versaoWindows == "win11") {
        windowsFundoMobile.style.background = "blue url(./imgs/win11-background-mobile.png) center bottom /cover no-repeat"
        windowsFundoTablet.style.background = "blue url(./imgs/win11-background-tablet.png) right center /cover no-repeat"
        windowsFundoBigscreen.style.background = "blue url(./imgs/win11-background-bigscreens.png) right bottom /cover no-repeat"
        windowsImage.src = "./imgs/win11-icon.png"
        windowsImage.style.width = "clamp(0px, 6vw + 30px, 90px)"
        windowsNumber.innerHTML = "11"
        document.documentElement.style.setProperty("--font", "Segoe UI Variable")
        document.documentElement.style.setProperty("--gradient01", "#082642")
        document.documentElement.style.setProperty("--gradient02", "#80B8EE")
        document.documentElement.style.setProperty("--input-box-color", "#235A9E")
        document.documentElement.style.setProperty("--input-color", "#9ecbff")
        document.documentElement.style.setProperty("--button-color", "#0076D3")
    } else if (versaoWindows == "win10") {
        windowsFundoMobile.style.background = "blue url(./imgs/win10-background-mobile.png) right center /cover no-repeat"
        windowsFundoTablet.style.background = "blue url(./imgs/win10-background-tablet.png) left center /cover no-repeat"
        windowsFundoBigscreen.style.background = "blue url(./imgs/win10-background-bigscreens.png) right center /cover no-repeat"
        windowsImage.src = "./imgs/win10-icon.png"
        windowsImage.style.width = "clamp(0px, 6vw + 40px, 90px)"
        windowsNumber.innerHTML = "10"
        document.documentElement.style.setProperty("--font", "Arial, Helvetica, sans-serif")
        document.documentElement.style.setProperty("--gradient01", "#216CB0")
        document.documentElement.style.setProperty("--gradient02", "#9BF3DA")
        document.documentElement.style.setProperty("--input-box-color", "#216CB0")
        document.documentElement.style.setProperty("--input-color", "#9BF3DA")
        document.documentElement.style.setProperty("--button-color", "#149EC0")
    } else {
        windowsFundoMobile.style.background = "blue url(./imgs/win7-background-mobile.png) center center /cover no-repeat"
        windowsFundoTablet.style.background = "blue url(./imgs/win7-background-tablet.png) center center /cover no-repeat"
        windowsFundoBigscreen.style.background = "blue url(./imgs/win7-background-bigscreens.png) center center /cover no-repeat"
        windowsImage.src = "./imgs/win7-icon.png"
        windowsNumber.innerHTML = "7"
        document.documentElement.style.setProperty("--font", "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif")
        document.documentElement.style.setProperty("--gradient01", "#e8ff1e")
        document.documentElement.style.setProperty("--gradient02", "#46b5ff")
        document.documentElement.style.setProperty("--input-box-color", "#28591B")
        document.documentElement.style.setProperty("--input-color", "#c4ff77")
        document.documentElement.style.setProperty("--button-color", "#D2370C")
    }
}