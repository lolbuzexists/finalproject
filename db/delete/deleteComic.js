import Database from 'better-sqlite3';

export const deleteComic = (dbFile, idComic) => {
  const db = new Database(dbFile);
  const stmt = db.prepare('DELETE FROM Comics WHERE id = ?');
  stmt.run(idComic);
  db.close();
  return true;
}