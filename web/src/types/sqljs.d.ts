declare module 'sql.js' {
  export type SqlJsStatic = any
  const initSqlJs: (config?: any) => Promise<SqlJsStatic>
  export default initSqlJs
}
