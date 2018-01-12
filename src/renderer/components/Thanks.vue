<template>
<div>

<h1>THANKS</h1>
<button @click="home">HOME</button>
</div>
</template>


<script>
export default {
  methods: {
    home() {
      this.$router.push('/')
    }
  }
}
</script>


<style>

</style>
