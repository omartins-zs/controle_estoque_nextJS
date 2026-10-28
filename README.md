<div align="center">

<h1 align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" width="36" height="36" alt="Next.js" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" width="36" height="36" alt="React" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" width="36" height="36" alt="TypeScript" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/chakraui/chakraui-original.svg" width="36" height="36" alt="Chakra UI" />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" width="36" height="36" alt="Docker" />
  <br />
  Controle de Estoque — Next.js & Chakra UI
</h1>

<p align="center">
  <img src="https://img.shields.io/badge/Next.js-14.1.4-000000?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js 14" />
  <img src="https://img.shields.io/badge/React-18.0+-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 18" />
  <img src="https://img.shields.io/badge/TypeScript-5.0+-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript 5" />
  <img src="https://img.shields.io/badge/Chakra_UI-2.8.2-319795?style=for-the-badge&logo=chakraui&logoColor=white" alt="Chakra UI" />
  <img src="https://img.shields.io/badge/Docker-Ready-2496ED?style=for-the-badge&logo=docker&logoColor=white" alt="Docker Ready" />
</p>

</div>

---

## 📝 Descrição

Sistema web moderno e intuitivo para gestão e controle de estoque, inventário, movimentações físicas de entrada e saída, apuração de saldo e balanço de produtos em tempo real, desenvolvido com **Next.js 14 (App Router)**, **TypeScript**, **Chakra UI**, controle de sessão e ambiente containerizado com **Docker**.

<cite>Plataforma para gestão de estoque e rastreabilidade de entradas, saídas e cálculo automático de saldo de mercadorias.</cite>

---

## 🚦 Status do Projeto

<h4 align="center"> ✅ Controle de Estoque Next.js 🚀 Concluído ⚙️ </h4>

---

## 🏗️ Arquitetura do Projeto

- **Tipo:** 🧱 **Monólito Fullstack (Next.js App Router)**
- **Explicação:** A aplicação centraliza em uma estrutura unificada a interface reativa baseada em **Chakra UI** e **Framer Motion**, rotas de API para autenticação e verificação de saúde (`/api/auth/*` e `/api/health`), middleware de proteção de rotas (`src/middleware.ts`), persistência e cálculo em tempo real de saldo físico, além de infraestrutura com **Docker Compose**, **Nginx** (proxy reverso com Gzip e cache estático), **MySQL 8.0** e **PHPMyAdmin**.

---

## 🔥 Pré-requisitos

- **Node.js 20.0+** (compatível com **Node.js 18.17+**)
- **NPM 10.0+** (ou **9.0+**)
- **TypeScript 5.0+**
- **Docker 24.0+** e **Docker Compose v2+** (opcional para execução em containers)

---

## 🚀 Tecnologias Utilizadas

- **Linguagem:** TypeScript `5.x` / JavaScript (ESNext)
- **Framework Principal:** Next.js `14.1.4` (App Router & Standalone Output)
- **Biblioteca de UI:** React `18.x`, `@chakra-ui/react` `2.8.2`, `@emotion/react`, `@emotion/styled` e `framer-motion`
- **Ícones Vetoriais:** `react-icons` `5.0.1` (Feather Icons)
- **Fontes Otimizadas:** Merriweather, Poppins e Nunito (`next/font/google`)
- **Infraestrutura & DevOps:** Docker (Multi-stage `node:20-alpine`), Nginx `1.27-alpine`, MySQL `8.0` e PHPMyAdmin

---

## 🔨 Funcionalidades

- 📦 **Cadastro e Gestão de Produtos (`/`):** Adição de novos itens com validação anti-duplicação, listagem tabulada e exclusão segura (com bloqueio para itens com movimentações ativas).
- 📥 **Lançamento de Entradas (`/stockEntries`):** Registro de novas mercadorias no estoque informando produto e quantidade recebida.
- 📤 **Lançamento de Saídas (`/stockOutputs`):** Baixa de produtos do inventário com histórico de movimentações.
- ⚖️ **Apuração de Balanço e Saldo (`/balance`):** Cálculo automatizado em tempo real do saldo disponível (`Entradas - Saídas`), com filtro de busca por produto específico.
- 🔐 **Autenticação e Sessão em 1 Clique (`/login`):**
  - Tela de login com preenchimento instantâneo de **3 perfis de demonstração** (*Administrador*, *Gerente de Estoque*, *Operador de Almoxarifado*).
  - Emissão de cookie de sessão protegido e sincronização com `localStorage`.
- 👤 **Header Inteligente com Perfil do Usuário:** Menu suspenso com dados do operador logado, atalho para troca de perfil e botão de encerramento de sessão (*Logout*).
- 📱 **Navegação Responsiva:** Sidebar fixa em desktop com realce de rota ativa (`usePathname`) e Drawer retrátil para dispositivos móveis.

---

## 🎯 Sobre o Projeto

