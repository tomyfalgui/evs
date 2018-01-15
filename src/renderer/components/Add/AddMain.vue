<template>
	<div>
			<nav-bar></nav-bar>
			<add></add>
	</div>
</template>

<script>
import Add from './AddSettings'
import NavBar from '../NavBar'

export default {
  components: {
    Add,
    NavBar
  },
  mounted() {
    console.log(this.$router)
  }
}
</script>

<style scoped>

</style>
