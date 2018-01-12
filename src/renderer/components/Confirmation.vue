<template>
	<div>
		<h1>President: {{selectedCandidates.president}}</h1>
		<h1>Vice President: {{selectedCandidates.vice_president}}</h1>
		<h1>Secretary: {{selectedCandidates.secretary}}</h1>
		<h1>Treasurer: {{selectedCandidates.treasurer}}</h1>
		<h1>Lower School Representative: {{selectedCandidates.lsp}}</h1>
		<button type="submit" @click="confirm">Confirm</button>
		<button type="submit" @click="voteAgain">Vote Again</button>
	</div>
</template>


<script>
export default {
  data() {
    return {
      selectedCandidates: {}
    }
  },
  mounted() {
    this.selectedCandidates = this.$store.state.VoterLogin.selectedCandidates
  },
  methods: {
    voteAgain() {
      this.$router.push('/voting')
    },
    confirm() {
      const confirmedParty = { ...this.selectedCandidates }

      this.$router.push('/thankyou')
      this.$store.commit(this.$const.CONFIRM_VOTES, {
        confirmedParty
      })
    }
  }
}
</script>


<style>

</style>
