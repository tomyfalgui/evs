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
	}
}
const actions = {}

export default {
	state,
	getters,
	mutations,
	actions
}
