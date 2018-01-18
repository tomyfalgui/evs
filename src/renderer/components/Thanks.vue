<template>
	<div style="padding-top:30px;">
		<el-steps :active="active" finish-status="success" align-center>
			<el-step title="Step 1" description="Select your candidates"></el-step>
			<el-step title="Step 2" description="Confirm your candidates"></el-step>
			<el-step title="Step 3" description="Exit Quietly"></el-step>
		</el-steps>
     <school-svg :home="home"></school-svg>
	</div>
</template>


<script>
import SchoolSvg from './SchoolSvg'
export default {
  data() {
    return {
      active: 2
    }
  },
  methods: {
    home() {
      this.$router.push('/')
    }
  },
  components: {
    SchoolSvg
  }
}
</script>


<style>

</style>
