<template>
  <div class="about">
     <NavBar  leftIcon="icon-fanhui"  fixed="true" title="关于我们" @leftActive="back()"/>
         <main class="main">
               <div class="about-img">
                  <img src="../../../assets/images/logo.png"/>
               </div>
               <p class="about-text">杭州荣智信息科技股份有限公司，其母公司杭州荣昌科技成立于2006年，因业务需要成立的全资子公司，是一家位于杭州上城区的高新技术企业，主要从事国内房地产相关行业软件研发与服务提供商，致力于《住宅专项维修资金管理系统》、《电梯/消防设施设备专项维修资金系统》、《开发商远程维修资金缴款网上协同办公系统》、《物业公司远程维修资金使用管理系统》、《物业前期招投标系统》、《银行业务数据对接系统》，以及《网上查询公示系统-包括面向大众维修资金信息公示》、《个人资金网上查询公示系统-互联网和手机APP查询》等多个业务系统构成的云平台、住房保障管理系统、高校GIS房产管理信息系统、高校宿舍楼/门禁管理系统、房地产测绘软件、房地产估价行业软件及GIS技术的产品研发，成为优秀的软件提供商。

　   　目前因扩展企业发展，遂步将公司业务领域拓展到智慧经济应用和移动互联网应用，其主要产品应用于经济发展部门、企业、街道、园区、特色小镇、社区、楼宇等领域，提供包含多个大智慧管控应用平台：经济发展管理、企业服务管控平台、招商管理、街镇政务平台、街镇服务平台、楼宇经济管理、经济运行监管平台、智慧园区智慧一卡通、商圈B2B、社区O2O、微商应用等。</p>
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
    display: flex;
    justify-content: center;
    align-items:center;
    width: 100%;
    img{
        width:rem(200px);
        
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
