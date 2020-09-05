const hoje = new Date()

console.log(hoje);


// Vamos capturar os valores de dia, mes e ano da data de hoje pelos métodos de Date

const dia = hoje.getDate()
const mes = hoje.getMonth()
const ano = hoje.getFullYear()

console.log(dia, mes, ano)



// Vamos criar uma data específica. Lembrando que mês de Janeiro é 0 no Javascript 🤷🏻‍♀️

const nascimento = new Date(1998, 0, 5)

console.log(`Nasci em ${nascimento}`);



// Podemos usar o método toLocaleString para formatar a data

const dataFormatada = hoje.toLocaleDateString('pr-BR')
console.log(dataFormatada);