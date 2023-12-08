import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { readPeople } from '../db/read/readPeople.js';
import { createPeople } from '../db/create/createPeople.js';

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/comics.db');

const router = express.Router();

router.get('/', (req, res) => {
  const people = readPeople(dbFile);
  res.render('people', { title: 'people', people });
});

router.post('/', (req, res) => {
  console.log(req.body)
  const lastId = createPeople(dbFile, req.body.first_name, req.body.last_name, req.body.rID, req.body.seID);
  res.redirect('/people')
});

export { router } ;