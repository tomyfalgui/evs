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

<style>

</style>
