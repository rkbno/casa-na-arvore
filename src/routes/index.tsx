import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/treehouse-hero.jpg";
import detailImage from "@/assets/treehouse-detail.jpg";
import logo from "@/assets/uploads/logo-completa.png.asset.json";
import chapel from "@/assets/capela/hero-fachada-aprimorada.jpg";
import casaTempo from "@/assets/casa-tempo/fachada.jpg";
import plan from "@/assets/uploads/planta.jpeg.asset.json";
import { Button, buttonVariants } from "@/components/ui/button";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Casa na Árvore — Arquitetura e bioconstrução" },
      { name: "description", content: "Arquitetura autoral, bioclimática e conectada à natureza." },
      { property: "og:title", content: "Casa na Árvore — Arquitetura e bioconstrução" },
      {
        property: "og:description",
        content: "Projetos que equilibram identidade, conforto, custo e qualidade.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

const path = [
  ["01", "Sonho", "Escuta atenta, repertório e desejos ganham direção."],
  ["02", "Projeto", "Arquitetura autoral e soluções bioclimáticas tomam forma."],
  ["03", "Aprovação", "Decisões técnicas equilibram custo, qualidade e bem-estar."],
  ["04", "Execução", "Materiais e sistemas são acompanhados com cuidado."],
  ["05", "Finalização", "A casa passa a guardar novas memórias."],
] as const;

const projects = [
  { to: "/conceitos", title: "Conceitos construtivos", text: "Elementos que orientam o projeto" },
  { to: "/capela", title: "Capela São José", text: "Terra, luz e vitrais de garrafa" },
  { to: "/casa-tempo", title: "Casa Tempo", text: "Residência bioclimática" },
] as const;

function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [projectsOpen, setProjectsOpen] = useState(false);
  const projectsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const h = (e: PointerEvent) => {
      if (projectsRef.current && !projectsRef.current.contains(e.target as Node))
        setProjectsOpen(false);
    };
    document.addEventListener("pointerdown", h);
    return () => document.removeEventListener("pointerdown", h);
  }, []);
  return (
    <div className="min-h-screen overflow-x-hidden bg-background text-foreground antialiased">
      <header className="sticky inset-x-0 top-0 z-50 border-b border-border bg-background px-5 py-3 md:px-12">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <a
            href="#topo"
            className="flex items-center gap-3"
          >
            <img
              src={logo.url}
              alt="Casa na Árvore Arquitetura"
              className="h-14 w-auto object-contain md:h-16"
            />
            <span className="font-editorial text-xl leading-tight md:text-2xl">Casa na Árvore<span className="block font-sans text-[10px] uppercase leading-5">Arquitetura</span></span>
          </a>
          <div className="hidden items-center gap-6 md:flex">
            <Link to="/sobre" className="px-2 py-2 text-xs font-medium uppercase hover:text-primary">
              Sobre
            </Link>
            <div className="relative" ref={projectsRef}>
              <Button
                variant="ghost"
                type="button"
                aria-expanded={projectsOpen}
                aria-haspopup="true"
                onKeyDown={(e) => {
                  if (e.key === "Escape") setProjectsOpen(false);
                }}
                onClick={() => setProjectsOpen((v) => !v)}
                className="gap-2 rounded-none px-2 text-xs font-medium uppercase"
              >
                Projetos
                <ChevronDown
                  className={
                    "size-3.5 transition-transform duration-300 " +
                    (projectsOpen ? "rotate-180" : "")
                  }
                />
              </Button>
              {projectsOpen && (
                <div className="absolute left-1/2 top-full w-80 -translate-x-1/2 pt-3">
                  <div className="overflow-hidden rounded-lg border border-border bg-background p-2 shadow-soft">
                    {projects.map((p) => (
                      <Link
                        key={p.to}
                        to={p.to}
                        onClick={() => setProjectsOpen(false)}
                        className="block rounded-md px-4 py-3 transition-colors hover:bg-primary/10"
                      >
                        <span className="block text-sm font-semibold">{p.title}</span>
                        <span className="mt-1 block text-xs font-light text-foreground/70">
                          {p.text}
                        </span>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <Link
              to="/contato"
              className={buttonVariants({variant:"outline",size:"sm",className:"rounded-none border-pine bg-pine text-primary-foreground hover:bg-pine/90 hover:text-primary-foreground"})}
            >
              Solicitar orçamento
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </nav>
        {menuOpen && (
          <div className="mx-auto mt-2 flex max-w-7xl flex-col border-t border-border bg-background py-3 md:hidden">
            <Link to="/sobre" onClick={() => setMenuOpen(false)} className="px-4 py-3">
              Sobre
            </Link>
            <span className="px-4 pb-1 pt-3 text-xs font-semibold uppercase tracking-[0.18em] text-foreground/65">
              Projetos
            </span>
            <div className="ml-4 flex flex-col border-l border-glass-border pl-4">
              {projects.map((p) => (
                <Link
                  key={p.to}
                  to={p.to}
                  onClick={() => setMenuOpen(false)}
                  className="py-2.5 text-sm font-medium text-foreground/80"
                >
                  {p.title}
                </Link>
              ))}
            </div>
            <Link to="/contato" className="px-4 py-3 font-semibold text-primary">
              Solicitar orçamento
            </Link>
          </div>
        )}
      </header>
      <main>
        <section id="topo" className="relative flex min-h-[min(78svh,900px)] items-center justify-center overflow-hidden">
          <img
            src={heroImage}
            alt="Casa contemporânea integrada à copa das árvores"
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-pine/35" />
          <div className="relative z-10 w-full px-6 py-20 text-center text-primary-foreground md:px-12">
            <p className="mb-6 text-[11px] font-medium uppercase">
              Arquitetura · Bioconstrução
            </p>
            <h1 className="mx-auto max-w-5xl font-editorial text-6xl font-normal leading-[0.95] md:text-8xl lg:text-9xl">
              Casa na Árvore
              <br />
              <span className="text-4xl italic md:text-6xl">Espaços para criar raízes</span>
            </h1>
            <p className="mx-auto mt-7 max-w-lg text-sm font-light leading-relaxed text-primary-foreground md:text-base">
              Projetos autorais e bioclimáticos que aproximam pessoas, paisagem e matéria.
            </p>
            <a
              href="#essencia"
              aria-label="Conhecer nossa essência"
              className="mx-auto mt-8 grid size-11 place-items-center border border-primary-foreground/60 transition-colors hover:bg-primary-foreground/15"
            >
              <ArrowDown className="size-5" />
            </a>
          </div>
        </section>
        <section id="essencia" className="px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-12 md:grid-cols-2">
            <img
              src={detailImage}
              alt="Madeira e vidro em diálogo com a natureza"
              className="aspect-[4/5] w-full object-cover md:aspect-[4/3]"
            />
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Nossa essência
              </p>
              <h2 className="mt-4 font-editorial text-4xl font-medium leading-tight md:text-6xl">
                O sonho de criança se transforma em um sonho construído.
              </h2>
              <p className="mt-6 font-light leading-relaxed text-foreground/70">
                A Casa na Árvore nasce do imaginário de criar um lugar entre a natureza e a
                imaginação — e cresce com a ideia de transformar sonhos em espaços reais, pensados
                para cada história e cada forma de viver.
              </p>
              <p className="mt-4 font-light leading-relaxed text-foreground/70">
                Da imaginação à arquitetura.
              </p>
            </div>
          </div>
        </section>
        <section
          id="caminho"
          className="bg-pine px-6 py-24 text-primary-foreground md:px-12 md:py-32"
        >
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
              Do primeiro traço à obra
            </p>
            <h2 className="mt-4 font-editorial text-5xl font-normal md:text-6xl">Nosso caminho</h2>
            <div className="mt-12 grid gap-px overflow-hidden bg-primary-foreground/15 md:grid-cols-5">
              {path.map(([n, title, text]) => (
                <article key={n} className="min-h-72 bg-pine p-7">
                  <span className="text-sm text-clay">{n}</span>
                  <h3 className="mt-8 font-editorial text-3xl font-medium">{title}</h3>
                  <p className="mt-4 text-sm font-light leading-relaxed text-primary-foreground/65">
                    {text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
        <section className="px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Conheça o trabalho
              </p>
              <h2 className="mt-4 font-editorial text-4xl font-medium md:text-6xl">
                Matéria, técnica e significado
              </h2>
            </div>
            <div className="grid gap-7 md:grid-cols-2">
              <Link
                to="/casa-tempo"
                className="group relative overflow-hidden md:col-span-2"
              >
                <img
                  src={casaTempo}
                  alt="Fachada da Casa Tempo"
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.02] motion-reduce:transition-none md:aspect-[16/7]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-primary-foreground">
                  <p className="text-sm">Projeto residencial</p>
                  <h3 className="mt-2 flex items-end justify-between gap-3 font-editorial text-4xl font-medium md:text-5xl">
                    Casa Tempo <ArrowUpRight />
                  </h3>
                </div>
              </Link>
              <Link to="/conceitos" className="group relative overflow-hidden">
                <img
                  src={plan.url}
                  alt="Planta humanizada de projeto residencial"
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-primary-foreground">
                  <p className="text-sm">Elementos norteadores</p>
                  <h3 className="mt-2 flex items-end justify-between gap-3 font-editorial text-3xl font-medium md:text-4xl">
                    Conceitos construtivos <ArrowUpRight />
                  </h3>
                </div>
              </Link>
              <Link to="/capela" className="group relative overflow-hidden">
                <img
                  src={chapel}
                  alt="Fachada da Capela São José"
                  className="aspect-[4/3] w-full object-cover transition duration-700 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-8 text-primary-foreground">
                  <p className="text-sm">Projeto executado</p>
                  <h3 className="mt-2 flex items-end justify-between gap-3 font-editorial text-3xl font-medium md:text-4xl">
                    Capela São José <ArrowUpRight />
                  </h3>
                </div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="bg-pine px-6 py-10 text-primary-foreground md:px-12">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-[auto_1fr] md:items-center">
          <div className="flex w-full justify-center md:w-auto md:justify-start">
            <img
              src={logo.url}
              alt="Casa na Árvore Arquitetura"
              className="block h-auto w-44 max-w-full object-contain md:w-52"
            />
          </div>
          <div className="flex min-w-0 flex-col items-start gap-4 md:items-end">
            <Link to="/casa-tempo" className="text-sm text-primary-foreground/70">
              Casa Tempo
            </Link>
            <Link to="/sobre" className="text-sm text-primary-foreground/70">
              Sobre a projetista
            </Link>
            <Link to="/contato" className="font-semibold text-clay">
              Solicitar orçamento
            </Link>
            <span className="text-sm text-primary-foreground/55">
              Arquitetura autoral · Bioclimática · Consciente
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
