import valorCarta from "./valorCarta";

const sumarMano = (mano) => {
    let suma = 0;
    
    for (let carta of mano) {
      const valor = valorCarta(carta);
      suma += valor;
      
    }
  
    return suma;
  }

export default sumarMano;