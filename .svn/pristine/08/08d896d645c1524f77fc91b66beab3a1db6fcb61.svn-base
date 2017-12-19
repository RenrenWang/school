<template>
  <div class="table">
     <NavBar  leftIcon="icon-fanhui"  fixed="true" title="楼盘表" @leftActive="back()"/>
       <main class="main">
     
              <div class="table-top">
              <span>全部（{{sum}}）</span>
            <span :style="{color:sv.codeComment}" v-for="sv  in roomStatusData"   >
              {{sv.codeValue}}({{sv.roomStatusCount}})
               
             </span>
           
       </div>
     
    <div class="table-item" v-for="fv in list">
        <p class="table-item-t"><span>{{fv.roomFloor}}层</span></p> <!--:class="[v%2==1? 'itemUseColor':'',v%3==1?'itemfreeColor':'']"-->
           <ul>
               <li v-for="rv in  fv.roomData"  :style="{background:rv.roomStatuscolor}">
                  <router-link :to="{ name: 'rootManageD', params: { id:rv.roomNo }}">{{rv.roomName}}</router-link>
               </li>
              
           </ul>
    </div>   
       </main>
     
  </div>
</template>

<script>
import NavBar from '../../common/NavBar/NavBar.vue'
export default {
  name:'table',
  data () {
    return {
     list:[],
     roomStatusStat:[],
     roomStatusData:[],
      sum:0
    }
  },

  mounted(){
      this.getData();
     
  },
  methods:{
  sumAll(){
      
      let sum=0;
     this.list.map((item,index)=>{
         sum+=item.roomData.length;
     })
    this.sum=sum
  
      
  },
  getData(){
     this.$http.get(BASEURL+'/roomInfoAction.action?postType=ROOMSIM&buildingNo='+this.$route.params.id)
  
     .then((data)=>{
     this.list=data.data.data;
   
     this.roomStatusData=data.data.roomStatusData;
      this.sumAll();
     })
  },
    styleColor(statusId){
       
    },
    number(n,v){
       return    v<10?  n+"0"+v:n+""+v;
    },
    back(){

      this.$router.go(-1);
     
    }
  },
  components:{
    NavBar
  }
}
</script>


<style scoped lang="scss">
@import "../../../assets/style/base.scss";


.table {

  
  .table-top{
     display:flex;
     flex-direction:row;
      justify-content:center;
      margin:rem(15px) 0;
       >span{
         padding:rem(15px);
         font-szie:18px;
       }
  }
  .table-item{
     display:flex;
     flex-direction:row;
     text-align:center;
    
     >p{
      width:15%;
      flex-basis: 15%;
      border:1px solid #000;
      box-sizing: content-box;
      font-size:14px;
      display:flex;
      align-items:center;
      justify-content:center;
      background:$xlColor;
        border:1px solid #fff;
     }
    >ul{
         flex:1;
         display:flex;
         flex-direction:row;
         flex-wrap:wrap;
         >li{   
          width:20%;
         border:1px solid #fff;
          padding:rem(15px);
          flex-basis: 20%;
          padding:rem(15px);
          box-sizing: border-box;
          background-color:$lColor;

          >a{
            display:flex;
            text-align:center;
          }
         }
     }
    
    }
.main{
  overflow-y:scroll;
  position:fixed;
  padding-top:0;
  padding-bottom:30px;
  width:100%;
   height:100%;
  top:$topBarH;
  bottom:$topBarH;
  background:$mianBgColor;
 }  
}
</style>
