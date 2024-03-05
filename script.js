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
    let containerMensagem = document.getElementById('containerMensagem');
    containerMensagem.innerHTML = '<p id="textoResultado"></p><button id="copiarTexto" class="botoes" onClick="(copy())">Copiar</button>';
    containerMensagem.style.justifyContent = 'space-between';
    containerMensagem.style.overflowWrap = 'break-word';
    containerMensagem.style.overflow = 'auto';
    let botaoCopiar = document.getElementById("copiarTexto");
    botaoCopiar.style.margin = '20px 0px';
    let exibidor = document.getElementById("textoResultado");
    exibidor.textContent = convertido;
    exibidor.style.fontSize = '20px';
    exibidor.style.color = '#495057';
}

function descriptografar(textoEnviado) {
    for (let i = 0; i < textoEnviado.length; i++) {
        if (textoEnviado[i] == 'a' && textoEnviado[i + 1] == 'i') {
            textoEnviado = textoEnviado.slice(0, i + 1) + textoEnviado.slice(i + 2);
        }
    }
    textoEnviado = textoEnviado.replaceAll('nter', '');
    textoEnviado = textoEnviado.replaceAll('mes', '');
    textoEnviado = textoEnviado.replaceAll('ber', '');
    textoEnviado = textoEnviado.replaceAll('fat', '');
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
    navigator.clipboard.writeText(document.getElementById('textoResultado').innerHTML);
  };