const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")
const currencySelect2 = document.querySelector(".currency-select2")

     

async function convertValues() {
     const inputCurrencyValue = document.querySelector(".input-currency").value
     const currencyValueToConvert = document.querySelector(".currency-value-to-convert")
     const currencyValueConverted = document.querySelector(".currency-value")

     
      const coins =
    "USD-BRL,EUR-BRL,GBP-BRL,CHF-BRL,JPY-BRL,ARS-BRL,BTC-BRL,ETH-BRL,LTC-BRL,XRP-BRL,DOGE-BRL"
     const data = await fetch(`https://economia.awesomeapi.com.br/last/${coins}`).then(response => response.json())

     const dolarToday = data.USDBRL.high
     const euroToday = data.EURBRL.high
     const libraToday = data.GBPBRL.high
     const bitcoinToday = data.BTCBRL.high
     const realToday = 1.23


     console.log(data)


     if(currencySelect.value == "dolar"){
          currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
               style:"currency",
               currency:"USD"
          }).format(inputCurrencyValue / dolarToday)
     }

     if(currencySelect.value == "euro"){
          currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
               style:"currency",
               currency:"EUR"
          }).format(inputCurrencyValue / euroToday)
     }

     if(currencySelect.value ==  "libra"){
          currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
               style:"currency",
               currency:"GBP"
          }).format(inputCurrencyValue / libraToday)
     }

     if(currencySelect.value == "bitcoin"){
          currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
               style:"currency",
               currency:"BTC"
          }).format(inputCurrencyValue / bitcoinToday)
     }

     if(currencySelect.value == "real"){
          currencyValueConverted.innerHTML = new Intl.NumberFormat("pt-BR", {
               style:"currency",
               currency:"BRL"
          }).format(inputCurrencyValue)
     }

     if(currencySelect2.value == "real"){
          currencyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
               style:"currency",
               currency:"BRL"
          }).format(inputCurrencyValue)
     }

     if(currencySelect2.value == "dolar"){
          currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-US", {
               style:"currency",
               currency:"USD"
          }).format(inputCurrencyValue / dolarToday)
     }

     if(currencySelect2.value == "bitcoin"){
          currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
               style:"currency",
               currency:"BTC"
          }).format(inputCurrencyValue / bitcoinToday)
     }

     if(currencySelect2.value == "libra"){
          currencyValueToConvert.innerHTML = new Intl.NumberFormat("en-GB", {
               style:"currency",
               currency:"GBP"
          }).format(inputCurrencyValue / libraToday)
     }

     if(currencySelect2.value == "euro"){
          currencyValueToConvert.innerHTML = new Intl.NumberFormat("de-DE", {
               style:"currency",
               currency:"EUR"
          }).format(inputCurrencyValue / euroToday)
     }
  
}

function changeCurrency(){
     const currencyName = document.getElementById("currency-name")
     const currencyName2 = document.querySelector(".currency")
     const currencyImg = document.querySelector(".currency-img")
     const currencyImg2 = document.querySelector(".currency-img2")


     if (currencySelect.value == "real"){
          currencyName.innerHTML = "Real"
          currencyImg.src = "./assets/real.png"
     }

     if(currencySelect.value == "dolar"){
          currencyName.innerHTML = "Dólar Americano"
          currencyImg.src = "./assets/dolar.png"
     }

     if(currencySelect.value == "euro"){
          currencyName.innerHTML = "Euro"
          currencyImg.src = "./assets/euro.png"
     } 

     if(currencySelect.value == "libra"){
          currencyName.innerHTML = "Libra"
          currencyImg.src = "./assets/libra.png"
     } 

     if(currencySelect.value == "bitcoin"){
          currencyName.innerHTML = "Bitcoin"
          currencyImg.src = "./assets/bitcoin.png"
     }

     if (currencySelect2.value == "real"){
          currencyName2.innerHTML = "Real"
          currencyImg2.src = "./assets/real.png"
     }

     
     if(currencySelect2.value == "dolar"){
          currencyName2.innerHTML = "Dólar Americano"
          currencyImg2.src = "./assets/dolar.png"
     }

     if(currencySelect2.value == "euro"){
          currencyName2.innerHTML = "Euro"
          currencyImg2.src = "./assets/euro.png"
     } 

     if(currencySelect2.value == "libra"){
          currencyName2.innerHTML = "Libra"
          currencyImg2.src = "./assets/libra.png"
     } 

     if(currencySelect2.value == "bitcoin"){
          currencyName2.innerHTML = "Bitcoin"
          currencyImg2.src = "./assets/bitcoin.png"
     }
     

     convertValues()
}

currencySelect2.addEventListener("change", changeCurrency)
currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)


