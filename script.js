const poemas = [
  "No silêncio da noite,\na lua sussurra segredos\nque só o vento entende.",
  "Entre folhas e sonhos,\ncaminho sem rumo,\nbuscando o que já sou.",
  "O tempo dança lento,\nem passos invisíveis,\nna memória do instante.",
  "Chove dentro de mim,\nmas flores nascem\nem cada lágrima caída.",
  "Sou feito de estrelas,\ne de todas as vezes\nque olhei para o céu."
];

function gerarPoema() {
  const aleatorio = Math.floor(Math.random() * poemas.length);
  document.getElementById("poema").innerText = poemas[aleatorio];
}
