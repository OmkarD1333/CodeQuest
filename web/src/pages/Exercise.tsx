import { useMemo, useState } from 'react'
import { useParams } from 'react-router-dom'
import { EXERCISES } from '../data/content'
import Editor from '../components/Editor'
import { runPython } from '../lib/pythonRunner'
import { runSql } from '../lib/sqlRunner'

export default function ExercisePage() {
  const { track, slug } = useParams()
  const exercise = useMemo(() => EXERCISES.find((e) => e.track === track && e.slug === slug), [track, slug])
  const [code, setCode] = useState(exercise?.starterCode ?? '')
  const [result, setResult] = useState<string>('')
  const [status, setStatus] = useState<'idle' | 'running' | 'passed' | 'failed'>('idle')

  if (!exercise) return <div style={{ padding: 24 }}>Exercise not found.</div>

  async function onRun() {
    setStatus('running')
    try {
      const ex = exercise
      if (!ex) {
        setStatus('failed')
        setResult('Exercise not found')
        return
      }

      if (ex.track === 'python') {
        const res = await runPython(code)
        const passed = ex.tests.every((t) => t.type !== 'stdout' || res.stdout === t.expected)
        setStatus(passed ? 'passed' : 'failed')
        setResult(res.stdout || res.stderr || res.error || '')
      } else {
        const res = await runSql(code)
        const first = res[0]
        const values = first?.rows ?? []
        const expected = ex.tests[0]?.type === 'sql' ? ex.tests[0].expected : []
        const passed = JSON.stringify(values) === JSON.stringify(expected)
        setStatus(passed ? 'passed' : 'failed')
        setResult(JSON.stringify(values))
      }
    } catch (e: any) {
      setStatus('failed')
      setResult(String(e?.message ?? e))
    }
  }

  return (
    <div style={{ maxWidth: 1000, margin: '16px auto', padding: 12 }}>
      <h2>
        {exercise.title}
      </h2>
      <p>{exercise.prompt}</p>
      <Editor language={exercise.track} value={code} onChange={setCode} />
      <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
        <button disabled={status === 'running'} onClick={onRun}>
          {status === 'running' ? 'Running…' : 'Run & Grade'}
        </button>
        {status === 'passed' && <span style={{ color: 'lightgreen' }}>All tests passed!</span>}
        {status === 'failed' && <span style={{ color: 'tomato' }}>Some tests failed.</span>}
      </div>
      <pre style={{ background: '#111', color: '#ddd', padding: 12, marginTop: 12, whiteSpace: 'pre-wrap' }}>{result}</pre>
    </div>
  )
}
