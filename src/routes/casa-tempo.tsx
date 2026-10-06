import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, Compass, Droplets, Leaf, Ruler } from "lucide-react";
import fachada from "@/assets/casa-tempo/fachada.jpg";
import plantaTerreo from "@/assets/casa-tempo/planta-terreo.jpg";
import plantaSuperior from "@/assets/casa-tempo/planta-superior.jpg";
import patio from "@/assets/casa-tempo/patio.jpg";
import salaEscada from "@/assets/casa-tempo/sala-escada.jpg";
import salaJardim from "@/assets/casa-tempo/sala-jardim.jpg";
import cozinhaPatio from "@/assets/casa-tempo/cozinha-patio.jpg";
import salaTv from "@/assets/casa-tempo/sala-tv.jpg";
import lazerNoturno from "@/assets/casa-tempo/lazer-noturno.jpg";
import suite from "@/assets/casa-tempo/suite.jpg";
import banheiro from "@/assets/casa-tempo/banheiro.jpg";

export const Route = createFileRoute("/casa-tempo")({
  head: () => ({
    meta: [
      { title: "Casa Tempo — Casa na Árvore Arquitetura" },
      {
        name: "description",
        content:
          "Projeto residencial bioclimático em terreno de 12 × 25 metros, com pátios verdes, integração e acessibilidade.",
      },
      { property: "og:title", content: "Casa Tempo — Casa na Árvore Arquitetura" },
      {
        property: "og:description",
        content: "Uma residência pensada para luz natural, conforto ambiental e diferentes tempos de vida.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: CasaTempoPage,
});

const strategies = [
  {
    icon: Compass,
    title: "Orientação solar",
    text: "A fachada norte favorece a iluminação natural. Na frente oeste, menos aberturas expostas e elementos de sombra ajudam a controlar o calor da tarde.",
  },
  {
    icon: Droplets,
    title: "Solo permeável",
    text: "Grama e concregrama mantêm áreas laterais vegetadas, favorecendo infiltração, evapotranspiração e menor retenção de calor.",
  },
  {
    icon: Leaf,
    title: "Paisagismo controlado",
    text: "Árvores, arbustos e gramíneas funcionam como filtro solar e aproximam os espaços de permanência da natureza.",
  },
] as const;

function CasaTempoPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-pine px-6 pb-24 pt-8 text-primary-foreground md:px-12 md:pb-32">
        <div className="mx-auto max-w-7xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm">
            <ArrowLeft className="size-4" /> Casa na Árvore
          </Link>
          <div className="grid items-end gap-12 pt-20 md:grid-cols-2 md:pt-24">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                Projeto residencial
              </p>
              <h1 className="mt-5 font-display text-6xl font-extrabold leading-[0.95] md:text-8xl">
                Casa<br />Tempo
              </h1>
              <p className="mt-7 max-w-lg font-light leading-relaxed text-primary-foreground/75">
                Uma casa que integra pátios verdes, ambientes fluidos e soluções bioclimáticas para
                acompanhar diferentes tempos de vida.
              </p>
            </div>
            <img
              src={fachada}
              alt="Fachada da Casa Tempo com pedra, madeira e jardim lateral"
              className="aspect-[4/3] w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </header>

      <main>
        <section className="px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 md:grid-cols-[0.8fr_1.2fr] md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Conceito do projeto
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
                Conforto para o presente, flexibilidade para o futuro.
              </h2>
            </div>
            <div className="grid gap-6 border-l-2 border-clay pl-7 sm:grid-cols-3">
              <div>
                <Ruler className="size-5 text-primary" />
                <p className="mt-3 text-sm text-foreground/60">Terreno</p>
                <p className="mt-1 font-display text-2xl font-bold">12 × 25 m</p>
              </div>
              <div>
                <p className="text-sm text-foreground/60">Térreo</p>
                <p className="mt-1 font-display text-2xl font-bold">105 m²</p>
              </div>
              <div>
                <p className="text-sm text-foreground/60">Pavimento superior</p>
                <p className="mt-1 font-display text-2xl font-bold">105 m²</p>
              </div>
            </div>
          </div>
          <div className="mx-auto mt-16 grid max-w-7xl gap-6 md:grid-cols-2">
            <img
              src={plantaTerreo}
              alt="Planta humanizada do pavimento térreo da Casa Tempo"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl bg-card object-contain"
            />
            <img
              src={plantaSuperior}
              alt="Planta humanizada do pavimento superior da Casa Tempo"
              loading="lazy"
              className="aspect-[4/3] w-full rounded-3xl bg-card object-contain"
            />
          </div>
          <p className="mx-auto mt-8 max-w-3xl text-center font-light leading-relaxed text-foreground/70">
            A distribuição dos ambientes e a configuração da escada foram planejadas para permitir
            adaptações de acessibilidade com intervenções mínimas.
          </p>
        </section>

        <section className="bg-pine px-6 py-24 text-primary-foreground md:px-12 md:py-32">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
              Arquitetura bioclimática
            </p>
            <h2 className="mt-4 max-w-3xl font-display text-5xl font-bold leading-tight md:text-7xl">
              A casa responde ao sol, à água e à paisagem.
            </h2>
            <div className="mt-14 grid gap-px overflow-hidden rounded-3xl bg-primary-foreground/15 md:grid-cols-3">
              {strategies.map(({ icon: Icon, title, text }) => (
                <article key={title} className="min-h-80 bg-pine p-8 md:p-10">
                  <Icon className="size-6 text-clay" />
                  <h3 className="mt-12 font-display text-3xl font-bold">{title}</h3>
                  <p className="mt-5 font-light leading-relaxed text-primary-foreground/70">{text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Integração e permanência
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-6xl">
                Ambientes que respiram com os jardins.
              </h2>
            </div>
            <div className="grid gap-7 md:grid-cols-12">
              <img src={patio} alt="Pátio interno verde da Casa Tempo" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover md:col-span-7" />
              <img src={salaEscada} alt="Sala e escada iluminadas pelo pátio" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover md:col-span-5" />
              <img src={salaJardim} alt="Sala integrada ao jardim interno" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover md:col-span-5" />
              <img src={cozinhaPatio} alt="Cozinha integrada à área externa" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover md:col-span-7" />
            </div>
          </div>
        </section>

        <section className="bg-pine px-6 py-24 text-primary-foreground md:px-12 md:py-32">
          <div className="mx-auto max-w-7xl">
            <div className="grid items-end gap-12 md:grid-cols-2">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                  Lazer e aconchego
                </p>
                <h2 className="mt-4 font-display text-5xl font-bold leading-tight md:text-7xl">
                  Dentro e fora em continuidade.
                </h2>
                <p className="mt-7 max-w-lg font-light leading-relaxed text-primary-foreground/70">
                  Sala, cozinha e área de lazer se abrem para pátios vegetados, criando espaços de
                  encontro com luz natural, sombra e presença da paisagem.
                </p>
              </div>
              <img src={salaTv} alt="Sala de TV integrada ao jardim" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
            </div>
            <div className="mt-8 grid gap-8 md:grid-cols-3">
              <img src={lazerNoturno} alt="Área de lazer da Casa Tempo à noite" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
              <img src={suite} alt="Suíte principal da Casa Tempo" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
              <img src={banheiro} alt="Banheiro da suíte principal" loading="lazy" className="aspect-[4/3] w-full rounded-3xl object-cover" />
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Seu projeto pode começar aqui
              </p>
              <h2 className="mt-4 max-w-3xl font-display text-4xl font-bold leading-tight md:text-6xl">
                Uma casa pensada para o seu lugar e o seu tempo.
              </h2>
            </div>
            <Link
              to="/contato"
              className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-pine px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground"
            >
              Solicitar orçamento <ArrowRight className="size-4" />
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}