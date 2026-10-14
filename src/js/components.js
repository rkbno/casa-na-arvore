/* Cabeçalho e rodapé compartilhados — edite aqui e vale para todas as páginas */
(function () {
  const page = location.pathname.split("/").pop() || "index.html";
  const projetos = [
    { href: "casa-tempo.html", img: "src/img/fachada.jpg", title: "Casa Tempo", sub: "Projeto residencial" },
    { href: "conceitos.html", img: "src/img/planta.jpeg", title: "Conceitos", sub: "Elementos norteadores" },
    { href: "capela.html", img: "src/img/capela-fachada.jpg", title: "Capela São José", sub: "Projeto executado" }
  ];

  const header = `
  <div class="wrap site-header__inner">
    <button class="menu-toggle" aria-label="Abrir menu" aria-expanded="false" aria-controls="drawer"><i></i><i></i></button>
    <nav class="nav" aria-label="Principal">
      <a href="sobre.html"${page === "sobre.html" ? ' aria-current="page"' : ""}>Sobre</a>
      <div class="has-mega">
        <button type="button" aria-haspopup="true">Projetos</button>
        <div class="mega">
          ${projetos.map(p => `<a href="${p.href}"><img src="${p.img}" alt="" loading="lazy">${p.title}<span>${p.sub}</span></a>`).join("")}
        </div>
      </div>
    </nav>
    <a class="brand" href="index.html" aria-label="Casa na Árvore Arquitetura — início">
      <img src="src/img/logo-completa.png" alt="">
      <span>Casa na Árvore<small>Arquitetura</small></span>
    </a>
    <nav class="nav nav--right" aria-label="Contato">
      <a href="contato.html">Solicitar orçamento</a>
    </nav>
  </div>
  <div class="drawer" id="drawer">
    <a href="sobre.html">Sobre</a>
    ${projetos.map(p => `<a href="${p.href}">${p.title}<small>${p.sub}</small></a>`).join("")}
    <a href="contato.html">Solicitar orçamento</a>
  </div>`;

  const footer = `
  <div class="wrap">
    <div class="footer-grid">
      <div>
        <img class="footer-logo" src="src/img/logo-completa.png" alt="Casa na Árvore Arquitetura">
        <p>Arquitetura autoral, bioclimática e consciente.</p>
      </div>
      <div>
        <h4>Projetos</h4>
        <a href="casa-tempo.html">Casa Tempo</a>
        <a href="conceitos.html">Conceitos</a>
        <a href="capela.html">Capela São José</a>
      </div>
      <div>
        <h4>Projetista</h4>
        <a href="sobre.html">Sobre Luisa Dalcin</a>
        <a href="contato.html">Solicitar orçamento</a>
      </div>
      <div>
        <h4>Contato</h4>
        <a href="mailto:luisadalcin.arq@gmail.com">luisadalcin.arq@gmail.com</a>
        <a href="tel:+5527992995445">+55 27 99299-5445</a>
        <p>Vila Velha · ES · Brasil</p>
      </div>
    </div>
    <p class="footer-bottom">© ${new Date().getFullYear()} Casa na Árvore Arquitetura</p>
  </div>`;

  const h = document.getElementById("site-header");
  const f = document.getElementById("site-footer");
  if (h) { h.className = "site-header"; h.innerHTML = header; }
  if (f) { f.className = "site-footer"; f.innerHTML = footer; }
})();
