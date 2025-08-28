document.addEventListener("DOMContentLoaded", function () {
  const sujeitos = [
    "A lua", "O tempo", "A memória", "O silêncio", "A saudade",
    "O vento", "A noite", "O olhar", "A esperança", "O vazio"
  ];

  const verbos = [
    "dança", "sussurra", "desvenda", "abraça", "desaparece",
    "renasce", "caminha", "se esconde", "se revela", "flutua"
  ];

  const complementos = [
    "na pele da noite", "entre folhas caídas", "no olhar perdido",
    "sob o véu do vento", "em ecos distantes", "na curva do tempo",
    "entre sonhos esquecidos", "no silêncio profundo", "na luz que resta",
    "em sombras delicadas"
  ];

  const finais = [
    "E tudo faz sentido.", "Mesmo sem razão.", "Como se fosse eterno.",
    "Num instante suspenso.", "Feito de ausência e cor.",
    "E o mundo respira poesia.", "Como se o tempo parasse.",
    "E o coração entendesse.", "Como se fosse ontem.", "E tudo fosse agora."
  ];

  const poemaDiv = document.getElementById("poema");

  function gerarPoema() {
    const verso1 = `${sujeitos[Math.floor(Math.random() * sujeitos.length)]} ${verbos[Math.floor(Math.random() * verbos.length)]} ${complementos[Math.floor(Math.random() * complementos.length)]}.`;
    const verso2 = finais[Math.floor(Math.random() * finais.length)];

    const poema = `${verso1}\n${verso2}`;
    poemaDiv.classList.remove("mostrar");
    poemaDiv.innerText = poema;

    setTimeout(() => {
      poemaDiv.classList.add("mostrar");
    }, 50);
  }

  // Gera novo poema a cada clique
  const botao = document.getElementById("gerarPoema");
  botao.addEventListener("click", gerarPoema);
});
