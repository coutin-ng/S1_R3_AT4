let compra = 0;
let total = 0;

do {

    compra = parseFloat(prompt("Insira o valor da compra:"));
    
    if(isNaN(compra)){
        
        alert("Erro: Você não digitou um número válido!");
        
    }else {
        
        total += compra;
        
    }

} while (compra != 0);

alert(`O valor da sua compra é de R$ ${total}!`)
