// Very small wrapper to load Pyodide from CDN and run code
// We use lazy singletons to avoid multiple WASM loads

export type PythonRunResult = {
  stdout: string
  stderr: string
  error?: string
}

let pyodidePromise: Promise<any> | null = null

async function getPyodide(): Promise<any> {
  if (!pyodidePromise) {
    // @ts-expect-error loadPyodide exists on globalThis when script is loaded
    if (!globalThis.loadPyodide) {
      await loadPyodideScript()
    }
    // @ts-expect-error loadPyodide injected by script
    pyodidePromise = globalThis.loadPyodide({
      indexURL: 'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/',
    })
  }
  return pyodidePromise
}

async function loadPyodideScript(): Promise<void> {
  await new Promise<void>((resolve, reject) => {
    const script = document.createElement('script')
    script.src = 'https://cdn.jsdelivr.net/pyodide/v0.26.2/full/pyodide.js'
    script.async = true
    script.onload = () => resolve()
    script.onerror = () => reject(new Error('Failed to load Pyodide'))
    document.head.appendChild(script)
  })
}

export async function runPython(code: string): Promise<PythonRunResult> {
  try {
    const pyodide = await getPyodide()
    let stdout = ''
    let stderr = ''

    const originalStdout = pyodide._module.stdout
    const originalStderr = pyodide._module.stderr
    pyodide._module.stdout = (c: number) => {
      stdout += String.fromCharCode(c)
    }
    pyodide._module.stderr = (c: number) => {
      stderr += String.fromCharCode(c)
    }

    try {
      await pyodide.runPythonAsync(code)
      return { stdout, stderr }
    } finally {
      pyodide._module.stdout = originalStdout
      pyodide._module.stderr = originalStderr
    }
  } catch (e: any) {
    return { stdout: '', stderr: '', error: String(e?.message ?? e) }
  }
}
