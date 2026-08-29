import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error("Missing Supabase configuration in .env.local");
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const verifyAdminPin = async (pin: string): Promise<boolean> => {
  try {
    const { data, error } = await supabase
      .from("admin_settings")
      .select("pin, active")
      .eq("active", true)
      .single();

    if (error) {
      console.error("Error fetching admin PIN:", error);
      return false;
    }

    return data?.pin === pin;
  } catch (error) {
    console.error("Unexpected error verifying PIN:", error);
    return false;
  }
};
