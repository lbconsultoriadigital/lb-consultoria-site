# LB Consultoria de Carreira — Publicação

## Site oficial
https://www.lbconsultoriadigital.com

## Contato
E-mail: contato@lbconsultoriadigital.com
WhatsApp: +55 11 92180-1361

## Estrutura publicada
index.html
logos/
downloads/
README_PUBLICAR.md

No projeto Vite atual, a origem do build é:

- `client/index.html`
- `client/public/logos/`
- `client/public/downloads/`

No deploy, esses arquivos saem em `dist/public/` como `index.html`, `logos/` e `downloads/`.

## Material gratuito
Arquivo:
downloads/checklist-7-segundos.pdf

## Captação de leads
Configurar a variável de ambiente:

LEADS_WEBHOOK_URL

Ela deve apontar para um endpoint de captação real, como:
- Formspree;
- Make;
- Zapier;
- Brevo;
- Mailchimp;
- Google Sheets via webhook;
- endpoint próprio.

Payload enviado:

```json
{
  "name": "...",
  "email": "...",
  "source": "landing-checklist-7-segundos",
  "createdAt": "ISO_DATE",
  "pageUrl": "URL_ATUAL",
  "userAgent": "USER_AGENT"
}
```

O frontend chama `/api/lead`. A rota repassa o lead para `LEADS_WEBHOOK_URL` sem expor a URL do webhook no HTML. Em produção, sem essa variável, o download não deve iniciar. Em ambiente local, a página permite testar o download e registra aviso no console.

## Validação antes de publicar
- Testar desktop.
- Testar mobile.
- Testar formulário.
- Testar download do checklist.
- Testar links de WhatsApp.
- Verificar console sem erros críticos.
- Confirmar que não existem caminhos locais.
