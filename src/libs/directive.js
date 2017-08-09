import Vue from 'vue';
import env from '../config/env';

Vue.directive('cover',function(el, dir){
    if(/^(http:|https:)\/\//.test(dir.value)){
    	el.setAttribute('src',dir.value)
    }else{
        if (env == "production") {
        	el.setAttribute('src','https://file.springrass.com' + dir.value);
        } else {
        	el.setAttribute('src','https://prefile.springrass.com' + dir.value);
        }
    }
})