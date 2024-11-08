alert('Tente adivinhar uma data importante para mim');
let chute = prompt('Digite apenas o número e o mês no formato DD/MM');

let numeroSecreto = '18/04';
// se chute for igual ao numero secreto
if (chute === numeroSecreto) {
   alert (`Acertou!! é a data de namoro! ${numeroSecreto}`);

  } else {
   alert('Errou! FEDAMAEE');
}