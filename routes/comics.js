import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { readComics } from '../db/read/readComics.js';
import { createComic } from '../db/create/createComics.js';

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/comics.db');

const router = express.Router();

router.get('/', (req, res) => {
  const comics = readComics(dbFile);
  res.render('comics', { title: 'comics', comics });
});

router.post('/', (req, res) => {
  console.log(req.body)
  const lastId = createComic(dbFile, req.body.title, req.body.isbn13, req.body.pDate, req.body.seID, req.body.pageID, req.body.gID, req.body.coID);
  res.redirect('/comics')
});

export { router } ;