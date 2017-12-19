<template>
  <div class="notice">
     <NavBar leftIcon="icon-fanhui"  fixed="true" title="人员详情" @leftActive="back()" />
     <main class="main">
         
         <div class="center-section">
            <p><span>工号：{{list.personBh}}</span></p>
            <p><span>姓名：{{list.personName}}</span><span>性别：</span></p>
            <p><span>出生年月：</span></p>
            <p><span>入职日期：</span></p>
            <p><span>职称：{{list.personPostname}}</span><span>职位：{{list.personDegreename}}</span></p>
            <p><span>学院：{{list.collegeUsename}}</span><span>科室：{{list.roomOfficename}}</span></p>
         </div>
         <div class="table-box">
         <h3 style="margin:15px 0;color:#222;font-size:16px">用房列表：</h3>
            <table class="table" >
               <thead>
                  <tr>
                   <th>NO.</th>
                  <th>楼幢</th>
                   <th>层</th>
                  <th>房间号</th>
                   <th>类型</th>
                 </tr>
               </thead>
                <tbody>
                   <tr v-for="v  in list.data">
                      <td>{{v.personBh}}</td>
                      <td>{{v.buildingName}}</td>
                      <td>{{v.roomFloor}}</td>
                      <td>{{v.roomNo}}</td>
                      <td>{{v.roomTypename}}</td>
                   </tr>
                </tbody>
            </table>
        </div>  
       <div class="avatar">
              <img  :src="changImgs(list.photo)"/>
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
   
  
      list:{},
    }
  },
  mounted(){

  this.$http.get(BASEURL+'/roomInfoAction.action?postType=PERSONDETAIL&personBh='+this.$route.params.id)
        .then(data=>{
         
             this.list=data.data
        })
  },

  methods:{
      tabSelect(tab){
         this.isTab=tab;
      },
   back(){

      this.$router.go(-1);
     
   },
 changImgs(url){
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
 .table-box{
    padding:0 rem(15px);

 .table{
   width:100%;
  
   text-align:center;
   box-sizing:border-box;
   td,th{

     padding:rem(15px);
    border:1px  solid  #929397;
   }
  
 }
  }
  .avatar{

    padding:rem(15px);
    img{
      height:auto;
      width:100%;
    
    }
  }
</style>
