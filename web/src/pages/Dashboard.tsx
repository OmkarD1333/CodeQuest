import { Link } from 'react-router-dom'
import { ACHIEVEMENTS } from '../data/achievements'

export default function Dashboard() {
  return (
    <div style={{ maxWidth: 900, margin: '24px auto', padding: 12 }}>
      <h2>Dashboard</h2>
      <p>Select a track to begin learning.</p>
      <ul>
        <li>
          <Link to="/exercise/python/intro">Python Basics</Link>
        </li>
        <li>
          <Link to="/exercise/sql/intro">SQL Basics</Link>
        </li>
      </ul>
      <h3 style={{ marginTop: 24 }}>Achievements</h3>
      <ul>
        {ACHIEVEMENTS.map((a) => (
          <li key={a.id}>
            <strong>{a.title}:</strong> {a.description}
          </li>
        ))}
      </ul>
    </div>
  )
}
