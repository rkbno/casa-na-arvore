import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Box, Building2, Compass, Layers, Mail, MapPin, Phone } from "lucide-react";
import logo from "@/assets/uploads/logo-completa.png.asset.json";
import floorPlan from "@/assets/uploads/planta.jpeg.asset.json";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre Luisa Dalcin — Casa na Árvore" },
      {
        name: "description",
        content:
          "A trajetória de Luisa Dalcin, projetista e idealizadora da Casa na Árvore: das raízes no desenho à atuação em BIM e bioconstrução.",
      },
      { property: "og:title", content: "Sobre Luisa Dalcin — Casa na Árvore" },
      {
        property: "og:description",
        content:
          "Da arte ao projeto: raízes, trajetória internacional em BIM, bioconstrução e o propósito da Casa na Árvore.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const timeline = [
  {
    year: "Raízes",
    title: "Da arte ao projeto",
    place: "Mato Grosso · Brasil",
    body: [
      "Minha trajetória na arquitetura começou ainda muito cedo, aos 16 anos, trabalhando em um escritório de interiores no Mato Grosso. Foi ali que tive meu primeiro contato com projetos, detalhamento, modelagem e com a transformação de uma ideia em espaço.",
      "Eu trabalhava de forma independente com desenho e pintura, e foi a partir desse trabalho que surgiu o convite para atuar como projetista. O que começou como arte acabou encontrando na arquitetura uma nova forma de expressão.",
    ],
  },
] as const;

const skills = [
  [Box, "BIM e modelagem", "Revit · SketchUp"],
  [Layers, "Representação", "Enscape · Renderização · Pós-produção · IA"],
  [Building2, "Projetos", "Edificações · Residenciais · Interiores"],
  [Compass, "Experiência", "Brasil · Flórida, EUA · Projetos autônomos · Colaborações"],
] as const;

const competencies = [
  "Domínio de Revit e metodologia BIM",
  "Experiência com SketchUp",
  "Renderização e pós-produção com Enscape e ferramentas de IA",
  "Projetos de edificações e interiores",
  "Desenvolvimento e representação arquitetônica",
  "Experiência profissional no Brasil e nos Estados Unidos",
  "Atuação como projetista autônoma e em colaboração com escritórios",
  "Experiência com projetos residenciais e diferentes padrões construtivos",
] as const;

