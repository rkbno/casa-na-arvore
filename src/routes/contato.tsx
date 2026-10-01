import { zodResolver } from "@hookform/resolvers/zod";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useServerFn } from "@tanstack/react-start";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  quoteRequestSchema,
  submitQuoteRequest,
  type QuoteRequestInput,
} from "@/lib/quote-request.functions";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Solicite um orçamento — Casa na Árvore" },
      {
        name: "description",
        content: "Conte sobre seu projeto de arquitetura, localização e prazo desejado.",
      },
      { property: "og:title", content: "Solicite um orçamento — Casa na Árvore" },
      {
        property: "og:description",
        content: "Envie as informações iniciais do seu projeto para a Casa na Árvore Arquitetura.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const fieldClassName = "h-12 rounded-lg bg-background/70 px-4 shadow-none";

const WHATSAPP_NUMBER = "5527992995445";

const projectTypeLabels: Record<QuoteRequestInput["projectType"], string> = {
  residencial: "Residencial",
  comercial: "Comercial",
  institucional: "Institucional",
  reforma: "Reforma",
  bioconstrucao: "Bioconstrução",
  outro: "Outro",
};

const timelineLabels: Record<QuoteRequestInput["desiredTimeline"], string> = {
  "ate-3-meses": "Até 3 meses",
  "3-a-6-meses": "De 3 a 6 meses",
  "6-a-12-meses": "De 6 a 12 meses",
  "mais-de-12-meses": "Mais de 12 meses",
  "a-definir": "A definir",
};

function buildWhatsAppUrl(values: QuoteRequestInput): string {
  const lines = [
    "Olá! Gostaria de solicitar um orçamento.",
    "",
    `Nome: ${values.name}`,
    `E-mail: ${values.email}`,
    values.phone ? `Telefone: ${values.phone}` : null,
    `Tipo de projeto: ${projectTypeLabels[values.projectType]}`,
    `Localização: ${values.location}`,
    `Prazo desejado: ${timelineLabels[values.desiredTimeline]}`,
    values.details ? `Detalhes: ${values.details}` : null,
  ].filter((line): line is string => line !== null);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(lines.join("\n"))}`;
}

function ContactPage() {
  const [sent, setSent] = useState(false);
  const [whatsAppUrl, setWhatsAppUrl] = useState<string | null>(null);
  const sendQuoteRequest = useServerFn(submitQuoteRequest);
  const form = useForm<QuoteRequestInput>({
    resolver: zodResolver(quoteRequestSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      location: "",
      details: "",
      website: "",
    },
  });

  const onSubmit = form.handleSubmit(async (values) => {
    try {
      await sendQuoteRequest({ data: values });
      const url = buildWhatsAppUrl(values);
      setWhatsAppUrl(url);
      window.open(url, "_blank", "noopener,noreferrer");
      form.reset();
      setSent(true);
    } catch {
      form.setError("root", { message: "Não foi possível enviar agora. Tente novamente." });
    }
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-pine px-6 py-8 text-primary-foreground md:px-12">
        <div className="mx-auto max-w-7xl">
          <Link to="/" className="inline-flex items-center gap-2 text-sm">
            <ArrowLeft className="size-4" /> Casa na Árvore
          </Link>
        </div>
      </header>

      <main className="px-6 py-16 md:px-12 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
              Vamos conversar
            </p>
            <h1 className="mt-5 font-display text-5xl font-extrabold leading-[0.95] md:text-7xl">
              Conte sobre seu projeto
            </h1>
            <p className="mt-7 max-w-md font-light leading-relaxed text-foreground/70">
              Compartilhe as informações iniciais. Elas ajudam a compreender o contexto e preparar
              uma primeira conversa mais produtiva.
            </p>
            <div className="mt-12 border-l-2 border-clay pl-6">
              <p className="font-display text-2xl font-bold">Cada projeto começa pela escuta.</p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/65">
                Após o envio, a equipe poderá avaliar a solicitação e entrar em contato pelos dados
                informados.
              </p>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-card p-6 shadow-soft md:p-10">
            {sent ? (
              <div className="flex min-h-[520px] flex-col items-start justify-center">
                <CheckCircle2 className="size-12 text-primary" />
                <h2 className="mt-6 font-display text-4xl font-bold">Solicitação enviada</h2>
                <p className="mt-4 max-w-md leading-relaxed text-foreground/70">
                  Obrigado por compartilhar seu projeto. Abrimos o WhatsApp com sua mensagem pronta
                  — é só confirmar o envio por lá para falar diretamente com a equipe.
                </p>
                {whatsAppUrl && (
                  <Button className="mt-8" asChild>
                    <a href={whatsAppUrl} target="_blank" rel="noopener noreferrer">
                      Continuar no WhatsApp
                    </a>
                  </Button>
                )}
                <Button
                  variant="outline"
                  className="mt-3"
                  onClick={() => {
                    setWhatsAppUrl(null);
                    setSent(false);
                  }}
                >
                  Enviar outra solicitação
                </Button>
              </div>
            ) : (
              <form onSubmit={onSubmit} className="grid gap-6" noValidate>
                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Nome" error={form.formState.errors.name?.message}>
                    <Input
                      {...form.register("name")}
                      aria-label="Nome"
                      className={fieldClassName}
                      autoComplete="name"
                      maxLength={100}
                    />
                  </Field>
                  <Field label="E-mail" error={form.formState.errors.email?.message}>
                    <Input
                      {...form.register("email")}
                      aria-label="E-mail"
                      type="email"
                      className={fieldClassName}
                      autoComplete="email"
                      maxLength={255}
                    />
                  </Field>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Telefone (opcional)" error={form.formState.errors.phone?.message}>
                    <Input
                      {...form.register("phone")}
                      aria-label="Telefone (opcional)"
                      type="tel"
                      className={fieldClassName}
                      autoComplete="tel"
                      maxLength={30}
                    />
                  </Field>
                  <Field label="Tipo de projeto" error={form.formState.errors.projectType?.message}>
                    <Select
                      value={form.watch("projectType")}
                      onValueChange={(value: QuoteRequestInput["projectType"]) =>
                        form.setValue("projectType", value, { shouldValidate: true })
                      }
                    >
                      <SelectTrigger className={fieldClassName} aria-label="Tipo de projeto">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="residencial">Residencial</SelectItem>
                        <SelectItem value="comercial">Comercial</SelectItem>
                        <SelectItem value="institucional">Institucional</SelectItem>
                        <SelectItem value="reforma">Reforma</SelectItem>
                        <SelectItem value="bioconstrucao">Bioconstrução</SelectItem>
                        <SelectItem value="outro">Outro</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <Field label="Localização" error={form.formState.errors.location?.message}>
                    <Input
                      {...form.register("location")}
                      aria-label="Localização"
                      className={fieldClassName}
                      placeholder="Cidade e estado"
                      maxLength={160}
                    />
                  </Field>
                  <Field
                    label="Prazo desejado"
                    error={form.formState.errors.desiredTimeline?.message}
                  >
                    <Select
                      value={form.watch("desiredTimeline")}
                      onValueChange={(value: QuoteRequestInput["desiredTimeline"]) =>
                        form.setValue("desiredTimeline", value, { shouldValidate: true })
                      }
                    >
                      <SelectTrigger className={fieldClassName} aria-label="Prazo desejado">
                        <SelectValue placeholder="Selecione" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ate-3-meses">Até 3 meses</SelectItem>
                        <SelectItem value="3-a-6-meses">De 3 a 6 meses</SelectItem>
                        <SelectItem value="6-a-12-meses">De 6 a 12 meses</SelectItem>
                        <SelectItem value="mais-de-12-meses">Mais de 12 meses</SelectItem>
                        <SelectItem value="a-definir">A definir</SelectItem>
                      </SelectContent>
                    </Select>
                  </Field>
                </div>

                <Field label="Conte um pouco mais (opcional)" error={form.formState.errors.details?.message}>
                  <Textarea
                    {...form.register("details")}
                    aria-label="Conte um pouco mais (opcional)"
                    className="min-h-32 rounded-lg bg-background/70 px-4 py-3 shadow-none"
                    maxLength={1500}
                    placeholder="Área aproximada, necessidades e outras informações importantes"
                  />
                </Field>

                <div className="hidden" aria-hidden="true">
                  <Label htmlFor="website">Site</Label>
                  <Input id="website" tabIndex={-1} autoComplete="off" {...form.register("website")} />
                </div>

                {form.formState.errors.root?.message && (
                  <p role="alert" className="text-sm text-destructive">
                    {form.formState.errors.root.message}
                  </p>
                )}

                <Button type="submit" size="lg" disabled={form.formState.isSubmitting} className="mt-2 w-full md:w-fit">
                  {form.formState.isSubmitting ? "Enviando..." : "Solicitar orçamento"}
                  {!form.formState.isSubmitting && <ArrowRight className="size-4" />}
                </Button>
              </form>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error: string | undefined;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label>{label}</Label>
      {children}
      {error && (
        <p role="alert" className="text-xs text-destructive">
          {error}
        </p>
      )}
    </div>
  );
}