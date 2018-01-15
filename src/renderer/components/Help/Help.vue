<template>
	<div  @click="goBack">
		gimme some love
	</div>
</template>


<script>
export default {
  name: 'help',
  methods: {
    goBack() {
      this.$router.push('/settings')
    }
  }
}
</script>


<style>

</style>
