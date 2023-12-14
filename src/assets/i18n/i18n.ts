import { createI18n } from 'vue-i18n';
import en from "@/assets/i18n/en.json";
import tr from "@/assets/i18n/tr.json";
import de from "@/assets/i18n/de.json";


const userLanguage = navigator.language.substring(0,2);
const activeLanguage = localStorage.getItem("lang");
if(activeLanguage == null || activeLanguage == undefined) localStorage.setItem('lang', userLanguage)

const messages = {
  en: en,
  de: de,
  tr: tr
};


const i18n = createI18n({
  locale: localStorage.getItem('lang') || 'en',
  fallbackLocale: localStorage.getItem('lang') || 'en',
  legacy: false,
  messages,
});

export default i18n;