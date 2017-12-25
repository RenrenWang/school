// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import  './assets/js/common.js'

import './assets/js/flexible.js'

import _  from 'lodash';
import axios  from 'axios';
Vue.prototype.$http = axios;
Vue.config.productionTip = false
//正式后台服务器URI
global.BASEURL="http://120.26.85.17/gisapp";
//测试后台服务器URI
//global.BASEURL="/gisapp";
//global.BASEURLLOIN="/zhxz";
/* eslint-disable no-new */

global.fmtDate=function(obj){
  var date =  new Date(obj);
  var y = 1900+date.getYear();
  var m = "0"+(date.getMonth()+1);
  var d = "0"+date.getDate();
  return y+"-"+m.substring(m.length-2,m.length)+"-"+d.substring(d.length-2,d.length);
}
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App },
  mounted(){
      //  if(this.isLogin()){
      //    let user=this.isLogin();

      //     this._ajax(user.qdQymc,localStorage.getItem('password'),(err,result)=>{
      //       if(err){
      //         console.log('d');
      //         localStorage.setItem('user',JSON.stringify(result.data));
      //         return true;
      //      }else{
      //        localStorage.removeItem('user');
      //        localStorage.removeItem('password');
      //         return  false;
      //       }
      //     })
      //  }
  },
   methods:{
     isLogin(){
      let user=localStorage.getItem("user");
      if(user&&user!=""){
        user=(JSON.parse(user));
        return user;
      }else{

         return false;
      }


    },
    logout(){
        let user=localStorage.getItem("user");
        if(user&&user!=""){
          let m=localStorage.removeItem("user");
            this.$router.push({path:'/login'});
          return true;
        }else{
           return false;
        }
    }
   }
})
