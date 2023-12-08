import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { deleteComic } from '../db/delete/deleteComic.js';

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/comics.db');

const router = express.Router();

router.get('/', (req, res) => {
  const comic = deleteComic(dbFile);
  res.render('deleteComic', { title: 'delete comic', comic });});


router.post('/', (req, res) => {
  deleteComic(dbFile, req.body.idComic);
  res.redirect('/deleteComic');
});

export { router } ;