<template>
	<div class="mycontainer">
		<div class="left container">
			<h2 @click="moveToMain">Add</h2>
			<h2 class="ul">Parties &amp; Results</h2>
			<h2 @click="moveToAdmin">Admin</h2>
			<small @click="moveToLogin">Exit</small>
		</div>
		<div class="right container">
			<h1>Party</h1>
			<div class="body">
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
.mycontainer {
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 100vh;
}

.right {
  background-color: #555;
  display: grid;
  grid-template-rows: 1fr 3fr;
  grid-template-areas: 'h''a';
  grid-row-gap: 10px;
}

.right h1 {
  grid-area: h;
  color: white;
}

.right .body {
  grid-area: a;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(600px, 1fr));
  grid-gap: 12px;
  padding: 10px;
}

.ul {
  border-bottom: 1px solid red;
}

.mycontainer {
  display: grid;
  grid-template-columns: 1fr 5fr;
  height: 100vh;
}

.left {
  background-color: #333;
  display: flex;
  flex-direction: column;
  padding-top: 200px;
  color: whitesmoke;
}

h2.left {
  cursor: pointer;
  border-bottom: 1px solid transparent;
}
</style>
