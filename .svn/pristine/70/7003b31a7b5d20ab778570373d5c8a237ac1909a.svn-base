<template>
  <div class="iMagement">
         <NavBar   rightIcon="icon-shangbao"  @rightActive="toPush()"  leftIcon="icon-fanhui"   fixed="true" title="事件管理" @leftActive="back()"  />
        <main class="main" style="background:#f0eff4">
           <ul class="gruop-button">
                <li>待处理<span>10</span></li>
                <li>处理中<span>20</span></li>
                <li>已处理<span>30</span></li>
            </ul>
            <ul class="iMagement-list">
                <li v-for="v in 20">
                    <div class="im-list-c">
                          <h3>标题标题标题标题标题</h3>
                          <div class="img-list-bottom">
                             <p><span>反映人：张三</span><span>地点：杭州</span></p>
                             <p><span>反映时间：2017-05-19</span></p>
                          </div>
                    </div>
                    <img class="im-list-img"  src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=1878159448,3960376758&fm=27&gp=0.jpg"/>
                </li>
            </ul>
        </main>

  </div>
</template>

<script>
import NavBar from '../../common/NavBar/NavBar.vue'
export default {
  name: '',
  data () {
    return {
   
    }
  },
   methods:{
       back(){

       this.$router.go(-1);
     
   } ,toPush(){
     
       this.$router.push({ name:'imagementPush'});
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
.gruop-button{
    display:flex;
    text-align:center;
    color:#fff;
    line-height:rem(65px);
     font-size:14px;
     justify-content: space-around;
     margin:10px 0;
    >li{
        flex-basis:rem(220px);
        height:rem(65px);
     border-radius:rem(9px);
        &:nth-of-type(1){
          background:#dd524d;
        }
        &:nth-of-type(2){
          background:#eab04c;
        }
           &:nth-of-type(3){
          background:#77be84;
        }
        >span{
            $size:rem(40px);
            display:inline-block;
             padding:0 3px;
             height: $size;
            line-height: $size;
            border-radius: $size;
            background:rgba(0,0,0,.1);
            font-size:12px;
            margin-left:rem(15px);
        }
    }
}

.iMagement-list{
    background:#fff;
    padding:0 10px;
    >li{
      padding:8px 0;
      border-bottom:1px solid  #f1f1f1;
      display:flex;
      flex-direction:row;
      justify-content:space-between;
      align-items:center;
      >.im-list-c{
         
             >h3{
          font-size:18px;

      }
      >.img-list-bottom{
         margin-top:5px;
         >p{
            margin-top:5px;
            >span{
                font-size:14px;
                &:nth-of-type(2){
                  margin-left:10px;
                }
                color:#929294;
            }  
          }
       }
       
      }
      >.im-list-img{
          height:rem(100px);
          width:rem(100px);
      }
     
    }
}
</style>
