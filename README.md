# Lobão Podcast — versão online com Supabase

O site continua hospedado no GitHub Pages, mas agora os dados do podcast são lidos e alterados no Supabase.

## Arquivos
- `index.html` — página inicial / próximos jogos
- `zerados.html` — jogos zerados e reviews
- `sobre.html` — sobre o podcast e integrantes
- `admin.html` — painel administrativo com login
- `data.js` — dados de exemplo usados apenas para a primeira importação/fallback
- `supabase-client.js` — configuração pública do Supabase
- `supabase-setup.sql` — grants extras, somente se o projeto retornar erro de permissão
- `logo.png` — logo

## Primeiro uso
1. Faça upload de todos os arquivos para o repositório do GitHub Pages.
2. Abra `admin.html` no site.
3. Entre com o usuário criado no Supabase.
4. No painel, abra Visão geral e clique em **Importar dados iniciais do data.js** para levar os dados atuais para o banco.
5. Depois disso, as alterações feitas no painel passam a aparecer para todos os visitantes.

## Backup
O painel permite exportar os dados atuais do Supabase para JSON e importar backups antigos. A importação usa upsert e não apaga jogos que não estejam no arquivo.

## Segurança
A chave incluída em `supabase-client.js` é a Publishable Key, destinada ao uso no frontend. Nunca coloque `service_role`, secret key ou senha do banco no GitHub.
