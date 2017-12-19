<template>
  <div class="find">
        <NavBar    fixed="true" title="发现" />
           <main class="main">
          
                    <div class="menu-linkage">
                           <div class="menu-linkage-tits">
                                   <ul>
                                       <li v-for="(v,index) in list" :class="(index==selectNumber?'active':'')" @click="selectPanel(index)">{{v.fname}}</li>
                                   </ul>
                           </div>
                       
                            <div class="menu-linkage-items" v-if="list[selectNumber]['funcData']">
                                 <ul >
                                     <li  v-for="sv in list[selectNumber]['funcData']">
                                         <div class="mli-item-l">
                                                <img :src="sv.fimage">
                                                <div>
                                                    <h4>{{sv.fname}}</h4>
                                                    <p><span>添加次数：{{sv.useCount}}次</span></p>
                                                </div>
                                         </div>
                                          <a href="javascript:;" class="add-btn" @click="add(sv.fid,sv.pflag)">
                                               {{kindStatus(sv.pflag)}}
                                             
                                         </a>
                                     </li>
                                 </ul>
                           </div>
                    </div>
           </main>
  </div>
</template>

<script>
import NavBar from '../../common/NavBar/NavBar.vue'
export default {
  name: 'find',
  data () {
    return {
      list:[],
      selectNumber:0
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
  this.$http.get(BASEURL+'/baseDataAction.action?appMenu=&dataType=MAINLIST'+str)
      .then(data=>{
        console.log(JSON.stringify(data.data));
        this.list=data.data.data
      })
  },
  methods:{

      add(id,pflag){
 let   user=this.$root.isLogin();
              if(!user||!user.loginName){
        alert("您还未登录，请先是登录");
           this.$router.push({path:'/login'});
           return;
    }
                 if(pflag=="Y"){
      this.$http.get(BASEURL+'/baseDataAction.action?appMenu=&dataType=FUNDDEL&usrCd='+user.loginName+'&menuCd='+id)
      .then(data=>{
          if(data.data.msg){
            alert(data.data.msg);
                this.$http.get(BASEURL+'/baseDataAction.action?appMenu=&dataType=MAINLIST&usrCd='+user.loginName)
                .then(data=>{
                    console.log(JSON.stringify(data.data));
                    this.list=data.data.data
                })
          }
        
      
     
        })
                   
                 }else{
    this.$http.get(BASEURL+'/baseDataAction.action?appMenu=&dataType=FUNDADD&usrCd='+user.loginName+'&menuCd='+id)
      .then(data=>{
          if(data.data.msg){
            alert(data.data.msg);
                this.$http.get(BASEURL+'/baseDataAction.action?appMenu=&dataType=MAINLIST&usrCd='+user.loginName)
                .then(data=>{
                    console.log(JSON.stringify(data.data));
                    this.list=data.data.data
                })
          }
        
      
     
        })
                 }
           
 
  

      
 
          
           
      },
selectPanel(number){
this.selectNumber=number
},
 kindStatus(status){
  return status=="Y"?"已添加":"添加";
 }
  },
  components:{
      NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../../assets/style/base.scss";
.find{
    height:100%;
    .main{
        position:fixed;
      
        padding:0;
        overflow:hidden;
        top:$topBarH;
        bottom:$bottomBarH+rem(1px);
        width:100%;
    }
}
.menu-linkage{
    display:flex;
    flex-direction:row;
    height:100%;
    overflow:hidden;
     background:#f3f3f3;
    .menu-linkage-tits{
        width:rem(180px);
       
        text-align:center;
        overflow-y:scroll;
        >ul{
            >li{
                padding:rem(40px) 0;
                  position:relative;
                  font-size:14px;
                  &.active{
                      color:$mainColor;
                  }
                &:after{
                        @extend %borderBottomLine;
                           background: #fff;
                } 
            }
        }
    }

    .menu-linkage-items{
        flex:1;
         overflow-y:scroll;
           background:#fff;
           >ul{
               >li{
                 
                   display:flex;
                    flex-direction:row;
                    justify-content:space-between ;
                    align-items:center;
                    padding:rem(35px) rem(20px);
                    position:relative;
                    &:after{
                        @extend %borderBottomLine;
                  } 
                  .mli-item-l{
                    display:flex;
                    flex-direction:row;
                    align-items:center;
                  font-size:12px;
                  color:$hColor;
                    h4{
                    font-size:16px;
                    padding-bottom:rem(15px);
                    color:#000;
                    }
                      img{
                          height:rem(70px);
                          width:rem(70px);
                          margin-right:rem(25px);
                      }
                  }

                .add-btn{
                padding:0px 15px;
				height: 25px;
				line-height: 25px;
				border: 1px solid $mainColor;
;
				color:$mainColor ;
				font-size: 14px;
				border-radius: 5px;
				box-sizing: content-box !important;
                 }
               }
           }
    }
}
</style>
