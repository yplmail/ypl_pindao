import env from '../../config/env';

class ServerRequest {
    constructor() {
        this.domain    = this.domain()
        this.async     = true;
        this.dataType  = 'json';
        this.timeout   = 15000;
        this.maskLayer = false;
        this.instance();
        this.default = {
            app_key: 'channel_wechat_1',
            app_version: '1.0.0',
            api_version: '1.0.0',
            token: common.getcookies('token'),
            timestamp: new Date().Format("yyyy-MM-dd hh:mm:ss")
        }
    }

    domain(){
    	let domain = 'http://api.springrass.com/rest/';
    	if(env === 'development'){
    		domain = 'http://api.tes.springrass.com/rest/';
    	}
    	if(env === 'preventive'){
    		domain = 'http://preapi.springrass.com/rest/';
    	}
    	return domain; 	
    }

    instance(){
    	this.xhr = new XMLHttpRequest();
    	this.xhr.onreadystatechange = this.handleStateChange.bind(this)
		this.xhr.onerror = function (e) {
			console.error(xhr.statusText);
		};
    }

    handleStateChange(){
		if ( XMLHttpRequest.DONE != this.xhr.readyState ) {
			return;
		}  	
		if (this.xhr.readyState == 4) {
			if ( (this.xhr.status >= 200 && this.xhr.status < 300) || (this.xhr.status == 304) ) {

			} else {

			}
		}    	
    }

    post(data) {
        for (let r in data) {
            this[r] = data[r]
        }
        this.method = 'POST';
        this._request();
    }

    get(data) {
        for (let r in data) {
            this[r] = data[r]
        }
        this.method = 'GET';
        this._request();
    }

    _request() {
        for (let r in this.default) {
            this.data[r] = this.default[r]
        }

        let arr = [];

        for (let d in this.data) {
            if (this.data[d] && this.data[d] != 'undefined' && this.data[d] != 'null') {
                arr.push(d + '=' + encodeURIComponent(this.data[d]));
            }
        }

        let str = arr.join("&");

        if (this.mock) {
            this.url = '/mock/' + this.url + '.json?' + Date.now();
        } else {
            this.url = this.domain + API[this.url] + '?' + Date.now();
        }

        if (this.maskLayer) {
            this.index = layer.open({ type: 2 });
        }

        if (this.method == 'GET') {
            if (str) this.url = this.url + '&' + str;
            this.xhr.open(this.method, this.url, this.async);
            this.xhr.send(null);
        } else {
            if (this.async) { this._timeout() }
            this.xhr.open(this.method, this.url, this.async);
            this.xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
            this.xhr.send(str);
        }

        this.tip = str;
    }

    _onreadystatechange() {
        if (this.xhr.readyState == 4) {
            this._complete();
        }
    }

    _complete() {
        if (this.maskLayer) { layer.close(this.index); }
        var head = this.xhr.getAllResponseHeaders();
        var response = this.xhr.responseText;
        if (/application\/json/.test(head) || this.dataType === 'json' && /^(\{|\[)([\s\S])*?(\]|\})$/.test(response)) {
            response = JSON.parse(response);
        }
        if (this.xhr.status == 200) {
            if (response.code == 0) {
                this._success(response.data);
            } else {
                this.error(response.msg, response, this.xhr);
            }
        } else {
            this.error(this.xhr.statusText, response, this.xhr);
        }
    }

    _timeout() {
        if ('timeout' in this.xhr) {
            this.xhr.timeout = this.timeout;
            this.xhr.ontimeout = function() {
                this.error('请求超时...', {}, this.xhr);
            }.bind(this);
        } else {
            let timer = setTimeout(function() {
                this.xhr.abort();
                this.error('请求超时...', {}, this.xhr);
                clearTimeout(timer);
            }.bind(this), this.timeout);
        }
    }

    _success(result) {
        this.success(result, this.xhr)
    }


    _fail(msg, response) {
        if (response.code == 900003) {
            common.setcookies('refreshTokenTime', '', -1);
            common.setcookies('token', '', -1);
            location.hash = '/login';
        } else if (response.code == 900007) {
            //微信绑定接口
        } else {
            layer.open({ content: msg || '网络有点小情绪', time: 2 });
        }
    }
}

