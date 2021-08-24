import Vue from 'vue';

import AppLayout from './layout/index.vue';
import router from './router';
import store from './store';
import grapesjs from './editor/dist/grapes.min.js';
import './mixins';
import './plugins';
// import './thirdParty'
// import './scss/style.scss'
// import './assets/fonts/bebasneue.css'
import '@/store/subscriber.js';
import FlashMessage from '@/components/FlashMessage';
import BaseFrontFlowLayout from '@/layout/BaseFrontFlowLayout';

// global vue component registration
Vue.component('FlashMessage', FlashMessage);
Vue.component('BaseFrontFlowLayout', BaseFrontFlowLayout);

Vue.config.productionTip = false;
Vue.prototype.$editor = grapesjs.init({
  container: '#gjs'
});

const userProjectInfo = localStorage.getItem('userProjectInfo');
store.dispatch('frontflow/SET_USER_PROJECT_INFO', JSON.parse(userProjectInfo));

window.addEventListener('offline', event => {
  store.dispatch('toast/setResponseMessage', {
    type: 'error',
    message: 'Your are currently offline'
  });
});

window.addEventListener('online', event => {
  store.dispatch('toast/setResponseMessage', {
    type: 'success',
    message: 'Your internet connection was restored'
  });
});

new Vue({
  name: 'Root',
  router,
  store,
  mounted() {
    store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth);
    window.addEventListener('resize', () =>
      store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth)
    );
  },

  beforeDestroy() {
    window.removeEventListener('resize', () =>
      store.commit('dom/SET_WINDOW_WIDTH', window.innerWidth)
    );
  },
  render: h => h(AppLayout)
}).$mount('#app');
