import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'
import db from './DB'
import constants from './constants'
import * as XLSX from 'xlsx'

if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.config.productionTip = false
Vue.prototype.$db = db
Vue.prototype.$const = constants
Vue.prototype.$xlsx = XLSX
/* eslint-disable no-new */

new Vue({
	components: { App },
	router,
	store,
	template: '<App/>'
}).$mount('#app')
