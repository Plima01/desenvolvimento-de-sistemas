function criarMultiplicador(fator) {
    return function(numero) {
        return numero * fator;
    };
}

const dobrar = criarMultiplicador(2);
const triplicar = criarMultiplicador(3);
console.log(dobrar(5));
console.log(triplicar(5));