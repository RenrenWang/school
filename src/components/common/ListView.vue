<template>
       <div :id="mId" class="mescroll">
			<ul :id="warpId" class="data-list">
                  <LisViewItem_1  v-for="(v,i) in pdlist" :listViewData="v" :key="i"/>
            </ul>
		</div>
</template>
<script>
import LisViewItem_1 from './LisViewItem/LisViewItem_1.vue'
export default {
  name: 'listview',
  props:{
      url:{
          require:true
      },
      mId:{
        require:true
      },
      warpId:{
          require:true
      }
  },
  data () {
   return{
      pdlist:[],
	  mescroll:Object
     }
  },
  mounted(){
   if(this.pdlist.length<=0)
     this.initMescroll();
  },
  methods:{
      initMescroll() {
			//创建MeScroll对象,down可以不用配置,因为内部已默认开启下拉刷新,重置列表数据为第一页
			//解析: 下拉回调默认调用mescroll.resetUpScroll(); 而resetUpScroll会将page.num=1,再执行up.callback,从而实现刷新列表数据为第一页;
              let self=this;
			this.mescroll = new MeScroll(this.mId, {
				down: {
					use: false,
					callback() {
						console.log(1);
					}
				},

				up: {
					callback: this.upCallback, //上拉回调
					auto: true,
					//以下参数可删除,不配置
					//page:{size:8}, //可配置每页8条数据,默认10
					// toTop: { //配置回到顶部按钮
					// 	src: require("../../assets/images/mescroll-totop.png"), //默认滚动到1000px显示,可配置offset修改
					// 	//offset : 1000
					// },
					htmlNodata: '<p class="upwarp-nodata">-- 没有更多数据 --</p>',
					page: {
						
					num:0, 
                    size:10, 
                    time:3000 
					},
					
					empty: { //配置列表无任何数据的提示
						warpId: this.warpId,
						icon:require('../../assets/images/mescroll-empty.png'),
						tip: "亲,暂无相关数据哦~",
						// btntext: "去逛逛 >",
						// btnClick() {
						// 	// alert("点击了去逛逛按钮");
						// }
					}
				}
			});

			//初始化vue后,显示vue模板布局
			document.getElementById(this.warpId).style.display = "block";
		},
		//上拉回调 page = {num:1, size:10}; num:当前页 ,默认从1开始; size:每页数据条数,默认10
		upCallback(page) {
			console.log("page.num==" + page.num + ", page.size==" + page.size);
			//联网加载数据
                console.log(BASEURL+this.url+ page.num);
			this.$http.get(BASEURL+this.url+ page.num).then((response) => {
				//data=[]; //打开本行注释,可演示列表无任何数据empty的配置
				let data = response.data.data;
				// this.pdlist = data.data;
                console.log('page-----'+ data.length);

				//data=[]; //打开本行注释,可演示列表无任何数据empty的配置
				//如果是第一页需手动制空列表
			   if (page.num == 1) this.pdlist = [];

			
				//联网成功的回调,隐藏下拉刷新和上拉加载的状态;
				//传参:数据的总数; mescroll会自动判断列表是否有无下一页数据,如果数据不满一页则提示无更多数据;
				this.mescroll.endSuccess(data.length);
			
					//更新列表数据
				this.pdlist = this.pdlist.concat(data);
				//console.log("this.pdlist.length==" + this.pdlist.length);

			}).catch(error=>{
				this.mescroll.endSuccess(0);
				// this.mescroll.endErr();
				// if(this.pdlist<=0){
                //      this.isError=true;
				// }
				//this.mescroll.endSuccess(this.pdlist<0?);

			})

		}
  },
  components:{
      LisViewItem_1
  }
}
</script>

<style lang="scss" scoped>

@import "../../assets/style/base.scss";
.mescroll{
 
  position: absolute;
  overflow-y:auto;
}

</style>
