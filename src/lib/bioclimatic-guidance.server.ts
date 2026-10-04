import { createOpenAI } from "@ai-sdk/openai";
import { streamText } from "ai";
import { createLovableAiGatewayRunIdFetch } from "./ai-gateway-run-id.server.ts";

export type BioclimaticBrief = {
  locationAndClimate: string;
  terrain: string;
  existingNature: string;
  treehouseVision: string;
};

const SYSTEM_PROMPT = `Você é um assistente de estudo preliminar da Casa na Árvore Arquitetura, escritório brasileiro de arquitetura autoral e bioclimática.

Produza orientações iniciais úteis, específicas e prudentes a partir apenas das informações fornecidas. Não invente clima, orientação solar, topografia, espécies, legislação, condições do solo ou dados estruturais. Quando algo estiver ausente, transforme isso em uma pergunta ou verificação necessária.

Responda em português do Brasil, com linguagem acolhedora, clara e profissional. Evite jargão sem explicação. Não use tabelas. Limite-se a aproximadamente 650 palavras.

Use exatamente estas seções, com seus títulos em linhas separadas:
LEITURA INICIAL
IMPLANTAÇÃO, SOL E VENTILAÇÃO
ÁGUA E PAISAGEM
ESTRUTURA E MATERIAIS
PRÓXIMOS PASSOS

Nas quatro seções intermediárias, prefira listas curtas e acionáveis. Diferencie observações baseadas no relato de hipóteses que precisam ser confirmadas. Em PRÓXIMOS PASSOS, inclua perguntas objetivas para uma primeira conversa com a arquiteta.

Finalize sempre com: "Esta é uma orientação preliminar. A viabilidade depende de visita técnica, levantamento do terreno e das árvores, avaliação estrutural e análise da legislação local."`;

export async function generateBioclimaticGuidance(brief: BioclimaticBrief) {
  const apiKey = process.env["LOVABLE_API_KEY"];
  if (!apiKey) return { success: false as const, error: "A orientação por IA ainda não está configurada." };

  const runIdFetch = createLovableAiGatewayRunIdFetch();
  const provider = createOpenAI({
    baseURL: "https://ai.gateway.lovable.dev/v1",
    apiKey,
    headers: { "Lovable-API-Key": apiKey, "X-Lovable-AIG-SDK": "vercel-ai-sdk" },
    fetch: runIdFetch.fetch,
  });
  const prompt = `Crie uma orientação inicial para este briefing:\n\nLOCALIZAÇÃO E CLIMA PERCEBIDO\n${brief.locationAndClimate}\n\nTERRENO\n${brief.terrain}\n\nNATUREZA EXISTENTE\n${brief.existingNature}\n\nCASA NA ÁRVORE IMAGINADA\n${brief.treehouseVision}`;

  try {
    const result = streamText({
      model: provider.responses("openai/gpt-6-astra"),
      system: SYSTEM_PROMPT,
      prompt,
      maxRetries: 0,
      providerOptions: { openai: { forceReasoning: true, reasoningEffort: "medium", reasoningSummary: "auto", store: false, include: ["reasoning.encrypted_content"] } },
    });
    const text = (await result.text).trim();
    return text ? { success: true as const, guidance: text } : { success: false as const, error: "A orientação não pôde ser concluída. Tente novamente." };
  } catch (error) {
    console.error("Bioclimatic guidance generation failed", error);
    return { success: false as const, error: getSafeGatewayMessage(error) };
  }
}

function getSafeGatewayMessage(error: unknown): string {
  if (!error || typeof error !== "object") return "Não foi possível gerar a orientação agora.";
  const candidate = error as { statusCode?: unknown; responseBody?: unknown };
  if (candidate.statusCode === 402) return readGatewayMessage(candidate.responseBody) ?? "Os créditos de IA acabaram. Adicione créditos para continuar.";
  if (candidate.statusCode === 403) return readGatewayMessage(candidate.responseBody) ?? "A geração por IA está indisponível para este espaço de trabalho.";
  if (candidate.statusCode === 429) return "Muitas orientações foram solicitadas agora. Aguarde um pouco e tente novamente.";
  if (candidate.statusCode === 400) return readGatewayMessage(candidate.responseBody) ?? "Não foi possível processar esta descrição. Revise os campos e tente novamente.";
  return "Não foi possível gerar a orientação agora. Seu texto foi mantido para você tentar novamente.";
}

function readGatewayMessage(body: unknown): string | null {
  if (typeof body !== "string") return null;
  try {
    const parsed = JSON.parse(body) as { message?: unknown; error?: { message?: unknown } };
    const message = typeof parsed.message === "string" ? parsed.message : parsed.error?.message;
    return typeof message === "string" && message.length <= 300 ? message : null;
  } catch { return null; }
}