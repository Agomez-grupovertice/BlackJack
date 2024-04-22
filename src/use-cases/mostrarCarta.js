const mostrarCarta = (carta, destino) => {
    const imagen = document.createElement('img');
    imagen.src = carta.imagen;
    imagen.className = 'carta';
    destino.appendChild(imagen);
  }

export default mostrarCarta;