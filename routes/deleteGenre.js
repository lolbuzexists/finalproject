import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { deleteGenre } from '../db/delete/deleteGenre.js';

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/comics.db');

const router = express.Router();

router.get('/', (req, res) => {
  const genre = deleteGenre(dbFile);
  res.render('deleteGenre', { title: 'delete genre', genre });});


router.post('/', (req, res) => {
  deleteGenre(dbFile, req.body.idGenre);
  res.redirect('/deleteGenre');
});

export { router } ;