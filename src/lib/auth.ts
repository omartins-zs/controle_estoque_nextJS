export interface DemoUser {
  id: string;
  name: string;
  username: string;
  email: string;
  password: string;
  role: "Administrador" | "Gerente de Estoque" | "Operador de Almoxarifado";
  avatar: string;
  permissions: string;
}

export interface SessionUser {
  id: string;
  name: string;
  username: string;
  email: string;
  role: DemoUser["role"];
  avatar: string;
  permissions: string;
}

export const SESSION_COOKIE_NAME = "estoque_session";

export const DEMO_USERS: DemoUser[] = [
  {
    id: "usr-admin-01",
    name: "Gabriel Martins",
    username: "omartins-zs",
    email: "admin@estoque.com",
    password: "Password@123",
    role: "Administrador",
    avatar: "https://github.com/omartins-zs.png",
    permissions: "Acesso total ao catálogo de produtos, entradas, saídas, balanço e relatórios.",
  },
  {
    id: "usr-manager-02",
    name: "Mariana Souza",
    username: "msouza",
    email: "gerente@estoque.com",
    password: "Password@123",
    role: "Gerente de Estoque",
    avatar: "https://github.com/shadcn.png",
    permissions: "Supervisão do inventário, controle de ponto de reposição e autorização de baixas.",
  },
  {
    id: "usr-operator-03",
    name: "Carlos Eduardo",
    username: "ceduardo",
    email: "operador@estoque.com",
    password: "Password@123",
    role: "Operador de Almoxarifado",
    avatar: "https://github.com/vercel.png",
    permissions: "Lançamento de notas de entrada, conferência física e registro de saídas.",
  },
];

export function authenticateUser(emailOrUsername: string, password: string): SessionUser | null {
  const normalized = emailOrUsername.trim().toLowerCase();
  const user = DEMO_USERS.find(
    (u) =>
      (u.email.toLowerCase() === normalized || u.username.toLowerCase() === normalized) &&
      u.password === password
  );

  if (!user) return null;

  return {
    id: user.id,
    name: user.name,
    username: user.username,
    email: user.email,
    role: user.role,
    avatar: user.avatar,
    permissions: user.permissions,
  };
}

export function encodeSession(user: SessionUser): string {
  const payload = JSON.stringify({ ...user, issuedAt: Date.now() });
  return encodeURIComponent(payload);
}

export function decodeSession(token?: string | null): SessionUser | null {
  if (!token) return null;
  try {
    const json = decodeURIComponent(token);
    const parsed = JSON.parse(json);
    if (!parsed || typeof parsed.email !== "string" || typeof parsed.id !== "string") {
      return null;
    }
    return {
      id: parsed.id,
      name: parsed.name,
      username: parsed.username,
      email: parsed.email,
      role: parsed.role,
      avatar: parsed.avatar,
      permissions: parsed.permissions,
    };
  } catch {
    return null;
  }
}
