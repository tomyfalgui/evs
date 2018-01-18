<template>
	<div style="padding-top:30px;position:relative;">
		<el-steps :active="active" finish-status="success" align-center>
			<el-step title="Step 1" description="Select your candidates"></el-step>
			<el-step title="Step 2" description="Confirm your candidates"></el-step>
			<el-step title="Step 3" description="Exit Quietly"></el-step>
		</el-steps>
     <school-svg :home="home"></school-svg>
     <h1 ref="firsth1">THANK</h1>
     <h1 ref="secondh1" class="b">YOU</h1>
	</div>
</template>


<script>
import SchoolSvg from './SchoolSvg'
import anime from 'animejs'
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
    const {firsth1, secondh1} = this.$refs
    anime({
      targets: [firsth1, secondh1],
      scale:  1,
        duration: 1600,
        delay: 3000,
        easing: 'easeInOutQuart'


    })

  }
}
</script>


<style scoped>
h1{
  position:absolute;
  top:50%;
  left:50%;
  transform: translate(-50%,-50%) scale(0);
  font-size: 180px;
  font-weight:900;
  text-shadow:0 3px 0px #b2a98f, 
  0 14px 10px rgba(0,0,0,0.15),
  0 24px 2px rgba(0,0,0,0.1),
  0 34px 30px rgba(0,0,0,0.1);
  pointer-events:none;

}

.b {
   top: 80%;
}

.firsth1 {}
.secondh1 {}
</style>
