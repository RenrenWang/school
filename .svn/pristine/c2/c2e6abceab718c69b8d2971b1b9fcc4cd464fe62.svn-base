<template>
  <div class="notice">
     <NavBar leftIcon="icon-fanhui"  fixed="true" title="楼幢详情" @leftActive="back()"  rightIcon="icon-tables-copy"   @rightActive="toTable()" />
     <main class="main">
         <ul class="tab-bar"> 
            <li @click="tabSelect(Tab_1)">
                <a href="javascript:;":class="Tab_1==isTab?'active':''">基本信息</a>
             </li>
            <li  @click="tabSelect(Tab_2)">
               <a href="javascript:;" :class="Tab_2==isTab?'active':''">房间情况</a>
            </li>
            <li  @click="tabSelect(Tab_3)">
               <a href="javascript:;" :class="Tab_3==isTab?'active':''">使用情况</a>
            </li>
            <li  @click="tabSelect(Tab_4)">
               <a href="javascript:;" :class="Tab_4==isTab?'active':''">物品信息</a>
            </li>
            
     </ul>
     <div class="tab-bar-content" v-show="Tab_1==isTab">
          <div class="listview listview-3">
                <div class="top-section">
                      <img :src="Changimgs(listviewdata_1.buildingImguri)" >
                </div>
                <div class="center-section">
                    <p><span>楼幢编号：{{listviewdata_1.buildingCode}}</span></p>
                    <p><span>楼幢名称：{{listviewdata_1.buildingName}}&nbsp;{{listviewdata_1.buildingPname}}</span></p>
                    <p><span>层数：{{listviewdata_1.buildingFloor}}</span><span>房间数：{{listviewdata_1.roomNums}}(间)</span></p>
                    <p><span>类型: {{listviewdata_1.buildingTypename}}</span></p>
                    <p><span>用途： {{listviewdata_1.buildingUsename}}</span></p>
                    <p><span>建筑面积： {{listviewdata_1.buildingArea}}&nbsp;M<sup>2</sup></span></p>
                    <p><span>使用面积： {{listviewdata_1.propertyArea}}&nbsp;M<sup>2</sup></span></p>
                    <p><span>管理部门：{{listviewdata_1.college}}</span></p>
                    <p><span>建筑年份：{{listviewdata_1.buildingYear}}</span></p>
                    <p><span>房屋位置：{{listviewdata_1.address}}</span></p>
                </div>
                
                <div class="bottom-section">
                   <div class="d-title">
					   	   <span class="line"></span>  
					   	      <h5>楼幢描述</h5>
					   	   <span class="line"></span>
				      </div>
                <p class="p-text">
                 {{listviewdata_1.comment}}
                 <img :src="Changimgs(v.imguri)"  v-for="v in  listviewdata_1.imgdata"/>
                </p>
                </div>
          </div>
     </div>
       <div class="tab-bar-content" v-show="Tab_2==isTab">
          <div class="listview listview-3">
        
             <div class="center-section">
                    <p><span>房间总数：{{listviewdata_2.roomNums}}间</span></p>
                    <p><span>状态使用：{{listviewdata_2.roomStatusused}}间</span><span>空闲：{{listviewdata_2.roomStatusidel}}间</span><span>维修：{{listviewdata_2.roomStatusfixs}}间</span></p>
                    <p><span>层数：{{listviewdata_2.buildingFloor}}</span></p>
                  
                    <p style="line-height: 30px; height: 30px;"><span>房间建筑总面积：{{listviewdata_2.roomAreaSumm}}&nbsp;M<sup>2</sup></span></p>
                    <p><span>房间使用总面积：{{listviewdata_2.roomUsedareaSumm}}&nbsp;M<sup>2</sup></span></p>
                  
                <p style="background:#fff;justify-content:flex-end"> <router-link :to="{ name:'table',params:{id:this.$route.params.id}}" class="useColor" style="font-size:16px;">楼盘表</router-link></p>
              </div>
           
          </div>
     </div>
      <div class="tab-bar-content" v-show="Tab_3==isTab">
 
          <div class="listview listview-3" v-if="listviewdata_3.msg?false:true">
                <div class="group-top"><span>学院：{{listviewdata_3.collCount}}个</span><span>使用人数：{{listviewdata_3.collUseSumm}}人</span></div>
                <div class="group-item" v-for="v in listviewdata_3.data">
                     <div class="group-item-title"><span>{{v.deptName}}({{v.deptCount}})</span><span class="iconfont icon-fangxiang"></span></div>
                     <ul>
                         <li class="group-item-sub" v-for="n in v.perData">
                             <a href="">
                             			<img :src="Changimgs(n.personPhoto)" >                                 
                                  <div class="group-item-sub-text">
                                       <p><span>姓名：{{n.personName}}</span><span>工号：{{n.personBh}}</span></p>                                       
                                       <p><span>职称：{{n.dutyName}}</span><span>职位：{{n.postName}}</span></p>
                                       <p><span>科室：{{n.deptName}}</span><span>状态：{{n.useStatusname}}</span></p>
                                  </div>
                             </a>
                        </li>
                     </ul>
                 </div>
          </div>
         <div  class="nodata"  v-else>无数据</div>

     </div>
       <div class="tab-bar-content" v-show="Tab_4==isTab">
           <div class="listview listview-3" v-if="listviewdata_4.msg?false:true">
                <div class="group-top"><span>学院：{{listviewdata_4.collCount}}个</span><span>使用人数：{{listviewdata_3.collUseSumm}}个</span></div>
                <div class="group-item" v-for="v in listviewdata_4.data">
                     <div class="group-item-title"><span>{{v.deptName}}({{v.deptCount}})</span><span class="iconfont icon-fangxiang"></span></div>
                     <ul>
                         <li class="group-item-sub" v-for="n in v.devData">
                             <a href="">
                             		  <img :src="Changimgs(n.sburi)" >                                  
                                  <div class="group-item-sub-text">
                                       <p><span>名称：{{n.yqmc}}</span><span>编号：{{n.sbBh}}</span></p>
                                       <p><span>位置：{{n.sbBuildingName}}</span>&nbsp;<span>层：{{n.sbBuildingLayer}}</span>&nbsp;<span>房间：{{n.sbRoomName}}</span></p>
                                        <p><span>使用时间：{{n.sbAssignDate}}</span><span>类型：{{n.sbTypename}}</span></p>
                                  </div>
                             </a>
                        </li>
                     </ul>
                 </div>
          </div>
         <div  class="nodata"  v-else>无数据</div>
     </div>
     </main>
  </div>
