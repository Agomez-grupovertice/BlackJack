import Baraja from './classes/Baraja';

import { mostrarCarta, mostrarMano, sumarMano } from './use-cases';

import 'typeface-roboto';
import './assets/css/style.css'


 
const jugarBlackjack = () => {
 
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
      alert('Te has pasado de 21. ¡Has perdido!');
      nuevaCartaBoton.disabled = true;
      plantarseBoton.disabled = true;
    }
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

    //todo: clausura de guarda
    if (sumaCrupier > 21 || sumaJugador > sumaCrupier) {
      alert('¡Felicidades, has ganado!');
    } else if (sumaJugador < sumaCrupier) {
      alert('El crupier ha ganado.');
    } else if (sumaCrupier === sumaJugador){
      alert('Empate.');
    }
  });
}

jugarBlackjack()


