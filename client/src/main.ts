import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import * as FaIcons from 'oh-vue-icons/icons'
import { addIcons } from 'oh-vue-icons'
import 'leaflet/dist/leaflet.css';
import MapPopupItem from './views/Mapitems/MapPopupItem.vue'

import "./store"
import store from './store'

const app = createApp(App)

app.component("MapPopupItem", MapPopupItem)

// Icons
const Fa = Object.values({ ...FaIcons })
addIcons(...Fa)

app.use(store)
app.use(router)
app.mount('#app')
