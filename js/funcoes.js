var pacotes = ["888555555123888", "333333555584333", "222333555124000", "000111555874555", "111888555654777", "111333555123333", "555555555123888", "888333555584333", "111333555124000", "333888555584333", "555888555123000", "111888555123555", "888000555845333", "000111555874000", "111333555123555"]
var pacotesNome = ["Pacote 1", "Pacote 2", "Pacote 3", "Pacote 4", "Pacote 5", "Pacote 6", "Pacote 7", "Pacote 8", "Pacote 9", "Pacote 10", "Pacote 11", "Pacote 12", "Pacote 13", "Pacote 14", "Pacote 15",]
var codigosRegioes = ["111", "333", "555", "888", "000"]
var codigosProdutos = ["000", "111", "333", "555", "888"]
var co = []
var coCod = []
var ne = []
var neCod = []
var n = []
var nCod = []
var se = []
var seCod = []
var s = []
var sCod = []
var brinquedosSul = []

function mostrar() {
    var x = document.getElementById("info");
    if (x.style.display === "none") {
        x.style.display = "flex";

    } else {
        x.style.display = "none";
    }

}
function mostrar2() {
    var x = document.getElementById("container");
    if (x.style.display === "block") {
        x.style.display = "none";

    } else {
        x.style.display = "block";
    }

}


