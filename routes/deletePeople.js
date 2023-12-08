import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { deletePeople } from '../db/delete/deletePeople.js';

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/comics.db');

const router = express.Router();

router.get('/', (req, res) => {
  const people = deletePeople(dbFile);
  res.render('deletePeople', { title: 'delete people', people });});


router.post('/', (req, res) => {
  deletePeople(dbFile, req.body.idPeople);
  res.redirect('/deletePeople');
});

export { router } ;