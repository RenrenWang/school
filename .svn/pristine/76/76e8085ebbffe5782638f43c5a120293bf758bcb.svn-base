<template>
    <div class="login">
         <NavBar  leftIcon="icon-fanhui"  fixed="true" title="注册" @leftActive="back()"/>
          <main class="main">
              <form class="login-form">
                 <input type="text" placeholder="请输入用户名" class="input-text" v-model="username"> 
                  <input type="password" placeholder="请输入密码" class="input-text" v-model="password">
               
                 <input type="button" value="注册" class="input-button"  @click="register">
              </form>
          </main>
    </div>
</template>

<script>
import NavBar from '../../common/NavBar/NavBar.vue'
export default {
  name: 'login',
  data () {
    return {
      password:null,
      username:null
    }
  },

  methods:{

      register(){
          if(!this.username||this.username==""){
         return    alert("用户名不能为空");
          }
         if(!this.password||this.password==""){
           return    alert("密码不能为空");
          }
          

          let url=BASEURL+"/sysLogin.action?appUserRegister=&userLogin="+this.username+"&userLoginPwd="+this.password;
            this.$http.get(url)
            .then((data)=>{
                    console.log(data.data);
            })
      },
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
<style  lang="scss">
@import "../../../assets/style/base.scss";
.login-form{
  width:90%;
  margin:0 auto;
  input{
    margin: rem(50px) 0;
    display: block;
    height: rem(120px);
    width:100%;

    border:none;
    &.input-text{
      padding-left: 15px;
      box-sizing: border-box;
      background: #eceaea;
    }
    &.input-button{
      margin-top: rem(80px);
        height: rem(110px);
      background:$mainColor;
      color: #fff;
      font-size: 16px;
    }
  }

}
</style>
