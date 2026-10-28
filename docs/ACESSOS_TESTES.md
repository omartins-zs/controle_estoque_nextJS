# 🔐 Acessos e Dados de Teste

Utilize as credenciais abaixo para testar as diferentes visões e permissões do sistema. Todos os usuários e registros foram gerados automaticamente via *Seeders* (`src/lib/auth.ts`).

## 1. Acesso ao Sistema (Usuários de Teste)

| Perfil | E-mail / Usuário | Senha | Permissão / Detalhes |
| --- | --- | --- | --- |
| Administrador | `admin@estoque.com` | `Password@123` | Acesso total ao catálogo de produtos, entradas, saídas, balanço e relatórios. |
| Gerente de Estoque | `gerente@estoque.com` | `Password@123` | Supervisão do inventário, controle de ponto de reposição e autorização de baixas. |
| Operador de Almoxarifado | `operador@estoque.com` | `Password@123` | Lançamento de notas de entrada, conferência física e registro de saídas. |

## 2. URLs Principais

| Ambiente | Aplicação (Home) | Login / Painel |
| --- | --- | --- |
| **Docker** | `http://localhost:8080` | `http://localhost:8080/login` |
| **Local** (`npm run dev`) | `http://localhost:3000` | `http://localhost:3000/login` |

## 3. Vitrine Pública / Páginas para Clientes

| Item | Link (Exemplo Docker) |
| --- | --- |
| Cadastro de Produtos (Home) | `http://localhost:8080/` |
| Tela de Login e Seleção de Perfis | `http://localhost:8080/login` |
| Balanço e Saldo de Estoque | `http://localhost:8080/balance` |
| Registro de Entradas | `http://localhost:8080/stockEntries` |
| Registro de Saídas | `http://localhost:8080/stockOutputs` |
| Healthcheck da Aplicação (JSON) | `http://localhost:8080/api/health` |

## 4. Validação do Acesso

Validação da saúde da aplicação no ambiente de desenvolvimento:

| Verificação | Resultado Esperado |
| --- | --- |
| Containers (`mysql`, `app`, `nginx`, `phpmyadmin`) | Saudáveis / Rodando |
| Tela de login principal | HTTP `200` |
| Login com usuário de teste gerado pelo seeder | Redirecionamento para Dashboard/Painel |

## 5. Carregar Dados de Teste

Caso o ambiente precise ser reiniciado ou reconstruído do zero com todos os dados e credenciais iniciais da plataforma, basta rodar os comandos abaixo.

**Com Docker:**
```bash
docker compose down -v
docker compose up -d --build
```

**Rodando Localmente (Sem Docker):**
```bash
npm install
npm run dev
```

---

### 📝 Observações:
- O sistema já vem com registros iniciais simulados de produtos e movimentações no primeiro acesso para facilitar a visualização do balanço e conferência dos fluxos.
- Use estas credenciais **apenas** em ambiente local ou Docker de desenvolvimento.
