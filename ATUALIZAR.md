# Atualizar o Para Onde Vai (versão 2)

Novidades: funciona sem internet, instala-se como aplicação, agenda da família,
carros (abastecimentos e prazos), orçamentos, pesquisa, exportar para Excel,
lista de compras, metas de poupança e testes escolares (Mais → Testes escolares: visão geral, calendário do mês e filtro por Miguel, Matilde e Matias, com notas e média).

## Como atualizar o site
1. Extraia este ZIP para uma pasta.
2. No GitHub abra o repositório `para-onde-vai` → **Add file → Upload files**.
3. Arraste TODOS os ficheiros da pasta (index.html, config.js, sw.js, manifest.webmanifest e os 4 ficheiros .png). Pode substituir os que já existem.
4. Clique em **Commit changes** e espere 1 a 2 minutos.
5. Abra a aplicação no telemóvel e feche-a e abra-a duas vezes (a segunda vez já carrega a versão nova).

Os dados não se perdem: ficam na base de dados do Firebase. As regras do Firestore não mudam.

## Para abrir sem internet
Abra a aplicação uma vez com internet depois de atualizar. A partir daí abre sem rede, e o que anotar sem rede é enviado sozinho quando houver internet.
Se o telemóvel mostrar «Instalar aplicação» (Android, Chrome), aceite.

## Adicionar ao calendário do telemóvel
Abra um evento da Agenda ou um teste escolar já guardado e toque em «Adicionar ao meu calendário». Escolha quanto tempo antes quer o aviso e abra o ficheiro no Calendário (iPhone) ou no Google Calendar (Android). A repetição semanal vai incluída.

## Versão 4
- Agenda com vistas Dia, Semana e Mês.
- Lista de compras: botão × para remover um item.
- Resumo: gráfico de linhas do mês (Linhas · mês), um traço por pessoa, a subir ao longo dos dias.
- Lembretes dos carros: opção «Repete todos os anos» e botão para adicionar ao calendário.
