<template>
  <div class="noticeD">
         <NavBar leftIcon="icon-fanhui"  rightIcon="icon-ttpodicon" fixed="true" title="政法法规详情"   @leftActive="back()"/>
         <main class="main">
                 <div class="top-noticeD">
                         <h3>{{content.infoTitle}}</h3>
                          <div class="topN-info"> 
                                <p><span class=" iconfont  icon-shijian"></span><span>{{fmtDate(content.infoRedate)}}</span></p>
                                <!-- <p><span class=" iconfont icon-chakan"></span><span>1000</span></p> -->
                           </div>  
                           <p class="from">发布人：{{content.infoReuser}}</p> 
                 </div>
                  <div class="d-title">
					   	   <span class="line"></span>  
					   	      <h5>通知内容</h5>
					   	   <span class="line"></span>
				  </div>
                   <p class="notice-text">
                       {{content.infoDescription}}

                   </p>
         </main>
  </div>
</template>

<script>
import NavBar from '../../common/NavBar/NavBar.vue'

export default {
  name: 'noticeD',
  data () {
    return {
      content:{},
      fmtDate:fmtDate
    }
  },
  mounted(){
this.getData();
  },
  methods:{

    getData(){
      this.$http.get(BASEURL+'/newsAction.action?affType=SF&infoId='+this.$route.params.id)
        .then((data)=>{
          data=data.data;
          this.content=data.data[0];
            
        })
    },
       back(){

      this.$router.go(-1);
     
   }
  },
  components:{
      NavBar,
     
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../../assets/style/base.scss";
 .top-noticeD{
     display:flex;
       flex-direction:column;
       padding:rem(20px) rem(20px);
       >h3{
           font-size:18px;
           
       }
       p{
         margin-top:rem(10px);
       }
       .topN-info,.from{
         font-size:14px;
        color:$hColor;   
         margin-top:rem(30px);      
       }
       .topN-info{
          
           display:flex;
           flex-direction:row;
           justify-content: space-between;
        
       }
   
 }
     .d-title{
     	display: flex;
     	display: -webkit-flex;
     	height: rem(60px);
     	align-items: center;
     	 -webkit-align-items: center;
     }
    .d-title .line{
       border-bottom: 1px  dashed  #8f8f94;
     	height: 1px;
     	flex: 1;
     	-webkit-flex: 1;
     	
     }
    .d-title h5{
    	color: #8f8f94;
    	margin: 0 10px;
    	font-size: 16px;
    	
      }
      .notice-text{
        padding:rem(10px) rem(20px);
        font-size:16px;
        line-height:25px;
      }
</style>
