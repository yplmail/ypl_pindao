<style scoped>
    .content-container{
        background-color: #fff;
    }

	.firststeps-content{
		position: relative;
		width:935px;
		height:662px;
		margin:0 auto;
		box-sizing: border-box;
		background-color: #fff;
	}
	.header{
		height: 68px;
		line-height: 68px;
		font-size: 16px;
		color:#333;
	}
    .classfiy-outer,.link-outer{
    	box-sizing: border-box;
    	width:105%;
    }
	.classfiy{
		position: relative;
		width:220px;
		height:448px;
		border:1px solid #999;
        float: left;
        margin-right: 20px;
        box-sizing: border-box;
        text-align: center;
	}
    .classfiy:last-child{
    	margin-right: 0;
    }
    .originator-img{
    	margin-top: 40px;
    	width:72px;
    	height:72px;
    }
    .originator-name{
    	font-size:17px;
    	color:#333;
    	line-height: 2.5em;
    	font-weight: 200;
    }
    .originator-desprition{
    	font-size:12px;
    	line-height: 1.8em;
    	margin: 0 26px;
    	height: 80px
    }
    .upload-condition{
    	padding-top: 15px;
    	font-size:16px;
		margin: 0 26px;
		border-bottom:1px solid #999;
		text-align: left;
		font-weight: 200;
		line-height: 2em;
    }
    .property{
        margin:0 26px;
        line-height: 2em;
    }
    .property span{
    	font-size: 12px;
    	color:#999;
    }

    .property span.left{
        float: left;
    }

    .property span.right{
        float: right;
    }  

    .link-outer > div{
		position: relative;
		margin-top: 40px;
		width:220px;
		float: left;
		text-align: center;
		margin-right:20px;
    } 

    .link-outer .link{
    	border:1px solid #f4284f;
    	border-radius: 5px;
    	font-size: 16px;
    	color:#f4284f;
    	width:170px;
    	height:44px;
    	line-height: 44px;
    	display: inline-block;
    } 
</style>

<template>
	<div class="content-container">
		<div class="steps-container">
            <div class="steps-outer">
                <Steps :current="0" size="small">
                    <Step title="选择频道类型"></Step>
                    <Step title="填写频道信息"></Step>
                    <Step title="填写认证信息"></Step>
                    <Step title="审核提交成功"></Step>
                </Steps>                           
            </div>
		</div>
		<div class="firststeps-content">
            <div class="header">频道通过认证后，将不可更改。</div>
            <div class="classfiy-outer clearfix">
               <div class="classfiy">
               		<img class="originator-img" src="../../images/person_originator.png">
               		<h2 class="originator-name">个人创作者</h2>
               		<p class="originator-desprition">适合善于用视频呈现垂直领域内容的达人、爱好者等不以公司形式运营的创作个体和团队</p>                    	
                	<h2 class="upload-condition">适合个人</h2>
                	<p class="property clearfix" style="margin-top:5px">
                		<span class="left">视频时长</span>
                		<span class="right">10分钟</span>
                	</p>
                	<p class="property clearfix">
                		<span class="left">每月上传数量</span>
                		<span class="right">50条</span>
                	</p>
                	<p class="property clearfix">
                		<span class="left">单条大小限制</span>
                		<span class="right">300M</span>
                	</p>
                	<p class="property clearfix">
                		<span class="left">视频数据分析功能 </span>
                		<span class="right">有</span>
                	</p>
                	<p class="property clearfix">
                		<span class="left">推广功能</span>
                		<span class="right">可申请</span>
                	</p>
                	<p class="property clearfix">
                		<span class="left">接单功能</span>
                		<span class="right">有</span>
                	</p>               	           	
               </div>

               <div class="classfiy">
               		<img class="originator-img" src="../../images/media_originator.png">
               		<h2 class="originator-name">泛媒体</h2>
               		<p class="originator-desprition">适合以生产或发行视频内容为主业务的新媒体公司。</p>                    	
                	<h2 class="upload-condition">适合公司和团队</h2>
                	<p class="property clearfix" style="margin-top:5px">
                		<span class="left">视频时长</span>
                		<span class="right">15分钟</span>
                	</p>
                	<p class="property clearfix">
                		<span class="left">每月上传数量</span>
                		<span class="right">100条</span>
                	</p>
                	<p class="property clearfix">
                		<span class="left">单条大小限制</span>
                		<span class="right">300M</span>
                	</p>
                	<p class="property clearfix">
                		<span class="left">视频数据分析功能 </span>
                		<span class="right">有</span>
                	</p>
                	<p class="property clearfix">
                		<span class="left">推广功能</span>
                		<span class="right">可申请</span>
                	</p>
                	<p class="property clearfix">
                		<span class="left">接单功能</span>
                		<span class="right">有</span>
                	</p>                  	           	
               </div>

               <div class="classfiy">
               		<img class="originator-img" src="../../images/company_originator.png">
               		<h2 class="originator-name">企业</h2>
               		<p class="originator-desprition">适合自有品牌，提供产品和服务，有市场推广诉求的企业。</p>                    	
                	<h2 class="upload-condition">适合品牌经营型公司</h2>
                	<p class="property clearfix" style="margin-top:5px">
                		<span class="left">视频时长</span>
                		<span class="right">15分钟</span>
                	</p>
                	<p class="property clearfix">
                		<span class="left">每月上传数量</span>
                		<span class="right">100条</span>
                	</p>
                	<p class="property clearfix">
                		<span class="left">单条大小限制</span>
                		<span class="right">300M</span>
                	</p>
                	<p class="property clearfix">
                		<span class="left">视频数据分析功能 </span>
                		<span class="right">有</span>
                	</p>
                	<p class="property clearfix">
                		<span class="left">推广功能</span>
                		<span class="right">可申请</span>
                	</p>
                	<p class="property clearfix">
                		<span class="left">接单功能</span>
                		<span class="right">有</span>
                	</p>                  	           	
               </div>

               <div class="classfiy">
               		<img class="originator-img" src="../../images/other_originator.png">
               		<h2 class="originator-name">其他组织</h2>
               		<p class="originator-desprition">适合社会组织、非营利机构、学校、社团、等机构团体。</p>                    	
                	<h2 class="upload-condition">适合非营利性机构</h2>
                	<p class="property clearfix" style="margin-top:5px">
                		<span class="left">视频时长</span>
                		<span class="right">10分钟</span>
                	</p>
                	<p class="property clearfix">
                		<span class="left">每月上传数量</span>
                		<span class="right">50条</span>
                	</p>
                	<p class="property clearfix">
                		<span class="left">单条大小限制</span>
                		<span class="right">300M</span>
                	</p>
                	<p class="property clearfix">
                		<span class="left">视频数据分析功能 </span>
                		<span class="right">有</span>
                	</p>
                	<p class="property clearfix">
                		<span class="left">推广功能</span>
                		<span class="right">可申请</span>
                	</p>
                	<p class="property clearfix">
                		<span class="left">接单功能</span>
                		<span class="right">有</span>
                	</p>                  	           	
               </div>
            </div>
            <div class="link-outer clearfix">
            	<div><a class="link" href="#/auth/secondsteps?stepstype=20">选择并继续</a></div>
            	<div><a class="link" href="#/auth/secondsteps?stepstype=30">选择并继续</a></div>
            	<div><a class="link" href="#/auth/secondsteps?stepstype=40">选择并继续</a></div>
            	<div><a class="link" href="#/auth/secondsteps?stepstype=50">选择并继续</a></div>
            </div>
		</div>
	</div>
</template>
<script>
    export default {
        
    }
</script>