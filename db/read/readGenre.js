import Database from 'better-sqlite3';

export function readGenre(dbFile) {
    const db = new Database(dbFile);

    const stmt = db.prepare('SELECT * FROM Genre');
    const genre = stmt.all();

    db.close();

    return genre
}