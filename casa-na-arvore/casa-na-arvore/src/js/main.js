/* Interações: menu mobile, carrossel, lightbox e formulário */
document.addEventListener("DOMContentLoaded", () => {
  /* menu mobile */
  const toggle = document.querySelector(".menu-toggle");
  const drawer = document.getElementById("drawer");
  if (toggle && drawer) {
    toggle.addEventListener("click", () => {
      const open = drawer.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Fechar menu" : "Abrir menu");
    });
  }

  /* carrossel horizontal (botões anterior/próximo) */
  document.querySelectorAll("[data-rail]").forEach(section => {
    const rail = section.querySelector(".rail");
    const step = () => (rail.querySelector(".step")?.offsetWidth || 320) + 20;
    section.querySelector("[data-prev]")?.addEventListener("click", () => rail.scrollBy({ left: -step(), behavior: "smooth" }));
    section.querySelector("[data-next]")?.addEventListener("click", () => rail.scrollBy({ left: step(), behavior: "smooth" }));
  });

  /* lightbox para imagens com a classe .zoom */
  const zoomables = [...document.querySelectorAll("img.zoom")];
  if (zoomables.length) {
    const box = document.createElement("div");
    box.className = "lightbox";
    box.setAttribute("role", "dialog");
    box.setAttribute("aria-modal", "true");
    box.innerHTML = '<button class="lb-close" aria-label="Fechar">×</button><button class="lb-prev" aria-label="Anterior">‹</button><img alt=""><button class="lb-next" aria-label="Próxima">›</button>';
    document.body.appendChild(box);
    const big = box.querySelector("img");
    let i = 0;
    const show = n => { i = (n + zoomables.length) % zoomables.length; big.src = zoomables[i].src; big.alt = zoomables[i].alt; };
    const close = () => box.classList.remove("is-open");
    zoomables.forEach((img, n) => img.addEventListener("click", () => { show(n); box.classList.add("is-open"); }));
    box.querySelector(".lb-close").onclick = close;
    box.querySelector(".lb-prev").onclick = () => show(i - 1);
    box.querySelector(".lb-next").onclick = () => show(i + 1);
    box.addEventListener("click", e => { if (e.target === box) close(); });
    document.addEventListener("keydown", e => {
      if (!box.classList.contains("is-open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(i - 1);
      if (e.key === "ArrowRight") show(i + 1);
    });
  }

  /* formulário de orçamento: abre o e-mail já preenchido */
  const form = document.getElementById("form-orcamento");
  if (form) {
    form.addEventListener("submit", e => {
      e.preventDefault();
      const d = new FormData(form);
      if (d.get("site")) return; // campo-isca contra robôs
      const corpo = [
        "Nome: " + d.get("nome"),
        "E-mail: " + d.get("email"),
        "Telefone: " + (d.get("telefone") || "—"),
        "Tipo de projeto: " + d.get("tipo"),
        "Localização: " + d.get("local"),
        "Prazo desejado: " + d.get("prazo"),
        "",
        d.get("mensagem") || ""
      ].join("\n");
      const url = "mailto:luisadalcin.arq@gmail.com?subject=" + encodeURIComponent("Orçamento — " + d.get("tipo")) + "&body=" + encodeURIComponent(corpo);
      form.querySelector(".form-status").textContent = "Abrindo seu aplicativo de e-mail com os dados preenchidos…";
      location.href = url;
    });
  }
});
