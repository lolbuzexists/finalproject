import Database from 'better-sqlite3';

export function readPeople(dbFile) {
    const db = new Database(dbFile);

    const stmt = db.prepare('SELECT * FROM People');
    const people = stmt.all();

    db.close();

    return people
}