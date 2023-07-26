import { createApp } from 'vue'
import App from './App.vue'
//import 'popper.js/dist/popper.min.js'
//import 'popper.js/dist/popper-utils'
//import 'popper.js/dist/popper'
import 'popper.js/dist/umd/popper'
import 'popper.js/dist/umd/popper-utils'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from "bootstrap/dist/js/bootstrap"

import router from './router'
createApp(App)
.use(bootstrap)
.use(router)
.mount('#app')
