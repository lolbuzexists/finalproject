import Database from 'better-sqlite3';

export const deletePeople = (dbFile, idPeople) => {
  const db = new Database(dbFile);
  const stmt = db.prepare('DELETE FROM People WHERE id = ?');
  stmt.run(idPeople);
  db.close();
  return true;
}