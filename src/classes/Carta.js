
class Carta {
    constructor(valor, palo) {
      this.valor = valor;
      this.palo = palo;
      this.imagen = `src/img/${valor}de${palo}.jpg`;  
    }
    
  }

export default Carta;