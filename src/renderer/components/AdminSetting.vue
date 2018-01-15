<template>
	<div class="mycontainer">
		<div class="left container">
			<h2 @click="moveToMain">Add</h2>
			<h2 @click="moveToParties">Parties &amp; Results</h2>
			<h2 class="ul">Admin</h2>
			<small @click="moveToLogin">Exit</small>
		</div>
		<div class="right container">
			<div class="card">
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
export default {
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
  methods: {
    moveToMain() {
      this.$router.push('/settings')
    },
    moveToParties() {
      this.$router.push('/parties')
    },
    moveToLogin() {
      this.$router.push('/')
      this.$store.commit(this.$const.DEAUTHORIZE)
    }
  },
  mounted() {
    this.$store.commit(this.$const.GET_ADMIN_LOGIN)
  }
}
</script>


<style scoped>
.mycontainer {
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 100vh;
}

.right {
  background-color: #555;
  display: grid;
  grid-template-rows: 2fr 5fr 2fr;
  grid-template-areas: 'h''a''.';
}

.ul {
  border-bottom: 1px solid red;
}
.mycontainer {
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 100vh;
}

.left {
  background-color: #333;
  display: flex;
  flex-direction: column;
  padding-top: 200px;
  color: whitesmoke;
}

h2.left {
  cursor: pointer;
  border-bottom: 1px solid transparent;
}
</style>
