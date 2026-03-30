function pronto() {
var idade = document.getElementById(`idade`).value
var p1 = document.getElementById(`p1`)

if ( idade < 16 ) {
    p1.innerHTML = `Menores de 16 não votam`
}
 else if (idade <=18 ) {
    p1.innerHTML = `Entre 16 e 18 voto opcional`
 }

 else if (idade < 70 ) {
    p1.innerHTML = `Maiores de 18 voto obrigatório`
}

else if ( idade > 70 ) {
    p1.innerHTML = `Acima de 70 voto opcional`
}
}

function verificar() {
    var num1 = Number(document.getElementById(`n1`).value)
    var num2 = Number(document.getElementById(`n2`).value)
    var num3 = Number(document.getElementById(`n3`).value)
    var ps1 = document.getElementById(`ps1`)

    if ( num1 > num2 && num1 > num3 ) {
        ps1.innerHTML = ` O maior número é ${num1}`
    }

    else if ( num2 > num1 && num2 > num3 ) {
        ps1.innerHTML = ` O maior número é ${num2}`
    }

    else if ( num3 > num1 && num3 > num2 ) {
        ps1.innerHTML = ` O maior número é ${num3}`
    }

    else if ( num1 == num2 && num3 ) {
        ps1.innerHTML = ` Todos os números são iguais`
    }
}
