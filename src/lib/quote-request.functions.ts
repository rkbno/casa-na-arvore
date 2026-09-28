import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const quoteRequestSchema = z.object({
  name: z.string().trim().min(2, "Informe seu nome.").max(100),
  email: z.string().trim().email("Informe um e-mail válido.").max(255),
  phone: z.string().trim().max(30).optional(),
  projectType: z.enum([
    "residencial",
    "comercial",
    "institucional",
    "reforma",
    "bioconstrucao",
    "outro",
  ]),
  location: z.string().trim().min(2, "Informe a localização do projeto.").max(160),
  desiredTimeline: z.enum([
    "ate-3-meses",
    "3-a-6-meses",
    "6-a-12-meses",
    "mais-de-12-meses",
    "a-definir",
  ]),
  details: z.string().trim().max(1500).optional(),
  website: z.string().max(0).optional(),
});

export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;

export const submitQuoteRequest = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => quoteRequestSchema.parse(input))
  .handler(async ({ data }) => {
    if (data.website) {
      return { success: true };
    }

    const { supabaseAdmin } = await import("@/integrations/supabase/client.server");
    const { error } = await supabaseAdmin.from("quote_requests").insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      project_type: data.projectType,
      location: data.location,
      desired_timeline: data.desiredTimeline,
      details: data.details || null,
    });

    if (error) {
      throw new Error("Não foi possível enviar sua solicitação agora.");
    }

    return { success: true };
  });