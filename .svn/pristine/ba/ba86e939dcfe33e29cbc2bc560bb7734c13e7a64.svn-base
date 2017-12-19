<template>
  <div class="addNotice">
     <NavBar leftIcon="icon-fanhui"   fixed="true" title="发布通知" @leftActive="back()"  />
        <main class="main">
                <form class="edit-form">
                    <div class="edit-input  textarea">
                            <span>通知内容：</span><input type="text" v-model="ncontent" />
                    </div>
                    <div class="edit-input">
                            <span>通知标题：</span><input type="text" v-model="ntitle" />
                    </div>
                    <div class="edit-input">
                            <span>发布人姓名：</span><input type="text" v-model="npostname" />
                    </div>
                </form>
          </main>
  </div>
</template>

<script>
import NavBar from '../../common/NavBar/NavBar.vue'
export default {
  name: 'addNotice',
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
.edit-input{
    height:rem(80px);
}
 .edit-input.textarea{
        
    flex-direction:column;
    span{
      flex-basis:30px;

      display: block;
      margin:0;
      padding: 0;
      overflow: hidden;
    }
    input{
        flex:1;
        height: rem(300px);
        width: 100%;
        background: #f5f5f5;
    }
  }
</style>
