<template>
	<nav class="navbar">
		<ul class="navbar__list">
			<li class="navbar__list-item navbar__list-item--logo">
				<img src="/static/yeh.svg" class="navbar__list-item--logo-image">
				<span class="navbar__list-item--logo-text">EVS</span>
			</li>
			<li class="navbar__list-item" >
				<router-link :to="{path: '/settings'}" class="navbar__list-item-link">
					Home
				</router-link>
			</li>
			<li class="navbar__list-item" >
				<router-link :to="{path: '/parties'}" class="navbar__list-item-link">
					Results
				</router-link>
			</li>
			<li class="navbar__list-item" >
				<router-link :to="{path: '/admin'}" class="navbar__list-item-link">
					Admin
				</router-link>
			</li>
			<li class="navbar__list-item" >
				<router-link :to="{path: '/help'}" class="navbar__list-item-link">
					Help
				</router-link>
			</li>
			<li class="navbar__list-item navbar__list-item--right" @click="moveToLogin" >
				<router-link :to="{path: '/'}" class="navbar__list-item-link" >
					Exit
				</router-link>
			</li>
		</ul>
	</nav>
</template>


<script>
export default {
  name: 'NavBar',
  methods: {
    moveToLogin() {
      this.$store.commit(this.$const.DEAUTHORIZE)
    }
  }
}
</script>

<style lang="scss">
.navbar {
  height: 60px;
  background-color: #eee;

  &__list {
    display: flex;
    list-style: none;
    padding: 8px 16px;

    align-items: center;
    height: 100%;
  }

  &__list-item {
    margin-right: 80px;
    cursor: pointer;

    &-link {
      color: #555;
      text-decoration: none;
      position: relative;
    }
    &--right {
      margin-left: auto;
      margin-right: 0;
    }
    &--logo {
      display: flex;
      width: 200px;
      justify-content: flex-start;
      align-items: center;
      margin-right: 0;

      &-text {
        font-size: 20px;
        font-weight: 700;
        color: #333;
      }
      &-image {
        display: block;
        width: 30px;
        margin-right: 10px;
      }
    }
  }
}
</style>
