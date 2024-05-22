const canvas = document.querySelector('#canvas')
const quadro = canvas.getContext('2d')

quadro.fillStyle = '#4B0082'
let player1 ={
    px:80,
    py:260,
    tamanho:30,
    largura:200,
    dir:0,
}

let player2 ={
    px:1168,
    py:260,
    tamanho:30,
    largura:200,
}


  let bolinha ={
    px:625,
    py:325,
    tamanho:30,
    largura:30,
    dir:8,
  }

  
  
quadro.font = '40px arial'
let pts1 = 0
let pts2 = 0
let score1 = quadro.fillText(`score1: ${pts1}` ,250,50)
let score2 = quadro.fillText(`score2: ${pts2}` ,850,50)


document.addEventListener('keydown', function(e){
  if(e.keyCode === 38){
  player1.dir = -8

  }
 else if(e.keyCode === 40){
  player1.dir = 8
 }



})


document.addEventListener('keyup', function(e){
  if(e.keyCode === 38){
  player1.dir = 0

  }
 else if(e.keyCode === 40){
  player1.dir = 0
 }



})



function moverPlayer1(){
  player1.py += player1.dir
}





function moverBolinha(){
 bolinha.px += bolinha.dir

 if(bolinha.px > 1168){
    bolinha.dir *= -1
 }

 else if(bolinha.px < 80){
    bolinha.dir *= -1


 }

}



function draw(){
    quadro.fillRect(player1.px,player1.py,player1.tamanho,player1.largura)
    quadro.fillRect(player2.px,player2.py,player2.tamanho,player2.largura)
    quadro.fillRect(bolinha.px,bolinha.py,bolinha.tamanho,bolinha.largura)
    quadro.fillText(`pontos1 : ${pts1}`,280,50)
    quadro.fillText(`Pontos2 : ${pts2}`,850,50)
    
}

function main(){
quadro.clearRect(0,0,1280,720) // limpar todo o meu objeto canvas
    draw() // redesenhar
    moverBolinha()
    moverPlayer1()
}

setInterval(main, 10)