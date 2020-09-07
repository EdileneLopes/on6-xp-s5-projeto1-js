console.log('-------------------------------------------------')
console.log('   PROJETO CARRINHO DE COMPRAS - LOJA Di   ')
console.log('--------------------------------------------------')

const bancoDados = require('./database_di')
//objeto que tem 1 propriedade chamada produtos


//fazendo desestruturação
const {produtos} = bancoDados

console.table(produtos)

//acessando a propriedade (preço) do array produtos e comparando-os
produtos.sort((a, b) => a.preco - b.preco)
console.table(produtos)
