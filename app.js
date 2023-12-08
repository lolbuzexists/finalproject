import express from 'express';
import path from 'path';
import colors from 'colors';
import { fileURLToPath } from 'url';
import { router as frontPageRouter } from './routes/index.js';
import { router as comicRouter } from './routes/comics.js';
import { router as genreRouter } from './routes/genre.js';
import { router as peopleRouter } from './routes/people.js';
import { router as characterRouter } from './routes/characters.js';
import { router as seriesRouter } from './routes/series.js';
import { router as publishRouter } from './routes/publisher.js';
import { router as pageRouter } from './routes/pages.js';
import { router as deleteGenreRouter } from './routes/deleteGenre.js';
import { router as deleteComicRouter } from './routes/deleteComic.js';
import { router as deleteCharacterRouter } from './routes/deleteCharacters.js';
import { router as deletePagesRouter } from './routes/deletePages.js';
import { router as deletePeopleRouter } from './routes/deletePeople.js';
import { router as deletePublishRouter } from './routes/deletePublisher.js';
import { router as deleteSeriesRouter } from './routes/deleteSeries.js';

// node --experimental-modules app.js


const app = express();

app.use(express.urlencoded({ extended: false }));

const viewsPath = path.join(fileURLToPath(new URL('.', import.meta.url)), 'views' );
const staticPath = path.join(fileURLToPath(new URL('.', import.meta.url)), 'public' );

app.use(express.static(staticPath));

app.set('views', viewsPath)
app.set('view engine', 'ejs');


app.use('/', frontPageRouter);
app.use('/comics', comicRouter);
app.use('/genre', genreRouter);
app.use('/people', peopleRouter);
app.use('/characters', characterRouter);
app.use('/series', seriesRouter);
app.use('/publisher', publishRouter);
app.use('/pages', pageRouter);
app.use('/deleteGenre', deleteGenreRouter);
app.use('/deleteComic', deleteComicRouter);
app.use('/deleteCharacter', deleteCharacterRouter);
app.use('/deletePage', deletePagesRouter);
app.use('/deletePeople', deletePeopleRouter);
app.use('/deletePublisher', deletePublishRouter);
app.use('/deleteSeries', deleteSeriesRouter);

app.use((req, res, next) => {
    const err = new Error('Page not found');
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message || 'Something went wrong',
        error: app.get('env') === 'development' ? err : {},
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}...`.green.bold);
});

export default app;
