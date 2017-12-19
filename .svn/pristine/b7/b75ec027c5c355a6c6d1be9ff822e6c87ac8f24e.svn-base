<template>
  <footer>
      <div class="footer">
           <ul>
             <li v-for="(v,i) in  items"><router-link :to="v.url" :title="v.name"><p :class="['iconfont',v.icon]"></p><span>{{v.name}}</span></router-link></li>
           </ul>
      </div>

  </footer>
</template>

<script>
export default {
  name: 'footer',
  data(){
    return{
      items:[
        {"name":"主页","url":'/home',"icon":'icon-zhuye'},
        {"name":"发现","url":'/find',"icon":'icon-faxian'},
        {"name":"地图","url":'/map',"icon":'icon-map_02'},
        {"name":"通讯录","url":'/addressBook',"icon":'icon-tongxunlu'},
        {"name":"我的","url":'/my',"icon":'icon-wode'}
      ]
    }
  },
  methods:{
    setIcon(i){
     return "url("+items[i]['icon']+") no-repeat  center/contain";
    }
  }
}
</script>
<style lang="scss">
@import "../../../assets/style/base.scss";
.footer{
    position: fixed;
    bottom:0;
    width: 100%;
    height:$bottomBarH;
    background: #fff;
    z-index: 999;
    box-shadow: 0 1px 3px rgba(0,0,0,.12), 0 1px 2px rgba(0,0,0,.24);
     &:before{
        // border-top:1px solid #ededed;
        // content: '';
        // width: 100%;
        // height: 1px;
        // background: $borderColor;
        // transform: scaleY(.5);
        // position: absolute;
        top: 0;
        @extend %borderTopLine;
    }
    >ul{
      display: flex;
      align-items:center;
       height:100%;
      >li{
        text-align: center;

        flex: 1;
      a{
       color: $notLinkColor;
      &.router-link-active{
        color: $activeColor;
      }
       p{
         margin: rem(8px) 0;
         font-size: rem(50px);

         width: 100%;
       }
       span{

         font-size: 14px;
       }
      }

      }
    }
}

</style>
