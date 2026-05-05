# LB Consultoria de Carreira - Landing Page

Site institucional da LB Consultoria de Carreira. Landing page responsiva com apresentação de serviços, proposta de valor e call-to-action para contato.

## Visão Geral

Landing page premium e editorial para consultoria de carreira. Apresenta a proposta de valor, serviços oferecidos, metodologia e chamada para ação de contato via e-mail.

**Stack:** React 19 + Tailwind CSS 4 + Express 4 + tRPC 11 + Manus OAuth

## Estrutura do Projeto

```
client/
  src/
    components/     # Componentes da landing (Header, Hero, Services, etc.)
    pages/          # Páginas (Home)
    index.css       # Estilos globais
    main.tsx        # Ponto de entrada React
  index.html        # Template HTML
  public/           # Arquivos estáticos (favicon, robots.txt)

server/
  _core/            # Framework (OAuth, context, tRPC setup)
  routers.ts        # Procedures tRPC
  db.ts             # Query helpers

drizzle/
  schema.ts         # Schema do banco de dados

shared/             # Tipos e constantes compartilhadas
```

## Instalação

```bash
pnpm install
```

## Desenvolvimento

```bash
pnpm dev
```

Acessa em `http://localhost:3000`

## Build

```bash
pnpm build
```

Gera `dist/` com assets estáticos e servidor Node.js.

## Testes

```bash
pnpm test
```

Executa testes vitest.

## Componentes Principais

- **Header:** Navegação fixa com logo e menu responsivo
- **Hero:** Seção principal com proposta de valor
- **Problem:** Descrição dos desafios resolvidos
- **HowItWorks:** Explicação da metodologia
- **Services:** Serviços oferecidos
- **ForWhom:** Público-alvo
- **Differentiator:** Diferenciais
- **CtaFinal:** Seção de contato com CTA
- **Footer:** Rodapé com informações

## Paleta de Cores (Brandbook Oficial)

- **Preto Carvão:** #0E0E10
- **Off-White:** #F5F1EA
- **Papel Secundário:** #EFEAE0
- **Dourado:** #C9A961
- **Dourado Profundo:** #A88843
- **Cinza de Apoio:** #5C5C62

## Tipografia

- **Serif:** Playfair Display (títulos)
- **Sans-serif:** Inter (corpo)

## Contato

Felipe Leone · Fundador
[www.lbconsultoriadigital.com](https://www.lbconsultoriadigital.com)

---

**Última atualização:** Maio 2026
