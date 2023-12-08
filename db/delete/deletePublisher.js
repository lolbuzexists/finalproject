import Database from 'better-sqlite3';

export const deletePublisher = (dbFile, idPublish) => {
  const db = new Database(dbFile);
  const stmt = db.prepare('DELETE FROM Publisher WHERE id = ?');
  stmt.run(idPublish);
  db.close();
  return true;
}