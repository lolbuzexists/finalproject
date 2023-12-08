import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { readPages } from '../db/read/readPages.js';
import { createPages } from '../db/create/createPages.js';

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/comics.db');

const router = express.Router();

router.get('/', (req, res) => {
  const pages = readPages(dbFile);
  res.render('pages', { title: 'pages', pages });
});

router.post('/', (req, res) => {
  console.log(req.body)
  const lastId = createPages(dbFile, req.body.pCount);
  res.redirect('/pages')
});

export { router } ;