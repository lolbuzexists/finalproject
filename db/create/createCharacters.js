import Database from 'better-sqlite3';

export const createCharacters = (dbFile, name, seID) => {
  const db = new Database(dbFile);
  const stmt = db.prepare('INSERT INTO Characters ("name", "seID") VALUES (?,?)');
  const characters = stmt.run(name, seID);
  const lastId = characters.lastInsertRowid;
  db.close();
  return lastId;
}