<template>
    <div class="lv-item">
             <span class="iconfont  icon-tubiaozuixin01 x-new" v-if="listViewData.create_date=='2017-06-02 16:08:27'"></span>             
             <router-link :to="{ name: 'noticeD', params: { id: listViewData.infoId }}">             	
             	
             	<h3 class="text-hidden-one">{{listViewData.infoTitle}}</h3>
                <!--<p class="lv-item-center">发布人：{{listViewData.from}}</p>-->
               <div class="lv-item-bottom"> 
                   <p><span class=" iconfont  icon-shijian"></span><span>{{listViewData.infoRedate}}</span></p>
                   <p><span class=" iconfont icon-chakan"></span><span>{{listViewData.like}}</span></p>
               </div>   
                             
            </router-link>
            <!-- <Loading :msg="msgText" :isShow="isShow"/> -->
 </div>
</template>

<script>
import   Loading  from '../Loading/Loading'
export default {
  name: 'lv-item-1',
  props:['listViewData'],
  data () {
    return {
   
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped  lang="scss">
@import "../../../assets/style/base.scss";
.lv-item{
   position:relative;
   background:#fff;
   margin-bottom:rem(15px);
   border-bottom: 1px solid #eee;
   >a{
     
       display:flex;
       flex-direction:column;
       padding:rem(35px) rem(20px);
       >h3{
           font-size:18px;
           
       }
       p{
         margin-top:rem(10px);
       }
       .lv-item-bottom,.lv-item-center{
         font-size:14px;
        color:$hColor;         
       }
       .lv-item-bottom{
           display:flex;
           flex-direction:row;
           justify-content: space-between;
        
       }
   }
   .x-new{
     position:absolute;
     right:rem(15px);
     top:rem(15px);
     color:$redColor;
    }

}
</style>
