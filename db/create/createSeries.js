import Database from 'better-sqlite3';

export const createSeries = (dbFile, series) => {
  const db = new Database(dbFile);
  const stmt = db.prepare('INSERT INTO Series ("series") VALUES (?)');
  const serie = stmt.run(series);
  const lastId = serie.lastInsertRowid;
  db.close();
  return lastId;
}