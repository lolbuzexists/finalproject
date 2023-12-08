import Database from 'better-sqlite3';

export function readPages(dbFile) {
    const db = new Database(dbFile);

    const stmt = db.prepare('SELECT * FROM Pages');
    const pages = stmt.all();

    db.close();

    return pages
}