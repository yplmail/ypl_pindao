const routers = [{
    path: '*',
	redirect: '/index'
},{
	path:'/index',
	meta:{loginAuth:false,title:'草莓视频-消费心得分享平台，测评、摊店、开箱、穿搭、你想要的这里都有！'},
    component: (resolve) => require(['./views/index/index.vue'], resolve)
},{
	path:'/login',
	meta:{loginAuth:true,title:'登录'},
    component: (resolve) => require(['./views/login/login.vue'], resolve)
},{
	path:'/channel',
	meta:{loginAuth:true,title:'草莓频道中心'},
    component: (resolve) => require(['./views/channel/channel.vue'], resolve)
},{
	path:'/upload',
	meta:{loginAuth:true,title:'上传视频'},
    component: (resolve) => require(['./views/upload/upload.vue'], resolve)
},{
	path:'/complete',
	meta:{loginAuth:true,title:'视频上传成功'},
    component: (resolve) => require(['./views/complete/complete.vue'], resolve)
},{
	path:'/agreement',
	meta:{loginAuth:false,title:'用户协议'},
    component: (resolve) => require(['./views/agreement/agreement.vue'], resolve)
},{
	path:'/authAgreement',
	meta:{loginAuth:false,title:'认证协议'},
    component: (resolve) => require(['./views/agreement/authAgreement.vue'], resolve)
},{
	path:'/auth/firststeps',
	meta:{loginAuth:true,stepAuth:true,title:'选择频道类型'},
    component: (resolve) => require(['./views/auth/firststeps.vue'], resolve)
},{
	path:'/auth/secondsteps',
	meta:{loginAuth:true,stepAuth:true,title:'填写频道信息'},
    component: (resolve) => require(['./views/auth/secondsteps.vue'], resolve)
},{
	path:'/auth/thirdsteps.p',
	meta:{loginAuth:true,stepAuth:true,title:'填写认证信息'},
    component: (resolve) => require(['./views/auth/thirdsteps.p.vue'], resolve)
},{
	path:'/auth/thirdsteps.o',
	meta:{loginAuth:true,stepAuth:true,title:'填写认证信息'},
    component: (resolve) => require(['./views/auth/thirdsteps.o.vue'], resolve)
},{
	path:'/auth/laststeps',
	meta:{loginAuth:false,stepAuth:true,title:'审核提交成功'},
    component: (resolve) => require(['./views/auth/laststeps.vue'], resolve)
},{
	path:'/auth/result',
	meta:{loginAuth:false,title:'频道审核结果'},
    component: (resolve) => require(['./views/auth/result.vue'], resolve)
},{
	path:'/setting',
	meta:{loginAuth:true,title:'账号设置'},
    component: (resolve) => require(['./views/setting/setting.vue'], resolve)
}];

export default routers;