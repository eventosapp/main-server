import i18next from 'i18next';
import es from './../i18n/es.json';

function initI18n() {
    let lng = process.env.LENGUAJE ?? "es";
    i18next.init({
        lng,
        resources: {
            es
        }
    });
}

export { initI18n };