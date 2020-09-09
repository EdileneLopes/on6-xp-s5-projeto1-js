console.log('-------------------------------------------------')
console.log('   PROJETO CARRINHO DE COMPRAS - LOJA Di   ')
console.log('--------------------------------------------------')

const bancoDados = require('./database')
//objeto que tem 1 propriedade chamada produtos


//fazendo desestruturação
const {produtos} = bancoDados


//acessando a propriedade (preço) do array produtos e comparando-os
produtos.sort((a, b) => a.preco - b.preco)
console.table(produtos)

const read = require('readline-sync')

const compra = () => {
    const numId = parseInt(read.question('Por favor, informe o id do produto desejado: '))
    
    //função para encontrar id do produto
    let produtoEncontrado = produtos.find(elemento => elemento.id === numId)

    //testar se id existe
    if(produtoEncontrado === undefined) {
        console.log('Id não encontrado, digite novamente.')
    }

    const qtdade = parseInt(read.question('Informe a quantidade : '))

    // teste se a quantidade é menor ou igual a zero
    if(qtdade <= 0){
        console.log('Informe uma quantidade válida.')
    } 

   /*  let desejaComprarMais = read.question('Continuar comprando? Se sim digite 1, caso negativo 2:')

    if (desejaComprarMais === 1) {
        return compra()

    } else if (desejaComprarMais === 2) {
        const cupomDesconto = parseInt(read.question('Possui cupom de desconto? '))
            if(cupomDesconto >= 15){
                console.log('Cupom inválido')
            }else {
                console.log('Cupom válido!');
            }
    }


}
 */
compra()










