import express from 'express';
import bodyParser from 'body-parser';
import tags from './src/routes/tags';
import process from './src/routes/process';
import process_tags from './src/routes/process_tags';
import summary from './src/routes/summary';
import consumptions from './src/routes/consumptions';
import { errorHandler, logErrors } from './src/middlewares/error_handlers';

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/tags', tags);
app.use('/consumptions', consumptions);
app.use('/process_tags', process_tags);
app.use('/process', process);
app.use('/summary', summary);

app.use(logErrors);
app.use(errorHandler);

export default app;
