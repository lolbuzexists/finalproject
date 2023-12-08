import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { readSeries } from '../db/read/readSeries.js';
import { createSeries } from '../db/create/createSeries.js';

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/comics.db');

const router = express.Router();

router.get('/', (req, res) => {
  const series = readSeries(dbFile);
  res.render('series', { title: 'series', series });
});

router.post('/', (req, res) => {
  console.log(req.body)
  const lastId = createSeries(dbFile, req.body.series);
  res.redirect('/series')
});

export { router } ;