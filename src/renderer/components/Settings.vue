<template>

	<div class="mycontainer">
		<div class="left container">
			<h2 class="ul">Add</h2>
			<h2 @click="moveToParties">Parties &amp; Results</h2>
			<h2 @click="moveToAdmin">Admin</h2>
			<small @click="moveToLogin">Exit</small>
		</div>
			<add></add>
	</div>

</template>

<script>
import Add from './AddSettings'

export default {
  components: {
    Add
  },
  methods: {
    moveToAdmin() {
      this.$router.push('/admin')
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

.left {
  background-color: #333;
  display: flex;
  flex-direction: column;
  padding-top: 200px;
  color: whitesmoke;
}

.left h2 {
  cursor: pointer;
  border-bottom: 1px solid transparent;
}
h2.ul {
  border-bottom: 1px solid red;
}
</style>
