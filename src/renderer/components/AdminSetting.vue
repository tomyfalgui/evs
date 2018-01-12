<template>
	<div class="mycontainer">
		<div class="left container">
			<h2 @click="moveToMain">Add</h2>
			<h2 @click="moveToParties">Parties &amp; Results</h2>
			<h2 class="ul">Admin</h2>
			<small @click="moveToLogin">Exit</small>
		</div>
		<div class="right container">
		</div>
	</div>
</template>


<script>
export default {
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
