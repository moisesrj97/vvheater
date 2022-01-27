/* eslint-disable newline-per-chained-call */
import { createApp } from 'vue';
import VueApexCharts from 'vue3-apexcharts';

import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';

createApp(App).use(VueApexCharts).use(store).use(router).mount('#app');
