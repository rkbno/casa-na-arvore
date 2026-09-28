CREATE TABLE public.quote_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  email TEXT NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
  phone TEXT CHECK (phone IS NULL OR char_length(phone) <= 30),
  project_type TEXT NOT NULL CHECK (project_type IN ('residencial', 'comercial', 'institucional', 'reforma', 'bioconstrucao', 'outro')),
  location TEXT NOT NULL CHECK (char_length(location) BETWEEN 2 AND 160),
  desired_timeline TEXT NOT NULL CHECK (desired_timeline IN ('ate-3-meses', '3-a-6-meses', '6-a-12-meses', 'mais-de-12-meses', 'a-definir')),
  details TEXT CHECK (details IS NULL OR char_length(details) <= 1500),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT ALL ON public.quote_requests TO service_role;

ALTER TABLE public.quote_requests ENABLE ROW LEVEL SECURITY;

COMMENT ON TABLE public.quote_requests IS 'Solicitações de orçamento enviadas pelo formulário público; acesso restrito ao servidor.';