import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { deletePage } from '../db/delete/deletePage.js';

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/comics.db');

const router = express.Router();

router.get('/', (req, res) => {
  const page = deletePage(dbFile);
  res.render('deletePage', { title: 'delete page', page });});


router.post('/', (req, res) => {
  deletePage(dbFile, req.body.idPage);
  res.redirect('/deletePage');
});

export { router } ;