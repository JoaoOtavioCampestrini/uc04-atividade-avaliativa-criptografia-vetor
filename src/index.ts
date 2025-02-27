// 3- A criptografia é um conjunto de técnicas pensadas para proteger uma informação de modo
//  que apenas o emissor e receptor consigam compreendê-la. Uma forma simples de fazer criptografar
//  um vetor de strings é aplicar uma lógica de troca em cada posição do vetor, de modo que apenas
//  o programador conheça a regra, lembrando que a regra aplicada precisa de alguma forma ser reversível.
// Dessa forma um vetor auxiliar e faça a cópia dos dados do vetor original, porém de forma criptografada
//  e na sequência imprima os dados criptografados no console e por fim, crie outro vetor auxiliar que
//  faça a restauração do texto original, copiando a partir do vetor criptografado, e também faça a
//  impressão no console do mesmo.


// Função para criptografar uma string (lógica reversível)
function criptografarTexto(texto: string): string {
  return texto.split('').reverse().join('');
}

// Função para descriptografar uma string (lógica reversível)
function descriptografarTexto(texto: string): string {
  return texto.split('').reverse().join('');
}

// Vetor original
const vetorOriginal: string[] = ["computador", "memoriaram", "gabinete", "processador"];

// Vetor auxiliar para armazenar os dados criptografados
const vetorCriptografado: string[] = vetorOriginal.map(criptografarTexto);

// Imprime o vetor criptografado
console.log("Vetor Criptografado:", vetorCriptografado);

// Vetor auxiliar para restaurar o texto original
const vetorRestaurado: string[] = vetorCriptografado.map(descriptografarTexto);

// Imprime o vetor restaurado
console.log("Vetor Restaurado:", vetorRestaurado);
