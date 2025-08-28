document.addEventListener("DOMContentLoaded", function () {
  const versos1 = [
    "No silêncio da noite,",
    "Sob o céu de estrelas,",
    "Entre sombras e luz,",
    "Na dança do tempo,",
    "Quando o vento sussurra,"
  ];

  const versos2 = [
    "flores nascem sem pedir.",
    "o coração se revela.",
    "os sonhos ganham asas.",
    "a alma se despede.",
    "o mistério se aprofunda."
  ];

  const versos3 = [
    "E tudo é poesia.",
    "Mesmo sem palavras.",
    "Como se o mundo respirasse.",
    "Num instante eterno.",
    "Feito de silêncio e cor."
  ];

  const botao = document.getElementById("gerarPoema");
  const poemaDiv = document.getElementById("poema");

  botao.addEventListener("click", function () {
    const v1 = versos1[Math.floor(Math.random() * versos1.length)];
    const v2 = versos2[Math.floor(Math.random() * versos2.length)];
    const v3 = versos3[Math.floor(Math.random() * versos3.length)];

    const poema = `${v1}\n${v2}\n${v3}`;
    poemaDiv.classList.remove("mostrar");
    poemaDiv.innerText = poema;

    // Força a transição
    setTimeout(() => {
      poemaDiv.classList.add("mostrar");
    }, 50);
  });
});
