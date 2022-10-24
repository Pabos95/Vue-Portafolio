<template>
  <nav>
     <b-nav :vertical="this.$vssWidth<600 ?true:false" tabs>
     <b-form-select @change="changeLocale" v-model="$i18n.locale" :options="options"></b-form-select>
     <b-nav-item title="Home" :to="{path:'/home', params: { lang : currentLanguage } }"><p>{{ $t("home") }}</p></b-nav-item>
     <b-nav-item title="Bio" :to="{path: '/bio', params: {lang : currentLanguage } }"><p>{{ $t("bio") }}</p></b-nav-item>
      <b-nav-item title="Contact" :to="{path: '/contact', params: {lang : currentLanguage} }"><p>{{ $t("contact-me") }}</p></b-nav-item>
   </b-nav>
  </nav>
  <router-view/>
  <AppFooter/>
</template>

<style lang="scss">
#app {
  font-family:  Roboto, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
  p {
    margin: 0rem;
  }
}
nav ul {
  background-color: antiquewhite;
  select {
    flex-basis: max-content;
  }
}
nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import { VueScreenSizeMixin } from 'vue-screen-size';
import AppFooter from '@/components/AppFooter.vue'
export default {
  mixins: [VueScreenSizeMixin],
  name: 'App',
    components: {
    AppFooter,
  },
  data(){
    return {
      currentLanguage: 'en',
      options:   [{ value: 'en', text: 'English' },
          { value: 'es', text: 'Español' },
          { value: 'pt', text: 'Português' }],
    }
  },
  methods: {
    /** 
     * This function changes the language to the one chosen in the dropdown and saves it on the local storage
     * @param {string} newVal - The new value of the locale (en, pt or es)
     * **/
    changeLocale(newVal){
      this.currentLanguage = newVal;
      localStorage.setItem('language', newVal);
    },
  }
}
</script>