const emojis = ["🍎","🍎","🍌","🍌","🍇","🍇","🍓","🍓"]

let cartas = emojis.sort(()=> Math.random() - 0.5)

let tabuleiro = document.getElementById("tabuleiro")

let primeira = null
let segunda = null

let jogadas = 0
let pares = 0
let tempo = 0

setInterval(()=>{

tempo++

document.getElementById("tempo").innerText = tempo

},1000)

cartas.forEach((emoji)=>{

let carta = document.createElement("div")

carta.classList.add("carta")

carta.dataset.emoji = emoji

carta.onclick = function(){

if(carta.classList.contains("virada")) return

carta.classList.add("virada")

carta.innerHTML = carta.dataset.emoji

if(!primeira){

primeira = carta

}else if(!segunda){

segunda = carta

jogadas++

document.getElementById("jogadas").innerText = jogadas

if(primeira.dataset.emoji !== segunda.dataset.emoji){

setTimeout(()=>{

primeira.classList.remove("virada")
segunda.classList.remove("virada")

primeira.innerHTML=""
segunda.innerHTML=""

primeira=null
segunda=null

},1000)

}else{

primeira.classList.add("par")
segunda.classList.add("par")

pares++

primeira=null
segunda=null

if(pares === 4){

document.getElementById("mensagem").innerText =
"🎉 Parabéns! Você venceu!"

}

}

}

}

tabuleiro.appendChild(carta)

})

function reiniciar(){

location.reload()

}