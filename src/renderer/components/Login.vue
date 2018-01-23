<template>
	<div class="container">
		<div class="right-side">
       <h1 id="h1ofright">DPS Electronic Voting System</h1>
			 <p>A project of the DPS Comelec</p>
			 <el-tag>v0.12.4</el-tag>
		</div>
		<div class="login">
			<svg viewBox="0 0 1779 274" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" class="svgbaby"><path d="M29.395 240C-110.804 215.219 290.284 0 396.638 0c106.355 0 166.664 240 270.885 240S913.924 0 1021.964 0c108.039 0 205.297 240 293.794 240 88.498 0 164.081-240 237.193-240 73.112 0 298.878 224.657 201.478 240-253.926 40-1498.74 40-1725.03 0z" fill="#dcdfe6"/><path d="M252.359 272.12c-166.883-8.354 341.188-240 468.32-240 121.659 0 190.248 240 294.469 240s232.924-240 330.856-240c97.932 0 368.271 247.805 256.734 240-182.311-12.756-1199.19 7.569-1350.38 0z" fill="#ebeef5"/></svg>
	 	  <svg viewBox="0 0 1779 274" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414" class="svgbabys"><path d="M29.395 240C-110.804 215.219 290.284 0 396.638 0c106.355 0 166.664 240 270.885 240S913.924 0 1021.964 0c108.039 0 205.297 240 293.794 240 88.498 0 164.081-240 237.193-240 73.112 0 298.878 224.657 201.478 240-253.926 40-1498.74 40-1725.03 0z" fill="#dcdfe6"/><path d="M252.359 272.12c-166.883-8.354 341.188-240 468.32-240 121.659 0 190.248 240 294.469 240s232.924-240 330.856-240c97.932 0 368.271 247.805 256.734 240-182.311-12.756-1199.19 7.569-1350.38 0z" fill="#ebeef5"/></svg>
			<div @keyup.enter="login">
				<h1 class="login__main-heading">Log In to the EVS</h1>
				<form @submit.prevent.native="login"   class="login__form">
					<el-form label-position="top" label-width="100px">
						<el-form-item label="Username">
							<el-input v-model="username"></el-input>
						</el-form-item>
						<el-form-item label="Password">
							<el-input v-model="password" type="password"></el-input>
						</el-form-item>
					</el-form>
					<el-button type="primary" @click="login">Login</el-button>
				</form>
			</div>
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
          this.$message({
            message: 'Incorrect Credentials. Please try again',
            duration: 3000,
            type: 'error',
            center: true
          })
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
@import url('https://fonts.googleapis.com/css?family=Lato:100,100i,300,300i,400,400i,700,700i,900,900i');
html {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-rendering: optimizeLegibility;

  font-family: 'Lato', sans-serif;

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
  display: grid;
  grid-template-columns: 1fr 1fr;
  overflow: hidden;
}

.login {
  display: flex;
  align-items: center;
  padding-top: 30px;
  position: relative;
  padding-left: 60px;
}

.svgbaby {
  position: absolute;
  bottom: -30px;
  left: 50%;
  right: 0;
  transform: translateX(-50%);
}

.svgbabys {
  position: absolute;
  left: 50%;
  right: 0;
  top: -30px;
  transform: rotate(180deg) translateX(50%);
}

.right-side {
  background-color: #f2f6fc;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.right-side > :nth-child(2) {
  margin-bottom: 8px;
}
</style>
