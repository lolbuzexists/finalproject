import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { readCharacters } from '../db/read/readCharacters.js';
import { createCharacters } from '../db/create/createCharacters.js';

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/comics.db');

const router = express.Router();

router.get('/', (req, res) => {
  const characters = readCharacters(dbFile);
  res.render('characters', { title: 'characters', characters });
});

router.post('/', (req, res) => {
  console.log(req.body)
  const lastId = createCharacters(dbFile, req.body.name, req.body.seID);
  res.redirect('/characters')
});

export { router } ;