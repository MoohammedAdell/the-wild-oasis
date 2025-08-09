import { createClient } from "@supabase/supabase-js";
const supabaseUrl = "https://qsnxrxhnyfeidkoflmun.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFzbnhyeGhueWZlaWRrb2ZsbXVuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQ3MjkzMDksImV4cCI6MjA3MDMwNTMwOX0.F3HRaYZlOh-GFzsjXQWFBFfeihtPbkTHKyAArJXx6xA";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
