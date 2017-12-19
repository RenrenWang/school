<template>
  <div class="scan" @click="back()">
      <div id="bcid" >
			<div style="height:40%"></div>
			<p class="tip">...载入中...</p>
		</div>
		
       
  </div>
</template>

<script>
export default {
  name: '',

  data () {
    return {
      scan:null
    }
  },

  mounted(){

var domready=false;
// H5 plus事件处理

let self=this;
function plusReady(){
   


  
		self.scan=new plus.barcode.Barcode('bcid');
	    self.scan.onmarked=onmarked;
	    self.scan.start({conserve:true,filename:'_doc/barcode/'});
	

   
}
if(window.plus){
	plusReady();
}else{
	document.addEventListener('plusready', plusReady, false);
}
// 监听DOMContentLoaded事件
document.addEventListener('DOMContentLoaded', function(){
	domready=true;
	plusReady();
}, false);
// 二维码扫描成功
function onmarked(type, result, file){
    switch(type){
    	case plus.barcode.QR:
    	type = 'QR';
    	break;
    	case plus.barcode.EAN13:
    	type = 'EAN13';
    	break;
    	case plus.barcode.EAN8:
    	type = 'EAN8';
    	break;
    	default:
    	type = '其它'+type;
    	break;
    }
    result = result.replace(/\n/g, '');
    location.href=result;
    self.scan.close();
}
  },
  methods:{
        back(){

    this.scan.close();
     this.$router.go(-1);
   }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.scan{
    width:100%;
    height:100%;
    background-color: #000000;
    img{
        width:100%;
    height:100%; 
    }
}

#bcid {
	width: 100%;
	position: absolute;
	top: 0px;
	bottom: 44px;
	text-align: center;
}
.tip {
	color: #FFFFFF;
	font-weight: bold;
	text-shadow: 0px -1px #103E5C;
}
footer {
	width: 100%;
	height: 44px;
	position: absolute;
	bottom: 0px;
	line-height: 44px;
	text-align: center;
	color: #FFF;
}
.fbt {
	width: 50%;
	height: 100%;
	background-color: #FFCC33;
	float: left;
}
.fbt:active {
  	-webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.5);
	box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.5);
}
</style>