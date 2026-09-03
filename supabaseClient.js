import { createClient } from "@supabase/supabase-js";

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!url || !anonKey) {
  // Fails loudly in the browser console instead of silently breaking every
  // Supabase call — makes a missing .env / Vercel env var obvious right away.
  console.error(
    "Faltam as variáveis VITE_SUPABASE_URL e/ou VITE_SUPABASE_ANON_KEY. " +
      "Configure-as no arquivo .env (local) ou nas Environment Variables do projeto na Vercel."
  );
}

export const supabase = createClient(url, anonKey);
