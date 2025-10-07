import { useMemo } from 'react'
import MonacoEditor, { type OnMount } from '@monaco-editor/react'

export type SupportedLanguage = 'python' | 'sql' | 'c' | 'rust'

type EditorProps = {
  language: SupportedLanguage
  value: string
  onChange: (code: string) => void
  height?: string | number
}

export function Editor({ language, value, onChange, height = 380 }: EditorProps) {
  const monacoLang = useMemo(() => {
    switch (language) {
      case 'python':
        return 'python'
      case 'sql':
        return 'sql'
      case 'c':
        return 'c'
      case 'rust':
        return 'rust'
      default:
        return 'plaintext'
    }
  }, [language])

  const handleMount: OnMount = (editor, monaco) => {
    editor.updateOptions({
      fontSize: 14,
      minimap: { enabled: false },
      automaticLayout: true,
      tabSize: 2,
    })

    monaco.editor.setTheme('vs-dark')
  }

  return (
    <MonacoEditor
      height={height}
      language={monacoLang}
      value={value}
      onChange={(v) => onChange(v ?? '')}
      onMount={handleMount}
      options={{
        scrollBeyondLastLine: false,
        wordWrap: 'on',
      }}
    />
  )
}

export default Editor
