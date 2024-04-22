const valorCarta = (carta) => {
    const valor = carta.valor;
     if (valor === 'As'){
      return 11;
    }else if (['J', 'Q', 'K'].includes(valor)){
      return 10;
    } else {
      return parseInt(valor);
    }
}

export default valorCarta;