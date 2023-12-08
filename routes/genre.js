import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { readGenre } from '../db/read/readGenre.js';
import { createGenre } from '../db/create/createGenre.js';

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/comics.db');

const router = express.Router();

router.get('/', (req, res) => {
  const genre = readGenre(dbFile);
  res.render('genre', { title: 'genre', genre });
});

router.post('/', (req, res) => {
  console.log(req.body)
  const lastId = createGenre(dbFile, req.body.genre);
  res.redirect('/genre')
});

export { router } ;