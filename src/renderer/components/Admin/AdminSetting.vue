<template>
	<div class="admin">
		<h1>Change Admin Login</h1>
		<div class="admin__section">
			<form @submit.prevent="changeUsername">
				<h2>Username</h2>
				<div class="input-wrapper">
					<label for="uold" class="input-wrapper__label">Old Username</label>
					<input type="text" placeholder="Current Username" v-model="username.old" id="uold" class="input-wrapper__input">
				</div>
				<div class="input-wrapper">
					<label for="unew" class="input-wrapper__label">New Username</label>
					<input type="text" placeholder="New Username" v-model="username.new" id="unew" class="input-wrapper__input">
				</div>
				<div class="input-wrapper">
					<label for="cunew" class="input-wrapper__label">Confirm New Username</label>
					<input type="text" placeholder="Confirm New Username" v-model="username.cnew" class="input-wrapper__input">
				</div>
				<input type="submit" class="input__submit">
			</form>
		</div>
		<div class="admin__section">
			<form @submit.prevent="changePassword">
				<h2>Password</h2>
				<div class="input-wrapper">
					<label for="pold" class="input-wrapper__label">Old Password</label>
					<input type="text" placeholder="Current Password" v-model="password.old" id="pold" class="input-wrapper__input">
				</div>
				<div class="input-wrapper">
					<label for="pnew" class="input-wrapper__label">New Password</label>
					<input type="text" placeholder="New Password" v-model="password.new" id="pnew" class="input-wrapper__input">
				</div>
				<div class="input-wrapper">
					<label for="cpnew" class="input-wrapper__label">Confirm New Password</label>
					<input type="text" placeholder="Confirm New Password" v-model="password.cnew" id="cpnew" class="input-wrapper__input">
				</div>
				<input type="submit" class="input__submit">
			</form>
		</div>
	</div>
</template>


<script>
import NavBar from '../NavBar'

export default {
  components: {
    NavBar
  },
  methods: {
    getAdminLogins() {
      this.$store.commit(this.$const.GET_ADMIN_LOGIN)
      const { username, password } = this.$store.state.SettingsAdmin
      this.checkers.username = username
      this.checkers.password = password
    },
    changeUsername() {
      const { username } = this.checkers
      if (this.username.old === username) {
        if (this.username.new === this.username.cnew) {
          if (this.username.new === this.username.old) {
            // HANDLE USER ERROR
            console.log('username must not be the same')
          } else {
            // HANDLE USER Success
            console.log('success username')
            this.$store.commit(this.$const.CHANGE_ADMIN_USERNAME, {
              newUsername: this.username.new
            })
            this.getAdminLogins()
          }
        } else {
          // HANDLE USER ERROR
          console.log('usernames not equal')
        }
      } else {
        // HANDLE USER ERROR
        console.log('old username != new username')
      }
    },
    changePassword() {
      const { password } = this.checkers
      if (this.password.old === password) {
        if (this.password.new === this.password.cnew) {
          if (this.password.new === this.password.old) {
            // HANDLE USER ERROR
            console.log('passwords must not be the same')
          } else {
            // HANDLE USER Success
            console.log('password success')
            this.$store.commit(this.$const.CHANGE_ADMIN_PASSWORD, {
              newPassword: this.password.new
            })
            this.getAdminLogins()
          }
        } else {
          // HANDLE USER ERROR
          console.log('passwords not equal')
        }
      } else {
        // HANDLE USER ERROR
        console.log('password old != password new')
      }
    }
  },
  data() {
    return {
      username: {
        old: '',
        new: '',
        cnew: ''
      },
      password: {
        old: '',
        new: '',
        cnew: ''
      },
      checkers: {
        username: '',
        password: ''
      }
    }
  },
  name: 'admin',

  created() {
    this.getAdminLogins()
  }
}
</script>


<style scoped lang="scss">
.admin {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  align-items: center;
  padding-top: 32px;

  &__section {
    margin-top: 2rem;
  }
}

.input-wrapper {
  display: flex;
  flex-direction: column;
  margin-bottom: 0.5rem;

  &__input {
    width: 300px;
    border: 1px solid rgba(0, 0, 0, 0.4);
    padding: 6px 16px;
    border-radius: 2px;
    padding-left: 4px;
    font-size: 14px;
  }

  &__label {
    font-size: 20px;
  }
}

.input__submit {
  width: 100px;
  border: 1px solid rgba(0, 0, 0, 0.4);
  background-color: var(--blue);
  color: white;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.4);
  font-weight: 600;
  text-transform: uppercase;
  padding: 6px 16px;
  letter-spacing: 0.2px;
  border-radius: 2px;
  font-size: 14px;
  box-shadow: 0 2px 15px 3px rgba(0, 0, 0, 0.18);
  transition: transform 0.2s, box-shadow 0.2s;
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 8px 15px 2px rgba(0, 0, 0, 0.18);
  }
}
</style>
