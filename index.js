let notas = 0;

let soma = 0;

let i = 0;

do {

    notas = parseFloat(prompt("Insira sua nota:"));

    if (notas >= 0 && notas <= 10) {

        i++;
        soma += notas;

    }

} while (notas >= 0 && notas <= 10 || isNaN(notas));

alert(`A média das suas notas é ${soma / i}`)
