import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const bioclimaticBriefSchema = z.object({
  locationAndClimate: z.string().trim().min(10, "Conte onde fica o terreno e como percebe o clima.").max(700),
  terrain: z.string().trim().min(20, "Descreva um pouco mais o terreno.").max(1200),
  existingNature: z.string().trim().min(10, "Conte sobre as árvores e a vegetação existentes.").max(900),
  treehouseVision: z.string().trim().min(20, "Conte um pouco mais sobre a casa que imagina.").max(1500),
});
export type BioclimaticBriefInput = z.infer<typeof bioclimaticBriefSchema>;

export const requestBioclimaticGuidance = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => bioclimaticBriefSchema.parse(input))
  .handler(async ({ data }) => {
    const { generateBioclimaticGuidance } = await import("./bioclimatic-guidance.server.ts");
    return generateBioclimaticGuidance(data);
  });