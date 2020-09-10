console.log('-------------------------------------------------')
console.log('   PROJETO CARRINHO DE COMPRAS - LOJA Di   ')
console.log('--------------------------------------------------')

const bancoDados = require('./database')
//objeto que tem 1 propriedade chamada produtos


//fazendo desestruturação
const {produtos} = bancoDados

const listaDeProdutos = []

//acessando a propriedade (preço) do array produtos e comparando-os
produtos.sort((a, b) => a.preco - b.preco)
console.table(produtos)

const read = require('readline-sync')


function compra() {
    do {
        const numId = parseInt(read.question('Por favor, informe o id do produto desejado: '))
        
        const qtdade = parseInt(read.question('Informe a quantidade : '))

        //testar se a quantidade é positivo
        if(qtdade <= 0){
            console.log('Informe uma quantidade válida.')
        }
        //função para encontrar id do produto
        let produtoEncontrado = produtos.find(elemento => elemento.id === numId)

        //testar se id existe
        if(produtoEncontrado === undefined) {
            console.log('Id não encontrado, digite novamente.')
        }else {
            const produtoPedido = { ...produtoEncontrado, quantidade: qtdade} // se existir, vai para um array
              listaDeProdutos.push(produtoPedido) //adiciona no array lista de produtos             
            }
            
            confirmar = read.question('Continuar comprando? (S/N) ') //encerra a compra?
    }while (confirmar.toLowerCase() === 's')

}
      
//chamar função compra
compra()

class Pedido {
    constructor(listaDeProdutos){
      this.products = listaDeProdutos 
      this.data = new Date()
      this.subtotal = 0 // Guarda o resultado da função "calcularSubtotal"
    }
    //calculando o preço * quantidade de cada item das compras e no final retorna o 
    //valor total dos itens bruto, ou seja sem desconto

    calcularSubtotal() { 
      this.subtotal = this.products.reduce((acumulador, item) => acumulador + (item.preco * item.quantidade), 0)
    }
  }
 
const pedido = new Pedido (listaDeProdutos)// Joga o array com os push dentro da classe "Pedido"
console.table(pedido.products) // Verificando se deu certo o array dentro da classe 

pedido.calcularSubtotal() // chamando a função "calcularSubtotal"
console.log(pedido.subtotal) 