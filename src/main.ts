import { createApp } from 'vue'
import './style.css'
import router from "./routes/Router";

// Vuetify
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import '@mdi/font/css/materialdesignicons.css' // Ensure you are using css-loader

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
  },
})

// components
import App from './App.vue'

createApp(App).use(vuetify).use(router).mount('#app')
