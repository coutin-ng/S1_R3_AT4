let saldo = Math.floor(Math.random() * 1000) + 1;

let saque = 0;

alert(`Você tem R$ ${saldo} de saldo`);

do {

    saque = parseFloat(prompt("Insira o valor do seu saque:"));

    if (isNaN(saque) || saque > saldo || saque <= 0) {

        alert("Você digitou um número inválido");

    } else {

        saldo = saldo - saque;

        alert(`Você ainda tem R$ ${saldo}`);

    }

} while (saldo > 0);

alert("Você zerou o seu saldo!");

