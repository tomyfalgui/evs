<template>
	<div class="container">
		<h1>Electronic Voting System</h1>
		<form @submit.prevent="login">
			<div class="form-group">
				<label for="usernameInput">Username</label>
				<input type="text" class="form-control" id="usernameInput" placeholder="Username" v-model="username">
			</div>
			<div class="form-group">
				<label for="passwordInput">Password</label>
				<input type="password" class="form-control" id="passwordInput" placeholder="Password" v-model="password">
			</div>
			<button type="submit" class="btn btn-primary">Submit</button>
		</form>
	</div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      parties: []
    }
  },
  methods: {
    login() {
      const { username, password } = this
      this.$store.commit(this.$const.AUTHENTICATE_ADMIN, {
        username,
        password
      })
      if (this.$store.state.AdminLogin.authenticated) {
        this.$router.push('/settings')
      } else {
        const votingBlock = this.parties.filter(el => {
          return el.password === password && el.username === username
        })

        if (votingBlock.length === 0) {
          // HANDLE USER ERROR HERE
          return console.log('NOTHING')
        }
        this.$store.commit(this.$const.SELECT_PARTY, {
          selectedParty: votingBlock[0]
        })
        console.log(this.$store.state.VoterLogin)
        this.$router.push('/voting')
      }
    },
    getParties() {
      this.$store.commit(this.$const.GET_PARTIES)
      const parties = this.$store.state.SettingsAdd.parties
      this.parties = parties
    }
  },
  mounted() {
    //this.$store.commit(this.$const.CLEAR_SELECTED_PARTY)
    this.getParties()
  }
}
</script>

<style>

</style>
