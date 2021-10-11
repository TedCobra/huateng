import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

// plugins
import 'lib-flexible';
import { Popup, Toast } from 'vant';
Vue.use(Popup);
Vue.use(Toast);

// custom
import './assets/styles/style.scss';

Vue.config.productionTip = false;
new Vue({
	router,
	store,
	render: (h) => h(App)
}).$mount('#app');
