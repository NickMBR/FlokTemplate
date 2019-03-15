import Vue from 'vue'
import Vuex from 'vuex'

// MODULES
import BoilerModule from '@/store/modules/boilerModule'

Vue.use(Vuex)

export default new Vuex.Store({
	modules: {
		BoilerModule
	}
})
