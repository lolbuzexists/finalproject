import Database from 'better-sqlite3';

export const deleteCharacter = (dbFile, idCharacter) => {
  const db = new Database(dbFile);
  const stmt = db.prepare('DELETE FROM Characters WHERE id = ?');
  stmt.run(idCharacter);
  db.close();
  return true;
}