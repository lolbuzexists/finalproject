import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { readPublisher } from '../db/read/readPublisher.js';
import { createPublisher } from '../db/create/createPublisher.js';

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/comics.db');

const router = express.Router();

router.get('/', (req, res) => {
  const publish = readPublisher(dbFile);
  res.render('publisher', { title: 'publisher', publish });
});

router.post('/', (req, res) => {
  console.log(req.body)
  const lastId = createPublisher(dbFile, req.body.company);
  res.redirect('/publisher')
});

export { router } ;