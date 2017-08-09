let util = {};
import md5 from '../component/server/md5';
import Ajax from '../component/server/ajax';
import env from '../config/env';
util.joinImageUrl = function(url){
    if(!url){ return ''}
    if (/^http:\/\//.test(url) || /^https:\/\//.test(url)) {
        return url;
    } else {
        if (env == 'production') {
            return 'https://file.springrass.com' + url;
        } else {
            return 'https://prefile.springrass.com' + url;
        }
    }
}

util.title = function(title) {
    if (title) {
        window.document.title = title;
    }
};

util.setcookie = function(name, value, expiredays) {
    let d = new Date()
    d.setDate(d.getDate() + expiredays)
    document.cookie = name + "=" + escape(value) +
        ((expiredays == null) ? "" : ";expires=" + d.toGMTString()) + ";path=/";
};

util.getcookie = function(name) {
    if (document.cookie.length > 0) {
        let start = document.cookie.indexOf(name + "=")
        if (start != -1) {
            start = start + name.length + 1;
            let end = document.cookie.indexOf(";", start);
            if (end == -1) end = document.cookie.length
            return unescape(document.cookie.substring(start, end));
        }
    }
    return "";
};

util.preUploadfile = function(e,callbck,context){
    let file = '';
    if (!e.target.files && /msie/i.test(navigator.userAgent) && !window.opera) {
        let fileSystem = new ActiveXObject("Scripting.FileSystemObject");
        file = fileSystem.GetFile(target.value);
    } else {
        file = e.target.files[0];
    }
    if (!/\.(jpg|jpeg|png|JPG|PNG)$/.test(e.target.value)) {
        context.$Notice.warning({
            title: '文件格式不正确',
            desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg、jpeg、png格式的图片。'
        });
        this.clearFileInput(e.target);
        return false
    }

    if (file.size / 1024 / 1024 > 2) {
        context.$Notice.warning({
            title: '上传文件大小限制',
            desc: '文件 ' + file.name + ' 大于2MB，请上传小于2MB的文件。'
        });
        this.clearFileInput(e.target);
        return false
    }

    Ajax.post('/config/getPolicy', {
        fileType: 1
    }).then(function(response) {
        let key = md5(this.getcookie('token') + Date.now());
        let client = new OSS.Wrapper({
            region: 'oss-cn-shenzhen',
            accessKeyId: response.accessKeyId,
            accessKeySecret: response.accessKeySecret,
            stsToken: response.token,
            bucket: response.bucket
        });           
        client.multipartUpload('/' + response.dir + key, file).then(function(res) {
            callbck(this.joinImageUrl(res.name));
            this.clearFileInput(e.target);
        }.bind(this));
    }.bind(this)); 
};

util.clearFileInput = function(f){
    if (f.value) {
        try {
            f.value = '';
        } catch (err) {}
        if (f.value) {
            var form = document.createElement('form'),
                ref = f.nextSibling,
                p = f.parentNode;
            form.appendChild(f);
            form.reset();
            p.insertBefore(f, ref);
        }
    }   
}


export default util;
