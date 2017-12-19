<template>
  <div id="home">
      <NavBar leftIcon="icon-caidan" @leftActive="toScan()" fixed="true" logo="./static/images/home_title.png" />
      <main class="main">
       <Carousel  paginationActiveColor="#fff"  :paginationPadding=3  :paginationSize=6  paginationColor="#dbdbdb" :perPage=1>
       
        <slide  >
          <img src="http://120.26.85.17/gisapp/appimages/home/home_1.jpg"/>
        </slide>
        
         <slide  >
          <img src="http://120.26.85.17/gisapp/appimages/home/home_2.jpg"/>
        </slide>
         <slide  >
          <img src="http://120.26.85.17/gisapp/appimages/home/home_3.jpg"/>
        </slide>
        <slide  >
          <img src="http://120.26.85.17/gisapp/appimages/home/home_4.jpg"/>
        </slide>
         <slide  >
          <img src="http://120.26.85.17/gisapp/appimages/home/home_5.jpg"/>
        </slide>
    </Carousel>
 
    <Grid :dataList="list"/>
      </main>
  </div>
</template>
<script>
import NavBar from '../../common/NavBar/NavBar.vue'
import Grid from '../../common/Grid/Grid.vue'
import { Carousel, Slide } from 'vue-carousel';
export default {
  name: 'home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      list:[]
    //  list:[
    //    {"title":"通知公告","icon":'./static/images/notice.png',"toUrl":"/notice"},
    //    {"title":"政策法规","icon":'./static/images/zffg.png',"toUrl":"/politics"},
    //    {"title":"楼幢信息","icon":'./static/images/lcgl.png',"toUrl":"/managePage"},
    //    {"title":"房间信息","icon":'./static/images/fjgl.png',"toUrl":"/rootManagePage"},
    //    {"title":"公用房信息","icon":'./static/images/gyf.png',"toUrl":"/pubManagePage"},
    //    {"title":"楼房使用查询","icon":'./static/images/gyzf.png',"toUrl":"/selectRoot"},
    //    {"title":"归属使用查询","icon":'./static/images/syry.png',"toUrl":"/selectPersonnel"},
    //    {"title":"房屋设施查询","icon":'./static/images/sl.png',"toUrl":"/toolManagePage"},
    //    {"title":"一幢一码","icon":'./static/images/code.png',"toUrl":"/"},
    //    {"title":"一屋一码","icon":'./static/images/code.png',"toUrl":"/"},
    //    {"title":"一物一码","icon":'./static/images/code.png',"toUrl":"/"},
      
    //    {"title":"更多","icon":'./static/images/more.png',"toUrl":"/"},
     
       
    //    ]
     
    }
  },
  mounted(){
     let   user=this.$root.isLogin();
    //  alert(user.loginName);
    let  str="";
    if(user||user.loginName){
        str="&usrCd="+user.loginName;
    }else{
     str="";
    }
  this.$http.get(BASEURL+'/baseDataAction.action?appMenu=&dataType=MAIN'+str)
      .then(data=>{
     // alert(JSON.stringify(data.data));
        this.list=data.data.data
      })
  },
  methods:{
    
    toScan(){
     
     //this.$router.push({path:'/scan'});
    }
  },
  components:{
    NavBar,
    Carousel,
    Slide,
    Grid
  }
}
</script>


<style  lang="scss">
@import "../../../assets/style/rem.scss";
#home{
  .VueCarousel{
$h: rem(450px);
 height:$h;

  width: 100%;


  .VueCarousel-slide{
    position: relative;
      width: 100%;
      height:$h;

    img{
         width: 100%;
         height:100%;
         vertical-align: middle;

   }


  }
  .VueCarousel-pagination {

      position: absolute;
      bottom: rem(10px);
    
   }
}
  }
 
</style>
