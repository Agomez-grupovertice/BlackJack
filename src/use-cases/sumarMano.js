import valorCarta from "./valorCarta";

const sumarMano = (mano) => {
    let suma = 0;
    let asses = 0
    
    for (let carta of mano) {
      const valor = valorCarta(carta);
      suma += valor;

      if(carta.valor === "As"){
        asses++
      }
      
    }

    while (suma>21 && asses >0){
      suma-=10
      asses--
    }
  
    return suma;
  }

export default sumarMano;