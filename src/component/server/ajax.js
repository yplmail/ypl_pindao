//引入 axios 
import axios from 'axios';
import config from './config';
import base64 from './base64';
import iView from 'iview';
import Qs  from 'qs';
import Util from '../../libs/util';

let ajax = axios.create();
// 添加请求拦截器，在请求时，显示 ElementUI 的加载组件
ajax.interceptors.request.use(function(config) {
    iView.LoadingBar.start()
    return config;
}, function(error) {
    return Promise.reject(error);
});

// 添加响应拦截器 ，请求结束后，关闭 加载组件
ajax.interceptors.response.use(function(response) {
    iView.LoadingBar.finish();
    return response;
}, function(error) {
    return Promise.reject(error);
});

// 封装请求数据的对象方法
class Ajax {
    static get(url) {
       return new Promise(function(resolve, reject) {
            ajax.get(url, config).then((res) => {
                resolve(res.data.data);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    static post(url,data) {
        data = data || {};
        return new Promise(function(resolve, reject) {
            ajax.post(url,data,config).then((response) => {
                if(response.data.code == 0){
                   resolve(response.data.data);
                }else if(response.data.code == 900003){
                    Util.setcookie('token','',-1);
                    location.hash = "#/login";
                }else if(response.data.code == 900007){

                }else{
                    iView.Notice.error({
                        title: '温馨提示',
                        desc : response.data.msg,
                        duration : 2
                    });                    
                    reject(response.data);
                }
            }).catch((error) => {
                if(error.response){
                    iView.Notice.error({
                        title: '温馨提示',
                        desc : error.response.statusText || '网络有点小情绪',
                        duration : 2
                    });                 
                }else{
                    iView.Notice.error({
                        title: '温馨提示',
                        desc : error.message || '网络有点小情绪',
                        duration : 2
                    });                      
                }
            });            
        });
    }
}

export default Ajax;
