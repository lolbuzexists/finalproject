import Database from 'better-sqlite3';

export const deletePage = (dbFile, idPage) => {
  const db = new Database(dbFile);
  const stmt = db.prepare('DELETE FROM Pages WHERE id = ?');
  stmt.run(idPage);
  db.close();
  return true;
}