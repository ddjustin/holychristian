import { supabase } from "@/lib/supabase";

export async function saveUser(name: string) {
  const { data, error } = await supabase
    .from("users")
    .insert({ name })
    .select()
    .single();

  if (error) return new Error("유저 생성 실패");
  return true;
}
