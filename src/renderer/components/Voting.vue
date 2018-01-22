<template>
	<div style="padding-top: 30px;overflow:hidden;">
		<el-steps :active="active" finish-status="success" align-center>
			<el-step title="Step 1" description="Select your candidates"></el-step>
			<el-step title="Step 2" description="Confirm your candidates"></el-step>
			<el-step title="Step 3" description="Exit Quietly"></el-step>
		</el-steps>
		<form @submit.prevent="submit">
			<el-card class="box-card" v-for="party in party_group.parties" :key="party.party_name">
				<div slot="header">
					<h2>{{toTitleCase(party.party_name)}} </h2>
				</div>
				<div>
			<!-- Pres -->
					<el-radio v-model="president" :label="party.president.name" v-if="party.president.name" size="medium" class="title" namehere="President">
						{{toTitleCase(party.president.name)}}
					</el-radio>
					<el-radio v-else disabled size="medium" class="title" namehere="President">President</el-radio>


					<!-- VP -->
					<el-radio v-model="vice_president" :label="party.vice_president.name" v-if="party.vice_president.name" size="medium" class="title" namehere="Vice President">
						{{toTitleCase(party.vice_president.name)}}
					</el-radio>

					<el-radio v-else disabled size="medium" class="title" namehere="Vice President">Vice President</el-radio>
					<!-- SEC -->
					<el-radio v-model="secretary" :label="party.secretary.name" v-if="party.secretary.name" size="medium" class="title" namehere="Secretary">
						{{toTitleCase(party.secretary.name)}}
					</el-radio>

					<el-radio v-else disabled size="medium" class="title" namehere="Secretary">Secretary</el-radio>

					<!-- Treasurer -->
					<el-radio v-model="treasurer" :label="party.treasurer.name" v-if="party.treasurer.name" size="medium" class="title" namehere="Treasurer">
						{{toTitleCase(party.treasurer.name)}}
					</el-radio>
					<el-radio v-else disabled size="medium" class="title" namehere="Treasurer">Treasurer</el-radio>
					<!-- LSP -->
					<el-radio v-model="lsp" :label="party.lsp.name" v-if="party.lsp.name" size="medium" class="title" namehere="Lower School Representative">
						{{toTitleCase(party.lsp.name)}}
					</el-radio>
					<el-radio v-else disabled size="medium" class="title" namehere="Lower School Representative">
						Lower School Representative
					</el-radio>
				</div>
			</el-card>



			<el-card class="box-card">
				<div slot="header">
					<h2>Abstain</h2>
				</div>
				<div>
					<el-radio v-model="president" label="abstain" class="title" namehere="President">Abstain</el-radio>
					<el-radio v-model="vice_president" label="abstain" class="title" namehere="Vice President">Abstain</el-radio>
					<el-radio v-model="secretary" label="abstain" class="title" namehere="Secretary">Abstain</el-radio>
					<el-radio class="title" namehere="Treasurer" v-model="treasurer" label="abstain">Abstain</el-radio>
					<el-radio class="title" namehere="Lower School Representative" v-model="lsp" label="abstain">Abstain</el-radio>
				</div>
			</el-card>


			<el-button type="primary" id="button" @click="submit">Vote</el-button>
		</form>
	</div>
</template>


<script>
export default {
  data() {
    return {
      party_group: {},
      president: 'abstain',
      vice_president: 'abstain',
      secretary: 'abstain',
      treasurer: 'abstain',
      lsp: 'abstain',
      active: 0
    }
  },

  methods: {
    back() {
      this.$router.push('/')
    },
    toTitleCase(str) {
      return str.replace(/\w\S*/g, function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
      })
    },
    submit() {
      const {
        president,
        vice_president,
        secretary,
        treasurer,
        lsp,
        party_group
      } = this

      this.$store.commit(this.$const.VOTE_FIRST, {
        president: {
          abstain: president === 'abstain' && true,
          value: president
        },
        vice_president: {
          abstain: vice_president === 'abstain' && true,
          value: vice_president
        },
        secretary: {
          abstain: secretary === 'abstain' && true,
          value: secretary
        },
        treasurer: {
          abstain: treasurer === 'abstain' && true,
          value: treasurer
        },
        lsp: {
          abstain: lsp === 'abstain' && true,
          value: lsp
        },
        id: party_group.id
      })
      this.$router.push('/confirmation')
    }
  },

  created() {
    console.log(this.$store.state)
    this.party_group = this.$store.state.VoterLogin.selectedParty
  }
}
</script>


<style>
.box-card {
  width: 80%;
  margin: 40px auto;
}

#button {
  text-transform: uppercase;
  font-variant: small-caps;
  letter-spacing: 0.1px;
  font-size: 40px;
  display: block;
  margin: 40px auto;
}

.el-radio__label {
  font-size: 20px;
}

.el-card__body {
  padding-top: 60px;
}

h2 {
  font-size: 30px;
}

.title {
  position: relative;
}

.title::before {
  display: block;
  content: attr(namehere);
  position: absolute;
  top: -120%;
  left: 0;
  font-size: 14px;
}
</style>
