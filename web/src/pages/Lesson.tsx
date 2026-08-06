import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Editor, { type SupportedLanguage } from '../components/Editor'
import { runPython } from '../lib/pythonRunner'
import { runSql } from '../lib/sqlRunner'

const STARTER_CODE: Record<string, string> = {
  python: 'print("Hello, learner!")',
  sql: 'SELECT 1 as answer;\n',
}

export default function Lesson() {
  const { track, slug } = useParams()
  const language = (track === 'python' ? 'python' : 'sql') as SupportedLanguage
  const [code, setCode] = useState(STARTER_CODE[language] ?? '')
  const [output, setOutput] = useState('')
  const [running, setRunning] = useState(false)

  async function onRun() {
    setRunning(true)
    setOutput('')
    try {
      if (language === 'python') {
        const res = await runPython(code)
        setOutput([res.stdout, res.stderr, res.error].filter(Boolean).join('\n'))
      } else if (language === 'sql') {
        const results = await runSql(code)
        const rendered = results
          .map((r, i) => `Result ${i + 1}:\n` + renderTable(r.columns, r.rows))
          .join('\n\n')
        setOutput(rendered)
      }
    } catch (e: any) {
      setOutput(String(e?.message ?? e))
    } finally {
      setRunning(false)
    }
  }

  return (
    <div style={{ maxWidth: 1000, margin: '16px auto', padding: 12 }}>
      <h2>
        {track?.toUpperCase()} • {slug}
      </h2>
      <p>Write code and click Run to see results.</p>
      <Editor language={language} value={code} onChange={setCode} />
      <div style={{ marginTop: 8, display: 'flex', gap: 8 }}>
        <button disabled={running} onClick={onRun}>
          {running ? 'Running…' : 'Run'}
        </button>
      </div>
      <pre style={{ background: '#111', color: '#ddd', padding: 12, marginTop: 12, whiteSpace: 'pre-wrap' }}>{output}</pre>
    </div>
  )
}

function renderTable(columns: string[], rows: any[][]): string {
  if (columns.length === 0) return 'OK'
  const header = columns.join(' | ')
  const sep = columns.map(() => '---').join(' | ')
  const body = rows.map((r) => r.map((c) => String(c)).join(' | ')).join('\n')
  return [header, sep, body].join('\n')
}