</template>

<script>
import NavBar from '../../common/NavBar/NavBar.vue'

export default {
  name: 'notice',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Tab_1:"Tab_1",
      Tab_2:"Tab_2",
      Tab_3:"Tab_3",
      Tab_4:"Tab_4",
      isTab:"Tab_1",
      listviewdata_1:[],
      listviewdata_2:[],
      listviewdata_3:[],
      listviewdata_4:[]
    }
  },
  mounted(){    
    this.getAllData();
  },
  methods:{
    getAllData(){
        let id=this.$route.params.id;
       
        let base=this.$http.get(BASEURL+'/buildInfoAction.action?postType=BUILDDETAIL&buildingNo='+id);
        let room=this.$http.get(BASEURL+'/roomInfoAction.action?postType=ROOMSTAT&buildingNo='+id);
        let use=this.$http.get(BASEURL+'/roomInfoAction.action?postType=ROOMUSE&buildingNo='+id);
        let goods=this.$http.get(BASEURL+'/roomInfoAction.action?postType=DEVICEUSE&buildingNo='+id);
        this.$http.all([base,room,use,goods])
        .then(this.$http.spread((data1, data2,data3,data4)=> {            
                  this.listviewdata_1=data1.data           
                  this.listviewdata_2=data2.data.data           
                  this.listviewdata_3=data3.data                      
                  this.listviewdata_4=data4.data             
         }))
    },
      tabSelect(tab){
         this.isTab=tab;
      },
   back(){

      this.$router.go(-1);
     
   },
    toTable(){
        this.$router.push({ name:'table',params:{id:this.$route.params.id}});
   },
   toUrl(){
     this.$router.push({ path: '/addNotice' });
   },
	 Changimgs(url){
          return BASEURL+url;
    }

  },
  components:{
    NavBar  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
@import "../../../assets/style/base.scss";
.notice{
   .tab-bar-content{
     background:$mianBgColor;
      overflow:hidden;
   }
}
.tab-bar{
     display:flex;
     text-align:center;
     align-items:center;
     height:rem(100px);
     line-height:rem(100px);
    overflow:hidden;
     >li{
       position:relative;
       flex:1;
     
         box-sizing: border-box;
      //   &:after{
      //       @extend %borderBottomLine;
      // }
      border-bottom:5px solid $borderColor;
      &:before{
            @extend %borderRightLine;
      }
       >a{
         
         font-size:16px;
         &.active{
           color:$mainColor;
  
         }
       }
     }
}
.top-section,.center-section,.bottom-section{
    
    .title{
          padding:0 rem(25px);
        font-size:18px;
    }
    background:#fff;
}
.top-section{
  height:rem(300px);
   img{
       height:100%;
       width:100%;
   }
}
.center-section{
    font-size:16px;
    padding:rem(25px);
    P{
        color:$hColor;
        margin:rem(15px) 0;
        display:flex;
        justify-content: space-between;
    }
}

.group-top{
  padding:rem(40px) rem(20px);
  position:relative;
  background:#fff;
  display:flex;
   font-size:16px;
  justify-content:space-between;
       &:after{
            @extend %borderBottomLine;
       }
  
      &:before{
            @extend %borderRightLine;
      }
}
.group-item-title{
  padding:rem(40px) rem(20px);
  position:relative;
  background:#fff;
 font-size:16px;
  display:flex;
 justify-content:space-between;

      &:after{
            @extend %borderBottomLine;
       }
  
      &:before{
            @extend %borderRightLine;
      }

}

 .group-item-sub{
 
   background:#fff;
   position:relative;
   padding:rem(15px);
   &:after{
            @extend %borderBottomLine;
       }
    
    
   a{
     display:flex;
    
     img{
          height:rem(100px);
           width:rem(100px);
           border-radius:rem(10px);
     }

     .group-item-sub-text{
       box-sizing:border-box;
             padding:rem(8px) 0;
            margin-left:rem(25px);
            display:flex;
            flex:1;
            flex-direction:column;
            justify-content: space-between;
             align-content: space-between;
             .m-top{
                    display:flex;
                 flex-direction:row;
                justify-content: space-between;
                >.h3{
                 font-size:18px;
                 color:#000;
                }
             }
            span{
                font-size:14px;
                 margin-right:rem(30px);
                 color:$hColor;
                 text-align:left;
               }
              
              >p{
                  display:flex;
                 flex-direction:row;
                justify-content: space-between;
              }
              .h3{
                 font-size:18px;
                 color:#000;
                }
     }
   }
 }

 .listview{
   overflow-y:scroll;
  position:fixed;
  
  width:100%;
  bottom:0;

  background:$mianBgColor;
   top:$topBarH*2;
 }

</style>
