console.log('-------------------------------------------------')
console.log('   PROJETO CARRINHO DE COMPRAS - LOJA Di   ')
console.log('--------------------------------------------------')

const bancoDados = require('./database')
//objeto que tem 1 propriedade chamada produtos


//fazendo desestruturação
const { produtos } = bancoDados

const listaDeProdutos = []

//acessando a propriedade (preço) do array produtos e comparando-os
produtos.sort((a, b) => a.preco - b.preco)
console.table(produtos)

const read = require('readline-sync')

somaQtde = 0

do {
  const numId = parseInt(read.question('Por favor, informe o id do produto desejado: '))

  const qtdade = parseInt(read.question('Informe a quantidade : '))

  
  //função para encontrar id do produto
  let produtoEncontrado = produtos.find(elemento => elemento.id === numId)

  //testar se id existe  e se a quantidade é maior que zero
  if (produtoEncontrado === undefined) {
    console.log('Id não encontrado, digite novamente.')
  } else {
    if (qtdade <= 0) {
      console.log('Informe uma quantidade válida.')
    } else {
      const produtoPedido = { ...produtoEncontrado, quantidade: qtdade } // se existir, vai para um array
      listaDeProdutos.push(produtoPedido) //adiciona no array lista de produtos     
      somaQtde = somaQtde + produtoPedido.quantidade
    }
  }
  confirmar = read.question('Continuar comprando? (S/N) ') //encerra a compra?
} while (confirmar.toLowerCase() === 's')


//criando classe com a lista de produtos co carrinho
class Pedido {
  constructor(listaDeProdutos) {
    this.products = listaDeProdutos
    this.data = new Date()
    this.subtotal = 0 // Guarda o resultado da função "calcularSubtotal"
    this.discount = 0 // guarda o resultado da função 'calcular desconto'
    this.total = 0 //guarda o valor total da compra
  }
  //calculando o preço * quantidade de cada item das compras e no final retorna o 
  //valor total dos itens bruto, ou seja sem desconto

  calcularSubtotal() {
    this.subtotal = this.products.reduce((acumulador, item) => acumulador + (item.preco * item.quantidade), 0)
  }

  //preço apenas do desconto
  calcularDesconto() {
    this.discount = (cupom > 0 && cupom <= 15) ? this.subtotal * (cupom / 100).toFixed(2) : 0
  }

  //calculando o valor total menos o desconto
  calcularTotal() {
    this.total = this.subtotal - this.discount
  }

}

const pedido = new Pedido(listaDeProdutos)// Joga o array com os push dentro da classe "Pedido"
console.table(pedido.products) // Verificando se deu certo o array dentro da classe 

console.log(`Você comprou ${somaQtde} itens.`)

pedido.calcularSubtotal() // chamando a função "calcularSubtotal"
console.log(`O subtotal do pedido é R$ `, pedido.subtotal)

//- receber via entrada o cupom de desconto
const cupom = parseInt(read.question("Informe o valor do cupom de desconto: "))

//- Chamar a função de desconto
pedido.calcularDesconto()
console.log(`Valor do desconto: R$ ${pedido.discount}`)

//chamar função de valor total
pedido.calcularTotal()
console.log(`O valor total da compra é R$ ${pedido.total}`)

