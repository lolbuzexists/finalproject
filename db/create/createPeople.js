import Database from 'better-sqlite3';

export const createPeople = (dbFile, first_name, last_name, rID, seID) => {
  const db = new Database(dbFile);
  const stmt = db.prepare('INSERT INTO People ("first_name", "last_name", "rID", "seID") VALUES (?,?,?,?)');
  const people = stmt.run(first_name, last_name, rID, seID);
  const lastId = people.lastInsertRowid;
  db.close();
  return lastId;
}