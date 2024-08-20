const ShowAllButton = document.querySelector("ShowAll-button")
const list = document.querySelector("ul")
const itemName = document.querySelectorAll(".item-name")
const price = document.querySelector(".item-price")
const buttonMap = document.querySelector(".button-map")

let MyLi = ""
let MyLiDiscount = ""
let MyLiVegan = ""
let MyLiVeganDiscount = ""
let SumValue = ""

function ShowAll() {
     MyLi = ""

     menuOptions.forEach(item => {

          MyLi += `
          <li>
                    <img src=${item.src}>
                    <p class="item-name">${item.name}</p>
                    <p class="item-price">${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          </li>
          `

     });


     list.innerHTML = MyLi
}

function DiscountAll() {
     MyLiDiscount = ""

     NewpriceList.forEach(item => {
          MyLiDiscount += `
          <li>
                    <img src=${item.src}>
                    <p class="item-name">${item.name}</p>
                    <p class="item-price"> ${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          </li>
          `
     });
     list.innerHTML = MyLiDiscount
}

function ReduceNoDiscount() {
     SumValue = ""
     SumValue = PriceReduce
     SumValueDiscount = PriceReduceDiscount
     list.innerHTML = `
          <li>
          <p>
          O valor Total dos hambúrguers SEM o Desconto é de ${PriceReduce.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
     </p>
     </li>
     
     <li>
          <p>
          O valor Total dos hambúrguers COM o Desconto é de ${PriceReduceDiscount.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}
     </p>
     </li>
     `
}

function Filter(){
     MyLiVegan = ""

     MenuOptionsVegan.forEach(item => {
          
          MyLiVegan += `
          <li>
                    <img src=${item.src}>
                    <p class="item-name">${item.name}</p>
                    <p class="item-price">${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          </li>
          `
          
     });
     list.innerHTML = MyLiVegan
}

function FilterOnDiscount(){
     MyLiVeganDiscount = ""

     MenuOptionsVeganDiscount.forEach(item => {
          
          MyLiVeganDiscount += `
          <li>
                    <img src=${item.src}>
                    <p class="item-name">${item.name}</p>
                    <p class="item-price">${item.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</p>
          </li>
          `
          
     });
     list.innerHTML = MyLiVeganDiscount
}




































