import { OneSignalAppId } from '~config';
import '@/@iconify/icons-bundle'
import App from '@/App.vue'
import '@/assets/fonts.scss'
import layoutsPlugin from '@/plugins/layouts'
import vuetify from '@/plugins/vuetify'
import { loadFonts } from '@/plugins/webfontloader'
import router from '@/router'
import '@core/scss/template/index.scss'
import '@styles/styles.scss'
import OneSignal from 'onesignal';
import { createPinia } from 'pinia'
import { createApp } from 'vue'
import VueToastificationPlugin from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import i18n from '@/plugins/i18n'

loadFonts()

// Create vue app
const app = createApp(App)

// Use plugins
app.use(vuetify)
app.use(createPinia())
app.use(router)
app.use(layoutsPlugin)
app.use(VueToastificationPlugin)
app.use(i18n)

// Mount vue app
app.mount('#app')
