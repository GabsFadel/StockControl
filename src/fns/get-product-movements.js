// a função irá retornar o produto e a quantidade, array de produto, e o products é um objeto
function getProductMovements(movements) {
    const productMap = {};
    
    movements.forEach(movement => {
        const { productId, amount, type, product } = movement
    
        //realiza a criação do primeiro produto
        if(!productMap[productId]) { 
            productMap[productId] = { name: product.name, amount: 0 }
        }

        //verifica se é movimentação de entrada, passa com valor positivo, se for saida, passa com valor negativo
        const amountChange = type === 'in' ? amount: -amount 
        productMap[productId].amount += amountChange
      })
      console.log(productMap)
      const products = Object.values(productMap) //Pega apenas os valores dos objetos

      return { products }
} 

module.exports = getProductMovements