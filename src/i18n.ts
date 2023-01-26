import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import commonEN from "./assets/locales/en/common.json";
import commonFR from "./assets/locales/fr/common.json";
import Language from "./assets/enums/Language";
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";

i18n
.use(initReactI18next)
.use(I18nextBrowserLanguageDetector)
.init({
    ns: 'common',
    defaultNS: 'common',
    fallbackLng: Language.EN,
    supportedLngs: Object.values(Language), 
    resources: {
        [Language.EN]: {
            common: commonEN,
        },
        [Language.FR]: {
            common: commonFR,
        },
    },
    interpolation: {
        escapeValue: false,
    },
    detection: {
        order: ['querystring', 'localStorage'],
        caches: ['localStorage'],
        lookupQuerystring: "lang",
    }
});