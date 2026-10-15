/* Loja — edite só esta parte para cadastrar produtos */
const WHATSAPP = "5527992995445"; // número com 55 + DDD, sem espaços ou traços

const PRODUTOS = [
  {
    nome: "Nome do produto 1",
    preco: "R$ 00,00",
    descricao: "Uma frase curta sobre a peça.",
    img: "src/img/fachada.jpg",   // troque pela foto do produto
    link: ""                       // opcional: link de pagamento; vazio = WhatsApp
  },
  {
    nome: "Nome do produto 2",
    preco: "R$ 00,00",
    descricao: "Uma frase curta sobre a peça.",
    img: "src/img/patio.jpg",
    link: ""
  },
  {
    nome: "Nome do produto 3",
    preco: "R$ 00,00",
    descricao: "Uma frase curta sobre a peça.",
    img: "src/img/suite.jpg",
    link: ""
  }
];

/* ---- daqui para baixo não precisa mexer ---- */
const wa = msg => "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(msg);

document.getElementById("produtos").innerHTML = PRODUTOS.map(p => `
  <article class="produto">
    <img src="${p.img}" alt="${p.nome}" loading="lazy">
    <h3>${p.nome}</h3>
    <p class="muted">${p.descricao}</p>
    <p class="produto__preco">${p.preco}</p>
    <a class="btn" target="_blank" rel="noopener"
       href="${p.link || wa("Olá! Tenho interesse em: " + p.nome)}">
      ${p.link ? "Comprar" : "Pedir pelo WhatsApp"}
    </a>
  </article>`).join("");

document.getElementById("loja-contato").href = wa("Olá! Vim pela loja da Casa na Árvore.");