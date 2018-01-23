import consts from '@/constants'
import db from '@/DB'

const state = {
  selectedParty: {},
  selectedCandidates: {}
}
const getters = {}
const mutations = {
  [consts.CLEAR_SELECTED_PARTY](state, payload) {
    state.selectedParty = {}
  },
  [consts.SELECT_PARTY](state, payload) {
    state.selectedParty = payload.selectedParty
  },
  [consts.VOTE_FIRST](
    state,
    { president, vice_president, secretary, treasurer, lsp, id }
  ) {
    state.selectedCandidates = {
      president,
      vice_president,
      secretary,
      treasurer,
      lsp,
      id
    }
  },
  [consts.CONFIRM_VOTES](state, { confirmedParty }) {
    const {
      id,
      lsp,
      president,
      secretary,
      treasurer,
      vice_president
    } = confirmedParty

    function addPoints(fieldObj, field, abstain = false) {
      const abstainMapping = {
        president: 'abstainPresident',
        vice_president: 'abstainVicePresident',
        secretary: 'abstainSecretary',
        treasurer: 'abstainTreasurer',
        lsp: 'abstainLowerSchoolRepresentative'
      }

      if (abstain) {
        const name = abstainMapping[field]
        const ifPoints = db
          .get('party_groups')
          .find({ id })
          .get(name)
          .value()

        if (!isNaN(ifPoints)) {
          db
            .get('party_groups')
            .find({ id })
            .set(name, ifPoints + 1)
            .write()
        }
      } else {
        const ifPoints = db
          .get('party_groups')
          .find({ id })
          .get('parties')
          .map(field)
          .find({ name: fieldObj.value })
          .value()

        if (ifPoints) {
          db
            .get('party_groups')
            .find({ id })
            .get('parties')
            .map(field)
            .find({ name: fieldObj.value })
            .assign({ points: ifPoints.points + 1 })
            .write()
        }
      }
    }

    addPoints(president, 'president', president.abstain)
    addPoints(vice_president, 'vice_president', vice_president.abstain)
    addPoints(secretary, 'secretary', secretary.abstain)
    addPoints(treasurer, 'treasurer', treasurer.abstain)
    addPoints(lsp, 'lsp', lsp.abstain)
  }
}
const actions = {}

export default {
  state,
  getters,
  mutations,
  actions
}
