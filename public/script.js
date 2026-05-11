let nome = prompt("Qual é o seu nome?");

let entradaRenda;
let renda;

do {
    entradaRenda = prompt("Qual a sua renda mensal?");
    renda = parseFloat(entradaRenda);
    if (isNaN(renda)) {
        alert("Por favor, digite um número válido para a renda!");
    }
} while (isNaN(renda));

let entradaQtd;
let qtdDespesas;

do {
    entradaQtd = prompt("Quantidade de despesas a informar:");
    qtdDespesas = Number(entradaQtd);
    if (isNaN(qtdDespesas)) {
        alert("Por favor, digite um número válido!");
    }
} while (isNaN(qtdDespesas));

if (qtdDespesas < 1) {
    qtdDespesas = 1;
} else if (qtdDespesas > 5) {
    qtdDespesas = 5;
}

let soma = 0;
for (let i = 0; i < qtdDespesas; i++) 
{
    let valorDespesa = parseFloat(prompt(`Digite o valor da Despesa ${i + 1}:`));
    soma += valorDespesa;
}

let resultado = "";
let sobra = renda - soma;

if (soma > renda) {
    resultado = "⚠️ Atenção: você gastou mais do que ganhou.";
} else {
    let margemSeguranca = renda * 0.30; 
    
    if (sobra >= margemSeguranca) {
        resultado = "✅ Ótimo: boa margem de sobra.";
    } else {
        resultado = "🙂 Ok: dá para melhorar a sobra.";
    }
}

let relatorioFinal = `Nome do Usuário: ${nome}
Renda: R$ ${renda.toFixed(2)}
Total de despesas: R$ ${soma.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
Classificação: ${resultado}`;


alert(relatorioFinal);
console.log(relatorioFinal);