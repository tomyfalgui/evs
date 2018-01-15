import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	routes: [
		{
			path: '/',
			name: 'login',
			component: require('@/components/Login').default
		},
		{
			path: '/settings',
			name: 'settings',
			component: require('@/components/Add/AddMain').default
		},
		{
			path: '/help',
			name: 'help',
			component: require('@/components/Help/HelpMain').default
		},
		{
			path: '/admin',
			name: 'admin',
			component: require('@/components/Admin/AdminMain').default
		},
		{
			path: '/parties',
			name: 'parties',
			component: require('@/components/Party/PartyMain').default
		},
		{
			path: '/voting',
			name: 'voting',
			component: require('@/components/Voting').default
		},
		{
			path: '/confirmation',
			name: 'confirmation',
			component: require('@/components/Confirmation').default
		},
		{
			path: '/thankyou',
			name: 'thankyou',
			component: require('@/components/Thanks').default
		},
		{
			path: '*',
			redirect: '/'
		}
	]
})
