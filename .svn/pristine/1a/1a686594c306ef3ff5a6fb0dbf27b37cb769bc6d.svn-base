<template>
  <div class="abook">
     <NavBar  fixed="true" leftIcon=" "  title="通讯录"  rightIcon="icon-tianjia1" />
         <main class="main">
         	
               <div class="list-box" v-for="v in  list">
                    <h5>{{v.deptName}}</h5>
                    <ul class="abook-list">
                        <li v-for="sv in v.userData">
                            <a :href="'tel:'+personMobile">
                                <img :src="this.BASEURL+sv.photoUri" class="avatar"/>
                              <div class="text">
                                   <p><span>姓名：{{sv.realName}}</span><span>工号：{{sv.loginName}}</span></p>
                                  <p><span>学院：{{sv.officeName}}</span><span>联系方式：{{sv.personMobile}}</span></p>
                              </div>
                            </a>
                        </li>
                    </ul>
                 </div>
                 
                 <!--  <div class="list-box">
                    <h5>后勤处(10)</h5>
                    <ul class="abook-list">
                        <li v-for="v in 4">
                            <a href="">
                                <img src="../../../assets/images/userimage.png" class="avatar"/>
                                <p><span>姓名：李大鹏</span><span>工号：19701001</span></p>
                                <p><span>学院：医学院</span><span>联系方式：1395876665</span></p>
                            </a>
                        </li>
                        

                    </ul>
                 </div>
                 
                <div class="list-box">
                    <h5>信息中心(5)</h5>
                    <ul class="abook-list">
                        <li v-for="v in 6">
                            <a href="">
                                <img src="../../../assets/images/userimage.png" class="avatar"/>
                                <p><span>姓名：李大鹏</span><span>工号：19701001</span></p>
                                <p><span>学院：医学院</span><span>联系方式：1395876665</span></p>
                            </a>
                        </li>
                        

                    </ul>
                 </div>-->
         </main>
 
  </div>
</template>

<script>
import NavBar from '../../common/NavBar/NavBar.vue'
export default {
  name: 'about',
  data () {
    return {
     list:[]
    }
  },

mounted(){
      this.$http.get(BASEURL+'/baseDataAction.action?appMenu=&dataType=RECORD&pageno=1')
  
     .then((data)=>{
     this.list=data.data.data;

     })
},
  methods:{
 
  },
  components:{
    NavBar  
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../../../assets/style/base.scss";

.list-box{
    h5{
        height:rem(60px);
        font-size:16px;
        line-height:rem(60px);
        padding-left:rem(40px);
    }
    .abook-list{
  
    >li{
      background:#fff;
      padding:rem(15px) rem(20px);
      position:relative;
      &:after{
            @extend %borderBottomLine;
      } 
      >a{
        display:flex;
        align-items:center;
        flex-direction:row;
        .avatar{
            height:rem(70px);
            width:rem(70px);
            margin-right:rem(10px);
        }
        span{
                font-size:14px;
                 margin-right:rem(30px);
                 color:$hColor;
                 text-align:left;
               }
               .text{
                  display:flex;
                  flex-direction:column; 
               }
        p{
               margin:rem(10px) 0;
               display:flex;
               flex-direction:row;
               justify-content: space-between;
              }
        .username{
            font-size:16px;
            margin-left:rem(30px);
        }
      }
    }
}
}

</style>
