import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router'

import { createApp } from 'vue'
import App from './App.vue'

import ValidationErrors from "./components/shared/ValidationErrors.vue";

const app = createApp(App)

app.component("v-errors", ValidationErrors);
app.use(router)
app.mount('#app')
