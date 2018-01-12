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
		// make it dry LOL

		const pointsPres = db
			.get('party_groups')
			.find({ id: confirmedParty.id })
			.get('parties')
			.map('president')
			.find({ name: confirmedParty.president })
			.value()

		if (pointsPres) {
			db
				.get('party_groups')
				.find({ id: confirmedParty.id })
				.get('parties')
				.map('president')
				.find({ name: confirmedParty.president })
				.assign({ points: pointsPres.points + 1 })
				.write()
		}

		// VICE PRESIDENT
		const pointsVice = db
			.get('party_groups')
			.find({ id: confirmedParty.id })
			.get('parties')
			.map('vice_president')
			.find({ name: confirmedParty.vice_president })
			.value()

		if (pointsVice) {
			db
				.get('party_groups')
				.find({ id: confirmedParty.id })
				.get('parties')
				.map('vice_president')
				.find({ name: confirmedParty.vice_president })
				.assign({ points: pointsVice.points + 1 })
				.write()
		}

		// SECRETARY

		const pointsSec = db
			.get('party_groups')
			.find({ id: confirmedParty.id })
			.get('parties')
			.map('secretary')
			.find({ name: confirmedParty.secretary })
			.value()

		if (pointsSec) {
			db
				.get('party_groups')
				.find({ id: confirmedParty.id })
				.get('parties')
				.map('secretary')
				.find({ name: confirmedParty.secretary })
				.assign({ points: pointsSec.points + 1 })
				.write()
		}

		// TREASURER

		const pointsTreas = db
			.get('party_groups')
			.find({ id: confirmedParty.id })
			.get('parties')
			.map('treasurer')
			.find({ name: confirmedParty.treasurer })
			.value()

		if (pointsTreas) {
			db
				.get('party_groups')
				.find({ id: confirmedParty.id })
				.get('parties')
				.map('treasurer')
				.find({ name: confirmedParty.treasurer })
				.assign({ points: pointsTreas.points + 1 })
				.write()
		}

		// LSP
		const pointsLSP = db
			.get('party_groups')
			.find({ id: confirmedParty.id })
			.get('parties')
			.map('lsp')
			.find({ name: confirmedParty.lsp })
			.value()

		if (pointsLSP) {
			db
				.get('party_groups')
				.find({ id: confirmedParty.id })
				.get('parties')
				.map('lsp')
				.find({ name: confirmedParty.lsp })
				.assign({ points: pointsLSP.points + 1 })
				.write()
		}
	}
}
const actions = {}

export default {
	state,
	getters,
	mutations,
	actions
}
