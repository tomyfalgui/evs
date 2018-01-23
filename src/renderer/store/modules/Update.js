import consts from '@/constants'
import db from '@/DB'

const state = {
  party_groups: []
}
const getters = {}
const mutations = {
  [consts.FETCH_PARTY_GROUP](state) {
    console.log('fetchinng')
    const a = db.get('party_groups').value()
    state.party_groups = a
  }
}
const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
