import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'

// PLUGINS
import PTBR from './plugins/vuetify/locale/pt-br'

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
		locales: { PTBR },
		current: 'PTBR'
	},
	iconfont: 'mdi'
})

new Vue({
	router,
	store,
	render: h => h(App)
}).$mount('#app')
