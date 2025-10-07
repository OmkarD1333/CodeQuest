export type Exercise = {
  id: string
  title: string
  track: 'python' | 'sql'
  slug: string
  prompt: string
  starterCode: string
  tests: { type: 'stdout' | 'sql'; expected: string | any[][] }[]
}

export const EXERCISES: Exercise[] = [
  {
    id: 'py-hello',
    title: 'Hello, Print',
    track: 'python',
    slug: 'intro',
    prompt: 'Print the text Hello, learner! to stdout',
    starterCode: 'print("Hello, learner!")',
    tests: [{ type: 'stdout', expected: 'Hello, learner!\n' }],
  },
  {
    id: 'sql-select',
    title: 'Select One',
    track: 'sql',
    slug: 'intro',
    prompt: 'Write a SELECT that returns a single row with answer=1',
    starterCode: 'SELECT 1 as answer;\n',
    tests: [{ type: 'sql', expected: [[1]] }],
  },
]
