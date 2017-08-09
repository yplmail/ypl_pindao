<style scoped>
.content-container {
    background-color: #fff;
}

.result-content {
    position: relative;
    width: 935px;
    height: 440px;
    margin: 0 auto;
    box-sizing: border-box;
    background-color: #fff;
    padding-top: 60px;
}

.result-center{
	position: relative;
	width:600px;
	margin:0 auto;
}
.result{
	font-size: 30px;
	color:#333;
	line-height: 2em;
}
.result-des{
	font-size: 14px;
	color:#333;
	line-height: 2em;
}
.reason{
	margin-top:10px;
}
.reason h3{
    margin-bottom: 5px;
}
.button-outer{
	margin-top: 30px;
	text-align: center;
}
.textarea{
    width:100%;
    border:none;
    outline: none;
    line-height: 2em;
}
</style>
<template>
    <div class="content-container">
        <div class="steps-container">
            <div class="steps-outer">
                <Steps :current="4" size="small">
                    <Step title="选择频道类型"></Step>
                    <Step title="填写频道信息"></Step>
                    <Step title="填写认证信息"></Step>
                    <Step title="审核提交成功"></Step>
                </Steps>                           
            </div>
        </div>
        <div class="result-content clearfix">
            <div class="result-center">
            	<div v-show="status==3">
            		<div class="result">很遗憾， 您认证审核未通过...</div>
            		<div class="result-des">很遗憾您的认证申请未通过审核。您可以参照以下内容，完善认证信息并再次提交审核，谢谢！</div>
            		<div class="reason">
            		    <h3>驳回原因：</h3>
                        <textarea rows="6" class="textarea" readonly>{{refuseDesc}}</textarea>
<!--                         <Input v-model="refuseDesc" type="textarea" :rows="6"></Input> -->
<!-- 						<p>1.确认书照片不清晰，请提供高清扫描件。</p>
						<p>2.手持身份证照片模糊。请提供高清拍摄照片。</p>
						<p>3.没有提供相关作品。</p> -->
            		</div>
            		<div class="button-outer">
            			<Button type="primary" shape="circle" @click="reauth">申请重新认证</Button>
            		</div>
            	</div>
            	<div style="text-align: center;" v-show="status==1">
            		<p class="result">审核中， 已等待{{duration}}小时...</p>
            		<p class="result-des">如在2个工作日内未得到认证结果， 请您发送邮件至service@springrass.com与我们取得联系。</p>
            		<p class="button-outer"><Button type="primary" shape="circle" @click="refresh" :loading="loading">刷新</Button></p>
            	</div>
            </div>
        </div>
    </div>
</template>
<script>
import Ajax from '../../component/server/ajax';
export default {
   data(){
        return{
            loading   : false,
            status    : 0,
            duration  : 0,
            refuseDesc: ''
        }
   },
   created(){
        this.fetchAuthReuslt();
   },
   methods:{
        fetchAuthReuslt(){
            Ajax.post('/user/getAuthenticateStatus').then(function(response){
                this.status = response.status;                 
                this.duration = response.duration;                 
                this.refuseDesc = response.refuseDesc; 
                sessionStorage.setItem('__AUTH__',response.status);
                let timer = setTimeout(function(){   
                    this.loading = false;
                    clearTimeout(timer);                
                    if(response.status === "2"){
                        location.hash = '#/channel';
                    }
                }.bind(this),300);                    
            
                //this.status = 3;                 
                // this.refuseDesc = "1.确认书照片不清晰，请提供高清扫描件。\n 2.手持身份证照片模糊。请提供高清拍摄照片。\n 3.没有提供相关作品。\n 2.手持身份证照片模糊。请提供高清拍摄照片。\n 3.没有提供相关作品。\n 2.手持身份证照片模糊。请提供高清拍摄照片。\n 3.没有提供相关作品。\n 2.手持身份证照片模糊。请提供高清拍摄照片。\n 3.没有提供相关作品。";                 
            }.bind(this))    
        },
        reauth(){
            Ajax.post('/user/getAuthenticateInfo').then(function(response) {
                response.categoryId = response.categoryId + '';
                sessionStorage.setItem('stepsdata',JSON.stringify(response));
                location.hash = "#/auth/firststeps";
            }.bind(this));           
        },
        refresh(){
            this.loading = true;
            this.fetchAuthReuslt();
        }
   }
}
</script>
