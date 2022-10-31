import BootstrapVue3 from 'bootstrap-vue-3';
import { createApp } from 'vue';
import { createStore } from 'vuex'
import * as mdb from 'mdb-vue-ui-kit';
import App from './App.vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css';
import 'mdb-vue-ui-kit/css/mdb.min.css';
import i18n from "./i18n";
import router from './router'
import VueSocialSharing from 'vue-social-sharing';
const store = createStore({
    state () {
      return {
        blogPostDescription: '',
        blogPostTitle: '',
      }
    },
    mutuations: {
       SET_BLOG_POST_TITLE(state, title){
        state.blogPostTitle = title;
       },
       SET_BLOG_POST_DESCRIPTION(state, description){
        state.blogPostDescription = description;
       }
    },
    actions: {
      setTitle({commit}, newTitle){
        commit('SET_BLOG_POST_TITLE', newTitle);
      },
      setDescription({commit}, newDescription){
        commit('SET_BLOG_POST_DESCRIPTION', newDescription);
      }
    },

  })
const app = createApp(App).use(router);
app.use(store);
app.use(VueSocialSharing);
app.use(BootstrapVue3);
app.use(i18n);
app.use(mdb);
app.mount('#app');
