import Database from 'better-sqlite3';

export const createGenre = (dbFile, genre) => {
  const db = new Database(dbFile);
  const stmt = db.prepare('INSERT INTO Genre ("genre") VALUES (?)');
  const genres = stmt.run(genre);
  const lastId = genres.lastInsertRowid;
  db.close();
  return lastId;
}