console.log('-------------------------------------------------')
console.log('   PROJETO CARRINHO DE COMPRAS - LOJA Di   ')
console.log('--------------------------------------------------')

const bancoDados = require('./database')
//objeto que tem 1 propriedade chamada produtos


//fazendo desestruturação
const {produtos} = bancoDados

//declarando array de pedidos
const listaPedidos = []


//acessando a propriedade (preço) do array produtos e comparando-os
produtos.sort((a, b) => a.preco - b.preco)
console.table(produtos)

const read = require('readline-sync')


function compra() {
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
    } else{
        listaPedidos.push(numId)
    }


    let desejaComprarMais = read.question('Continuar comprando? Se sim digite S, caso negativo N: ').toLowerCase

    if (desejaComprarMais === 's') {
        return compra()

    } else if (desejaComprarMais === 'n') {
        const cupomDesconto = parseInt(read.question('Possui cupom de desconto? '))
        if(cupomDesconto >= 15) {
            console.log('Cupom inválido')
        }else {
            console.log('Cupom válido!')
        }
    }
    
}

compra()



// Vamos criar a classe Pessoa

class Pedido{
    constructor(list, coupun, request){
      this.listaDosProdutos = list
      this.cupom = coupun
      this.pedido = request
    }
    
  }
  
  const Pedido1 = new Pedido()
  
  console.log(Pedido)
