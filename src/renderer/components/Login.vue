<template>
	<div class="container">
		<div class="login">
			<h1 class="login__main-heading">Log In to the EVS</h1>
			<form @submit.prevent="login" class="login__form">
				<div class="login__input-wrapper">
					<label class="login__label" for="usernameInput">Username</label>
					<input type="text" id="usernameInput" placeholder="Username" v-model="username" class="login__input">
				</div>
				<div class="login__input-wrapper">
					<label for="passwordInput" class="login__label">Password</label>
					<input type="password" id="passwordInput" placeholder="Password" v-model="password" class="login__input">
				</div>
				<button type="submit" class="login__submit">Submit</button>
			</form>
		</div>
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
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
    Oxygen-Sans, Ubuntu, Cantarell, 'Helvetica Neue', sans-serif;
  font-size: 100%;
  box-sizing: border-box;
  color: #555;
  --yellow: #fdcc2f;
  --blue: #021478;
}

*,
*::before,
*::after {
  box-sizing: inherit;
  margin: 0;
  padding: 0;
}

.container {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.login {
  border: 1px solid black;
  padding: 16px 40px;
  border-radius: 2px;
  padding-bottom: 24px;
}

.login__main-heading {
  font-weight: 300;
  color: #333;
  margin-bottom: 8px;
}

.login__form {
  display: flex;
  flex-direction: column;
}
.login__input-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}
.login__label {
  font-size: 20px;
  font-weight: 700;
}
.login__input {
  padding: 4px 8px;
  padding-left: 4px;
  font-size: 16px;
  color: #555;
  border-radius: 1px;
  border: 1px solid #888;
}
.login__submit {
  border: 0;
  background-color: var(--blue);
  color: white;
  padding: 8px 24px;
  border-radius: 2px;
  text-transform: lowercase;
  font-weight: 700;
  font-size: 12px;
  font-variant: small-caps;
}
</style>
