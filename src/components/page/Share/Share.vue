<template>
  <div class="share">
      <NavBar leftIcon="icon-fanhui"   fixed="true" title="分享" @leftActive="back()"  />
     <main class="main">
           <img src="../../../assets/images/ercode.jpg"/>
           <div class="text">
             <p>扫描上方二维码</p>
              <p>与朋友分享此APP客户端吧！</p>
           </div>
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
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .text{
      text-align: center;
      font-size: 16px;
      line-height: 30px;
    }
}
</style>
