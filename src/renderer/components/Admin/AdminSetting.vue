<template>
	<div>

		<div>
			<h1>Change Admin Login</h1>
			<form @submit.prevent="changeUsername">
				<h2>Username</h2>
				<input type="text" placeholder="Current Username" v-model="username.old">
				<input type="text" placeholder="New Username" v-model="username.new">
				<input type="text" placeholder="Confirm New Username" v-model="username.cnew">
				<input type="submit" >
			</form>
			<form @submit.prevent="changePassword">
				<h2>Password</h2>
				<input type="text" placeholder="Current Password" v-model="password.old">
				<input type="text" placeholder="New Password" v-model="password.new">
				<input type="text" placeholder="Confirm New Password" v-model="password.cnew">
				<input type="submit">
			</form>
		</div>
	</div>
</template>


<script>
import NavBar from '../NavBar'

export default {
  components: {
    NavBar
  },
  methods: {
    changeUsername() {
      const { username } = this.checkers
      if (this.username.old === username) {
        if (this.username.new === this.username.cnew) {
          if (this.username.new === this.username.old) {
            // HANDLE USER ERROR
            console.log('username must not be the same')
          } else {
            // HANDLE USER Success
            console.log('success username')
          }
        } else {
          // HANDLE USER ERROR
          console.log('usernames not equal')
        }
      } else {
        // HANDLE USER ERROR
        console.log('old username != new username')
      }
    },
    changePassword() {
      const { password } = this.checkers
      if (this.password.old === password) {
        if (this.password.new === this.password.cnew) {
          if (this.password.new === this.password.old) {
            // HANDLE USER ERROR
            console.log('passwords must not be the same')
          } else {
            // HANDLE USER Success
            console.log('password success')
          }
        } else {
          // HANDLE USER ERROR
          console.log('passwords not equal')
        }
      } else {
        // HANDLE USER ERROR
        console.log('password old != password new')
      }
    }
  },
  data() {
    return {
      username: {
        old: '',
        new: '',
        cnew: ''
      },
      password: {
        old: '',
        new: '',
        cnew: ''
      },
      checkers: {
        username: '',
        password: ''
      }
    }
  },
  name: 'admin',

  created() {
    this.$store.commit(this.$const.GET_ADMIN_LOGIN)
    const { username, password } = this.$store.state.SettingsAdmin
    this.checkers.username = username
    this.checkers.password = password
  }
}
</script>


<style scoped>

</style>
