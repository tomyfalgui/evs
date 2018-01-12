import db from '@/DB'
import consts from '@/constants'

const state = {
	authenticated: false
}

const getters = {}
const mutations = {
	[consts.AUTHENTICATE_ADMIN](state, payload) {
		const { username, password } = db.get('settings.admin').value()
		if (payload.username === username && payload.password === password) {
			state.authenticated = true
		}
	},
	[consts.DEAUTHORIZE]() {
		state.authenticated = false
	}
}
const actions = {}

export default {
	state,
	getters,
	mutations,
	actions
}
