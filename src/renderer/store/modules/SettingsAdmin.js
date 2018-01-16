import consts from '@/constants'
import db from '@/DB'

const state = {
	username: '',
	password: ''
}
const getters = {}
const mutations = {
	[consts.GET_ADMIN_LOGIN](state, payload) {
		const { username, password } = db.get('settings.admin').value()
		state.username = username
		state.password = password
	}, [consts.CHANGE_ADMIN_USERNAME](state, { newUsername }) {
		console.log('CHANGING USERNAME')
		db.set('settings.admin.username', newUsername).write()
	}, [consts.CHANGE_ADMIN_PASSWORD](state, { newPassword }) {
		db.set('settings.admin.password', newPassword).write()
	}
}
const actions = {}

export default {
	state,
	getters,
	mutations,
	actions
}
