import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ffqfiohvsogchiafursz.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmcWZpb2h2c29nY2hpYWZ1cnN6Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjk4NTY4NDgsImV4cCI6MjA0NTQzMjg0OH0.Uj7wNcsoHYYtIn395m3jwd4VVtSGHYkttOQq9dkpCd8";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
