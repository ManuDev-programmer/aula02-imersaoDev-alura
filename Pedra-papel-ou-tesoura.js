 <script>
idade = prompt("Quantos anos voce tem?")
if(idade >= 18) {
 alert("voce pode jogar jokenpo")
}
if (idade >= 18) {
 escolhaJogador = prompt("Digite 1-Pedra, 2-papel ou 3-tesoura?")
  escolhaComputador = Math.floor(Math.random() * 3) + 1;
 
 if (escolhaJogador == escolhaComputador) {
  alert("empate!!")
  
  alert("escolhaComputador: " + escolhaComputador)
 }
 
 if (escolhaJogador == 1) {
  if(escolhaComputador == 2) 
   alert("Computador venceu, escolheu papel");
 }
  if(escolhaJogador == 2) {
   if(escolhaComputador == 3)
   alert("Computador venceu, escolheu papel")
  }
}
</script>
