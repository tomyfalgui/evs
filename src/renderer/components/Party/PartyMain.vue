<template>
	<div>
		<nav-bar></nav-bar>
		<party></party>
	</div>
</template>


<script>
import Party from './PartySettings'
import NavBar from '../NavBar'
export default {
  components: {
    Party,
    NavBar
  }
}
</script>
