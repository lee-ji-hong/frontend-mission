import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';
import router from './router';
import store from './store';

createApp(App).use(store).use(router).mount('#app');

// font-awesome과 관련된 import를 정의
library.add(faUserSecret);
App.component('font-awesome-icon', FontAwesomeIcon);
