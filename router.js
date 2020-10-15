import Vue from 'vue'
import Router, {
	RouterMount
} from 'uni-simple-router';

Vue.use(Router)
//初始化
const router = new Router({
	h5:{
		loading: true,
		resetStyle: () => {     //对样式进行追加
			return {
				style: `
				#router-loadding .loadding {
					background-color: #22AAFF !important;
					box-shadow: 0 0 15px #22AAFF !important;
				}
				`
			}
		}
	},
	encodeURI:false,
	routes: [...ROUTES] //路由表
});

//全局路由前置守卫
router.beforeEach((to, from, next) => {
	console.log(1111111)
		next()
})
// 全局路由后置守卫
router.afterEach((to, from) => {
	console.log('afterEach----后置守卫')
})

export {
	RouterMount,
	router
}
