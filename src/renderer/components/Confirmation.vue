<template>
	<div>
		<h1>President: {{selectedCandidates.president.value}}</h1>
		<h1>Vice President: {{selectedCandidates.vice_president.value}}</h1>
		<h1>Secretary: {{selectedCandidates.secretary.value}}</h1>
		<h1>Treasurer: {{selectedCandidates.treasurer.value}}</h1>
		<h1>Lower School Representative: {{selectedCandidates.lsp.value}}</h1>
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
  created() {
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
