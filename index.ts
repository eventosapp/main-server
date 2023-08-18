import dotenv from 'dotenv';
dotenv.config();

import express, { Express, Request, Response } from 'express';
import { response404 } from './app/Utils/response.utils';
import { initI18n } from './app/Utils/i18n';
import morgan from 'morgan';

// Rutas
import { routerMain } from './app/routes/index.route';

initI18n();
const app: Express = express();
const port = process.env.PORT;

app.use(morgan("dev"));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get('/', (req: Request, res: Response) => {
    res.send('Express + TypeScript Server');
});

app.use("/", routerMain);

app.get('*', function (req: Request, res: Response) {
    return response404(res);
});

app.listen(port, () => {
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});