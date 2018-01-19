<template>
	<div style="padding-top: 30px">
		<el-steps :active="active" finish-status="success" align-center>
			<el-step title="Step 1" description="Select your candidates"></el-step>
			<el-step title="Step 2" description="Confirm your candidates"></el-step>
			<el-step title="Step 3" description="Exit Quietly"></el-step>
		</el-steps>
    <el-card class="box-card" :gutter="10">
       <div slot="header">
          <h2>Your Selection</h2>
       </div>
       <div>
          <el-row>
            <el-col :span="12">
             <u>President:</u>
            </el-col>
            <el-col :span="6">
              <strong>{{toTitleCase(selectedCandidates.president.value)}}</strong>
            </el-col>
          </el-row>
               <el-row>
            <el-col :span="12">
              <u>Vice President:</u>
            </el-col>
            <el-col :span="6">
              <strong>{{toTitleCase(selectedCandidates.vice_president.value)}}</strong>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
             <u>Secretary:</u>
            </el-col>
            <el-col :span="6">
              <strong>{{toTitleCase(selectedCandidates.secretary.value)}}</strong>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <u>Treasurer:</u>
            </el-col>
            <el-col :span="6">
             <strong> {{toTitleCase(selectedCandidates.treasurer.value)}}</strong>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <u>Lower School Representative:</u>
            </el-col>
            <el-col :span="6">
              <strong>{{toTitleCase(selectedCandidates.lsp.value)}}</strong>
            </el-col>
          </el-row>
          	<div class="flex margin-top-25">

		<el-button type="primary" @click="confirm" ref="buttonConfirm">Confirm</el-button>
		<el-button type="text" @click="voteAgain" :disabled="me">Vote Again</el-button>
		</div>
      </div>
    </el-card>



	</div>
</template>


<script>
export default {
  data() {
    return {
      selectedCandidates: {},
      active: 1,
      me: false
    }
  },
  created() {
    this.selectedCandidates = this.$store.state.VoterLogin.selectedCandidates
  },
  methods: {
    voteAgain() {
      this.$router.push('/voting')
    },
        toTitleCase(str){
    return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
},
    confirm() {
    this.me = true
      const confirmedParty = { ...this.selectedCandidates }

      this.$router.push('/thankyou')
      this.$store.commit(this.$const.CONFIRM_VOTES, {
        confirmedParty
      })
    }
  }
}
</script>


<style scoped>
.flex {
  display: flex;
}

.margin-top-50 {
  margin-top: 50px;
}
.margin-top-25 {
  margin-top: 25px;
}

.padding-v-8-h-16 {
  padding: 8px 16px;
}

.flex-column {
  flex-direction: column;
}

.padding-left-50 {
  padding-left: 400px;
}

h1 {
  font-weight: 400;
}

button {
  width: 100px;
  margin-right: 15px;
}

h1 > span {
  font-weight: 700;
}

.box-card {
  margin: 15px auto;
  max-width: 80%;
}

strong {
font-size:25px;
}

u {
font-size:25px;
text-decoration:none;
}
.el-row {
  margin-bottom: 12px;
}
</style>
