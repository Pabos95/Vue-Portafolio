"use strict";(self["webpackChunkcode_challenge"]=self["webpackChunkcode_challenge"]||[]).push([[701],{8701:function(t,e,r){r.r(e),r.d(e,{default:function(){return p}});var s=r(3396),a=r(7139);const c={key:0,class:"blog-post fadeInOut"},i={class:"article-content"},n={class:"article-author"},l={class:"article-date"};function o(t,e,r,o,u,d){return d.currentArticle?((0,s.wg)(),(0,s.iD)("article",c,[(0,s._)("h1",null,(0,a.zw)(d.currentArticle.Title),1),(0,s._)("span",i,[(0,s.Uk)((0,a.zw)(d.currentArticle.Description)+" ",1),(0,s._)("h3",null,(0,a.zw)(t.$t("tags")),1),((0,s.wg)(!0),(0,s.iD)(s.HY,null,(0,s.Ko)(d.currentArticle.Tags,(t=>((0,s.wg)(),(0,s.iD)("p",{key:t,class:"article-tags"},(0,a.zw)(t),1)))),128)),(0,s._)("p",n,(0,a.zw)(`${t.$t("author")} : ${d.currentArticle.Author}`),1),(0,s._)("p",l,(0,a.zw)(`${t.$t("date")} : ${d.currentArticle.created_at.substring(0,d.currentArticle.created_at.indexOf("T"))}`),1)])])):(0,s.kq)("",!0)}var u=r(471),d={name:"BlogPost",data(){return{id:this.$route.params.id,postData:null}},async created(){const t=new u.Z;this.database=t.getInstance(),this.$store.getters.getArticlesById(parseInt(this.id))||(this.postData=await this.fetchData())},methods:{async fetchData(){const{error:t,data:e}=await this.database.from("Blog").select().order("id").eq("id",this.id);if(!t)return this.$store.dispatch("setArticle",e[0]),e[0];console.error(t)}},computed:{currentArticle(){return this.$store.getters.getArticlesById(parseInt(this.id))?this.$store.getters.getArticlesById(parseInt(this.id)):this.postData}}},h=r(89);const g=(0,h.Z)(d,[["render",o]]);var p=g}}]);
//# sourceMappingURL=701.1a2687ef.js.map