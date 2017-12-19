<template>
  <div class="notice">
     <NavBar leftIcon="icon-fanhui"  fixed="true" title="房间详情" @leftActive="back()" />
     <main class="main">
         <ul class="tab-bar">
            <li @click="tabSelect(Tab_1)">
                <a href="javascript:;":class="Tab_1==isTab?'active':''">基本信息</a>
             </li>
        
            <li  @click="tabSelect(Tab_2)">
               <a href="javascript:;" :class="Tab_3==isTab?'active':''">使用情况</a>
            </li>
            <li  @click="tabSelect(Tab_3)">
               <a href="javascript:;" :class="Tab_4==isTab?'active':''">物品信息</a>
            </li>
            
     </ul>
     <div class="tab-bar-content" v-show="Tab_1==isTab">
          <div class="listview listview-3">
                <div class="top-section">
                      <img src="/static/images/about.jpg" >
                </div>
                <div class="center-section">
                    <p><span>房间编号：20155204</span></p>
                    <p><span>名称：楼</span></p>
                    <p><span>层数：5</span><span>房间数：50</span></p>
                    <p><span>类型：5</span></p>
                    <p><span>用途：5</span></p>
                    <p><span>建筑面积：5</span></p>
                    <p><span>使用面积：5</span></p>
                    <p><span>使用部门：xxx</span></p>
                     <p><span>建筑年份：2006年</span></p>
                    <p><span>房屋位置：xxxx</span></p>
                </div>
                
                <div class="bottom-section">
                   <div class="d-title">
					   	   <span class="line"></span>  
					   	      <h5>描述</h5>
					   	   <span class="line"></span>
				  </div>
                <p class="p-text">
                浙江大学（Zhejiang University），简称“浙大”，坐落于“人间天堂”杭州。前身是1897年创建的求是书院，是中国人自己最早创办的新式高等学校之一。1928年更名为国立浙江大学。中华民国时期，浙江大学在竺可桢老校长的带领下，崛起为民国最高学府之一，被英国科学史家李约瑟誉为“东方剑桥”，迎来了浙大百年历史中最辉煌的时期。竺可桢老校长因其历史贡献，成为了浙大校史中最伟大的人，并为浙大确立了“求是”校训和文言文《浙江大学校歌》
               浙江大学（Zhejiang University），简称“浙大”，坐落于“人间天堂”杭州。前身是1897年创建的求是书院，是中国人自己最早创办的新式高等学校之一。1928年更名为国立浙江大学。中华民国时期，浙江大学在竺可桢老校长的带领下，崛起为民国最高学府之一，被英国科学史家李约瑟誉为“东方剑桥”，迎来了浙大百年历史中最辉煌的时期。竺可桢老校长因其历史贡献，成为了浙大校史中最伟大的人，并为浙大确立了“求是”校训和文言文《浙江大学校歌》
                </p>
                </div>
          </div>
     </div>
  
      <div class="tab-bar-content" v-show="Tab_2==isTab">
          <div class="listview listview-3">
                <div class="group-top"><span>学院：2个</span><span>使用人数：20个</span></div>
                <div class="group-item" v-for="v in 2">
                     <div class="group-item-title"><span>学院{{v}}(10)</span><span class="iconfont icon-fangxiang"></span></div>
                     <ul>
                         <li class="group-item-sub" v-for="n in 10">
                             <a href="">
                                  <img src="/static/images/about.jpg" class=""/>
                                  <div class="group-item-sub-text">
                                       <p><span>姓名：张三</span><span>科室：302</span></p>
                                        <p><span>职称：职称1</span><span>职位：职位1</span></p>
                                  </div>
                             </a>
                        </li>
                     </ul>
                 </div>
          </div>
     </div>
       <div class="tab-bar-content" v-show="Tab_3==isTab">
          <div class="listview listview-3">
             <div class="group-top"><span>物品分类：3类</span><span>物品个数：30</span></div>
                <div class="group-item" v-for="v in 3">
                     <div class="group-item-title"><span>物品类{{v}}(10)</span><span class="iconfont icon-fangxiang"></span></div>
                     <ul>
                         <li class="group-item-sub" v-for="n in 10">
                             <a href="">
                                  <img src="/static/images/about.jpg" class=""/>
                                  <div class="group-item-sub-text">
                                       <p><span>物品名：物品名{{n}}</span><span>编号：23225</span></p>
                                        <p><span>领用时间：2017-05-08</span></p>
                                  </div>
                             </a>
                        </li>
                     </ul>
                 </div>
          </div>
     </div>
     </main>
  </div>
</template>

