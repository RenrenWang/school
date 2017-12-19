<template>
  <div id="list-view"  :class="['manage-list',top?top:'top']"  ref="listView" >
  	
            <div  v-if="!ItemShowType" >
                 <router-link  :to="{name: 'manageD', params: { id: v.buildingNo }}"  key="v.buildingNo" v-for="v in list">
                       <img :src="Changimgs(v.buildingImguri)" />                       
                       <div class="manage-list-text">
                                <!--<div class="m-top">
                                      <h3>楼宇名称{{v}}</h3>                                     
                                </diV>-->
                                <p><span class="h3">{{v.buildingName}}&nbsp;{{v.buildingPname}}</span><span>{{v.buildingCode}}</span></p>
                                <p><span>楼层：{{v.buildingFloor}}(层)</span><span>房间数：{{v.roomNums}}(间)</span></p>
                                <p><span>建筑/使用面积：{{v.buildingArea}}m<sup>2</sup></span><span>{{v.propertyArea}}m<sup>2</sup></span></p>
                                <p><span>用途：{{v.buildingUsename}}</span><span>类型：{{v.buildingTypename}}</span></p>
                                <p><span>管理部门：{{v.college}}</span></p>
                        
                       </div>
                 </router-link>
            </div>
                 
           <div v-if="ItemShowType&&ItemShowType==2">  
                 <router-link  :to="{ name: 'rootManageD', params: { id: v.roomNo }}"  v-for="v in list"  key="v.roomNo">
                       <img :src="Changimgs(v.roomImguri)" />
                       <div class="manage-list-text">  
                                <p><span class="h3">房间:{{v.roomName}}</span><span>楼幢:{{v.buildingName}}&nbsp;{{v.roomFloor}}层</span></p>
                                <p><span>用途:{{v.roomUsename}}</span><span>类别:{{v.roomTypename}}</span></p>
                                <p><span>部门:{{v.collegeUsename}}</span><span>科室:{{v.roomOfficename}}</span></p>
                                <p><span>建筑/使用面积：{{v.roomArea}}㎡</span><span>{{v.roomUsedArea}}㎡</span></p>                               
                                 <p><span>编码:{{v.roomCode}}</span><span>状态:{{v.roomStatusname}}</span></p>                        
                       </div>
                 </router-link>
          </div>   
              
          <div  v-if="ItemShowType&&ItemShowType==3">
               <router-link  :to="{ name: 'rootManageD', params: { id: v.id }}"  key="v.id" v-for="v in list">
                       <img :src="Changimgs(v.personPhoto)" />
                       <div class="manage-list-text">
                                <!--<div class="m-top">
                                      <h3>楼宇名称{{v}}</h3>
                                     
                                </diV>-->
                                <p><span class="h3">工号：{{v.personBh}}</span><span>姓名：{{v.personName}}</span></p>
                              
                                <p><span>学院：{{v.collegeUsename}}</span><span>科室：{{v.roomOfficename}}</span></p>
                                <p><span>楼幢：{{v.buildingName}} {{v.roomFloor}}层</span><span>房间号：{{v.roomNo}}</span></p>
                                <p><span>职称：{{v.personPostname}}</span><span>标准：30m2</span></p>
                              
                        
                       </div>
                </router-link>               
          </div>

          <div  v-if="ItemShowType&&ItemShowType==4">
                    <router-link  :to="{ name: 'toolManageD', params: { id: v.ids }}"  key="v.ids" v-for="v in list">  
                       <img :src="Changimgs(v.sburi)" />
                       <div class="manage-list-text">                             
                                <p><span class="h3">名称：{{v.yqmc}}</span><span>编号：{{v.yqbh}}</span></p>
                                <p><span>楼幢：{{v.sbBuildingName}}</span><span>楼层：{{v.sbBuildingLayer}}</span><span>房间号：{{v.sbRoomName}}</span></p>
                                <p><span>部门：{{v.sbDeptName}}</span><span>日期：{{v.sbAssignDate}}</span></p>
                              
                        
                       </div>
                 </router-link>
          </div>

           <div  v-if="ItemShowType&&ItemShowType==5">
               <router-link  :to="{ name: 'selectPersonnelD', params: { id:v.personBh}}"  key="v.id" v-for="v in list">
                       <img :src="Changimgs(v.personPhoto)" />
                       <div class="manage-list-text">
                                <!--<div class="m-top">
                                      <h3>楼宇名称{{v}}</h3>
                                     
                                </diV>-->
                                <p><span class="h3">工号：{{v.personBh}}</span><span>姓名：{{v.personName}}</span></p>
                              
                                <p><span>学院：{{v.collegeUsename}}</span><span>科室：{{v.roomOfficename}}</span></p>
                                <p><span>楼幢：{{v.buildingName}} {{v.roomFloor}}层</span><span>房间号：{{v.roomNo}}</span></p>
                                <p><span>职称：{{v.personPostname}}</span><span>标准：30m2</span></p>
                              
                        
                       </div>
                </router-link>               
          </div>
          <Loading :msg="msgText" :isShow="isShow"/>
         
  </div>
