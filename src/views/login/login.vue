<style scoped>
    .layout{
        position: relative;
        height:896px;
        width:100%;
        overflow: hidden;
        min-width: 1200px;
    }

    .layout-left{
        position: relative;
        width:70%;
        height:100%;
        background-color: #999;
        float: left;
    }

    .layout-left img{
        width:100%;
        height:100%;
    }

    .layout-right{
        position: relative;    
        width:30%;
        height:100%;
        background-color: #fff;
        float: left;
    }

    .form-outer{
        position: absolute;
        left:50%;
        top:216px;
        width:300px;
        margin-left: -150px;
        height:440px;
    }

    .cm-logo{
        float: left
    }

    .cm-logo img{
        width:46px;
        height:46px;   
        border-radius: 50%;
    }

    .cm-des{
        float: left;
        color:#333;
        padding-left: 6px;
    }

    .cm-des h1{
        font-size: 22px;
    }

    .cm-des p{
        font-size: 13px;
    }

    .form-welcome{
        margin-top:62px;
        color:#222;
        font-size:20px;  
    }

    .form-input{
        position: relative;
        height:54px;
        line-height: 54px;
        width:100%;
        overflow: hidden;
        border-bottom: 1px solid #e5e5e5;
    }

    .form-input label{
        position: absolute;
        width:17px;
        height:54px;
        background-image: url(../../images/account_icon.png);
        background-repeat:no-repeat;
        background-size: 17px 20px;
        background-position: center center;
    }

    .form-input input{
        padding-left:31px;
        font-size: 16px;
        color:#aaa;
        width:100%;
        height:54px;
        border:0;
        outline: none;
    }

    .form-input label[for="password"]{
        background-image: url(../../images/password_icon.png)!important;
    }

    .form-tips{
        height:28px;
        font-size: 14px;
        margin-top: 10px;
        color: #ed3f14;
        line-height: 2em;
    }

    .form-submit{
        margin-top:20px;
        width:100%;
        height:46px;
    }

    .submit-button{
        display: block;
        width:100%;
        height:46px;
        line-height: 46px;
        border:0;
        outline: none;
        text-align: center;
        font-size:18px;
        color:#fff;
        border-radius: 5px;
        background: -webkit-linear-gradient(left, #f4284f , #f35733); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #f4284f, #f35733); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #f4284f, #f35733); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #f4284f , #f35733); /* 标准的语法 */ 
        filter:progid:DXImageTransform.Microsoft.gradient(enabled='true',startColorstr=#f4284f, endColorstr=#f35733);             
    }

    .submit-button:hover{
        background: -webkit-linear-gradient(left, #c3243d , #c2452a); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #c3243d, #c2452a); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #c3243d, #c2452a); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #c3243d , #c2452a); /* 标准的语法 */ 
        filter:progid:DXImageTransform.Microsoft.gradient(enabled='true',startColorstr=#f4284f, endColorstr=#f35733);         
    } 

    .form-argument{
        margin-top:30px;
    }

    .form-argument span,.form-argument a{
        font-size: 13px;
        color:#888;
    }

    .form-argument a:hover{
         color: #57a3f3;       
    }

    .input-hack{
        position: absolute;
        top:-10000px;
        height:0;
        width:0;
    }
</style>

<template>
     <div class="layout clearfix">
         <div class="layout-left">
             <img src="../../images/login_bg.png">
         </div>
         <div class="layout-right">
             <div class="form-outer">
                <div class="form-header clearfix">
                    <div class="cm-logo">
                        <img src="../../images/logo.png" alt="草莓频道logo">
                    </div>
                    <div class="cm-des">
                        <h1>草莓频道中心</h1>
                        <p>消费心得分享平台</p>
                    </div>
                </div>

                <h1 class="form-welcome">欢迎登录</h1>              

                <div class="form-input">
                    <label for="account"></label>
                    <input id="account" v-model="mobile" type="text" placeholder="请输入手机号码" maxlength="11">
                </div>
                <div class="form-input">
                    <label for="password"></label>
                    <input id="password" v-model="password" type="password" placeholder="请输入登录密码" maxlength="20">
                </div>
                <div class="form-tips">
                    <p>{{content}}</p>
                </div>                
                <div class="form-submit">
                    <a class="submit-button" @click="login">登录</a>
                </div>
                <div class="form-argument">
                    <span>登录意味着你同意了草莓频道中心的 <router-link :to="{path:'agreement'}">《用户协议》</router-link></span>
                </div>
             </div>
         </div>
     </div>
</template>

<script>
    import Util from '../../libs/util';
    import md5 from '../../component/server/md5';
    import Ajax from '../../component/server/ajax';
    export default {
        data(){
            return {
                content  : '',       
                mobile   : '',
                password : '',         
            }
        },
        methods:{
            login(e){
                if(!this.mobile){
                    this.content = '请输入手机号码';
                    return false;
                }

                if (!/^1\d{10}$/.test(this.mobile)) {
                    this.content = '请输入的手机号不正确';
                    return false;                    
                }

                if (!this.password) {
                    this.content = '请输入登录密码';
                    return false;   
                }

                if (this.password.length < 6 || this.password.length > 20) {
                    this.content = '请输入6-20位字符的密码';                    
                    return false;
                }
                this.content = ''; 
                this.submit();
            },

            submit(){
                Ajax.post('/user/login',{
                    mobile   : this.mobile,
                    pwd : md5(this.password)
                }).then(function(response){
                    sessionStorage.removeItem('stepsdata');
                    Util.setcookie('token',response.token);  
                    this.fetchUserInfo();               
                }.bind(this))
            },

            fetchUserInfo(){
                Ajax.post('/user/getAuthenticateStatus').then(function(response){
                    sessionStorage.setItem('__AUTH__',response.status);
                    if(response.status === "0"){
                        location.hash = '#/auth/firststeps';                        
                    }else if(response.status === "2"){
                        location.hash = '#/channel';
                    }else{
                        location.hash = '#/auth/result';
                    }                  
                }.bind(this))                
            }
        }
    };
</script>