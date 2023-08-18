import express, { Request, Response } from 'express';
const routerMain = express.Router();

/* GET home page. */
routerMain.get('/main', (req: Request, res: Response) => {
    res.send('Inside main');
});

export { routerMain }