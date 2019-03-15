import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main.vue'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			redirect: '/home',
			name: 'main',
			component: Main,
			children: [
				{
					path: '/home',
					name: 'home',
					component: () => import(/* webpackChunkName: "inicio" */ './views/Home.vue')
				},
				{
					path: '/about',
					name: 'about',
					component: () => import(/* webpackChunkName: "sobre" */ './views/About.vue')
				}
			]
		},
		{
			path: '/splash',
			name: 'splash',
			component: () => import(/* webpackChunkName: "splash" */ './views/Splash.vue')
		}
	]
})
