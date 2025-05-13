let notas = 0;
let soma = 0;
let i = 0;

do {

    notas = parseFloat(prompt("Insira sua nota:"));
    i++;
    soma += notas;

    if (isNaN(notas) || notas < 0 || notas > 10) {

        i--;
        soma -= notas;

    }

} while (notas >= 0 && notas <= 10);

alert(`A média das suas notas é ${soma / i}`)
