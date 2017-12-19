<template>
  <div class="">
       <NavBar    leftIcon="icon-fanhui"   fixed="true" title="事件处理详情" @leftActive="back()"  />
      <main class="main">
          <div class="imhd">
              <p>处理人： <input type="text" value="" /></p>
              <p><textarea   style="resize:none;width:100%;height:80px" placeholder="请输入处理前描述" rows="3" cols="50" value=""></textarea></p>
          </div>
      </main>
  </div>
</template>

<script>
import NavBar from '../../common/NavBar/NavBar.vue'
export default {
  name: '',
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
@import "../../../assets/style/base.scss";
.imhd{
    padding:0 10px;
    p{
        padding:5px 0;
        margin-top:10px;
         border-bottom:1px solid  #f1f1f1;
         input{
             border:none;
         }
    }
}
</style>
