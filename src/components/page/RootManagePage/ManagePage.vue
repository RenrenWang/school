<template>
  <div class="ManagePage">
   <!--rightIconTwo="icon-tables-copy"@rightActiveTwo="toTable()"-->
       <NavBar leftIcon="icon-fanhui" rightIcon="icon-sousuo-sousuo"   fixed="true" title="房间信息"  @leftActive="back()"  />
    
       <main class="main" v-if="!isShowMode">
            
            <p class="selectMode"> <a href="javascript:void(0);"  @click="showMode">{{buildingName!=""?buildingName:'选择楼幢'}}</a></p>
            <div class="filterKind">           
                 <a href="javascript:void(0);" @click="Changestatus(0)"   :class="['all-btn',status==0?'active':'']">全部</a>
                 <a href="javascript:void(0);" @click="Changestatus(108)" :class="['all-btn',status==108?'active':'']">使用</a>
                 <a href="javascript:void(0);" @click="Changestatus(107)" :class="['all-btn',status==107?'active':'']">空闲</a>
                 <a href="javascript:void(0);" @click="Changestatus(109)" :class="['all-btn',status==109?'active':'']">维修</a>
            </div>
             <!-- <div class="manage-list">
                 <router-link to="/rootManageD"  v-for="v in 30"  key="v">
                       <img src="/static/images/about.jpg" />
                       <div class="manage-list-text">
                              <div class="m-top">
                                      <h3>楼宇名称{{v}}</h3>
                                     
                                </diV>
                                <p><span class="h3">楼宇名称{{v}}</span><span>102017{{v}}</span><span>所在层</span></p>
                              
                                <p><span>管理部门</span><span>使用部门</span></p>
                                <p><span>面积：200㎡</span><span>200㎡</span></p>
                                <p><span>类别</span><span>用途</span></p>
                              
                        
                       </div>
                 </router-link>
            </div>-->
            <ListView :dataUrl="listUrl"  :ItemShowType="2" :top="roomTop"/>
       </main>

       <div class="show-mod" v-show="isShowMode">
           <span class="iconfont icon-guanbi close" @click="showMode"></span>
           <div class="show-mod-content">
                <div class="filterKind">
                 <a href="javascript:;" :class="['all-btn',{active:typeXq==-1}]" @click="changeTypeXq(0,-1)">全部</a>
                 <a href="javascript:;" :class="['all-btn',{active:typeXq==index}]" @click="changeTypeXq(v.id,index)" v-for="(v,index) in xqList">{{v.codeValue}}</a>
 
              
              </div>
               <div class="filterKind">
                 <a href="javascript:;" :class="['all-btn',{active:typeBuild==''}]" @click="changeTypeBuild('')">全部</a>
                 <a href="javascript:;" :class="['all-btn',{active:typeBuild=='A'}]" @click="changeTypeBuild('A')">A-G</a>
                 <a href="javascript:;" :class="['all-btn',{active:typeBuild=='B'}]" @click="changeTypeBuild('B')">H-N</a>
                 <a href="javascript:;" :class="['all-btn',{active:typeBuild=='C'}]" @click="changeTypeBuild('C')">O-T</a>
                 <a href="javascript:;"  :class="['all-btn',{active:typeBuild=='D'}]" @click="changeTypeBuild('D')">U-Z</a>
              
              </div>
                 
              <ul class="floor-list">
                   <li @click="selectBuild(v.buildingNo,v.buildingName)" v-for="v in buildList" :key="v.buildingNo">{{v.buildingName}}</li>
              </ul>
           </div>
       </div>
  </div>
</template>

