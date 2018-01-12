<template>
	<div class="container" @click="goBack">
		gimme some love
	</div>
</template>


<script>
export default {
  methods: {
    goBack() {
      this.$router.push('/settings')
    }
  }
}
</script>


<style>

</style>
