import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

function simbolosAleatorios() {
  const cardSymbolos = ["♦","♥","♠","♣"];
  const resultado = cardSymbolos[Math.floor(Math.random() * cardSymbolos.length)]
  return resultado;

  
}



function cartasAleatorias() {
  const numCartas = ["A","2","3","4","5","6","7","8","9","10","J","Q","K"]
  const resultado = numCartas[Math.floor(Math.random() * numCartas.length)]
  return resultado;
}







window.onload = function() {
  const centro = document.querySelector('.centro');
  centro.textContent = cartasAleatorias()
  const simbolo = document.querySelector('.card-body');
  const simbolo2 = document.querySelector('.card-footer')
  const simbolosAleatorio = simbolosAleatorios()
  simbolo2.textContent = simbolosAleatorio
  simbolo.textContent = simbolosAleatorio
  
  let color;
  
  if (simbolosAleatorio === "♦" || simbolosAleatorio === "♥") {
    color = "red";
    
  } else {
    color = "black";
    
  }
  simbolo.style.color = color
  simbolo2.style.color = color
  
  
 
};
