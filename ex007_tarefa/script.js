function btc1() {
    var resultado = document.getElementById(`resultado`)
    resultado.innerHTML += ` Você clicou no primeiro botão <br> <br> `
}

function btc2() {
    var resultado = document.getElementById(`resultado`)
    resultado.innerHTML += ` Você clicou no segundo botão <br> <br>`
}

function btc3() {
    var resultado = document.getElementById(`resultado`)
    resultado.innerHTML += ` Você clicou no terceiro botão <br> <br>`
}

function btc4() {
    var resultado = document.getElementById(`resultado`)
    resultado.innerHTML += ` Você clicou no quarto botão <br> <br>`
}

function btc5() {
    var resultado = document.getElementById(`resultado`)
    resultado.innerHTML = ``
}



var x = 0

function contar() {
    x++
    var resultado1 = document.getElementById(`resultado1`)
    resultado1.innerHTML = ` O contador está com ${x} cliques `
}

function zerar() {
    var resultado1 = document.getElementById(`resultado1`)
    x = 0
    resultado1.innerHTML = ` O contador está com ${x} cliques`
}
