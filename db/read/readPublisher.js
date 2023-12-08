import Database from 'better-sqlite3';

export function readPublisher(dbFile) {
    const db = new Database(dbFile);

    const stmt = db.prepare('SELECT * FROM Publisher');
    const publish = stmt.all();

    db.close();

    return publish
}