</template>

<script>
import   Loading  from '../Loading/Loading'
export default {
  name:'list-view',
  props:["dataUrl","ItemShowType","top"],
  data () {
    return {
      isFirst:true,
      page:1,
      list:[],
      noData:false,
      msgText:"正在加载...",
      isShow:false,
    }
  },

  mounted(){
     this.getData();
     //this.getData();
     this.moreData(this.$refs.listView, _.debounce(this.getData,500));  
  },

 updated(){
  
 },

  watch:{   
        dataUrl(newVal,oldVal) {
            console.log(newVal);
          if(newVal!=oldVal){
             this.page=1;
            this.isShow=false;
            this.msgText="正在加载...";
            this.list=[];
            this.noData=false;
             
            this.getData();
          }
    }
       
  },
  
  methods:{
    getData(){
     
   this.isShow=true;
   if(!this.noData){
           this.$http.get(BASEURL+this.dataUrl+"&pageno="+this.page++)
        .then((response)=>{
          console.log(response);
          let data=response.data;
          // alert(JSON.stringify(data));
          if(data.result=="success"){
            this.noData=data.maxpage<this.page?true:false;
            this.msgText=data.maxpage<this.page?"没有更多数据":this.msgText;
           // alert(data.data[0].buildingName)
            this.list=this.list.concat(data.data);
            this.isFirst=false; 
            this.isShow=data.maxpage<this.page;
          }
        else if(data.result=="fail"){
            this.isShow=true;
            this.msgText=data.msg;
          }
        })
        .catch( (error)=> {
           console.log(error);
            this.isShow=true;
            this.msgText="数据加载失败，请稍后重试";
       });
      
   }  
  
    },
 
  moreData($domScroll,fn){
      let  self=this;
       $domScroll.addEventListener("scroll", (e)=>{                
               e.preventDefault();
               //真实内容的高度
                let pageHeight = Math.max($domScroll.scrollHeight,$domScroll.offsetHeight);
                //视窗的高度
                let viewportHeight = $domScroll.innerHeight || $domScroll.clientHeight || 0;
                //隐藏的高度
                let scrollTop = $domScroll.pageYOffset ||  $domScroll.scrollTop || 0;
                  if(scrollTop==0){
                      return false;
                }
               
               //viewportHeight/2   
               if((pageHeight-scrollTop-viewportHeight)<=viewportHeight/2&&!this.isFirst){               
                      console.log("到底了");
                      fn();
               }
       });
    },
    
    Changimgs(url){
          return BASEURL+url;
    }   
    
  },
  
  components:{
    Loading
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../../assets/style/base.scss";
#list-view{
  overflow-y:scroll;
  position:fixed;
  
  width:100%;
  bottom:0;

  background:$mianBgColor
}
.top{
    top:$topBarH*2;
}
</style>
