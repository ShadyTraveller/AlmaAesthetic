-- Run in Supabase SQL editor (once per project). Then set Vercel env:
-- SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY (service role — server only, never expose to the client).

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  phone text not null,
  email text not null,
  treatment_type text not null,
  add_on_services text,
  preferred_date text,
  preferred_time text,
  region text
);

alter table public.bookings enable row level security;

-- No public policies: only the Vercel API (service role) inserts.

create index if not exists bookings_created_at_idx on public.bookings (created_at desc);
