import Database from 'better-sqlite3';

export function readComics(dbFile) {
  const db = new Database(dbFile);

  const stmt = db.prepare('SELECT * FROM Comics');
  const comics = stmt.all();

  db.close();

  return comics
}
