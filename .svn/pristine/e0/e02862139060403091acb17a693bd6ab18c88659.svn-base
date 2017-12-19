<template>
  <div class="iMagementPush" style="height:100%">
       <NavBar    leftIcon="icon-fanhui"   fixed="true" title="事件上报" @leftActive="back()"  />
       <main class="main" style="background:#f0eff4;height:100%;">
           <div class="push-form">
               <p>事件类型：
                    <select>
                       <option value="0">类型1</option>
                        <option value="0">类型1</option>
                         <option value="0">类型1</option>
                          <option value="0">类型1</option>
                           <option value="0">类型1</option>
                            <option value="0">类型1</option>
                    </select>
               </p>
               <p>紧急程度：
                <label><input name="selectUrgent" type="radio" value="" />特急 </label> 
                 <label><input name="selectUrgent" type="radio" value="" />紧急 </label> 
                  <label><input name="selectUrgent" type="radio" value="" />常规 </label> 
               </p>
               <p>
               处理方式：
                <label><input name="selecthandle"  type="radio"  />自己处理 </label> 
                 <label><input  name="selecthandle"  type="radio" />提交中心 </label> 
               </p>
               <p>
               上报地点：<input type="text" value="" />
               </p>
                <p>
               反映人&nbsp;&nbsp;：<input type="text" value="" />
               </p>
                <p>
               反映人电话:
                    <input type="text" value="" />
               </p>
                <p>
               处理前图片：
                   <span style="color:#288bf0">添加</span>
               </p>
                <p>
                处理后图片：
                   <span style="color:#288bf0">添加</span>
               </p>
              <p>  <textarea   style="resize:none;width:100%;height:80px" placeholder="请输入处理前描述" rows="3" cols="50" value=""></textarea></p>
             <p>  <textarea  style="resize:none;width:100%;height:80px" placeholder="请输入处理后描述" rows="3" cols="50" value=""></textarea></p>
             <div class="sj-btns">
                 <a href="javascript:;" class="sj-btn">提交</a>
                 <a href="javascript:;" class="sj-btn">取消</a>
             </div>
           </div>
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
.push-form{
    margin:10px;
    padding:25px 10px;
    background:#fff;
    border-radius:15px;
  p{
    padding:rem(15px) 0;
    font-size:14px;
  border-bottom:1px solid  #f1f1f1;
   input[type="text"]{
       border:none;
   }
  }
}
.sj-btns{
    display:flex;
    justify-content:center;
    .sj-btn{
        height:30px;
        width:60px;
        background:$mainColor;
        color:#fff;
        display: inline-block;
        font-size:14px;
        line-height:30px;
        text-align:center;
        border-radius:5px;
        margin:0 10px;
        &:nth-of-type(2){
          background:#dd524d;

        }
    }
}

</style>
