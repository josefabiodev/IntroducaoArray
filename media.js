const notas = [10, 6.5, 8, 7.5];

// Adicionando elementos
notas.push(9.5); /* Adiciona ao final do array */

// Removendo elementos
notas.pop(); /* Remove um elemento do final do array */

const media = (notas[0] + notas[1] + notas[2] + notas[3]) / notas.length;

console.log(media);

// outra forma
let soma = 0;
let media1 = 0;
for (let i = 0; i < notas.length; i++)
{
    soma += notas[i];
}

media1 = soma / notas.length;
console.log(`Média ${media1}`);

// com reduce

soma = notas.reduce((acumulador, elemento) => acumulador + elemento, 0);
media2 = soma / notas.length;
console.log(`Média ${media2}`);

