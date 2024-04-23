class Baraja {
 
    constructor() {

        this.palos = ['corazones', 'diamantes', 'trebol', 'picas'];
        this.valores = ['As', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.baraja = []; 
    }

    crearBaraja = () => {
        this.baraja = [];
        for (let palo of this.palos) {
          
          for (let valor of this.valores) {

            //crear objeto carta
            //pushear objeto carta al array


            let carta = {};
            carta.valor = valor;
            carta.palo = palo;
            carta.imagen = `/images/${valor}de${palo}.svg`;

            this.baraja.push(carta); //pushear carta

          }

        }
        
        return this.baraja;
    }
 
    mezclarBaraja = () => {
        for (let i = this.baraja.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [this.baraja[i], this.baraja[j]] = [this.baraja[j], this.baraja[i]];
        }
    }

}

export default Baraja;