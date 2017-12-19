<template>
  <div class="about">
     <NavBar  leftIcon="icon-fanhui"  fixed="true" title="关于" @leftActive="back()"/>
         <main class="main">
               <div class="about-img">
                  <img src="../../../assets/images/about.jpg"/>
               </div>
               <p class="about-text">浙江中医药大学创建于1953年6月，时名为浙江省中医进修学校；1959年6月成立浙江中医学院，正式开展全日制本科教育，校址位于杭州市庆春街原浙江大学旧址；2000年3月整体迁至杭州市滨江高教园区办学；2006年2月更名为浙江中医药大学；2015年9月滨江学院迁建工程（富春校区）竣工并投入使用。学校占地千亩，总建筑面积逾47万平方米，设有滨文校区和富春校区。

    学校是全国首批招收和培养中医药研究生、获得港澳台地区招生权、免试招收香港学生的高等中医药院校，是浙江省属高校中首批获得博士学位授予权、博士后科研流动站和国家重点学科的院校，也是国家创新人才培养示范基地和国家大学生创新创业训练计划单位。下设第一临床医学院、第二临床医学院、第三临床医学院（康复医学院）、第四临床医学院、基础医学院（公共卫生学院）、口腔医学院、药学院、护理学院、医学技术学院、生命科学学院、人文与管理学院、成人教育学院（继续教育学院）、国际教育学院，举办1所独立学院（滨江学院）。拥有附属第一医院（浙江省中医院）、附属第二医院（浙江省新华医院）、附属第三医院（浙江省中山医院）3所直属附属医院和20所非直属附属医院。</p>
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
