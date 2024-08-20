const menuOptions = [
     { name: 'X-Salada', price: 30, vegan: false, src: './assets/xsalada.jpeg' },
     { name: 'X-Bacon', price: 34, vegan: false, src: './assets/xbacon.png' },
     { name: 'X-Bacon Egg', price: 39, vegan: false, src: './assets/bacon-egg.png' },
     { name: 'Monster', price: 50, vegan: false, src: './assets/monstruoso.png' },
     { name: 'Big Vegano', price: 55, vegan: true, src: './assets/xvegan.png' },
     { name: 'X-Vegano', price: 45, vegan: true, src: './assets/monstruoso-vegan.png' },
]



const NewpriceList = menuOptions.map((item) =>{ 
     discount = item.price * 0.10
     NewPrice = item.price - discount
     return {
          src: item.src,
          name: item.name,
          price: NewPrice
     }
})

const PriceReduce = menuOptions.reduce((acumulador, valorAtual) =>{
     totalPrice = acumulador + valorAtual.price
     return totalPrice
}, 0)

const PriceReduceDiscount = NewpriceList.reduce((acumulador, valorAtual) =>{
     totalPrice = acumulador + valorAtual.price
     return totalPrice
}, 0)

const MenuOptionsVegan = menuOptions.filter((ValorAtual) =>{
     return ValorAtual.vegan
})

const MenuOptionsVeganDiscount = MenuOptionsVegan.map((item) =>{
     discount = item.price * 0.10
     NewPrice = item.price - discount
     return {
          src: item.src,
          name: item.name,
          price: NewPrice
     }
})

console.log(MenuOptionsVegan)










/*
.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
*/ 













