<template>
  <div class="share">
      <NavBar leftIcon="icon-fanhui"   fixed="true" title="分享" @leftActive="back()"  />
     <main class="main">
           <img src="../../../assets/images/ercode.png"/>
     </main>
 
  </div>
</template>

<script>
import NavBar from '../../common/NavBar/NavBar.vue'
export default {
  name: 'Share',
  data () {
    return {
   
    }
  },
  methods:{
   back(){

      this.$router.go(-1);
     
   }
  },
  components:{
      NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main{
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
