import Database from 'better-sqlite3';

export const deleteSeries = (dbFile, idSeries) => {
  const db = new Database(dbFile);
  const stmt = db.prepare('DELETE FROM Series WHERE id = ?');
  stmt.run(idSeries);
  db.close();
  return true;
}