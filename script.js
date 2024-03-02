let textoEnviado;
let tipoEnvio;
let textoCriptografado;

function pegarTexto(tipoEnvio) {
    textoEnviado = document.getElementById("inputTexto").value;
    if (textoEnviado == "") {
        alert("Por favor, insira um texto.");
    } else {
        if (tipoEnvio == "Criptografar") {
            converterTexto(textoEnviado);
        } else {
            descriptografar(textoEnviado);
        }
}
}

function exibirTexto(convertido) {
    let teste = document.getElementById('exotico');
    teste.innerHTML = '<p id="textoCriptografado"></p><button id="copiarTexto" class="botoes" onClick="(copy())">Copiar</button>';
    teste.style.justifyContent = 'space-between';
    teste.style.overflowWrap = 'break-word';
    teste.style.overflow = 'auto';
    let doideira = document.getElementById("copiarTexto");
    doideira.style.margin = '20px 0px';
    let exibidor = document.getElementById("textoCriptografado");
    exibidor.textContent = convertido;
    exibidor.style.fontSize = '20px';
    exibidor.style.color = '#495057';
}

function descriptografar(textoEnviado) {
    exibirTexto(textoEnviado);
}

function converterTexto(textoPadrao) {
    let novaString = [];
        for (let i = 0; i < textoPadrao.length; i++) {
            switch (textoPadrao[i]) {
                case "a":
                    novaString.push(textoPadrao[i] + "i");
                    break;
                case "e":
                    novaString.push(textoPadrao[i] + "nter");
                    break;
                case "i":
                    novaString.push(textoPadrao[i] + "mes");
                    break;
                case "o":
                    novaString.push(textoPadrao[i] + "ber");
                    break;
                case "u":
                    novaString.push(textoPadrao[i] + "fat");
                    break;
                default:
                    novaString.push(textoPadrao[i]);
            }
        }
        textoCriptografado = novaString.join("");
        exibirTexto(textoCriptografado);
}

function copy() {
    navigator.clipboard.writeText(textoCriptografado);
  };