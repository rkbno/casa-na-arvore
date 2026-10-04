import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, ArrowRight, Compass, Leaf, Sparkles } from "lucide-react";
import { useState, type ReactNode } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { bioclimaticBriefSchema, requestBioclimaticGuidance, type BioclimaticBriefInput } from "@/lib/bioclimatic-guidance.functions";

export const Route = createFileRoute("/orientacao")({
  head: () => ({ meta: [
    { title: "Orientação bioclimática inicial — Casa na Árvore" },
    { name: "description", content: "Descreva seu terreno e sua ideia para receber orientações iniciais personalizadas de arquitetura bioclimática." },
    { property: "og:title", content: "Orientação bioclimática inicial — Casa na Árvore" },
    { property: "og:description", content: "Uma primeira leitura personalizada para aproximar terreno, clima, paisagem e a casa na árvore que você imagina." },
    { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: GuidancePage,
});

const textareaClassName = "min-h-32 rounded-lg bg-background/70 px-4 py-3 shadow-none";

function GuidancePage() {
  const [guidance, setGuidance] = useState<string | null>(null);
  const generateGuidance = useServerFn(requestBioclimaticGuidance);
  const form = useForm<BioclimaticBriefInput>({ resolver: zodResolver(bioclimaticBriefSchema), defaultValues: { locationAndClimate: "", terrain: "", existingNature: "", treehouseVision: "" } });
  const onSubmit = form.handleSubmit(async (values) => {
    form.clearErrors("root"); setGuidance(null);
    try {
      const response = await generateGuidance({ data: values });
      if (!response.success) { form.setError("root", { message: response.error }); return; }
      setGuidance(response.guidance);
    } catch { form.setError("root", { message: "Não foi possível gerar a orientação agora. Seu texto foi mantido para você tentar novamente." }); }
  });

  return <div className="min-h-screen bg-background text-foreground">
    <header className="bg-pine px-6 pb-16 pt-8 text-primary-foreground md:px-12 md:pb-24"><div className="mx-auto max-w-7xl">
      <Link to="/" className="inline-flex items-center gap-2 text-sm"><ArrowLeft className="size-4" /> Casa na Árvore</Link>
      <div className="max-w-4xl pt-16 md:pt-24"><p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-clay"><Sparkles className="size-4" /> Orientação com IA</p><h1 className="mt-5 font-display text-5xl font-extrabold leading-[0.95] md:text-7xl">Imagine o lugar.<br />Comece pelo clima.</h1><p className="mt-7 max-w-2xl font-light leading-relaxed text-primary-foreground/75 md:text-lg">Conte como é o terreno e a casa na árvore que você imagina. A partir desse relato, preparamos uma primeira leitura sobre implantação, conforto e materiais.</p></div>
    </div></header>
    <main className="px-6 py-16 md:px-12 md:py-24"><div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
      <aside><Compass className="size-7 text-primary" /><h2 className="mt-5 font-display text-3xl font-bold">Uma primeira leitura do seu contexto</h2><p className="mt-5 font-light leading-relaxed text-foreground/70">Quanto mais concreta for a descrição, mais úteis serão as orientações. Se ainda não souber algum detalhe, diga isso no próprio campo.</p><div className="mt-10 border-l-2 border-clay pl-6"><p className="font-display text-xl font-bold">Antes do projeto, vem a escuta.</p><p className="mt-3 text-sm leading-relaxed text-foreground/65">A resposta não substitui visita, levantamento, laudo das árvores, cálculo estrutural ou análise da legislação.</p></div></aside>
      <section aria-label="Descrição do terreno e da casa" className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-10"><form onSubmit={onSubmit} className="grid gap-7" noValidate>
        <Field label="Onde fica e como é o clima?" error={form.formState.errors.locationAndClimate?.message}><Textarea {...form.register("locationAndClimate")} aria-label="Onde fica e como é o clima?" className={textareaClassName} placeholder="Cidade ou região, calor, frio, chuvas e ventos que você percebe" maxLength={700} /></Field>
        <Field label="Como é o terreno?" error={form.formState.errors.terrain?.message}><Textarea {...form.register("terrain")} aria-label="Como é o terreno?" className={textareaClassName} placeholder="Inclinação, vistas, acesso, dimensão aproximada, cursos d’água ou outras características" maxLength={1200} /></Field>
        <Field label="Que natureza já existe no local?" error={form.formState.errors.existingNature?.message}><Textarea {...form.register("existingNature")} aria-label="Que natureza já existe no local?" className={textareaClassName} placeholder="Árvores, vegetação, sombra, fauna e elementos que deseja preservar" maxLength={900} /></Field>
        <Field label="Que casa na árvore você imagina?" error={form.formState.errors.treehouseVision?.message}><Textarea {...form.register("treehouseVision")} aria-label="Que casa na árvore você imagina?" className="min-h-40 rounded-lg bg-background/70 px-4 py-3 shadow-none" placeholder="Uso, ambientes, quantidade de pessoas, sensações, materiais e referências desejadas" maxLength={1500} /></Field>
        {form.formState.errors.root?.message && <p role="alert" className="text-sm text-destructive">{form.formState.errors.root.message}</p>}
        <Button type="submit" size="lg" disabled={form.formState.isSubmitting} className="w-full md:w-fit">{form.formState.isSubmitting ? "Criando sua orientação..." : "Gerar orientação inicial"}{!form.formState.isSubmitting && <Sparkles className="size-4" />}</Button>
      </form></section>
    </div>
    {guidance && <section aria-live="polite" className="mx-auto mt-16 max-w-7xl border-t border-border pt-16 md:mt-24 md:pt-24"><div className="grid gap-10 lg:grid-cols-[0.6fr_1.4fr] lg:gap-20"><div><p className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-primary"><Leaf className="size-4" /> Sua leitura inicial</p><h2 className="mt-5 font-display text-4xl font-bold leading-tight md:text-5xl">Possibilidades para começar a conversar</h2></div><div><div className="whitespace-pre-wrap font-light leading-loose text-foreground/80">{guidance}</div><Link to="/contato" className="mt-10 inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-pine px-8 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground">Levar esta ideia adiante <ArrowRight className="size-4" /></Link></div></div></section>}
    </main>
  </div>;
}

function Field({ label, error, children }: { label: string; error: string | undefined; children: ReactNode }) {
  return <div className="grid gap-2"><Label>{label}</Label>{children}{error && <p role="alert" className="text-xs text-destructive">{error}</p>}</div>;
}