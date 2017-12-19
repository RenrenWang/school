<template>
  <div class="">
     <NavBar    leftIcon="icon-fanhui"   fixed="true" title="事件处理" @leftActive="back()"  />
     <main class="main" style="background:#f0eff4;height:100%;">
           <ul class="qs-list">
                 <li v-for="v in 20">
                      <div class="qs-list-c">
                           <h3>标题</h3>
                           <p><span>事件类型：类型1</span></p>
                           <p><span>上报地点：杭州</span></p>
                           <p><span>反映人：张三</span></p> 
                           <p><span>反映人电话：18358716921</span></p>     
                      </div>
                    <div class="cl-btns">
                        <a href="javascript:;" class="qs-btn">处理</a>
                        <a href="javascript:;" class="qs-btn">结办</a>
                    </div>
                 </li>
           </ul>
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
.qs-list{
  background:#fff;
  >li{
    padding:10px;
     display:flex;
     flex-direction:row;
     justify-content:space-between;
      border-bottom:1px solid  #f1f1f1;
      .qs-list-c{

           >h3{
            font-size:18px;
         }
         >p{

           margin-top:5px;
           >span{
             font-size:14px;
            color:#929294;
           }
         } 
      }
      >.cl-btns{
       display:flex;
        flex-direction:column ;
        justify-content:center;
        >.qs-btn{
            margin:10px 0;
            width:50px;
            color:#288bf0;
            font-size:14px;
        }
      }
      
  }
  
}
</style>
