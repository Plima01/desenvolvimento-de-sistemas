/* Um array é uma estrutura de dados que armazena uma coleção de elementos (valores), acessíveis por índices numéricos
Em JavaScript, arrays são objetos especiais com métodos e propriedades específicas. */

/* Propriedades
length = representa a quantidade de elementos no array. */

/* Métodos
push() = adiciona elementos no final
pop() = remove o último elemento
splice() = remove ou substitui elementos
concat() concatena dois arrays
includes() = verifica se um valor está presente
indexOf() = retrona o index de um valor
join() = junta elementos de uma string
forEach() = itera sobre os elementos */

const frutas = ["Maçã", "Banana", "Uva"];
console.log(frutas[0]);

frutas[3] = "Abacaxi";
console.log(frutas, frutas.length); 