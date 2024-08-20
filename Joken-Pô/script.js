let humanScore = document.getElementById("myScore")
     let AlexaScore = document.getElementById("AlexaScore")

     let humanScoreNumber = 0
     let AlexaScoreNumber = 0


const playHuman = function (humanChoice) {
     let p = document.querySelector(".result")



     playtheGame(humanChoice, playAlexa())
}

const playAlexa = function () {
     const choices = ['scissors', 'paper', 'rock']
     const index = Math.floor(Math.random() * 3);

     return choices[index]
}

const playtheGame = function (human, Alexa) {
     let p = document.querySelector(".result")
     console.log(" Humano: " + human + " Maquina: " + Alexa)
     




     if (human === Alexa) {
          p.innerHTML = "Deu Empate!"
     }

     else if ((human === 'paper' && Alexa === 'rock') ||
          (human === 'rock' && Alexa === 'scissors') ||
          (human === 'scissors' && Alexa === 'paper')) {

          humanScoreNumber++
          humanScore.innerHTML = humanScoreNumber
          p.innerHTML = "Você ganhou!"


     } else {
          AlexaScoreNumber++
          AlexaScore.innerHTML = AlexaScoreNumber
          p.innerHTML = "Você perdeu!"

     }


}