<script>
import NavBar from '../../common/NavBar/NavBar.vue'
import LisViewItem_1 from '../../common/LisViewItem/LisViewItem_1.vue'
export default {
  name: 'notice',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      Tab_1:"Tab_1",
      Tab_2:"Tab_2",
      Tab_3:"Tab_3",
    
      isTab:"Tab_1",
      listviewdata_1:[
        {id:1,toUrl:"/noticeD",title:"关于举办2017年齐鲁学子青春国学荟的通知",from:"团委",create_date:"2017-06-02 16:08:27",like:50},
        {id:1,toUrl:"/noticeD",title:"关于转发《关于2017年“井冈情·中国梦”全国大学生暑期实践季专项行动的有关事项》的通知",from:"李伟",create_date:"2017-06-02 16:08:27",like:50},
        {id:1,toUrl:"/noticeD",title:"关于组织开展2017年度“中国电信奖学金”暨“践行社会主义核心价值观先进个人”山东省遴选寻访活动的通知",from:"团委",create_date:"2017-06-02 16:08:27",like:50},
        {id:1,toUrl:"/noticeD",title:"关于举办山东省首届中学中职团委书记职业技能大赛暨青年马克思主义者培养工程2017年春季培训班（中学中职团委书记）的通",from:"团委",create_date:"2017-06-02 16:08:37",like:50},
        {id:1,toUrl:"/noticeD",title:"于第十五届“挑战杯”·海尔山东省大学生课外学术科技作品竞赛终审决赛有关事项的预备通知",from:"团委",create_date:"2017-06-02 16:08:57",like:50},
        {id:1,toUrl:"/noticeD",title:"关于举办2017年山东省“鲁能泰山杯”向青春足球联赛的通知",from:"团委",create_date:"2017-06-02 16:08:17",like:50}
        
      ],
      listviewdata_2:[
        {id:1,toUrl:"/noticeD",title:"关于举办2017年齐鲁学子青春国学荟的通知",from:"团委",create_date:"2017-06-02 16:08:27",like:50},
        {id:1,toUrl:"/noticeD",title:"关于转发《关于2017年“井冈情·中国梦”全国大学生暑期实践季专项行动的有关事项》的通知",from:"李伟",create_date:"2017-06-02 16:08:27",like:50},
        {id:1,toUrl:"/noticeD",title:"关于组织开展2017年度“中国电信奖学金”暨“践行社会主义核心价值观先进个人”山东省遴选寻访活动的通知",from:"团委",create_date:"2017-06-02 16:08:27",like:50},
        {id:1,toUrl:"/noticeD",title:"关于举办山东省首届中学中职团委书记职业技能大赛暨青年马克思主义者培养工程2017年春季培训班（中学中职团委书记）的通",from:"团委",create_date:"2017-06-02 16:08:37",like:50},
        {id:1,toUrl:"/noticeD",title:"于第十五届“挑战杯”·海尔山东省大学生课外学术科技作品竞赛终审决赛有关事项的预备通知",from:"团委",create_date:"2017-06-02 16:08:57",like:50},
        {id:1,toUrl:"/noticeD",title:"关于举办2017年山东省“鲁能泰山杯”向青春足球联赛的通知",from:"团委",create_date:"2017-06-02 16:08:17",like:50}
        
      ],
       listviewdata_3:[
        {id:1,toUrl:"/noticeD",title:"关于开展“我的青春我的梦”主题征集活动的通知",from:"团委",create_date:"2017-06-02 16:08:27",like:50},
        {id:1,toUrl:"/noticeD",title:"关于转发《共青团中央、教育部、全国学联关于印发<学联学生会组织改革方案>的通知》和《关于印发<《学联学生会组织改革方案》有关任务分解>的通知》的通知",from:"李伟",create_date:"2017-06-02 16:08:27",like:50},
        {id:1,toUrl:"/noticeD",title:"山东女子学院成功举办第十五届山东省大学生科技文化艺术节 —大学生中华传统茶艺表演大赛",from:"团委",create_date:"2017-06-02 16:08:27",like:50},
        {id:1,toUrl:"/noticeD",title:"关于举办山东省首届中学中职团委书记职业技能大赛暨青年马克思主义者培养工程2017年春季培训班（中学中职团委书记）的通",from:"团委",create_date:"2017-06-02 16:08:37",like:50},
        {id:1,toUrl:"/noticeD",title:"于第十五届“挑战杯”·海尔山东省大学生课外学术科技作品竞赛终审决赛有关事项的预备通知",from:"团委",create_date:"2017-06-02 16:08:57",like:50},
        {id:1,toUrl:"/noticeD",title:"关于举办2017年山东省“鲁能泰山杯”向青春足球联赛的通知",from:"团委",create_date:"2017-06-02 16:08:17",like:50}
        
      ],
      listviewdata_4:[
        {id:1,toUrl:"/noticeD",title:"关于举办2017年齐鲁学子青春国学荟的通知",from:"团委",create_date:"2017-06-02 16:08:27",like:50},
        {id:1,toUrl:"/noticeD",title:"关于转发《关于2017年“井冈情·中国梦”全国大学生暑期实践季专项行动的有关事项》的通知",from:"李伟",create_date:"2017-06-02 16:08:27",like:50},
        {id:1,toUrl:"/noticeD",title:"关于组织开展2017年度“中国电信奖学金”暨“践行社会主义核心价值观先进个人”山东省遴选寻访活动的通知",from:"团委",create_date:"2017-06-02 16:08:27",like:50},
        {id:1,toUrl:"/noticeD",title:"关于举办山东省首届中学中职团委书记职业技能大赛暨青年马克思主义者培养工程2017年春季培训班（中学中职团委书记）的通",from:"团委",create_date:"2017-06-02 16:08:37",like:50},
        {id:1,toUrl:"/noticeD",title:"于第十五届“挑战杯”·海尔山东省大学生课外学术科技作品竞赛终审决赛有关事项的预备通知",from:"团委",create_date:"2017-06-02 16:08:57",like:50},
        {id:1,toUrl:"/noticeD",title:"关于举办2017年山东省“鲁能泰山杯”向青春足球联赛的通知",from:"团委",create_date:"2017-06-02 16:08:17",like:50}
        
      ],
    }
  },
  methods:{
      tabSelect(tab){
         this.isTab=tab;
      },
   back(){

      this.$router.go(-1);
     
   },
   toUrl(){
     this.$router.push({ path: '/addNotice' });
   }
	
  },
  components:{
    NavBar,
    LisViewItem_1
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
</style>
