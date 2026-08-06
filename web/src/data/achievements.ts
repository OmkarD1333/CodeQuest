export type Achievement = {
  id: string
  title: string
  description: string
}

export const ACHIEVEMENTS: Achievement[] = [
  { id: 'first-run', title: 'First Run', description: 'Ran code for the first time' },
  { id: 'py-hello-pass', title: 'Hello Python', description: 'Passed first Python exercise' },
  { id: 'sql-select-pass', title: 'Hello SQL', description: 'Passed first SQL exercise' },
]
