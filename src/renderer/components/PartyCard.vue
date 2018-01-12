<template>
	<div class="card">

		<h1>Party Group id#{{party.id}} <button @click="deleteParty(party.id)">X</button></h1>
		<div class="login">
			<label for="" class="down">
				<em>
					Username Login
				</em>
				<input type="text" :value="party.username">
			</label>
			<label for="" class="down">
				<em>
					Password Login
				</em>
				<input type="text" :value="party.password">
			</label>
		</div>
		<ul v-for="pt in party.parties" :key="pt.party_name">
			<!-- REFACTOR -->
			<li>
				<strong>
					{{pt.party_name}}
				</strong>
			</li>
			<li>{{pt.lsp.name}} - {{pt.lsp.points}}</li>
			<li>{{pt.president.name}} - {{pt.president.points}}</li>
			<li>{{pt.vice_president.name}} - {{pt.vice_president.points}}</li>
			<li>{{pt.secretary.name}} - {{pt.secretary.points}}</li>
			<li>{{pt.treasurer.name}} - {{pt.treasurer.points}}</li>
		</ul>
	</div>
</template>


<script>
export default {
  name: 'PartyCard',
  props: ['party', 'deleteParty']
}
</script>


<style scoped>
.card {
  background-color: white;
  padding: 10px 12px;
  color: black;
}

h1 {
  color: black;
}

.down {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
</style>
