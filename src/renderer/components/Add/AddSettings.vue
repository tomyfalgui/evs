<template>
	<div>
		<div class="add" @drop.prevent.stop="handleDrop" @dragenter.prevent.stop="handleDragOver" @dragover.prevent.stop="handleDragOver"
		@dragleave.prevent.stop="handleDragLeave" :class="dragging && 'opaque'">
			<span>
				+
			</span>
			<h3>Drop your excel file here to add a party group</h3>
			<div>
				<div>
					<div>
						<div>you</div>
					</div>
					<input type="text" placeholder="Username" v-model="username">
				</div>
				<div>
					<div>
						<div @click="toggleType">eye</div>
					</div>
					<input type="password" placeholder="Password" v-model="password" ref="passwordInput">
				</div>
			</div>
			<small tooltip="A unique username and secure password is needed to vote for a party group." tooltip-position="bottom">What is this?</small>
		</div>
	</div>
</template>


<script>
export default {
  data() {
    return {
      logins: []
    }
  },
  updated() {
    this.$store.commit(this.$const.GET_LOGINS)
  },
  mounted() {
    this.$store.commit(this.$const.GET_LOGINS)
    this.logins = this.$store.state.SettingsAdd.logins
    console.log(this.logins)
  },
  name: 'Add',
  data() {
    return {
      dragging: false,
      username: '',
      password: ''
    }
  },
  methods: {
    back() {
      this.$router.push('/')
      this.$store.commit(this.$const.DEAUTHORIZE)
    },
    toggleType() {
      if (this.$refs.passwordInput.type === 'text') {
        return (this.$refs.passwordInput.type = 'password')
      } else {
        return (this.$refs.passwordInput.type = 'text')
      }
    },
    doFile(files) {
      const f = files[0]
      const reader = new FileReader()
      reader.onload = e => {
        let data = e.target.result
        data = new Uint8Array(data)
        this.processWb(
          this.$xlsx.read(data, {
            type: 'array'
          })
        )
      }
      reader.readAsArrayBuffer(f)
    },
    processWb(wb) {
      wb.SheetNames.forEach(el => {
        const w = this.$xlsx.utils.sheet_to_json(wb.Sheets[el])
        const s = w.map(
          ({
            lsp,
            party_name,
            president,
            vice_president,
            secretary,
            treasurer
          }) => {
            console.log(
              lsp,
              party_name,
              president,
              vice_president,
              secretary,
              treasurer
            )
            let p, vp, s, treas, ls
            /// STILL DOESNT WORK FIX NULL HANDLE MOST IMPORTANT
            p =
              president != 'null'
                ? {
                    name: president,
                    points: 0
                  }
                : false
            vp =
              vice_president != 'null'
                ? {
                    name: vice_president,
                    points: 0
                  }
                : false
            s =
              secretary != 'null'
                ? {
                    name: secretary,
                    points: 0
                  }
                : false
            treas =
              treasurer != 'null'
                ? {
                    name: treasurer,
                    points: 0
                  }
                : false
            ls =
              lsp != 'null'
                ? {
                    name: lsp,
                    points: 0
                  }
                : false
            console.log(p, vp, s, treas, ls)
            return {
              lsp: ls,
              party_name: party_name,
              president: p,
              secretary: s,
              vice_president: vp,
              treasurer: treas
            }
          }
        )

        if (this.username === '' || this.password === '') {
          // ERROR HANDLE USER INTERFACE
          return console.log('NO WAY')
        }

        const unique = this.logins.some(el => {
          console.log(el.username, this.username)
          return el.username === this.username || el.password === this.password
        })

        // HANDLE NULL NAMES IN CASES WHERE THERE ARE NO RUNNERS
        console.log(unique)
        if (this.logins.length) {
          if (unique) {
            // ERROR HANDLE USER INTERFACE
            return console.log(
              'USERNAME OR PASSWORD IS TAKEN. PLEASE SELECT NEW ONE'
            )
          }
        }
        this.$store.commit(this.$const.NEW_PARTY_GROUP, {
          party_group: s,
          username: this.username,
          password: this.password
        })
        this.username = ''
        this.password = ''
        this.$store.commit(this.$const.GET_LOGINS)
        this.logins = this.$store.state.SettingsAdd.logins
      })
    },
    handleDrop(e) {
      this.doFile(e.dataTransfer.files)
      this.dragging = false
    },
    handleDragOver(e) {
      e.dataTransfer.dropEffect = 'copy'
      this.dragging = true
    },
    handleDragLeave(e) {
      this.dragging = false
    },
    navigateToHelp() {
      this.$router.push('/help')
    }
  }
}
</script>



<style scoped>
[tooltip] {
  position: relative;
  cursor: help;
}

[tooltip]:hover::before,
[tooltip]:hover::after {
  opacity: 1;
}

[tooltip]::before,
[tooltip]::after {
  opacity: 0;
  transition: opacity 0.2s;
  position: absolute;
  left: 50%;
}

[tooltip]::before {
  content: '';
  border-width: 10px 8px 0 8px;
  border-style: solid;
  border-color: rgba(0, 0, 0, 0.3) transparent;
  transform: translateX(-50%);
  top: -20px;
}

[tooltip]::after {
  content: attr(tooltip);
  text-shadow: 1px 1px 2px 2px rgba(0, 0, 0, 0.3);
  background-color: rgba(0, 0, 0, 0.4);
  top: -20px;
  font-size: 14px;
  width: 300px;
  transform: translateX(-50%);
  padding: 14px;
  border-radius: 10px;
  color: #eee;
  transform: translate(-50%, -100%);
  pointer-events: none;
}

[tooltip-position='bottom']::after {
  top: 100%;
  margin-top: 8px;
  transform: translateX(-50%) translateY(0%);
}

[tooltip-position='bottom']::before {
  top: 100%;
  margin-top: 8px;
  transform: translateX(-50%) translatey(-100%) rotate(-180deg);
}

.opaque {
  opacity: 0.4;
}
</style>
