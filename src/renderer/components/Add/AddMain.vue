<template>
	<wrapper>
			<add></add>
	</wrapper>
</template>

<script>
import Add from './AddSettings'
import Wrapper from '../Wrapper'

export default {
  components: {
    Add,
    Wrapper
  },
  mounted() {
    console.log(this.$router)
  }
}
</script>

<style scoped>

</style>
