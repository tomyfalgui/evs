<template>
	<div style="padding-top:30px;position:relative;">
		<el-steps :active="active" finish-status="success" align-center>
			<el-step title="Step 1" description="Select your candidates"></el-step>
			<el-step title="Step 2" description="Confirm your candidates"></el-step>
			<el-step title="Step 3" description="Exit Quietly"></el-step>
		</el-steps>
     <school-svg :home="home" ></school-svg>
     <!-- <h1 ref="firsth1">THANK</h1>
     <h1 ref="secondh1" class="secondh1">YOU</h1> -->

	</div>
</template>


<script>
import SchoolSvg from './SchoolSvg'
import anime from 'animejs'
import { setInterval } from 'timers'
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
  },
  mounted() {
    setTimeout(() => {
      this.$message({
        message: 'Thank you for voting. Please exit quietly.',
        duration: 6000,
        type: 'success',
        center: true
      })
    }, 3000)
  }
}
</script>


<style scoped>
.thirdh1,
h1 {
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0, 0);
  font-size: 180px;
  font-weight: 900;
  text-shadow: 0 3px 0px #b2a98f, 0 14px 10px rgba(0, 0, 0, 0.15),
    0 24px 2px rgba(0, 0, 0, 0.1), 0 34px 30px rgba(0, 0, 0, 0.1);
  pointer-events: none;
  transition: transform 2s 4s;
}

.el-alert {
  opacity: 0;
  max-width: 80%;
  margin: 15px auto;
  transition: opacity 2s;
}

.firsth1 {
}
.secondh1 {
  top: 65%;
  transition: transform 2s 6s;
}
.thirdh1 {
  top: 80%;
  transition: transform 2s 8s;
  font-size: 60px;
}
</style>
