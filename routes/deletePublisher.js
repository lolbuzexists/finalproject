import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { deletePublisher } from '../db/delete/deletePublisher.js';

const dbFile = path.join(fileURLToPath(new URL('.', import.meta.url)), '../db/comics.db');

const router = express.Router();

router.get('/', (req, res) => {
  const publish = deletePublisher(dbFile);
  res.render('deletePublisher', { title: 'delete publisher', publish });});


router.post('/', (req, res) => {
  deletePublisher(dbFile, req.body.idPublish);
  res.redirect('/deletePublisher');
});

export { router } ;