import mostrarCarta from "./mostrarCarta";

const mostrarMano = (mano, destino) => {
    destino.innerHTML = '';
    for (let carta of mano) {
      mostrarCarta(carta, destino);
    }
}

export default mostrarMano;

