# Como Executar com Docker — Controle de Estoque Next.js & Chakra UI

Guia para executar o sistema utilizando Docker Desktop.

---

## Stack e containers

| Container | Função | Porta |
| --- | --- | --- |
| `nginx` | Servidor web e proxy reverso | `8080` |
| `app` | Aplicação Next.js 14 (Standalone Runtime) | Interna (`3000`) |
| `mysql` | Banco de dados MySQL 8.0 | `3308` |
| `phpmyadmin` | Administração do banco | `8085` |

---

## 1) Preparar ambiente

```bash
cp .env.example .env
```

Deixe o bloco `DOCKER` ativo e o bloco `LOCAL` comentado:

```env
# LOCAL
# APP_URL=http://localhost:3000
# NEXT_PUBLIC_APP_URL=http://localhost:3000
# PORT=3000
# HOSTNAME=0.0.0.0
#
# DB_CONNECTION=mysql
# DB_HOST=127.0.0.1
# DB_PORT=3307
# DB_DATABASE=controle_estoque
# DB_USERNAME=root
# DB_PASSWORD=

# DOCKER
APP_URL=http://localhost:8080
NEXT_PUBLIC_APP_URL=http://localhost:8080
PORT=3000
HOSTNAME=0.0.0.0

DB_CONNECTION=mysql
DB_HOST=mysql
DB_PORT=3306
DB_DATABASE=controle_estoque
DB_USERNAME=estoque_user
DB_PASSWORD=estoque_secret
```

> Dentro do Docker, utilizar `DB_HOST=mysql` e `DB_PORT=3306`. A porta `3308` é somente para acesso pelo computador host.

---

## 2) Subir containers

```bash
docker compose up -d --build
docker compose ps
```

---

## 3) Inicialização e aquecimento automático

O `Dockerfile` multi-stage e o entrypoint `docker/scripts/start-app.sh` já executam automaticamente:
- instalação isolada de dependências (`npm ci`);
- compilação otimizada (`npm run build` com `output: "standalone"`);
- aquecimento assíncrono das rotas `/api/health`, `/login` e `/` no boot do container `app`.

---

## 4) Desenvolvimento e reinicialização

Para reiniciar o container da aplicação:

```bash
docker compose restart app
```

---

## 5) Acessos

| Recurso | URL |
| --- | --- |
| Cadastro de Produtos (Home) | http://localhost:8080 |
| Login | http://localhost:8080/login |
| Balanço e Saldo | http://localhost:8080/balance |
| Entradas de Estoque | http://localhost:8080/stockEntries |
| Saídas de Estoque | http://localhost:8080/stockOutputs |
| Healthcheck API | http://localhost:8080/api/health |
| PHPMyAdmin | http://localhost:8085 |

### Credenciais de teste

```txt
Administrador
URL de login: http://localhost:8080/login
E-mail: admin@estoque.com
Senha: Password@123
```

```txt
Gerente de Estoque
URL de login: http://localhost:8080/login
E-mail: gerente@estoque.com
Senha: Password@123
```

```txt
Operador de Almoxarifado
URL de login: http://localhost:8080/login
E-mail: operador@estoque.com
Senha: Password@123
```

### PHPMyAdmin

```txt
URL: http://localhost:8085
Servidor: mysql
Usuário: estoque_user
Senha: estoque_secret
```

---

## 6) Logs e diagnóstico

```bash
docker compose logs -f
docker compose logs -f app
docker compose logs -f nginx
docker compose exec app wget -qO- http://127.0.0.1:3000/api/health
```

---

## 7) Parar ou reconstruir

```bash
docker compose down
docker compose up -d --build
```

Para apagar também os volumes:

```bash
docker compose down -v
```

> O comando `docker compose down -v` pode apagar os dados do banco.
