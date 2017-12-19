<template>
  <div id="layout">

    <div class="sub-page">
            <router-view></router-view>
    </div>
    <VFooter></VFooter>
  </div>
</template>

<script>
import VFooter from '../../common/Footer/Footer.vue'

export default {
  name: 'layout',
  components:{
     VFooter
  }
}
</script>

<style lang="scss">
@import "../../../assets/style/rem.scss";

#layout{
  height: 100%;
  background:$mianBgColor;
}

.sub-page{
    position:fixed;
    top:0;
    bottom:$topBarH+rem(1px);
    overflow-x: hidden;
    width:100%;
}

</style>