function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="bg-pine px-6 py-8 text-primary-foreground md:px-12">
        <div className="mx-auto max-w-7xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm">
            <ArrowLeft className="size-4" /> Casa na Árvore
          </Link>
          <div className="grid items-end gap-12 py-20 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
                Portfólio · Projetista
              </p>
              <h1 className="mt-5 font-display text-6xl font-extrabold leading-[0.95] md:text-8xl">
                Luisa
                <br />
                Dalcin
              </h1>
              <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
                Projetista · Architectural Drafter
              </p>
              <p className="mt-7 max-w-lg font-light leading-relaxed text-primary-foreground/75">
                Projetando casas. Construindo meu futuro.
              </p>
            </div>
            <img
              src={floorPlan.url}
              alt="Planta baixa humanizada de um projeto residencial da Casa na Árvore"
              className="aspect-[4/3] w-full rounded-lg bg-background object-contain p-3 md:p-5"
            />
          </div>
        </div>
      </header>

      <main>
        <section className="px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              De onde vêm as minhas raízes
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
              Naquele momento, eu ainda não sabia até onde esse caminho me levaria.
            </h2>
            <p className="mt-6 font-light leading-relaxed text-foreground/70">
              Mas foi ali que começaram a se formar as raízes da profissional que estou construindo
              hoje — entre o desenho à mão, o detalhamento técnico e a vontade de ver uma ideia se
              tornar espaço.
            </p>
          </div>
        </section>

        <section className="bg-pine px-6 py-24 text-primary-foreground md:px-12 md:py-32">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Trajetória</p>
            <h2 className="mt-4 font-display text-5xl font-bold">Um caminho em construção</h2>
            <div className="mt-14 space-y-px overflow-hidden rounded-3xl bg-primary-foreground/15">
              {timeline.map((item) => (
                <article
                  key={item.title}
                  className="grid gap-6 bg-pine p-8 md:grid-cols-[10rem_1fr] md:p-12"
                >
                  <div>
                    <p className="font-display text-3xl font-bold text-clay">{item.year}</p>
                    <p className="mt-2 text-xs uppercase tracking-[0.18em] text-primary-foreground/55">
                      {item.place}
                    </p>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold md:text-3xl">{item.title}</h3>
                    {item.body.map((paragraph) => (
                      <p
                        key={paragraph}
                        className="mt-4 font-light leading-relaxed text-primary-foreground/70"
                      >
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto grid max-w-7xl items-start gap-14 md:grid-cols-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Casa na Árvore · Projeto autoral
              </p>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight md:text-5xl">
                A marca que reúne tudo o que quero projetar
              </h2>
              <p className="mt-6 font-light leading-relaxed text-foreground/70">
                A Casa na Árvore é um projeto autoral em desenvolvimento, criado como parte da
                construção da minha trajetória profissional na arquitetura. A marca reúne meus
                principais interesses de atuação — arquitetura residencial, casas de campo,
                interiores, bioarquitetura e conforto ambiental.
              </p>
              <p className="mt-4 font-light leading-relaxed text-foreground/70">
                Um projeto autoral em construção, que acompanha minha evolução como projetista e
                futura arquiteta.
              </p>
            </div>
            <div className="rounded-3xl border border-border p-8 md:p-12">
              <img
                src={logo.url}
                alt="Casa na Árvore Arquitetura"
                className="h-24 w-auto rounded-full"
              />
              <p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                Propósito
              </p>
              <p className="mt-4 font-light leading-relaxed text-foreground/70">
                Vejo o meu trabalho como um dom que deve ser desenvolvido com responsabilidade,
                excelência e serviço. Construir minha trajetória profissional também significa
                honrar meus princípios e colocar meus talentos a serviço das pessoas.
              </p>
            </div>
          </div>
        </section>

        <section className="bg-sage/15 px-6 py-24 md:px-12 md:py-32">
          <div className="mx-auto max-w-7xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Áreas de atuação
            </p>
            <h2 className="mt-4 font-display text-4xl font-bold md:text-5xl">
              Competências profissionais
            </h2>
            <div className="mt-12 grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-2">
              {skills.map(([Icon, title, tools]) => (
                <article key={title} className="bg-background p-8 md:p-10">
                  <Icon className="size-6 text-primary" />
                  <h3 className="mt-8 font-display text-2xl font-bold">{title}</h3>
                  <p className="mt-3 font-light text-foreground/70">{tools}</p>
                </article>
              ))}
            </div>
            
          </div>
        </section>

        <section className="bg-pine px-6 py-24 text-primary-foreground md:px-12 md:py-32">
          <div className="mx-auto max-w-5xl">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">
              Um novo projeto pode começar com uma conversa
            </p>
            <h2 className="mt-4 font-display text-5xl font-bold leading-tight md:text-6xl">
              Vamos trabalhar
              <br />
              juntos?
            </h2>
            <p className="mt-7 max-w-2xl font-light leading-relaxed text-primary-foreground/75">
              Acredito que é trabalhando que se constrói. Busco novas oportunidades, projetos e
              parcerias profissionais que me permitam contribuir com meu conhecimento e ampliar meu
              olhar sobre a arquitetura.
            </p>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              <p className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <Mail className="mt-0.5 size-4 shrink-0 text-clay" /> luisadalcin.arq@gmail.com
              </p>
              <p className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <Phone className="mt-0.5 size-4 shrink-0 text-clay" /> +55 27 99299-5445
              </p>
              <p className="flex items-start gap-3 text-sm text-primary-foreground/80">
                <MapPin className="mt-0.5 size-4 shrink-0 text-clay" /> Vila Velha · ES · Brasil
              </p>
            </div>
            <Link
              to="/contato"
              className="mt-12 inline-flex rounded-full bg-clay px-7 py-3 text-sm font-semibold text-pine"
            >
              Solicitar orçamento
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
