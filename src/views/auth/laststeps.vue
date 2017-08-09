<style scoped>
    .content-container{
        background-color: #fff;
    }
    .laststeps-content{
    	position: relative;
    	width:400px;
    	height:450px;
    	margin:50px auto;
    	text-align: center;
    }
    .suceessed img{
    	width:110px;
    	height:110px;
    	margin-bottom: 20px;
    }
    .laststeps-tips{
    	font-size: 24px;
    	color:#4b4d4f;
    	line-height: 2em;
    }
    .laststeps-des{
    	font-size: 14px;
    	color:#4b4d4f;
    	line-height: 1.5em;
    }
    .laststeps-button{
    	margin-top: 20px;
    }
</style>    
<template>
	<div class="content-container">
        <div class="steps-container">
            <div class="steps-outer">
                <Steps :current="3" size="small">
                    <Step title="选择频道类型"></Step>
                    <Step title="填写频道信息"></Step>
                    <Step title="填写认证信息"></Step>
                    <Step title="审核提交成功"></Step>
                </Steps>                           
            </div>
        </div>
		<div class="laststeps-content">
			<div class="suceessed"><img src="../../images/suceessed.png"></div>
			<div class="laststeps-tips">申请提交成功</div>
			<div class="laststeps-des">我们会在1-2个工作日内完成审核工作，</br>请您耐心等待审核结果，并留意短信内消息。</div>
			<div class="laststeps-button">
				<Button type="primary" shape="circle" @click="successed">完成</Button>
			</div>
		</div>
	</div>	
</template>
<script>
    export default {
        created(){
            sessionStorage.removeItem('stepsdata');
        },
        methods:{
            successed(){
                location.hash = "#/auth/result";
            }
        }
    }
</script>
