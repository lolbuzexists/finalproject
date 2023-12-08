import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { readComics } from '../db/read/readComics.js';

const router = express.Router();

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/comics.db');

router.get('/', (req, res) => {
  const title = 'a';
  const comic = readComics(dbFile);
  console.log(comic);
  res.render('index', { title });
});


export { router } ;