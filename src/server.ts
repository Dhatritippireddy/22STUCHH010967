import express, { Request, Response, NextFunction } from 'express';
import { Log } from './logging';

const app = express();


function loggingMiddleware(req: Request, res: Response, next: NextFunction) {
  Log('backend', 'info', 'request-handler', `Received request: ${req.method} ${req.url}`);
  next();
}


function errorHandlingMiddleware(err: any, req: Request, res: Response, next: NextFunction) {
  Log('backend', 'error', 'handler', `Error during request handling: ${err.message}`);
  res.status(500).send('Internal Server Error');
}

app.use(loggingMiddleware);


app.get('/test-error', (req: Request, res: Response) => {
  throw new Error('This is a test error!');
});


app.get('/test-db-failure', (req: Request, res: Response) => {
  Log('backend', 'fatal', 'db', 'Critical database connection failure.');
  res.status(500).send('Database connection failed');
});

app.use(errorHandlingMiddleware);

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
