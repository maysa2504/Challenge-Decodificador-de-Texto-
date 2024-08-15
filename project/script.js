const inputTexto = document.querySelector(".input");
const outputMessage = document.querySelector(".message");
const noMessageText = document.querySelector(".texto1"); 
const noMessageSubText = document.querySelector(".texto2"); 
const imageElement = document.querySelector(".aside_message img"); 

function btnEncriptar() {
    const textoEncriptado = encriptar(inputTexto.value);
    outputMessage.value = textoEncriptado;
    outputMessage.style.backgroundImage = "none";
    checkOutputMessage();
}

function encriptar(texto) {
    const matrizCodigo = [
        ["e", "enter"],
        ["i", "imes"],
        ["a", "ai"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    texto = texto.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return texto;
}

function btnDesencriptar() {
    const textoDesencriptado = desencriptar(inputTexto.value);
    outputMessage.value = textoDesencriptado;
    outputMessage.style.backgroundImage = "none"; 
    checkOutputMessage();
}

function desencriptar(texto) {
    const matrizCodigo = [
        ["a", "ai"],
        ["e", "enter"],
        ["i", "imes"],
        ["o", "ober"],
        ["u", "ufat"]
    ];
    texto = texto.toLowerCase();

    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][1])) {
            texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return texto;
}

function btnCopy() {
    const textoCopiado = document.querySelector(".message");
    textoCopiado.select();
    navigator.clipboard.writeText(textoCopiado.value).then(() => {
        alert("Texto copiado para a área de transferência!");
    }).catch(err => {
        console.error("Erro ao copiar texto: ", err);
    });
}

function checkOutputMessage() {
    if (outputMessage.value !== "") {
        noMessageText.style.display = "none";
        noMessageSubText.style.display = "none";
        imageElement.style.display = "none";
    } else {
        noMessageText.style.display = "block";
        noMessageSubText.style.display = "block";
        imageElement.style.display = "block";
    }
}
