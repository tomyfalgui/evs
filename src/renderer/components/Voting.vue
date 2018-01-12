<template>
	<div>
		<h1 @click="back">@click="back"</h1>

		<form @submit.prevent="submit">
			<fieldset v-for="party in party_group.parties" :key="party.party_name">
				<legend>{{party.party_name}}</legend>


				<label :for="party.president.name" v-if="party.president.name">
					{{party.president.name}}
					<input type="radio" name="president" :id="party.president.name" :value="party.president.name" v-model="president">
				</label>

				<label :for="party.vice_president.name" v-if="party.vice_president.name">
					{{party.vice_president.name}}
					<input type="radio" name="vice_president" :id="party.vice_president.name" :value="party.vice_president.name" v-model="vice_president">
				</label>
				<label :for="party.secretary.name" v-if="party.secretary.name">
					{{party.secretary.name}}
					<input type="radio" name="secretary" :id="party.secretary.name" :value="party.secretary.name" v-model="secretary">
				</label>
				<label :for="party.treasurer.name" v-if="party.treasurer.name">
					{{party.treasurer.name}}
					<input type="radio" name="treasurer" :id="party.treasurer.name" :value="party.treasurer.name" v-model="treasurer">
				</label>
				<label :for="party.lsp.name" v-if="party.lsp.name">
					{{party.lsp.name}}
					<input type="radio" name="lsp" :id="party.lsp.name" :value="party.lsp.name" v-model="lsp">
				</label>
			</fieldset>
			<fieldset>
				<label>
					Abstain
					<input type="radio" name="president" v-model="president" value="abstain">
				</label>
				<label>
					Abstain
					<input type="radio" name="vice_president" v-model="vice_president" value="abstain">
				</label>
				<label>
					Abstain
					<input type="radio" name="secretary" v-model="secretary" value="abstain">
				</label>
				<label>
					Abstain
					<input type="radio" name="treasurer" v-model="treasurer" value="abstain">
				</label>
				<label>
					Abstain
					<input type="radio" name="lsp" v-model="lsp" value="abstain">
				</label>
			</fieldset>

			<button type="submit" @click="submit">Vote</button>
		</form>
	</div>
</template>


<script>
export default {
  data() {
    return {
      party_group: {},
      president: 'abstain',
      vice_president: 'abstain',
      secretary: 'abstain',
      treasurer: 'abstain',
      lsp: 'abstain'
    }
  },
  methods: {
    back() {
      this.$router.push('/')
    },
    submit() {
      const {
        president,
        vice_president,
        secretary,
        treasurer,
        lsp,
        party_group
      } = this

      this.$store.commit(this.$const.VOTE_FIRST, {
        president,
        vice_president,
        secretary,
        treasurer,
        lsp,
        id: party_group.id
      })
      this.$router.push('/confirmation')
    }
  },

  created() {
    console.log(this.$store.state)
    this.party_group = this.$store.state.VoterLogin.selectedParty
  }
}
</script>


<style>

</style>
