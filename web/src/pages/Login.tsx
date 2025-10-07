import { useState } from 'react'
import { supabase, isSupabaseConfigured } from '../lib/supabaseClient'
import { signInDemo } from '../lib/demoAuth'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)
    try {
      if (isSupabaseConfigured && supabase) {
        const { error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
      } else {
        await signInDemo(email, password)
      }
      navigate('/dashboard')
    } catch (e: any) {
      setError(e.message ?? String(e))
    }
  }

  return (
    <div style={{ maxWidth: 400, margin: '48px auto' }}>
      <h2>Sign in</h2>
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required />
        <label>Password</label>
        <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" required />
        <button type="submit">Sign in</button>
      </form>
      {error && <p style={{ color: 'tomato' }}>{error}</p>}
      <p>
        No account? <Link to="/register">Register</Link>
      </p>
    </div>
  )
}
