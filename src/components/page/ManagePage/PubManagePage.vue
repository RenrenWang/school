<template>
  <div class="PubManagePage">
       <NavBar leftIcon="icon-fanhui" rightIcon="icon-sousuo-sousuo"   fixed="true" title="公用房楼幢信息"     @leftActive="back()"  />
       <main class="main">
     
            <div class="filterKind">         
                 <a href="javascript:void(0);" @click="selectAll" :class="['all-btn',(selectSchool==0&&selectUse==0&&selectType==0)?'active':'']">全部</a>
                <select  v-model="selectSchool" @change="schoolActive">

                    <option value="0">请选择校区</option>
                    <option :value="v.id"  v-for="v in schoolList">{{v.codeValue}}</option>
                </select>
                <select  v-model="selectUse"  @change="useActive" >
                     <option value ="0">请选择类别</option>
                     <option :value ="v.id" v-for="v in useList">{{v.codeValue}}</option>
                </select>
                <!--
                <select  v-model="selectType"   @change="typeActive">
                    <option value ="0">用途</option>
                   <option :value ="v.id" v-for="v in typeList">{{v.codeValue}}</option>
                </select>
               -->
            </div>

            <ListView :dataUrl="listUrl"/>
           <!--- <div class="manage-list">
                 <router-link to="/manageD" key="v" v-for="v in 30">
                       <img src="/static/images/about.jpg" />
                       <div class="manage-list-text">
                              
                                <p><span class="h3">楼宇名称{{v}}</span><span>102017{{v}}</span></p>
                                <p><span>10(层)</span><span>200(间)</span></p>
                                <p><span>面积：200㎡</span><span>200㎡</span></p>
                                <p><span>公用房</span><span>生活住房</span></p>
                                <p><span>医药院/商务院</span></p>
                        
                       </div>
                 </router-link>
            </div>-->
       </main>
  </div>
</template>

<script>
import NavBar from '../../common/NavBar/NavBar.vue'
import ListView from '../../common/ListView/ListView.vue'
export default {
  name: 'PubManagePage',
  data () {
    return {
       listUrl:"/buildInfoAction.action?postType=PUBBUILD",
       schoolList:[],
       useList:[],
       typeList:[],
       selectSchool:0,
       selectUse:0,
      // selectType:0,
       urlStr:""
    }
  },
  components:{
     NavBar,
     ListView
  },
  mounted(){
     this.getAll()
  },


  methods:{
    changeNull(name,str){
       console.log(name+"----->"+str);
       return (str&&str!=0&&str!="")?("&"+name+"="+str):"";
    },
    
    changeUrl(school,use,type){    
        let _selectSchool=this.changeNull("buildArea",school);    
        let _selectUse=this.changeNull("buildUse",use);
       // let _selectType=this.changeNull("buildType",type);
        this.listUrl="/buildInfoAction.action?postType=PUBBUILD"+_selectSchool+_selectUse;
    },
  selectAll(){
       this.selectSchool=0;
       this.selectUse=0;
       //this.selectType=0;
       this.listUrl="/buildInfoAction.action?postType=PUBBUILD";
   },
   schoolActive(){       
      this.changeUrl(this.selectSchool,this.selectUse,this.selectType);
   },
   useActive(){
           this.changeUrl(  this.selectSchool,  this.selectUse,  this.selectType);
   },
    typeActive(){
          this.changeUrl(  this.selectSchool,  this.selectUse,  this.selectType);
   },
      getAll(){
        let getSchool=this.$http.get(BASEURL+'/baseDataAction.action?dataType=CELLAREA');
        let getUse=this.$http.get(BASEURL+'/baseDataAction.action?dataType=BUILDUSE');
        let getType=this.$http.get(BASEURL+'/baseDataAction.action?dataType=BUILDTYPE');
        this.$http.all([getSchool, getUse,getType])
        .then(this.$http.spread((data1, data2,data3)=> {
              data1=data1.data;
          
             if(data1.result=="success"){
               this.schoolList=data1.data;
             }
              data2=data2.data;
          
             if(data2.result=="success"){
               this.useList=data2.data;
             }
             data3=data3.data;
          
             if(data3.result=="success"){
               this.typeList=data3.data;
             }
        }));
      },
    
    back(){

      this.$router.go(-1);
     
   },
   toTable(){
        this.$router.push({ path:'/table' });
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
.filterKind{
    height:$topBarH;
    position:relative;
    display:flex;
    text-align:center;
    align-content: center;
    justify-content: space-between;
    flex-direction:row;
    align-items:center;
     &:after{
             @extend %borderBottomLine;
    }
    //  &:before{
    //          @extend %borderTopLine;
    // }
    .all-btn,select{
        flex:1;
        height:rem(50px);
        margin:0 rem(15px);
       border-radius:rem(15px);
      box-sizing:border-box;
       min-width:rem(60px);
    }
   
    .all-btn{
        border:1px solid #b5b5b5;
       
         line-height:rem(50px);
        
        &.active{
             color:$mainColor;
             border-color:$mainColor;
        }
    }
    select{
        outline:none;
    }
}

</style>
