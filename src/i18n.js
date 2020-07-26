import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import en from './locale/en'

const resources = { en }

i18n.use(initReactI18next).init({
  interpolation: {
    escapeValue: false
  },
  keySeparator: false,
  lng: 'en',
  resources
})

export default i18n
