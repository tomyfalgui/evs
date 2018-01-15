<template>
	<div>
		<div>
			<div>
				<h1>Change Admin Login</h1>
				<h2>Username</h2>
				<input type="text" placeholder="Current Username" v-model="username.old">
				<input type="text" placeholder="New Username" v-model="username.new">
				<input type="text" placeholder="Confirm New Username" v-model="username.cnew">
				<hr>
				<h2>Password</h2>
				<input type="text" placeholder="Current Password" v-model="password.old">
				<input type="text" placeholder="New Password" v-model="password.new">
				<input type="text" placeholder="Confirm New Password" v-model="password.cnew">
				<input type="submit">
			</div>
		</div>
	</div>
</template>


<script>
import NavBar from '../NavBar'

export default {
  components: {
    NavBar
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
      }
    }
  },
  name: 'admin',

  mounted() {
    this.$store.commit(this.$const.GET_ADMIN_LOGIN)
  }
}
</script>


<style scoped>

</style>
