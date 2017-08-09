import Vue from 'vue';
import iView from 'iview';
import VueRouter from 'vue-router';
import Routers from './router';
import App from './app';
// import './my-theme/index.less';
import 'iview/dist/styles/iview.css';
import Util from './libs/util';
import directive from './libs/directive';

Vue.use(VueRouter);

Vue.use(iView);

// 路由配置
const RouterConfig = {
    mode: 'hash',
    routes: Routers
};

const router = new VueRouter(RouterConfig);

router.beforeEach((to, from, next) => {
    iView.LoadingBar.start();
    Util.title(to.meta.title);
    let path = to.path;
    let loginAuth = to.meta.loginAuth; 
    if(loginAuth){
        if(Util.getcookie('token')){
            next();   
        }else{
            if(path === '/login'){
                next();
            }else{
                next({path:'/login'});                
            }
        }
    }else{
        next();
    }
});

router.afterEach(() => {
    iView.LoadingBar.finish();
    window.scrollTo(0, 0);
});

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
    // render: h => {return h(App)}
    // render: function(h){return h(App)}
});

Date.prototype.Format = function(fmt) {
    var o = {
        "M+": this.getMonth() + 1, //月份
        "d+": this.getDate(), //日
        "h+": this.getHours(), //小时
        "m+": this.getMinutes(), //分
        "s+": this.getSeconds(), //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds() //毫秒
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}

/*
// ES5  
(function (h) {  
  return h(App);  
});  
  
// ES6  
h => h(App); 

render: function (createElement) {
    return createElement(
      'h' + this.level,   // tag name 标签名称
      this.$slots.default // 子组件中的阵列
    )
}
*/

