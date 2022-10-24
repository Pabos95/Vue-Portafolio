import BootstrapVue3 from 'bootstrap-vue-3';
import { createApp } from 'vue';
import * as mdb from 'mdb-vue-ui-kit';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'mdb-vue-ui-kit/css/mdb.min.css';
import i18n from "./i18n";
import router from './router'
import VueSocialSharing from 'vue-social-sharing';
const app = createApp(App).use(router);
app.use(VueSocialSharing);
app.use(BootstrapVue3);
app.use(i18n);
app.use(mdb);
app.mount('#app');
