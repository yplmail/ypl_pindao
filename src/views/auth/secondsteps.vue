<style scoped>
.content-container {
    background-color: #fff;
}

.secondsteps-content {
    position: relative;
    width: 935px;
    height: 700px;
    margin: 0 auto;
    box-sizing: border-box;
    background-color: #fff;
    padding-top: 60px;
}

.secondsteps-left {
    float: left;
    width: 300px;
    text-align: center;
}

.secondsteps-left .upload-outer {
    position: relative;
    width: 120px;
    height: 120px;
    margin: 0 auto;
}

.upload-outer img {
    border-radius: 50%;
    width: 100%;
    height: 100%;
}

.upload-outer input {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity=0);
}

.upload-tip{
    cursor: pointer;
    line-height: 3em;
    font-size: 12px;
    color:#468ff2;
}

.secondsteps-right {
    float: left;
}

.errorTips{
    color: #ed3f14;  
}

</style>
<template>
    <div class="content-container">
        <div class="steps-container">
            <div class="steps-outer">
                <Steps :current="1" size="small">
                    <Step title="选择频道类型"></Step>
                    <Step title="填写频道信息"></Step>
                    <Step title="填写认证信息"></Step>
                    <Step title="审核提交成功"></Step>
                </Steps>                           
            </div>
        </div>
        <div class="secondsteps-content clearfix">
            <div class="secondsteps-left">
                <div class="upload-outer">
                    <input type="file" class="upload" ref="uploadLogo" accept="image/png,image/jpeg,image/jpg" @change="uploadChannelLogo" />
                    <img :src="formValidate.channelLogo + '?x-oss-process=image/resize,m_lfit,h_120,w_120'" v-if="formValidate.channelLogo">
                    <img  src="../../images/channel_logo.png" v-else>
                </div>
                <p class="upload-tip" @click="headerClickHandle" v-if="formValidate.channelLogo">点击修改LOGO</p>
                <p class="upload-tip" ref="errorTips" @click="headerClickHandle" v-else>{{uploadTips}}</p>
            </div>
            <div class="secondsteps-right">
                <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="100">

                    <Form-item label="内容领域：" prop="categoryId" >
                        <Select v-model="formValidate.categoryId" placeholder="请选择内容领域" size="large" style="width:260px">
                            <Option v-for="item in classfiyItems" :value="item.cateId" :key="item.cateId">{{item.cateName}}</Option>
                        </Select>
                    </Form-item>

                    <Form-item label="频道名称：" prop="channelName">
                        <Input v-model="formValidate.channelName" placeholder="有趣的名字会带来好运哦 （20字以内）" :maxlength="20" size="large" style="width:260px"></Input>
                    </Form-item>

                    <Form-item label="频道简介：" prop="introduction">
                        <Input v-model="formValidate.introduction" type="textarea" :autosize="{minRows:3,maxRows:5}" placeholder="介绍下自己的频道吧 （50字以内）" :maxlength="50" size="large" style="width:260px">
                        </Input>
                    </Form-item>

                    <Form-item label="所在地区：" prop="address" :show-message="false">
                        <input class="ivu-input" ref="mapInput" v-model="formValidate.address" placeholder="请选择" style="width:260px;height:36px" />
                        <div class="ivu-form-item-error-tip" v-show="addressTips">所在地区不能为空</div>
                    </Form-item>                    

                    <Form-item>
                        <Button type="ghost" shape="circle" style="margin-right:10px" @click="backfirst">上一步</Button>
                        <Button type="primary" shape="circle" @click="handleSubmit('formValidate')">下一步</Button>
                    </Form-item>
                </Form>
            </div>
        </div>
    </div>
