let num = parseFloat(prompt("Insira um número positivo:"));

while (num <= 0) {

    do {
        num = parseFloat(prompt("Número inválido! Tente novamente:"));

    } while (isNaN(num));

    if (num > 0) {

        alert("Parabéns! Você digitou um número positivo.");

    }
}