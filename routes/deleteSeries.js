import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { deleteSeries } from '../db/delete/deleteSeries.js';

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/comics.db');

const router = express.Router();

router.get('/', (req, res) => {
  const series = deleteSeries(dbFile);
  res.render('deleteSeries', { title: 'delete comic', series });});


router.post('/', (req, res) => {
  deleteSeries(dbFile, req.body.idSeries);
  res.redirect('/deleteSeries');
});

export { router } ;