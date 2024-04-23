const mostrarCarta = (carta, destino) => {
    const imagen = document.createElement('img');
    imagen.src = carta.imagen;
    imagen.className = "h-32 w-32 mr-4";
    destino.appendChild(imagen);
  }

export default mostrarCarta;