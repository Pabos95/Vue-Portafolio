<template>
  <div class="blog"> 
  <section>
      <h1 v-if="posts.length == 0 && postsFetched">
       {{ $t('no-blog-posts')}}
      </h1>
      <template v-for="(post, index) in posts" :key="`post-${index}`">
        <blog-link  :id="post.id" :title="post.Title" :description="post.Description" />
      </template>
  </section>
  </div>
</template>
<script>
import BlogLink from "../components/BlogLink.vue"
import DatabaseService from "../services/Database.service";
export default{
  name: 'BlogView',
  components: {
    BlogLink,
  },
    data: () => ({
    postsFetched: false,
    posts: [],
    database: null,
  }),
    async mounted() {
    await this.fetchPosts();
    this.postsFetched = true; 
  },
  created() {
    const database = new DatabaseService();
    this.database = database.getInstance();
  },
   methods: {
      /***
       * This function fetches the blog posts from the Supabase database
       * **/
      async fetchPosts() {
      const { error, data } = await this.database
        .from('Blog')
        .select()
        .order('id')
        .eq('Language', localStorage.getItem('language'));

      if (error) {
        console.error(error)
        return
      }

      this.setPosts(data)
    },
    /***
     * Setter for the posts returned in the request
     ***/
    setPosts(posts) {
      this.posts = posts;
    }
  },
};
</script>
<style lang="scss">
@import 'src/styles/BlogView.scss';
</style>