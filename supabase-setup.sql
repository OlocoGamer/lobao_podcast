-- Rode este bloco somente se o site retornar "permission denied" ao consultar ou salvar.
-- As políticas RLS continuam controlando o que cada usuário pode fazer.
grant select on public.podcast, public.hosts, public.games, public.reviews to anon;
grant select, insert, update, delete on public.podcast, public.hosts, public.games, public.reviews to authenticated;
grant usage, select on sequence public.podcast_id_seq to anon, authenticated;
grant usage, select on sequence public.reviews_id_seq to anon, authenticated;
