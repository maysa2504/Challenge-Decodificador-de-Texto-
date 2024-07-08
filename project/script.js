const inputTexto = document.querySelector(".input");
const message = document.querySelector(".message");

function btnEncriptar() {
    const textEncriptada = encriptar(inputTexto.value);
    message.value = textEncriptada;
    message.style.backgroundImage = "none";
}

function encriptar(stringEncriptada) {
    let matrixCode = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    stringEncriptada = stringEncriptada.toLowerCase();
    for (let i = 0; i < matrixCode.length; i++) {
        if (stringEncriptada.includes(matrixCode[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrixCode[i][0], matrixCode[i][1]);
        }
    }
    return stringEncriptada;
}

function btnDesencriptar() {
    const textDesencriptado = desencriptar(inputTexto.value);
    message.value = textDesencriptado;
    message.style.backgroundImage = "none"; 
}

function desencriptar(strDesencriptado) {
    let matrixCode = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    strDesencriptado = strDesencriptado.toLowerCase();
    for (let i = 0; i < matrixCode.length; i++) {
        if (strDesencriptado.includes(matrixCode[i][1])) {
            strDesencriptado = strDesencriptado.replaceAll(matrixCode[i][1], matrixCode[i][0]);
        }
    }
    return strDesencriptado;
}

function btnCopy() {
    const copiedText = document.querySelector(".message");
    copiedText.select();
    navigator.clipboard.writeText(copiedText.value).then(() => {
        alert("Texto copiado para a área de transferência!");
    }).catch(err => {
        console.error("Erro ao copiar texto: ", err);
    });
}


















/*mudar codigo 



window.onload = function() {
    document.getElementsByClassName("encriptar").addEventListener("click",function() {
        var meuParagrafo = document.getElementsByClassName("texto1")
        meuParagrafo.innerHTML = " voltar a inicio da sessão ..."
    })
}*/