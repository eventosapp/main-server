import { Response } from 'express';
import { Respuesta } from '../interfaces/main.interfaces';
import i18next from 'i18next';

function response404(res: Response) {
    const mensaje: Respuesta = {
        mensaje: i18next.t("error404.mansaje")
    }
    return res.status(404).send(mensaje);
}

export { response404 }