import Baraja from './classes/Baraja';

import { empate, ganar, mostrarCarta, mostrarMano, perderCrupier, perderPasarse, sumarMano, cerrarModal } from './use-cases';

import 'typeface-roboto';
import './assets/css/style.css'
import './assets/css/output.css'



export const jugarBlackjack = () => {
 
  //nueva implementacion 
  let prepararBaraja = new Baraja();
  prepararBaraja.crearBaraja(); // Crea la baraja con las cartas ordenadas
  prepararBaraja.mezclarBaraja(); // Mezcla las cartas de la baraja
  let baraja = prepararBaraja.baraja; 

  const crupier = [];
  const jugador = [];
  
  jugador.push(baraja.pop());
  crupier.push(baraja.pop());
  jugador.push(baraja.pop());
  
  mostrarCarta(crupier[0], document.querySelector('.cards-playertwo'));
  mostrarMano(jugador, document.querySelector('.cards-playerone'));

  const nuevaCartaBoton = document.querySelector('.buttonRandom');
  const plantarseBoton = document.querySelector('.stand');

  nuevaCartaBoton.addEventListener('click', function() {
    jugador.push(baraja.pop());
    mostrarMano(jugador, document.querySelector('.cards-playerone'));
    const sumaJugador = sumarMano(jugador);
    
    if (sumaJugador > 21) {
      perderPasarse()
      cerrarModal()
      nuevaCartaBoton.disabled = true;
      plantarseBoton.disabled = true;
      
    }

    

    const nuevoJuegoBoton = document.querySelector(".newGame")
    nuevoJuegoBoton.disabled = false
  });

  plantarseBoton.addEventListener('click', function() {
    nuevaCartaBoton.disabled = true;
    plantarseBoton.disabled = true;

    while(sumarMano(crupier)<17){
      crupier.push(baraja.pop());
      mostrarCarta(crupier[crupier.length - 1], document.querySelector('.cards-playertwo'));
    }
  
    const sumaJugador = sumarMano(jugador);
    const sumaCrupier = sumarMano(crupier);

    
    const validador = () => {
      if (sumaCrupier > 21 || sumaJugador > sumaCrupier) return ganar()
      if (sumaJugador < sumaCrupier) return perderCrupier()
      if (sumaCrupier === sumaJugador) return empate()
    }

    validador()
    cerrarModal()
    nuevoJuegoBoton.disabled = false  
    
  });

  const nuevoJuegoBoton = document.querySelector(".newGame")
  nuevoJuegoBoton.addEventListener("click", function(){

    crupier.length  = 0
    jugador.length  = 0
   
    mostrarMano(crupier, document.querySelector('.cards-playertwo'));
    mostrarMano(jugador, document.querySelector('.cards-playerone'));

  let prepararBaraja = new Baraja();
  prepararBaraja.crearBaraja(); // Crea la baraja con las cartas ordenadas
  prepararBaraja.mezclarBaraja(); // Mezcla las cartas de la baraja
  let baraja = prepararBaraja.baraja; 

  jugador.push(baraja.pop());
  crupier.push(baraja.pop());
  jugador.push(baraja.pop());
  
  mostrarCarta(crupier[0], document.querySelector('.cards-playertwo'));
  mostrarMano(jugador, document.querySelector('.cards-playerone'));

  nuevaCartaBoton.disabled = false
  plantarseBoton.disabled = false
  nuevoJuegoBoton.disabled = true
  
   });
}

jugarBlackjack()
cerrarModal()