<script>
import NavBar from '../../common/NavBar/NavBar.vue'
import ListView from '../../common/ListView/ListView.vue'
export default {
  name: 'ManagePage',
  data () {
    return {
          listUrl:"/roomInfoAction.action?postType=ROOM",
          isShowMode:false,
          roomTop:'roomTop',
          status:0,
          buildList:[],
          buildingName:'',
          buildingNo:'',
          typeBuild:'',
          xqList:'',
          typeXq:-1,
          xqNo:'',

    }
  },
  components:{
     NavBar,
     ListView
  },
methods:{
changeTypeBuild(str){
    this.typeBuild=str;
    this.getBuildData();
},
changeTypeXq(id,str){
   
 this.typeXq=str;
 if(id!=0){
  this.xqNo=id;
  this.getBuildData();
 }else{
     this.xqNo='';
      this.getBuildData();
 }
   
},
getXq(){
 this.$http.get(BASEURL+'/baseDataAction.action?dataType=CELLAREA')
       .then((data)=>{
         data=data.data;
         this.xqList=data.data;
          
       })
},
    selectBuild(v,name){
    
    this.buildingName=name;
    let buildingNo=v!=''?'&buildingNo='+v:'';
    this.buildingNo=v;
     this.isShowMode=!this.isShowMode;
   this.listUrl="/roomInfoAction.action?postType=ROOM&roomStatus="+(this.status==0?"":this.status)+buildingNo;
    },
    //   getDataP(){

    //    this.$http.get(BASEURL+'/buildInfoAction.action?postType=BUILDSIM&dataType=CELLAREA&locNo=233&buildName=1')
    //    .then((data)=>{
    //        data=data.data;
    //      this.buildList=data.data;
          
    //    })
    //   },
    getBuildData(){
       this.$http.get(BASEURL+'/buildInfoAction.action?postType=BUILDSIM&dataType=CELLAREA'+( this.xqNo!=''?'&locNo='+this.xqNo:'')+(this.typeBuild!=''?'&buildingSimcode='+this.typeBuild:''))
       .then((data)=>{
         data=data.data;
         this.buildList=data.data;
          
       })
    },
  Changestatus(n){
          this.status=n;
          this.listUrl="/roomInfoAction.action?postType=ROOM&roomStatus="+(this.status==0?"":this.status)+(this.buildingNo!=''?('&buildingNo='+this.buildingNo):'');
    },
       back(){

      this.$router.go(-1);
     
   },
   
   toTable(){
        this.$router.push({ path:'/table' });
   },
   showMode(){
      
       this.isShowMode=!this.isShowMode;
    if(this.isShowMode){
        this.getXq();
        this.getBuildData();
    }
       
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../../assets/style/base.scss";
// .look-table{
//    padding:rem(15px) rem(15px) 0 rem(15px);
//    text-align:right;
//    overflow:hidden;
//     >button{
//         font-size:14px;
//         color:$mainColor;
//         padding:rem(10px);
//         background:none;
//         outline:none;
//         border:1px solid $mainColor;
//         border-radius:rem(15px);
//     }
// }

.show-mod{
    position:fixed;
    top:0;
    padding:rem(10px);
    height:100%;
    width:100%;
   background:#fff;
    z-index:9999;
    box-sizing:border-box;
   overflow-y: scroll;
    .close{
        position:absolute;
        left:50%;
        top:rem(10px);
        font-size:rem(50px);
        transform:translate3d(-50%,0,0);
        color:$hColor;
    }
    .show-mod-content{
       transform:translateY(rem(65px));
      
     
       .filterKind{
           flex-wrap:wrap;
           justify-Content:space-between;
           a{
               margin:rem(10px) 0;
               width:15%;
             flex-basis: 15%;
             flex: initial;
           }
       }
       .floor-list{
           display:flex;
           flex-wrap:wrap;
           text-align:center;
        justify-content:space-between;
          >li{
              width:18%;
              margin:rem(15px) 0;
              padding:rem(15px) 0;
              border:1px solid $borderColor;
              border-radius:rem(15px);
          }
       }
    }
}
.filterKind{
    padding:rem(20px) 0;
    position:relative;
    display:flex;
    text-align:center;
    align-content: center;
    justify-content: space-between;
     flex-direction:row;
     &:after{
             @extend %borderBottomLine;
    }

    .all-btn{
        flex:1;
        height:rem(50px);
        line-height:rem(50px);
        margin:0 rem(15px);
       border-radius:rem(15px);
      box-sizing:border-box;
      border:1px solid #fff;
    }
    .active{
        border-color:$mainColor;
        line-height:rem(50px);
         color:$mainColor;
       
    }
    select{
        outline:none;
    }
}
.selectMode{
    padding:0 rem(15px);
    margin:rem(10px) 0;
    height:rem(50px);
    line-height:rem(50px);
    font-size:14px;
   
    a{
     color:$mainColor; 
    }
}

</style>
