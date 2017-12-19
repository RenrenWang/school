<template>
  <div class="ManagePage">
       <NavBar leftIcon="icon-fanhui" rightIcon="icon-sousuo-sousuo"    fixed="true" title="归属使用查询"  @leftActive="back()"  />
       <main class="main">
          
            <div class="filterKind">
                 <a href="javascript:;" class="all-btn active" @click="selectInit()">全部</a>
                  <select v-model="xselect" @change="selectActive">
                    <option value ="0">请选择学院</option>
                    <option :value ="v.id" v-for="v in xList">{{v.codeValue}}</option>
                </select>
                <select v-model="kselect" @change="selectActive">
                     <option value ="0">请选择科室</option>
                     <option :value ="v.id" v-for="v in kList">{{v.codeValue}}</option>
                </select>
               
            </div>
            <!-- <div class="show-mod" v-show="isShowMode">
           <span class="iconfont icon-guanbi close" @click="showMode"></span>
           <div class="show-mod-content">
               <div class="filterKind">
                 <a href="" class="all-btn active">全部</a>
                 <a href="" class="all-btn">A-G</a>
                 <a href="" class="all-btn">H-N</a>
                 <a href="" class="all-btn">O-T</a>
                 <a href="" class="all-btn">U-Z</a>
              
              </div>
                 
              <ul class="floor-list">
                   <li @click="selectBuild(v.buildingNo,v.buildingName)" v-for="v in buildList" :key="v.locNo">{{v.buildingName}}</li>
              </ul>
           </div>
       </div> -->
            <ListView :dataUrl="listUrl" :ItemShowType="5"/>
       </main>
  </div>
</template>

<script>
import NavBar from '../../common/NavBar/NavBar.vue'
import ListView from '../../common/ListView/ListView.vue'
export default {
  name: 'ManagePage',
  data () {
    return {
           listUrl:"/roomInfoAction.action?postType=PERSONDEPTLIST",
           kList:'',
           xList:'',
           isShowMode:false,
           xselect:'0',
           kselect:'0'
    }
  },
  components:{
     NavBar ,
     ListView
  },
  mounted(){
     this.getKList();
     this.getXList();
  },
  methods:{
        selectInit(){
             this.xselect='0';
           this.kselect='0';
            this.listUrl='/roomInfoAction.action?postType=PERSONDEPTLIST&pageno=1';
        },
    selectActive(){
        let personDept=this.xselect!=0?'&personDept='+this.xselect:'';
        let personOffice=this.kselect!=0?'&personOffice='+this.kselect:'';
       
      this.listUrl='/roomInfoAction.action?postType=PERSONDEPTLIST&pageno=1'+personDept+personOffice;
     },
        showMode(){
            
            this.isShowMode=!this.isShowMode;
            if(this.isShowMode)
            this.getBuildData();
        },
       getKList(){
            this.$http.get(BASEURL+'/baseDataAction.action?dataType=CELLDEPT')
            .then((data)=>{
                data=data.data;
                this.kList=data.data;
                
            })
      },
      getXList(){
            this.$http.get(BASEURL+'/baseDataAction.action?dataType=CELLUNIV')
            .then((data)=>{
                data=data.data;
                this.xList=data.data;
                
            })
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
    padding:rem(30px) 0;
    position:relative;
    display:flex;
    text-align:center;
    align-content: center;
    justify-content: space-between;
     flex-direction:row;
     &:after{
             @extend %borderBottomLine;
    }
    //  &:before{
    //          @extend %borderTopLine;
    // }
    .all-btn,select{
        flex:1;
        height:rem(50px);
        line-height:rem(50px);
        margin:0 rem(15px);
       border-radius:rem(15px);
      box-sizing:border-box;
    }
    .active{
        border:1px solid $mainColor;
        line-height:rem(50px);
         color:$mainColor;
       
    }
    select{
        outline:none;
    }
}
.manage-list{
    >a{
        display:flex;
        flex-direction:row;
          padding:rem(20px) rem(15px);
          position:relative;
           &:after{
             @extend %borderBottomLine;
        }
        >img{
           height:rem(190px);
           width:rem(190px);
           border-radius:rem(10px);
        }
        >.manage-list-text{
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
                 font-size:16px;
                 color:#000;
                }
        }
    }
}
</style>
