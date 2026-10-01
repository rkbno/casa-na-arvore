import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, Droplets, Leaf, Sun, Waves } from "lucide-react";
import planAsset from "@/assets/uploads/planta.jpeg.asset.json";

export const Route = createFileRoute("/conceitos")({
  head: () => ({ meta: [
    { title: "Elementos norteadores — Casa na Árvore" },
    { name: "description", content: "A base técnica e ambiental que guia os projetos da Casa na Árvore." },
    { property: "og:title", content: "Elementos norteadores — Casa na Árvore" },
    { property: "og:description", content: "Piscina biológica, paisagismo, água, luz natural e materiais da terra." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }), component: ConceptsPage,
});

const systems = [
  [Waves, "Água e paisagem", "Elementos naturais e soluções que aproximam a arquitetura da água e da vegetação, criando espaços mais integrados e acolhedores."],
  [Leaf, "Conforto e microclima", "Vegetação, sombra, ventilação e orientação são considerados para favorecer o conforto térmico e a relação com o entorno."],
  [Droplets, "Ciclos e eficiência", "Estratégias de aproveitamento de recursos podem integrar o projeto, buscando reduzir desperdícios e tornar o uso da água e da energia mais eficiente."],
  [Sun, "Luz e bem-estar", "A iluminação natural é explorada para valorizar os espaços, materiais e vistas, contribuindo para uma arquitetura mais confortável e conectada ao ambiente."],
] as const;

function ConceptsPage() { return <div className="min-h-screen bg-background"><header className="bg-pine px-6 py-8 text-primary-foreground md:px-12"><div className="mx-auto max-w-7xl"><Link to="/" className="inline-flex items-center gap-2 text-sm"><ArrowLeft className="size-4"/> Casa na Árvore</Link><div className="grid items-end gap-12 py-20 md:grid-cols-2"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Arquitetura bioclimática</p><h1 className="mt-5 font-display text-6xl font-extrabold leading-[0.95] md:text-8xl">Elementos<br/>norteadores</h1><p className="mt-7 max-w-lg font-light leading-relaxed text-primary-foreground/75">A base técnica e ambiental que guia nossos projetos: do ciclo da água ao conforto térmico gerado pela terra.</p></div><img src={planAsset.url} alt="Planta humanizada de uma residência integrada" className="aspect-[4/3] w-full rounded-3xl object-cover"/></div></div></header><main><section className="px-6 py-24 md:px-12 md:py-32"><div className="mx-auto max-w-7xl"><p className="mb-10 text-xs font-semibold uppercase tracking-[0.2em] text-primary">Elementos que orientam o projeto</p><div className="grid gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-2">{systems.map(([Icon,title,text])=><article key={title} className="bg-background p-8 md:p-12"><Icon className="size-6 text-primary"/><h2 className="mt-10 font-display text-3xl font-bold">{title}</h2><p className="mt-5 font-light leading-relaxed text-foreground/70">{text}</p></article>)}</div></div></section><section className="bg-pine px-6 py-24 text-primary-foreground md:px-12 md:py-32"><div className="mx-auto max-w-5xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Bioconstrução</p><h2 className="mt-4 max-w-4xl font-display text-5xl font-bold leading-tight md:text-7xl">A favor do clima</h2><p className="mt-8 max-w-2xl text-base font-light leading-loose text-primary-foreground/75 md:text-lg">Cada elemento é pensado para responder ao lugar — não apenas esteticamente, mas também em desempenho, conforto e eficiência.</p><div className="mt-12 border-t border-primary-foreground/20 pt-8"><p className="max-w-4xl font-display text-3xl font-semibold leading-snug text-clay md:text-5xl">Arquitetura contemporânea,<br className="hidden md:block"/> conectada ao clima e à paisagem.</p></div></div></section></main></div> }