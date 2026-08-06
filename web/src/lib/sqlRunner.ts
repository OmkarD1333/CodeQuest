import initSqlJs, { type SqlJsStatic } from 'sql.js'

let sqlJsPromise: Promise<SqlJsStatic> | null = null

async function getSqlJs(): Promise<SqlJsStatic> {
  if (!sqlJsPromise) {
    sqlJsPromise = initSqlJs({ locateFile: (file: string) => `https://sql.js.org/dist/${file}` })
  }
  return sqlJsPromise
}

export type SqlRunResult = { columns: string[]; rows: any[][] }

export async function runSql(statements: string, seedDb?: Uint8Array): Promise<SqlRunResult[]> {
  const SQL = await getSqlJs()
  const db = new SQL.Database(seedDb)
  const results: SqlRunResult[] = []
  try {
    const stmtList = statements
      .split(/;\s*\n/)
      .map((s) => s.trim())
      .filter(Boolean)

    for (const stmt of stmtList) {
      const res = db.exec(stmt)
      if (res.length > 0) {
        const { columns, values } = res[0]
        results.push({ columns, rows: values as any[][] })
      } else {
        results.push({ columns: [], rows: [] })
      }
    }
    return results
  } finally {
    db.close()
  }
}
