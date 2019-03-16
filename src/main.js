import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'

// PLUGINS
import ptBR from './plugins/vuetify/locale/pt_BR'
import VueI18n from 'vue-i18n'
import Locales from './plugins/locale'

// SERVICES
import db from './services/db'
import { Model } from 'objection'

// CSS
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.min.css'

// Initialize models
Model.knex(db)

// MAIN
Vue.config.productionTip = false
Vue.use(Vuetify, {
	theme: {
		primary: '#4200ff',
		success: '#5E945A'
	},
	lang: {
		locales: { ptBR },
		current: 'ptBR'
	},
	iconfont: 'mdi'
})

// LOCALE
Vue.use(VueI18n)
const i18n = new VueI18n({
	locale: 'en',
	fallbackLocale: 'en',
	messages: Locales
})

new Vue({
	router,
	store,
	i18n,
	render: h => h(App)
}).$mount('#app')
