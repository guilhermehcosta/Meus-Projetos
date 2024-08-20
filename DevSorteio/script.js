function Sortear(){
     const Input1 =  Math.ceil(document.querySelector(".input-min").value)
     const Input2 = Math.floor(document.querySelector(".input-max").value)

     if(Input1 < Input2){const NumberSorted = Math.floor(Math.random() * (Input2 - Input1) + Input1);

     console.log(Input1, Input2, NumberSorted)
     
     alert(NumberSorted)
} else {
     alert("O número da esquerda deve ser menor que o número da direita!")
}
}


