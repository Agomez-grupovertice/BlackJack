import './style.css'

class Carta {
  constructor(valor, palo) {
    this.valor = valor;
    this.palo = palo;
    this.imagen = `src/img/${valor}de${palo}.jpg`;  
  }
  
}

function crearBaraja() {
  const palos = ['corazones', 'diamantes', 'trebol', 'picas'];
  const valores = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
  const baraja = [];
  
  for (let palo of palos) {
    for (let valor of valores) {
      baraja.push(new Carta(valor, palo));
    }
  }
  
  return baraja;
}

function mezclarBaraja(baraja) {
  for (let i = baraja.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [baraja[i], baraja[j]] = [baraja[j], baraja[i]];
  }
}

function mostrarCartaEnHTML(carta, destino) {
  const imagen = document.createElement('img');
  imagen.src = carta.imagen;
  imagen.className = 'carta';
  destino.appendChild(imagen);
}

function mostrarManoEnHTML(mano, destino) {
  destino.innerHTML = '';
  for (let carta of mano) {
    mostrarCartaEnHTML(carta, destino);
  }
}

function valorCarta(carta) {
  const valor = carta.valor;
   if (valor === 'As'){
    return 11;
  }else if (['J', 'Q', 'K'].includes(valor)){
    return 10;
  } else {
    return parseInt(valor);
  }
}

function sumarMano(mano) {
  let suma = 0;
  let ases = 0;
  
  for (let carta of mano) {
    const valor = valorCarta(carta);
    suma += valor;
    if (carta.valor === 'As') {
      ases++;
    }
  }
  
  while (suma > 21 && ases > 0) {
    suma -= 10;
    ases--;
  }
  
  return suma;
}

function jugarBlackjack() {
  const baraja = crearBaraja();
  mezclarBaraja(baraja);
  
  const crupier = [];
  const jugador = [];
  
  jugador.push(baraja.pop());
  crupier.push(baraja.pop());
  jugador.push(baraja.pop());
 
  
  mostrarCartaEnHTML(crupier[0], document.querySelector('.cards-playertwo'));
  mostrarManoEnHTML(jugador, document.querySelector('.cards-playerone'));

  const nuevaCartaBoton = document.querySelector('.buttonRandom');
  const plantarseBoton = document.querySelector('.stand');

  nuevaCartaBoton.addEventListener('click', function() {
    jugador.push(baraja.pop());
    mostrarManoEnHTML(jugador, document.querySelector('.cards-playerone'));
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
    mostrarCartaEnHTML(crupier[crupier.length - 1], document.querySelector('.cards-playertwo'));
    }
  
    const sumaJugador = sumarMano(jugador);
    const sumaCrupier = sumarMano(crupier);

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


