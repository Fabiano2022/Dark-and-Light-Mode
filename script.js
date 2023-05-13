const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonMais = document.querySelector('.mais')
const buttonMenos = document.querySelector('.menos')
let minutes 
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let timerTimeOut
const buttonFloresta = document.querySelector('.floresta')
const buttonChuva = document.querySelector('.chuva')
const buttonLareira = document.querySelector('.lareira')
const buttonCafeteria = document.querySelector('.cafeteria')
const cardSons = document.querySelector ('.cardSons')




const forestAudio = new Audio("Floresta.wav")
const rainAudio = new Audio("Chuva.wav")
const fireAudio = new Audio("Lareira.wav")
const coffeeAudio = new Audio("cafeteria.wav")


const input = document.querySelector('.volume')

const buttonSol = document.querySelector('.btndark')

const buttonlua = document.querySelector('.btnclaro')
const buttonPressAudio = new Audio(
  'https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true'
)
buttonPressAudio.volume = 0.1

const forestVolume = forestAudio.querySelector('input')
const rainVolume = rainAudio.querySelector('input')
const fireVolume = fireAudio.querySelector('input')
const coffeeVolume = coffeeAudio.querySelector('input')





//==================botoes=====================


input.addEventListener('click', function() {
  toggleAudioPlay(buttonPressAudio)

})

buttonSol.addEventListener('click', function() {
butaolight()

})

buttonlua.addEventListener('click', function() {

butaodark()

})




buttonFloresta.addEventListener('click', function(){
  toggleAudioPlay(forestAudio)
  floresta.classList.toggle('blue')
  

})

buttonChuva.addEventListener('click', function(){
  toggleAudioPlay(rainAudio)
  chuva.classList.toggle('blue')


})

buttonLareira.addEventListener('click', function(){
  toggleAudioPlay(fireAudio)
  lareira.classList.toggle('blue')
  

})

buttonCafeteria.addEventListener('click', function(){
  toggleAudioPlay(coffeeAudio)
  cafeteria.classList.toggle('blue')









})

buttonPlay.addEventListener('click', function() {
    play()
    countdown()
    toggleAudioPlay(buttonPressAudio)
})

buttonPause.addEventListener('click', function() {
   pause()
   toggleAudioPlay(buttonPressAudio)

})

buttonStop.addEventListener('click', function() {
  Stop()
  toggleAudioPlay(buttonPressAudio)
  pause()


  })


buttonMais.addEventListener('click', function(){
  maiscinco()
  toggleAudioPlay(buttonPressAudio)

})


buttonMenos.addEventListener('click', function(){
  menoscinco()
  toggleAudioPlay(buttonPressAudio)

})

//======================Funcoes=================


function toggleAudioPlay(myAudio) {
  let isPaused = myAudio.paused
     if (isPaused) {
      myAudio.play();
    } else {
      myAudio.pause();
    }
  }



function menoscinco() {
  let minutes = Number(minutesDisplay.textContent)
 if (minutes) {
  minutes > 5
  minutesDisplay.textContent = String(minutes - 5).padStart(2, "0")
 } else {
  resetTaimer()
  alert (' Não é possível diminuir o cronômetro para números negativos!')
 } 
}

function maiscinco() {
  let minutes = Number(minutesDisplay.textContent)
 if (minutes) {
  minutes +5
  minutesDisplay.textContent = String(minutes + 5).padStart(2, "0")
 } 
}

 function countdown(){
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    secondsDisplay.textContent = "00"

    if (minutes <= 0 && seconds <= 0) {
      buttonPause.classList.add('hide')
      buttonPlay.classList.remove('hide')
      return
    }

    if (seconds <= 0) {
      seconds = 60
      minutesDisplay.textContent = String(minutes - 1).padStart(2, "0")
    }
    

    secondsDisplay.textContent = String(seconds - 1).padStart(2, "0")


    countdown()

  }, 1000)
 }



 

 function butaodark() {
  buttonSol.classList.remove('hide')
  buttonlua.classList.add('hide')
  
 }

 function butaolight() {

  buttonSol.classList.add('hide')
  buttonlua.classList.remove('hide')
  
 }


function Stop() {
  buttonPause.classList.add('hide')
  buttonPlay.classList.remove('hide')
  resetTaimer()

}

function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

function pause() {
  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
  clearTimeout(timerTimeOut)
}

function updateTaimerDisplay(minutes, seconds) {
  minutesDisplay.textContent = String(5).padStart(2, "0")
  secondsDisplay.textContent = String(0).padStart(2, "0")
}

function resetTaimer() {
  updateTaimerDisplay()
}




/* AJUSTE DE VOLUME */
function adjustVolume(sound, volume) {
  sound.volume = volume
}







buttonSol.addEventListener('click', function () {


  document.body.classList.toggle("dark");
  cardSons.classList.toggle("dark");

buttonChuva.addEventListener('click', function () {
})

buttonFloresta.addEventListener('click', function () {
  cardSons.classList.toggle("azul");

})

})

buttonlua.addEventListener('click', function (){
  document.body.classList.toggle("dark");
  cardSons.classList.toggle("dark");


})





