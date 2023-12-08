import Database from 'better-sqlite3';

export const createPages = (dbFile, pCount) => {
  const db = new Database(dbFile);
  const stmt = db.prepare('INSERT INTO Pages ("pCount") VALUES (?)');
  const pages = stmt.run(pCount);
  const lastId = pages.lastInsertRowid;
  db.close();
  return lastId;
}