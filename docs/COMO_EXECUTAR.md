# Como Executar — Controle de Estoque Next.js & Chakra UI

Escolha **um** guia conforme seu ambiente:

| Guia | Quando usar | Requisitos no PC |
| --- | --- | --- |
| **[COMO_EXECUTAR_DOCKER.md](COMO_EXECUTAR_DOCKER.md)** | Executar em qualquer máquina com containers | Docker Desktop |
| **[COMO_EXECUTAR_LOCAL.md](COMO_EXECUTAR_LOCAL.md)** | Desenvolver localmente com Node.js ou Laragon | Node.js, NPM e MySQL (opcional) |
| **[ACESSOS_TESTES.md](ACESSOS_TESTES.md)** | Logins, URLs e fluxos de teste | Navegador Web |

---

## Início rápido

### Local — Node.js / Laragon

Ative o bloco `LOCAL` no `.env` e execute:

```bash
cp .env.example .env
npm install
npm run dev
```

Para gerar o build de produção localmente:

```bash
npm run build
npm run start
```

Aplicação:

http://localhost:3000

### Docker

Ative o bloco `DOCKER` no `.env` e execute:

```bash
cp .env.example .env
docker compose up -d --build
```

Aplicação:

http://localhost:8080

---

## Logins demo

| Perfil | E-mail | Senha |
| --- | --- | --- |
| Administrador | `admin@estoque.com` | `Password@123` |
| Gerente de Estoque | `gerente@estoque.com` | `Password@123` |
| Operador de Almoxarifado | `operador@estoque.com` | `Password@123` |

---

## URLs principais

| Área | Local | Docker |
| --- | --- | --- |
| Cadastro de Produtos (Home) | http://localhost:3000 | http://localhost:8080 |
| Login | http://localhost:3000/login | http://localhost:8080/login |
| Balanço e Saldo | http://localhost:3000/balance | http://localhost:8080/balance |
| Entradas de Estoque | http://localhost:3000/stockEntries | http://localhost:8080/stockEntries |
| Saídas de Estoque | http://localhost:3000/stockOutputs | http://localhost:8080/stockOutputs |
| Healthcheck API | http://localhost:3000/api/health | http://localhost:8080/api/health |
| PHPMyAdmin | — | http://localhost:8085 |

---

## Outros documentos

- [COMO_EXECUTAR_LOCAL.md](COMO_EXECUTAR_LOCAL.md) — Guia detalhado para execução local
- [COMO_EXECUTAR_DOCKER.md](COMO_EXECUTAR_DOCKER.md) — Guia detalhado para execução com Docker
- [ACESSOS_TESTES.md](ACESSOS_TESTES.md) — Credenciais e fluxos de teste
