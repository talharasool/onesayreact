import i18n from "i18next"
import { initReactI18next } from "react-i18next"

const resources = {
  en: {
    translation: {
      search: 'Search', failed_fetch: 'Failed to fetch. Try again later!', fetching: 'Fetching news...',
      published: 'Published on', by: 'by', settings: 'Settings', news: 'News', home: 'Home', details : 'Details',
    }
  },
  es: {
    translation: {
      search: 'Buscar', failed_fetch: 'Fallo en recuperar. ¡Inténtalo de nuevo más tarde!', fetching: 'Obteniendo noticias...',
      published: 'Publicado en', by: 'por', settings: 'Ajustes', news: 'Noticias', home: 'Casa',details : 'Detalles',
    }
  }
}

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    compatibilityJSON: 'v3',
    resources,
    lng: "en", // language to use, more information here: https://www.i18next.com/overview/configuration-options#languages-namespaces-resources
    // you can use the i18n.changeLanguage function to change the language manually: https://www.i18next.com/overview/api#changelanguage
    // if you're using a language detector, do not define the lng option

    interpolation: {
      escapeValue: false // react already safes from xss
    }
  })

export default i18n