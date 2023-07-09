import i18next from "i18next";
import LanguageDetector from 'i18next-browser-languagedetector';
import {initReactI18next} from "react-i18next";

import dataEn from './lang/en.json';
import dataAr from './lang/ar.json';

i18next
    .use(LanguageDetector)
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            en: {
                translation: dataEn
            },
            ar: {
                translation: dataAr
            }
        },

        load: "languageOnly",
        debug: false,

        interpolation: {
            escapeValue: false // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },

        detection: {
            order: ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'],
            lookupQuerystring: 'lang',
            lookupCookie: 'i18next',
            lookupLocalStorage: 'i18nextLng',
            lookupSessionStorage: 'i18nextLng',

            // cache user language
            caches: ['localStorage'],
            excludeCacheFor: ['cimode'],
        },
    });