Sistema desenvolvido demonstrando boas práticas de desenvolvimento, arquitetura limpa e organização de código, com foco em escalabilidade e manutenção.

---

## 📸 Preview do Projeto

🚧 Preview não disponível no projeto.

---

## 📁 Documentação do Projeto

O repositório conta com documentação completa de execução e testes na pasta [`docs/`](./docs):

- 📘 **[`docs/COMO_EXECUTAR.md`](./docs/COMO_EXECUTAR.md):** Guia rápido de decisão entre ambiente Local e Docker, tabela de URLs e acessos demo.
- 📗 **[`docs/COMO_EXECUTAR_LOCAL.md`](./docs/COMO_EXECUTAR_LOCAL.md):** Passo a passo detalhado para execução local com Node.js/Laragon.
- 🐳 **[`docs/COMO_EXECUTAR_DOCKER.md`](./docs/COMO_EXECUTAR_DOCKER.md):** Guia completo da stack containerizada (`nginx`, `app`, `mysql`, `phpmyadmin`).
- 🔐 **[`docs/ACESSOS_TESTES.md`](./docs/ACESSOS_TESTES.md):** Credenciais de teste dos perfis *Administrador*, *Gerente de Estoque* e *Operador de Almoxarifado*, rotas e validação de saúde.

### 🔌 Rotas de API Internas

| Método | Endpoint | Descrição |
| :---: | :--- | :--- |
| `GET` | `/api/health` | Verificação de integridade (Healthcheck) do container |
| `POST` | `/api/auth/login` | Autenticação e emissão do cookie de sessão `estoque_session` |
| `POST` | `/api/auth/logout` | Encerramento da sessão ativa |
| `GET` | `/api/auth/session` | Retorno do perfil autenticado |

---

## 💻 Comandos

### Execução Local (Node.js):

```bash
cp .env.example .env
npm install
npm run dev
```

Build de produção local:

```bash
npm run build
npm run start
```

### Execução com Docker:

```bash
cp .env.example .env
docker compose up -d --build
```

> ⚠️ Estes são comandos básicos. Verifique no projeto arquivos como:
> README.md, COMO_EXECUTAR.md ou docs/ para instruções completas.

---

## 🧱 Estrutura do Projeto

```text
controle_estoque_nextJS/
├── docker/
│   ├── nginx/
│   │   └── default.conf          # Nginx reverso com resolver dinâmico e gzip
│   └── scripts/
│       └── start-app.sh          # Script de bootstrap e pré-aquecimento de rotas
├── docs/
│   ├── ACESSOS_TESTES.md         # Credenciais e perfis de teste
│   ├── COMO_EXECUTAR.md          # Índice geral de execução
│   ├── COMO_EXECUTAR_DOCKER.md   # Guia de execução via Docker Compose
│   └── COMO_EXECUTAR_LOCAL.md    # Guia de execução local
├── src/
│   ├── app/
│   │   ├── api/                  # Rotas de API (auth e healthcheck)
│   │   ├── balance/              # Página de Balanço de Estoque
│   │   ├── login/                # Página de login com perfis demo
│   │   ├── stockEntries/         # Página de Entradas de Estoque
│   │   ├── stockOutputs/         # Página de Saídas de Estoque
│   │   ├── layout.tsx            # Layout raiz com ChakraProvider e SidebarProvider
│   │   └── page.tsx              # Página inicial (Cadastro de Produtos)
│   ├── components/
│   │   ├── Header.tsx            # Cabeçalho com perfil logado e menu dropdown
│   │   ├── Sidebar.tsx           # Sidebar adaptativa (Drawer mobile / fixo desktop)
│   │   └── SidebarNav.tsx        # Navegação com destaque de rota ativa
│   ├── contexts/
│   │   └── SidebarContext.tsx    # Contexto de controle do Drawer mobile
│   ├── lib/
│   │   └── auth.ts               # Autenticação e perfis de demonstração
│   ├── types/                    # Definições de tipos TypeScript
│   └── utils/                    # Funções utilitárias de estoque
├── .dockerignore                 # Exclusões de contexto do Docker
├── .env.example                  # Template com blocos LOCAL e DOCKER
├── Dockerfile                    # Multi-stage build Node 20 Alpine Standalone
├── docker-compose.yml            # Orquestração app, nginx, mysql e phpmyadmin
├── next.config.mjs               # Configuração standalone
└── tsconfig.json                 # Configuração do TypeScript
```

---

## 📝 Melhorias Futuras

- [ ] Integração com Prisma ORM e banco MySQL para persistência permanente além do storage local
- [ ] Leitor de código de barras / QR Code via câmera para conferência rápida de mercadorias
- [ ] Exportação de relatórios de balanço e inventário em PDF e planilhas Excel

---

## 📄 Finalização

<div align="center">

Feito com ❤️ por Gabriel Martins 🚀

</div>
