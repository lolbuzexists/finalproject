import Database from 'better-sqlite3';

export const deleteGenre = (dbFile, idGenre) => {
  const db = new Database(dbFile);
  const stmt = db.prepare('DELETE FROM genre WHERE id = ?');
  stmt.run(idGenre);
  db.close();
  return true;
}