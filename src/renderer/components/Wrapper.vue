<template>
	<div class="wrapper">
		<nav-bar></nav-bar>
		<slot></slot>
	</div>
</template>

<script>
import NavBar from './NavBar'
export default {
  name: 'wrapper',
  components: {
    NavBar
  }
}
</script>

<style lang="scss">
.wrapper {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
</style>
