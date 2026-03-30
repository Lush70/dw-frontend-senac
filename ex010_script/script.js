function bttabuada() {

    var numx = Number(document.getElementById("numx").value)
    var p1 = document.getElementById("p1")

    var resultado = `Tabuada do ${numx} <br>`

    for ( let i = 1; i <= 10; i++) {
        resultado += `${numx} x ${i} = ${numx * i} <br>`
    }

    p1.innerHTML = resultado
}

function contar() {
    var n1 = Number(document.getElementById(`n1`).value)
    var n2 = Number(document.getElementById(`n2`).value)
    var passo = Number(document.getElementById(`passo`).value)
    var p2 = document.getElementById(`p2`)

    for ( i = n1; i <= n2; i += passo) {
        p2.innerHTML += `${i} ->`
    }
}