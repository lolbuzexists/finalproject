import Database from 'better-sqlite3';

export const createPublisher = (dbFile, company) => {
  const db = new Database(dbFile);
  const stmt = db.prepare('INSERT INTO Publisher ("company") VALUES (?)');
  const publish = stmt.run(company);
  const lastId = publish.lastInsertRowid;
  db.close();
  return lastId;
}