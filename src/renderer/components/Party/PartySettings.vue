<template>
	<div>
		<div>
			<h1>Party</h1>
			<div>
				<party-card v-for="party in parties" :key="party.id" :party="party" :deleteParty="deleteParty"></party-card>
			</div>
		</div>
	</div>
</template>


<script>
import PartyCard from './PartyCard'
export default {
  data() {
    return {
      parties: []
    }
  },
  name: 'party',
  components: {
    PartyCard
  },
  mounted() {
    this.$store.commit(this.$const.GET_PARTIES)
    this.parties = this.$store.state.SettingsAdd.parties
  },
  methods: {
    moveToMain() {
      this.$router.push('/settings')
    },
    moveToAdmin() {
      this.$router.push('/admin')
    },
    moveToLogin() {
      this.$router.push('/')
      this.$store.commit(this.$const.DEAUTHORIZE)
    },
    deleteParty(id) {
      const a = this.$electron.remote.dialog.showMessageBox({
        type: 'question',
        buttons: ['No', 'Yes'],
        defaultId: 0,
        title: 'Delete Party Group?',
        message: 'Delete Party Group?',
        cancelId: 0,
        detail: 'Are you sure you want to delete the Party Group?'
      })

      if (a) {
        this.parties = this.parties.filter(el => el.id !== id)
        this.$store.commit(this.$const.DELETE_PARTY, {
          id
        })
      }
    }
  }
}
</script>

<style>

</style>
