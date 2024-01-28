let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

function exibirMensagemInicial() {
    exibirTextNaTela('h1', 'Jogo do número secreto');
    exibirTextNaTela('p', 'Escolha um número entre 1 e 10');
}

exibirMensagemInicial();

function verificarChute() {
    let chute = document.querySelector('input').value;

    if (chute == numeroSecreto) {
        exibirTextNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
        limparCampo();
    }
}

function gerarNumeroAleatorio() {
  let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
  if (quantidadeDeElementosNaLista == numeroLimite) {
      listaDeNumerosSorteados = [];
    }

    if(listaDeNumerosSorteados.includes(numeroEscolhido)) {
      return gerarNumeroAleatorio();
    } else {
      listaDeNumerosSorteados.push(numeroEscolhido);
      console.log(listaDeNumerosSorteados);
      return numeroEscolhido;
    }
}

function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}

//1.
// function dizerOla() {
//     console.log('Olá, mundo!');
// }


//2.
// function dizerOla(nome) {
//     console.log(`Olá, ${nome}!`);
// }

// dizerOla('Jorge');

//3.
// function dobrarNumero(numero) {
//     return (numero * 2);
// }

// console.log(dobrarNumero(4));

//4.
// function exibirMedia(n1, n2, n3) {
//     return (n1 + n2 + n3)/3
// }
// console.log(exibirMedia(5, 5, 11));

//5.
// function exibirMaiorDeDois(numero1, numero2) {
//     if(numero1 > numero2)
//         return numero1;
//     else
//         return numero2;
// }

// console.log(exibirMaiorDeDois(15, 10));

/*
5.
function encontrarMaior(a, b) {
  return a > b ? a : b;
}

let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);
*/

//6.
// function exibirQuadrado(numero) {
//     return numero * numero;
// }

// console.log(exibirQuadrado(5));

//1.
// function calcularIMC(altura, peso) {
//     let imc = parseFloat(peso /(altura * altura));
//     return imc;
// }

// console.log(calcularIMC(1.80, 80));

//2.
// function calcularFatorial(numero) {
//   if((numero == 0) || (numero == 1)) {
//     return 1;
//   }

//   let valor = numero;
//     numero = numero - 1;

//     while(numero > 1) {
//         valor *= numero ;
//         numero--;
//     }
//     return valor;
// }
// console.log(calcularFatorial(3));

//versao do professor: 
// function calcularFatorial(numero) {
//   if (numero === 0 || numero === 1) {
//     return 1;
//   }

//   let fatorial = 1;
//   for (let i = 2; i <= numero; i++) {
//     fatorial *= i;
//   }

//   return fatorial;
// }

// // Exemplo de uso
// let numero = 5;
// let resultado = calcularFatorial(numero);
// console.log(`O fatorial de ${numero} é ${resultado}`);

//3.
// function converterDollarParaReais(dollar) {
//     let reais = parseFloat(dollar * 4.80);
//     return `R$: ${reais}`;
// }

// console.log(converterDollarParaReais(2));

//4.
//  function calcularPerimetroRetangulo(largura, altura) {
//      let perimetro = (2 * largura) + (2 * altura);
//      let area = largura * altura;
//     return `Perímetro: ${perimetro}, Àrea: ${area}`;
// }

//  console.log(calcularPerimetroRetangulo(2, 8));

//5.
// function calcularAreaPerimetroSalaCircular(raio) {
//     let area = 3.14 * (raio * raio);
//     let perimetro = (2 * raio) * 3.14;

//     return `Àrea da sala circular ${area}, Perímetro da sala circular ${perimetro}`;
// }

// console.log(calcularAreaPerimetroSalaCircular(4));

// //5. versao do professor:
// function calcularAreaPerimetroSalaCircular(raio) {
//   let area = Math.PI * raio * raio;
//   let perimetro = 2 * Math.PI * raio;

//   console.log(`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
//   console.log(`Perímetro da sala circular: ${perimetro.toFixed(2)} metros`);
// }

// // Exemplo de uso
// let raio = 4; // em metros
// calcularAreaPerimetroSalaCircular(raio);

//6. 
// function exibirTabuada(numero) {
//   let multiplicador = 0;
//   console.log(`Tabuada de  ${numero}:`);

//   while (multiplicador <= 10) {
//     let tabuada = numero * multiplicador;
//     console.log(`${numero} * ${multiplicador}  = ${tabuada}`);
//     multiplicador++;
//   }
// }

// exibirTabuada(5);

//04.Listas

//1.
// let listaGenerica = [];

//2.
// let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

3//
// let linguagensDeProgramacao = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];

// linguagensDeProgramacao.push('Java', 'Ruby', 'GoLang');

// console.log(linguagensDeProgramacao);

//4.
// let linguagensDeProgramacao = ['JavaScript', 'C', 'C++'];
// console.log(linguagensDeProgramacao[0]);

//5.
// let linguagensDeProgramacao = ['JavaScript', 'C', 'C++'];
// console.log(linguagensDeProgramacao[1]);

//6.
// let linguagensDeProgramacao = ['JavaScript', 'C', 'C++'];
// let indexUltimoElemento = linguagensDeProgramacao.length - 1;
// console.log(linguagensDeProgramacao[indexUltimoElemento]);