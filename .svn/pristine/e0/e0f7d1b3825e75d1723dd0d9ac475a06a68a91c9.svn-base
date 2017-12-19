<template>
  <div class="map" style="height:100%;witdh:100%">
        <NavBar    fixed="true" title="地图" />
        <main class="main"  style="height:100%;witdh:100%">
           	<div id="allmap"></div>
        </main>
  </div>
</template>

<script>
import NavBar from '../../common/NavBar/NavBar.vue'
export default {
  name: 'map',
  data () {
    return {
    
    }
  },
  mounted(){

   this.getDataMap();
  },

  methods:{
    getDataMap(){
     this.$http.get(BASEURL+'/mapInfoAction.action?areaCode=BJ')
      .then(data=>{
       data=data.data;
       let buildSiteMap=data.buildSiteMap;
       let centerSiteMap=data.centerSiteMap;
       
        this.setmap(centerSiteMap[0]['mapAxis'],centerSiteMap[0]['mapAyix'],data.buildSiteMap);
      })
    },
   setmap(centerX,centerY,mapList){
      console.log(centerY);
        var map = new BMap.Map("allmap");
        var point = new BMap.Point(centerX,centerY);
        map.centerAndZoom(point, 15);
        // 编写自定义函数,创建标注
        function addMarker(point,str){
          var marker = new BMap.Marker(point);

          var opts = {
	  position : point,    // 指定文本标注所在的地理位置
	  offset   : new BMap.Size(-20,-50)    //设置文本偏移量
	}
	var label = new BMap.Label(str, opts);  // 创建文本标注对象
		label.setStyle({
			 color : "red",
			 fontSize : "12px",
			 height : "20px",
			 lineHeight : "20px",
			 fontFamily:"微软雅黑"
		 });
          map.addOverlay(marker);
           map.addOverlay(label);
        }
      
     
        for (var i = 0; i < mapList.length; i ++) {
          var point = new BMap.Point(mapList[i]['mapAxis'],mapList[i]['mapAyis']);
          addMarker(point,mapList[i]['buildingName']);
	      }
    }
  },
  components:{
      NavBar
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#allmap{
  height:100%;
  width:100%;
}
</style>
