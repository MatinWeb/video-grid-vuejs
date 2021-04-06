<template>
  <div class="video_parent">
    <div id="app" v-if="specialVideo.VideoUrl">
      <Media :kind="'video'" :controls="true" :src="[specialVideo.VideoUrl]"> </Media>
    </div>
    <div id="content">
        <h2>{{specialVideo.Title}}</h2>
        <p>{{specialVideo.Description}}</p>
    </div>
  </div>
  
</template>
<script>
import { mapGetters } from "vuex";
import Media from "@dongido/vue-viaudio";
export default {
  props: ["id"],
  components: {
    Media,
  },
  watch: {
    '$route'(to, from) {
      if(this.id == to.params.id){
        debugger;
        alert('false')
        
      }else{
        debugger;
        this.$store.dispatch('accessData')
      }
    }
  },
  computed: {
    ...mapGetters(["specialVideo"]),
  },
  mounted() {
    debugger;
    this.$store.dispatch("showingVideo", this.id);
    console.log(this.specialVideo);
  },
};
</script>

<style scoped>
.video_parent {
  width: 60%;
  margin-left: 20%;
  float: left;
  margin-bottom: 20vh;
  box-shadow: 0 0 10px 0px grey;
}
#app >*{
width: 100%;
height: 100%;
float: left;
}
#content{
    padding: 10px 0 10px 10%;
}
#content> h2{
    padding: 20px 0;
    color: black;
    font-weight: bolder;
}
#content> p{
    padding: 20px 0;
    color: gray;
    font-size: 15px;
}
</style>