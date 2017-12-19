<template>
  <div class="instr">
     <NavBar  leftIcon="icon-fanhui"  fixed="true" title="应用介绍" @leftActive="back()"/>
         <main class="main">
               <div class="about-img">
                  <img src="../../../assets/images/about.jpg"/>
               </div>
               <p class="about-text">实现房产业务移动APP应用的拓展，则对我司高校房产管理服务云平台内容功能深化、扩充，打破传统高校房主管基于PC端应用工作，将原有平台部分功能向移动互联网上实现，为房产管理部门的工作更加高效、便捷地管理房产业务，也符合当前信息化建设互联网+应用思路。本系统主要内容含盖高校房产资讯类管理（行业政策、通知公告等）、楼幢信息查询管理、房间信息查询管理、楼幢房间使用人状态管理、楼幢房间物品设施查询管理、房产业务申请/审批/办理/查询/反馈等基于流程化服务管理、二维码应用（一房一码、一屋一码、一物一码）查询房屋房间档案信息、归属用途信息、附属设备物品信息和房产数据统计分析数据展视等内容。</p>
         </main>
 
  </div>
</template>

<script>
import NavBar from '../../common/NavBar/NavBar.vue'
export default {
  name: 'about',
  data () {
    return {
   
    }
  },
  methods:{
         back(){

      this.$router.go(-1);
     
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
.about-img{
    height:rem(350px);
    img{
        width:100%;
        height:100%;
    }
}
.about-text{
    text-indent:20px;
    line-height:25px;
    text-align:left;
    font-size:14px;
    padding:rem(15px);
}
</style>
