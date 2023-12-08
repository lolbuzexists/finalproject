import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { deleteCharacter } from '../db/delete/deleteCharacter.js';

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/comics.db');

const router = express.Router();

router.get('/', (req, res) => {
  const character = deleteCharacter(dbFile);
  res.render('deleteCharacter', { title: 'delete character', character });});


router.post('/', (req, res) => {
  deleteCharacter(dbFile, req.body.idCharacter);
  res.redirect('/deleteCharacter');
});

export { router } ;