function validar() {

    function divMostra() {
        var T = document.getElementById("container");
        T.style.display = "block";
    }

    divMostra();
    var validos = []
    var validosCod = []
    var invalidos = []
    for (i = 0; i < pacotes.length; i++) {
        if (codigosRegioes.indexOf(pacotes[i].substring(0, 3)) !== -1 & codigosRegioes.indexOf(pacotes[i].substring(3, 6)) !== -1 & codigosProdutos.indexOf(pacotes[i].substring(12, 15)) !== -1 & pacotes[i].substring(9, 12) !== "584") {
            validosCod.push(pacotes[i])
            validos.push(pacotesNome[i])
            if (pacotes[i].substring(0, 3) === "111" && pacotes[i].substring(12, 15) === "000") {
                invalidos.push(pacotesNome[i])
                validos.pop(pacotesNome[i])
                validosCod.pop(pacotes[i])
            }
        } else {
            invalidos.push(pacotesNome[i])
        }
    }
    var elemento = document.getElementById('container')
    var titulo = document.createElement("h1");
    var textoTitulo = document.createTextNode("Pacotes válidos:");
    titulo.appendChild(textoTitulo);
    elemento.appendChild(titulo);
    var paragrafo = document.createElement("li")
    var textoParagrafo = document.createTextNode("São validos os pacotes: " + validos.join(", "))
    paragrafo.appendChild(textoParagrafo)
    elemento.appendChild(paragrafo)

    var titulo = document.createElement("h1");
    var textoTitulo = document.createTextNode("Pacotes inválidos:");
    titulo.appendChild(textoTitulo);
    elemento.appendChild(titulo);
    var paragrafo = document.createElement("li")
    var textoParagrafo = document.createTextNode("São inválidos os pacotes: " + invalidos.join(", ") + " são inválidos.")
    paragrafo.appendChild(textoParagrafo)
    elemento.appendChild(paragrafo)


    for (i = 0; i < validosCod.length; i++) {
        if (validosCod[i].substring(3, 6) === "111") {
            co.push(validos[i])
            coCod.push(validosCod[i])
        } else if (validosCod[i].substring(3, 6) === "333") {
            ne.push(validos[i])
            neCod.push(validosCod[i])
        } else if (validosCod[i].substring(3, 6) === "555") {
            n.push(validos[i])
            nCod.push(validosCod[i])
        } else if (validosCod[i].substring(3, 6) === "888") {
            se.push(validos[i])
            seCod.push(validosCod[i])
        } else if (validosCod[i].substring(3, 6) === "000") {
            s.push(validos[i])
            sCod.push(validosCod[i])
        }
    }
    var titulo = document.createElement("h1");
    var textoTitulo = document.createTextNode("Pacotes agrupados por região de destino:");
    titulo.appendChild(textoTitulo);
    elemento.appendChild(titulo);
    var paragrafo = document.createElement("li")
    var textoParagrafo = document.createTextNode("Região Centro-Oeste: " + co.join(", "))
    paragrafo.appendChild(textoParagrafo)
    elemento.appendChild(paragrafo)
    var paragrafo = document.createElement("li")
    var textoParagrafo = document.createTextNode("Região Nordeste: " + ne.join(", "))
    paragrafo.appendChild(textoParagrafo)
    elemento.appendChild(paragrafo)
    var paragrafo = document.createElement("li")
    var textoParagrafo = document.createTextNode("Região Norte: " + n.join(", "))
    paragrafo.appendChild(textoParagrafo)
    elemento.appendChild(paragrafo)
    var paragrafo = document.createElement("li")
    var textoParagrafo = document.createTextNode("Região Sudeste: " + se.join(", "))
    paragrafo.appendChild(textoParagrafo)
    elemento.appendChild(paragrafo)
    var paragrafo = document.createElement("li")
    var textoParagrafo = document.createTextNode("Região Sul: " + s.join(", "))
    paragrafo.appendChild(textoParagrafo)
    elemento.appendChild(paragrafo)


    for (i = 0; i < validosCod.length; i++) {
        if (validosCod[i].substring(0, 3) === "000" && validosCod[i].substring(12, 15) === "888") {
            brinquedosSul.push(validos[i])
        }
    }
    var titulo = document.createElement("h1");
    var textoTitulo = document.createTextNode("Verificação de brinquedos vindos do sul:");
    titulo.appendChild(textoTitulo);
    elemento.appendChild(titulo);
    var paragrafo = document.createElement("li")
    var textoParagrafo = document.createTextNode("Quantidade de brinquedos com sul como origem: " + brinquedosSul.length)
    paragrafo.appendChild(textoParagrafo)
    elemento.appendChild(paragrafo)

    var qtdVendedor = []

    for (i = 0; i < validosCod.length; i++) {
        qtdVendedor.push(validosCod[i].substring(9, 12))
        qtdVendedor.join("Vendedor ")
    }

    var distribuicao = qtdVendedor.reduce((acum, cur) => Object.assign(acum, { [cur]: (acum[cur] || 0) + 1 }), {});

    var titulo = document.createElement("h1");
    var textoTitulo = document.createTextNode("Número de pacotes enviados por vendedor:");
    titulo.appendChild(textoTitulo);
    elemento.appendChild(titulo);
    var paragrafo = document.createElement("li")
    var textoParagrafo = document.createTextNode("Quantidade de pacotes por vendedor: " + (JSON.stringify(distribuicao, null, 2)))
    paragrafo.appendChild(textoParagrafo)
    elemento.appendChild(paragrafo)


    var titulo = document.createElement("h1");
    var textoTitulo = document.createTextNode("Relatório: Tipos de produtos com Região de Destino Sudeste: ");
    titulo.appendChild(textoTitulo);
    elemento.appendChild(titulo);
    for (i = 0; i < seCod.length; i++) {
        var tipoProd = seCod[i].substring(12, 15)
        switch (tipoProd) {
            case "000":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + se[i] + " com código " + seCod[i] + " é um produto do tipo 'Jóia'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
            case "111":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + se[i] + " com código " + seCod[i] + " é um produto do tipo 'Livro'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
            case "333":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + se[i] + " com código " + seCod[i] + " é um produto do tipo 'Eletrônico'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
            case "555":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + se[i] + " com código " + seCod[i] + " é um produto do tipo 'Bebida'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
            case "888":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + se[i] + " com código " + seCod[i] + " é um produto do tipo 'Brinquedo'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
        }
    }
    var titulo = document.createElement("h1");
    var textoTitulo = document.createTextNode("Relatório: Tipos de produtos com Região de Destino Centro-Oeste: ");
    titulo.appendChild(textoTitulo);
    elemento.appendChild(titulo);
    for (i = 0; i < coCod.length; i++) {
        var tipoProd = coCod[i].substring(12, 15)
        switch (tipoProd) {
            case "000":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + co[i] + " com código " + coCod[i] + " é um produto do tipo 'Jóia'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
            case "111":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + co[i] + " com código " + coCod[i] + " é um produto do tipo 'Livro'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
            case "333":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + co[i] + " com código " + coCod[i] + " é um produto do tipo 'Eletrônico'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
            case "555":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + co[i] + " com código " + coCod[i] + " é um produto do tipo 'Bebida'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
            case "888":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + co[i] + " com código " + coCod[i] + " é um produto do tipo 'Brinquedo'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
        }
    }
    var titulo = document.createElement("h1");
    var textoTitulo = document.createTextNode("Relatório: Tipos de produtos com Região de Destino Norte: ");
    titulo.appendChild(textoTitulo);
    elemento.appendChild(titulo);
    for (i = 0; i < nCod.length; i++) {
        var tipoProd = nCod[i].substring(12, 15)
        switch (tipoProd) {
            case "000":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + n[i] + " com código " + nCod[i] + " é um produto do tipo 'Jóia'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
            case "111":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + n[i] + " com código " + nCod[i] + " é um produto do tipo 'Livro'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
            case "333":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + n[i] + " com código " + nCod[i] + " é um produto do tipo 'Eletrônico'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
            case "555":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + n[i] + " com código " + nCod[i] + " é um produto do tipo 'Bebida'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
            case "888":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + n[i] + " com código " + nCod[i] + " é um produto do tipo 'Brinquedo'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
        }
    }
    var titulo = document.createElement("h1");
    var textoTitulo = document.createTextNode("Relatório: Tipos de produtos com Região de Destino Nordeste: ");
    titulo.appendChild(textoTitulo);
    elemento.appendChild(titulo);
    for (i = 0; i < neCod.length; i++) {
        var tipoProd = neCod[i].substring(12, 15)
        switch (tipoProd) {
            case "000":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + ne[i] + " com código " + neCod[i] + " é um produto do tipo 'Jóia'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
            case "111":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + ne[i] + " com código " + neCod[i] + " é um produto do tipo 'Livro'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
            case "333":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + ne[i] + " com código " + neCod[i] + " é um produto do tipo 'Eletrônico'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
            case "555":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + ne[i] + " com código " + neCod[i] + " é um produto do tipo 'Bebidas'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
            case "888":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + ne[i] + " com código " + neCod[i] + " é um produto do tipo 'Brinquedos'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
        }
    }
    var titulo = document.createElement("h1");
    var textoTitulo = document.createTextNode("Relatório: Tipos de produtos com Região de Destino Sul: ");
    titulo.appendChild(textoTitulo);
    elemento.appendChild(titulo);
    for (i = 0; i < sCod.length; i++) {
        var tipoProd = sCod[i].substring(12, 15)
        switch (tipoProd) {
            case "000":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + s[i] + " com código " + sCod[i] + " é um produto do tipo 'Jóia'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
            case "111":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + s[i] + " com código " + sCod[i] + " é um produto do tipo 'Livro'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
            case "333":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + s[i] + " com código " + sCod[i] + " é um produto do tipo 'Eletrônico'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
            case "555":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + s[i] + " com código " + sCod[i] + " é um produto do tipo 'Bebidas'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
            case "888":
                var paragrafo = document.createElement("li")
                var textoParagrafo = document.createTextNode("O " + s[i] + " com código " + sCod[i] + " é um produto do tipo 'Brinquedos'")
                paragrafo.appendChild(textoParagrafo)
                elemento.appendChild(paragrafo)
                break
        }
    }
    function botao() {
        var B = document.getElementById("botao1");
        B.style.display = "none";
        var C = document.getElementById("botao2");
        C.style.display = "block"
    }
    botao();
}

