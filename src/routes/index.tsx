import { createFileRoute } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, Leaf, Mail, MapPin, Menu, Phone } from "lucide-react";
import { useState, type FormEvent } from "react";

import heroImage from "@/assets/treehouse-hero.jpg";
import detailImage from "@/assets/treehouse-detail.jpg";
import loftImage from "@/assets/treehouse-loft.jpg";
import livingImage from "@/assets/treehouse-living.jpg";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AER·ÁRVORE — Arquitetura suspensa na floresta" },
      { name: "description", content: "Conheça uma casa na árvore contemporânea, criada para viver em diálogo com a floresta." },
      { property: "og:title", content: "AER·ÁRVORE — Arquitetura suspensa na floresta" },
      { property: "og:description", content: "Madeira, vidro e ar em uma experiência de morada entre as copas." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const spaces = [
  { image: loftImage, title: "Loft sobre a copa", text: "Um quarto aberto para o amanhecer, onde a luz atravessa as folhas antes de tocar a madeira." },
  { image: livingImage, title: "Sala integrada", text: "O estar se estende até a floresta, com planos de vidro, ventilação cruzada e texturas naturais." },
  { image: detailImage, title: "Estrutura delicada", text: "Encaixes precisos e apoios leves preservam o solo e deixam a paisagem seguir seu próprio desenho." },
];

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [sent, setSent] = useState(false);

  function submitVisit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
      <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 md:px-8">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3">
          <a href="#topo" className="rounded-full border border-glass-border bg-glass-strong px-5 py-3 font-display text-base font-extrabold backdrop-blur-xl">
            AER<span className="text-primary">·</span>ÁRVORE
          </a>
          <div className="hidden items-center gap-1 rounded-full border border-glass-border bg-glass px-2 py-1.5 backdrop-blur-xl md:flex">
            <a href="#conceito" className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition hover:bg-glass-strong">Conceito</a>
            <a href="#ambientes" className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition hover:bg-glass-strong">Ambientes</a>
            <a href="#experiencias" className="rounded-full px-4 py-2 text-sm font-medium text-foreground/70 transition hover:bg-glass-strong">Experiências</a>
            <a href="#visita" className="ml-1 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">Conhecer o projeto</a>
          </div>
          <Button variant="glass" className="size-11 px-0 md:hidden" aria-label="Abrir menu" onClick={() => setMenuOpen((value) => !value)}>
            <Menu className="size-5" />
          </Button>
        </nav>
        {menuOpen && (
          <div className="mx-auto mt-2 flex max-w-7xl flex-col rounded-2xl border border-glass-border bg-glass-strong p-3 backdrop-blur-2xl md:hidden">
            {[["Conceito", "#conceito"], ["Ambientes", "#ambientes"], ["Experiências", "#experiencias"], ["Visita", "#visita"]].map(([label, href]) => (
              <a key={href} href={href} onClick={() => setMenuOpen(false)} className="rounded-xl px-4 py-3 text-sm font-medium hover:bg-glass">{label}</a>
            ))}
          </div>
        )}
      </header>

      <main>
        <section id="topo" className="relative flex min-h-[94svh] w-full items-end overflow-hidden">
          <img src={heroImage} alt="Casa contemporânea suspensa entre as árvores ao amanhecer" width={1920} height={1080} className="absolute inset-0 size-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-foreground/10 to-foreground/40" />
          <div className="relative z-10 w-full px-6 pb-12 pt-32 text-primary-foreground md:px-12 md:pb-16">
            <div className="animate-rise">
              <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-glass-border bg-glass px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] backdrop-blur-xl"><Leaf className="size-3.5" /> Arquitetura · Natureza</p>
              <h1 className="max-w-4xl font-display text-5xl font-extrabold leading-[0.95] md:text-7xl lg:text-8xl">Morar a<br />quatro metros do solo</h1>
              <p className="mt-6 max-w-xl text-base font-light leading-relaxed text-primary-foreground/85 md:text-lg">A AER·ÁRVORE dissolve a fronteira entre estrutura e copa — um refúgio de madeira, vidro e ar suspenso na floresta.</p>
            </div>
            <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
              {[['+24m', 'de copa vegetal ao redor'], ['6', 'ambientes suspensos'], ['Leve', 'presença sobre o solo']].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-glass-border bg-glass p-5 backdrop-blur-xl">
                  <p className="font-display text-3xl font-bold">{value}</p>
                  <p className="mt-1 text-sm text-primary-foreground/75">{label}</p>
                </div>
              ))}
            </div>
            <a href="#conceito" aria-label="Ir para o conceito" className="absolute bottom-6 right-6 grid size-12 place-items-center rounded-full border border-glass-border bg-glass backdrop-blur-xl transition hover:bg-glass-strong md:right-12"><ArrowDown className="size-5" /></a>
          </div>
        </section>

        <section id="conceito" className="relative px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-10 md:grid-cols-2 md:gap-14">
            <img src={detailImage} alt="Detalhe dos encaixes de madeira e do vidro fosco" loading="lazy" width={1280} height={960} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft" />
            <div className="rounded-3xl border border-glass-border bg-glass p-8 shadow-soft backdrop-blur-2xl md:p-12">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">O conceito</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">Arquitetura que respira com a copa</h2>
              <p className="mt-6 font-light leading-relaxed text-foreground/75">Em vez de dominar a floresta, a casa pousa com delicadeza entre os troncos. Luz natural, ventilação cruzada e materiais de origem responsável conduzem cada escolha.</p>
              <p className="mt-4 font-light leading-relaxed text-foreground/75">O resultado é um habitar leve, onde os interiores mudam com o vento e com a luz.</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {['Madeira certificada', 'Vidro fosco', 'Energia solar'].map((item) => <span key={item} className="rounded-full bg-secondary/20 px-4 py-2 text-sm font-medium text-pine">{item}</span>)}
              </div>
            </div>
          </div>
        </section>

        <section id="ambientes" className="px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Os ambientes</p>
              <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">Espaços que flutuam sobre o verde</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {spaces.map((space) => (
                <article key={space.title} className="overflow-hidden rounded-3xl border border-glass-border bg-glass shadow-soft backdrop-blur-xl">
                  <img src={space.image} alt={space.title} loading="lazy" width={1024} height={768} className="aspect-[4/3] w-full object-cover transition duration-700 hover:scale-[1.03]" />
                  <div className="p-6"><h3 className="font-display text-2xl font-bold">{space.title}</h3><p className="mt-3 text-sm font-light leading-relaxed text-foreground/70">{space.text}</p></div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="experiencias" className="bg-pine px-6 py-24 text-primary-foreground md:px-12 md:py-32">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Ritmos da casa</p>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-bold md:text-5xl">A floresta marca as horas</h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-primary-foreground/15 md:grid-cols-3">
              {[['01', 'Amanhecer na copa', 'A névoa se desfaz entre os troncos enquanto a primeira luz alcança o deck.'], ['02', 'Pausa entre as folhas', 'Silêncio, sombra fresca e o movimento lento da paisagem ao redor.'], ['03', 'Noite sob as estrelas', 'A iluminação se recolhe e o céu assume o desenho de todo o espaço.']].map(([number, title, text]) => (
                <article key={number} className="min-h-72 bg-pine p-8 md:p-10"><span className="font-display text-sm font-semibold text-clay">{number}</span><h3 className="mt-14 font-display text-3xl font-bold">{title}</h3><p className="mt-4 max-w-sm font-light leading-relaxed text-primary-foreground/70">{text}</p></article>
              ))}
            </div>
          </div>
        </section>

        <section id="visita" className="px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto grid max-w-5xl gap-10 rounded-3xl border border-glass-border bg-glass p-8 shadow-soft backdrop-blur-2xl md:grid-cols-2 md:p-14">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Conheça o projeto</p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight">Venha subir com a gente</h2>
              <p className="mt-5 font-light leading-relaxed text-foreground/70">Envie seu interesse para receber novidades, detalhes do projeto e futuras datas de visitação.</p>
              <div className="mt-8 space-y-3 text-sm text-foreground/65">
                <p className="flex items-center gap-3"><Mail className="size-4 text-primary" /> Contato em definição</p>
                <p className="flex items-center gap-3"><Phone className="size-4 text-primary" /> Telefone em definição</p>
                <p className="flex items-center gap-3"><MapPin className="size-4 text-primary" /> Localização em definição</p>
              </div>
            </div>
            {sent ? (
              <div className="grid min-h-80 place-items-center rounded-2xl border border-secondary/30 bg-secondary/10 p-8 text-center"><div><Leaf className="mx-auto size-8 text-pine" /><h3 className="mt-4 font-display text-2xl font-bold">Interesse registrado</h3><p className="mt-2 text-sm text-foreground/65">Obrigado. Esta é uma demonstração visual; o envio definitivo será conectado depois.</p></div></div>
            ) : (
              <form onSubmit={submitVisit} className="rounded-2xl border border-glass-border bg-glass-strong p-6">
                <label className="block text-xs font-semibold uppercase tracking-[0.12em] text-foreground/55">Nome<input required name="name" type="text" placeholder="Seu nome" className="mt-2 w-full rounded-xl border border-border bg-input px-4 py-3 text-sm normal-case tracking-normal outline-none transition placeholder:text-foreground/35 focus:border-primary" /></label>
                <label className="mt-4 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground/55">E-mail<input required name="email" type="email" placeholder="voce@email.com" className="mt-2 w-full rounded-xl border border-border bg-input px-4 py-3 text-sm normal-case tracking-normal outline-none transition placeholder:text-foreground/35 focus:border-primary" /></label>
                <label className="mt-4 block text-xs font-semibold uppercase tracking-[0.12em] text-foreground/55">Interesse<select name="interest" className="mt-2 w-full rounded-xl border border-border bg-input px-4 py-3 text-sm normal-case tracking-normal outline-none transition focus:border-primary"><option>Conhecer o projeto</option><option>Receber novidades</option><option>Futura hospedagem</option></select></label>
                <Button type="submit" className="mt-6 w-full gap-2">Enviar interesse <ArrowUpRight className="size-4" /></Button>
              </form>
            )}
          </div>
        </section>
      </main>

      <footer className="px-6 pb-12 md:px-12"><div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 border-t border-border pt-8 text-sm text-foreground/50 md:flex-row"><span className="font-display font-bold text-foreground">AER<span className="text-primary">·</span>ÁRVORE</span><span>Projeto conceitual · conteúdo demonstrativo</span></div></footer>
    </div>
  );
}