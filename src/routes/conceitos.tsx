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
  [Waves, "Águas vivas", "Piscina biológica", "Sistema vivo que combina arquitetura, paisagismo e engenharia ambiental, com filtragem por plantas e substratos minerais."],
  [Leaf, "Conforto passivo", "Paisagismo e microclima", "A vegetação cria sombra, reduz ilhas de calor e estabiliza a temperatura junto a espelhos d'água."],
  [Droplets, "Ciclo eficiente", "Irrigação e água cinza", "A água retorna ao ciclo em descargas, limpeza e irrigação, mantendo solo e ar mais úmidos na estiagem."],
  [Sun, "Luz e bem-estar", "Iluminação natural", "A luz do dia reduz consumo, favorece o conforto visual e revela volumes, texturas e materiais."],
] as const;

function ConceptsPage() { return <div className="min-h-screen bg-background"><header className="bg-pine px-6 py-8 text-primary-foreground md:px-12"><div className="mx-auto max-w-7xl"><Link to="/" className="inline-flex items-center gap-2 text-sm"><ArrowLeft className="size-4"/> Casa na Árvore</Link><div className="grid items-end gap-12 py-20 md:grid-cols-2"><div><p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Arquitetura sustentável</p><h1 className="mt-5 font-display text-6xl font-extrabold leading-[0.95] md:text-8xl">Elementos<br/>norteadores</h1><p className="mt-7 max-w-lg font-light leading-relaxed text-primary-foreground/75">A base técnica e ambiental que guia nossos projetos: do ciclo da água ao conforto térmico gerado pela terra.</p></div><img src={planAsset.url} alt="Planta humanizada de uma residência integrada" className="aspect-[4/3] w-full rounded-3xl object-cover"/></div></div></header><main><section className="px-6 py-24 md:px-12 md:py-32"><div className="mx-auto grid max-w-7xl gap-px overflow-hidden rounded-3xl bg-border md:grid-cols-2">{systems.map(([Icon,eyebrow,title,text])=><article key={title} className="bg-background p-8 md:p-12"><Icon className="size-6 text-primary"/><p className="mt-10 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p><h2 className="mt-3 font-display text-3xl font-bold">{title}</h2><p className="mt-5 font-light leading-relaxed text-foreground/70">{text}</p></article>)}</div></section><section className="bg-pine px-6 py-24 text-primary-foreground md:px-12 md:py-32"><div className="mx-auto max-w-5xl"><p className="text-xs font-semibold uppercase tracking-[0.2em] text-clay">Bioconstrução</p><h2 className="mt-4 font-display text-5xl font-bold">A força e a inércia da terra</h2><div className="mt-12 grid gap-10 md:grid-cols-2"><article><h3 className="font-display text-3xl font-bold">Taipa de pilão</h3><p className="mt-4 font-light leading-relaxed text-primary-foreground/70">Paredes maciças oferecem alta inércia térmica, estabilidade e uma estética terrosa atemporal.</p></article><article><h3 className="font-display text-3xl font-bold">Tijolo ecológico</h3><p className="mt-4 font-light leading-relaxed text-primary-foreground/70">O sistema modular de solo-cimento reduz argamassa e entulho e suaviza variações de temperatura.</p></article></div></div></section></main></div> }