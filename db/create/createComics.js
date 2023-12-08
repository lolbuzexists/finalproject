import Database from 'better-sqlite3';

export const createComic = (dbFile, title, isbn13, pDate, seID, pageID, gID, coID) => {
  const db = new Database(dbFile);
  const stmt = db.prepare('INSERT INTO Comics ("title", "isbn13", "pDate","seID", "pageID", "gID", "coID") VALUES (?,?,?,?,?,?,?)');
  const comics = stmt.run(title, isbn13, pDate, seID, pageID, gID, coID);
  const lastId = comics.lastInsertRowid;
  db.close();
  return lastId;
}