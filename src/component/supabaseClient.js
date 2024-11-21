import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://helldffuftqtbeccvonj.supabase.co";
const supabaseAnonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImhlbGxkZmZ1ZnRxdGJlY2N2b25qIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzIwMjI5MTQsImV4cCI6MjA0NzU5ODkxNH0._a_2GtvaV-XKCjYzRinZEhwx6EY8bX3qBZYOXr5RyQc";

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
