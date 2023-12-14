import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import i18n from "./assets/i18n/i18n";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { dom } from "@fortawesome/fontawesome-svg-core";
library.add(far,fab,fas);
dom.watch();
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.component('font-awesome-icon', FontAwesomeIcon)
   .use(createPinia())
   .use(i18n)
   .use(router)
   .mount('#app')
