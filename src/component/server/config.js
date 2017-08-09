//Qs 是个数据处理插件，标配
import Qs  from 'qs';
import env from '../../config/env';
import Cookies from 'js-cookie';
import md5 from './md5';
import base64 from './base64';

const keySort = function(obj){
    var keyArr = Object.keys(obj).sort();
    var targetArr = [];
    for (var i = 0; i < keyArr.length; i++) {
        targetArr.push(keyArr[i]);
        targetArr.push(obj[keyArr[i]]);
    }
    return 'ccmc_pcweb!@#201707+$' + targetArr.join("") + 'ccmc_pcweb!@#201707+$';
}

export default {
    //请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
    url: '/',
    // 请求方法同上
    method: 'get', // default
    // 基础url前缀，请求数据时，会把baseURL和url拼接为完整的请求路径
    baseURL: function(){
        if (env === 'development') { return 'http://api.tes.springrass.com/rest/' };
        if (env === 'preventive')  { return 'http://preapi.springrass.com/rest/' };
        if (env === 'production')  { return 'http://api.springrass.com/rest/' };
    }(), 　　
    // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，
    // 这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）    　　
    transformRequest: [function(data) {
        data             = data || {};
        data.app_key     = 'channel_pcweb_7';
        data.app_version = '1.0.0';
        data.api_version = '1.0.0';
        data.token       = Cookies.get('token');
        data.timestamp   = new Date().Format("yyyy-MM-dd hh:mm:ss");
        let params       = {};
        for (let r in data) {
            if (data[r] && data[r] != 'undefined' && data[r] != "null") {
                params[r] = data[r];
            }
        }
        console.log(params);
        console.log(Qs.stringify(params));
        return Qs.stringify(params);
    }],

    // 这里提前处理返回的数据
    transformResponse: [function(data) {
        if(typeof data == 'string'){
            data = JSON.parse(data);
        }
        return data;
    }],
    // 请求头信息
    headers: {
        'Content-Type' : 'application/x-www-form-urlencoded'
    },
    // `paramsSerializer` 是一个负责 `params` 序列化的函数
    // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
    paramsSerializer: function(params) {
        return Qs.stringify(params, { arrayFormat: 'brackets' })
    },
    //post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
    //设置超时时间，随意
    timeout: 10000,
    //返回数据类型
    responseType: 'json', // default
    // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。
    // 如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，
    // promise 将被 resolve; 否则，promise 将被 rejecte
    validateStatus: function(status) {
        return status >= 200 && status < 300; // 默认的
    },
    // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
    // 如果设置为0，将不会 follow 任何重定向
    maxRedirects: 5 // 默认的
}
