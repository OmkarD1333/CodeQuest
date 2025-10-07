// Minimal demo-mode auth for local development without Supabase
export type DemoUser = { id: string; email: string }

const STORAGE_KEY = 'demo_auth_user'

export function getDemoUser(): DemoUser | null {
  const raw = localStorage.getItem(STORAGE_KEY)
  return raw ? (JSON.parse(raw) as DemoUser) : null
}

export async function signInDemo(email: string, _password: string): Promise<DemoUser> {
  const user: DemoUser = { id: crypto.randomUUID(), email }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(user))
  return user
}

export async function signOutDemo(): Promise<void> {
  localStorage.removeItem(STORAGE_KEY)
}
