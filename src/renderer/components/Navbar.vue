<template>
	<nav class="navbar">
		<ul>
			<li @click="moveToMain">Home</li>
			<li @click="moveToParties">Results</li>
			<li @click="moveToAdmin">Admin</li>
			<li @click="moveToHelp">Help</li>
			<li @click="moveToLogin">Exit</li>
		</ul>
	</nav>
</template>


<script>
export default {
  name: 'NavBar',
  methods: {
    moveToMain() {
      this.$router.push('/settings')
    },
    moveToParties() {
      this.$router.push('/parties')
    },
    moveToAdmin() {
      this.$router.push('/admin')
    },
    moveToHelp() {
      this.$router.push('/help')
    },
    moveToLogin() {
      this.$router.push('/')
      this.$store.commit(this.$const.DEAUTHORIZE)
    }
  }
}
</script>

<style lang="sass">

</style>