</template>
<script>
import Util from '../../libs/util';
import md5 from '../../component/server/md5';
import Ajax from '../../component/server/ajax';
export default {
    data() {
            return {
                classfiyItems:[],
                uploadTips : '点击上传LOGO',
                addressTips: 0 ,
                mapInputValue : '',
                formValidate: {
                    categoryId  : '',
                    channelLogo : '',
                    channelName : '',
                    introduction: '',
                    address     : ''
                },
                ruleValidate: {
                    categoryId: [{
                        required: true,
                        message: '请选择内容领域',
                        trigger: 'change'
                    }],
                    channelName: [{
                        required: true,
                        message: '频道名称不能为空',
                        trigger: 'blur'
                    }],
                    introduction: [{
                    	required:true,
                        message: '频道简介不能为空',
                        trigger: 'blur'
                    }],
                    address: [{
                        required:true,
                        message: '所在地区不能为空',
                        trigger: 'blur'
                    }]                                        
                }
            }
        },
        created(){
            this.stepstype = this.$route.query.stepstype;
            this.tk = Util.getcookie('token');
            this.fetchVideoClassfiy();
        },
        mounted() {
            this.initMaps();
        },        
        methods: {
            fetchVideoClassfiy() {
                Ajax.post('/uservideo/videoCateList').then(function(response) {
                    this.classfiyItems = response.datas;
                    if(sessionStorage.getItem('stepsdata')){
                        this.$nextTick(function(){
                            let stepsdata = JSON.parse(sessionStorage.getItem('stepsdata'));
                            if(stepsdata){
                                this.formValidate.categoryId  = stepsdata.categoryId;
                                this.formValidate.channelLogo = stepsdata.channelLogo;
                                this.formValidate.channelName = stepsdata.channelName;
                                this.formValidate.introduction= stepsdata.introduction;
                                this.formValidate.address     = stepsdata.address;
                                this.mapInputValue            = stepsdata.address;                               
                            }
                        }.bind(this));                       
                    }
                }.bind(this));
            },
            headerClickHandle(){
                this.$refs.uploadLogo.click();
            },
            uploadChannelLogo(e){
                Util.preUploadfile(e,function(url){
                    this.formValidate.channelLogo = url;
                }.bind(this),this);             
            },
            initMaps() {
                let ap = new qq.maps.place.Autocomplete(this.$refs.mapInput);
                let that = this;
                qq.maps.event.addListener(ap, "confirm", function(res) {
                    let place = this.place.name
                    if (this.place.address) {
                        place = this.place.address.replace(/-/g,'') + place;
                    }
                    that.formValidate.address = place;
                    that.mapInputValue = place;
                });

                this.$refs.mapInput.addEventListener('blur', function() {
                    if (this.formValidate.address) {
                        if(this.mapInputValue){
                            this.addressTips = 0; 
                        }else{
                            this.addressTips = 1; 
                        }
                        this.formValidate.address = this.mapInputValue;
                    } else {
                        this.mapInputValue = '';
                        this.formValidate.address = '';
                        this.addressTips = 1; 
                    }
                }.bind(this))                
            },
            backfirst(){
                this.setData();
                history.back(-1);
            }, 
            setData(){
                let stepsdata = {};
                if(sessionStorage.getItem('stepsdata')){
                   stepsdata = JSON.parse(sessionStorage.getItem('stepsdata'))
                }
                stepsdata.categoryId   = this.formValidate.categoryId;
                stepsdata.channelLogo  = this.formValidate.channelLogo;
                stepsdata.channelName  = this.formValidate.channelName;
                stepsdata.introduction = this.formValidate.introduction;
                stepsdata.address      = this.formValidate.address;
                sessionStorage.setItem('stepsdata',JSON.stringify(stepsdata));
            },        
            handleSubmit(name) {
                this.$refs[name].validate(function(valid){
                    if(!this.formValidate.address){
                        this.addressTips = 1; 
                        return false;
                    }                    
                    if(!this.formValidate.channelLogo){
                       this.uploadTips = '频道LOGO不能为空';
                       this.$refs.errorTips.style.color="#ed3f14";
                       return false;
                    }
                    if(valid){
                        this.setData();
                        if(this.stepstype == 20){
                            location = '/#/auth/thirdsteps.p?stepstype='+this.stepstype;
                        }else{
                            location = '/#/auth/thirdsteps.o?stepstype='+this.stepstype;                        
                        }
                    }
                }.bind(this))
            }
        }
}
</script>
