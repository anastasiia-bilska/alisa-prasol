/* eslint-disable import/no-extraneous-dependencies */
import './main.scss';
import './watermark'

import { createApp } from 'vue';

import App from './App.vue';
import router from './router';

const app = createApp(App);

app.use(router);
app.mount('#app');
