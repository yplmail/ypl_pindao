<style scoped>
.content-container {
    background-color: #fff;
}

.thirdsteps-content {
    position: relative;
    width: 550px;
    min-height: 685px;
    margin: 60px auto;
}

.uploadField {
    position: absolute;
    top: 0;
    left: 0;
    height: 34px;
    width: 260px;
    cursor: pointer;
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: pointer;
}

.uploadFieldButton {
    height: 34px;
    width: 260px;
}

.upload-example,
.upload-view {
    position: relative;
    width: 260px;
}

.upload-example img{
    max-width: 260px;
}

.upload-view img {
    max-width: 260px;
    cursor: pointer;
}

.upload-example p {
    line-height: 2em;
}

.submitTips {
    line-height: 1.6;
    font-size: 12px;
    color: #777;
}

.hiddenInputField {
    height: 0;
    width: 0;
    opacity: 0;
    filter: alpha(opacity=0);
}
</style>
<template>
    <div class="content-container">
        <div class="steps-container">
            <div class="steps-outer">
                <Steps :current="2" size="small">
                    <Step title="选择频道类型"></Step>
                    <Step title="填写频道信息"></Step>
                    <Step title="填写认证信息"></Step>
                    <Step title="审核提交成功"></Step>
                </Steps>
            </div>
        </div>
        <div class="thirdsteps-content">
            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="140" style="padding-bottom:50px">
                <Form-item label="账号运营人：" prop="operatorName">
                    <Input v-model="formValidate.operatorName" placeholder="身份证姓名" :maxlength="20" style="width:260px" size="large"></Input>
                </Form-item>
                <Form-item label="运营人身份证号：" prop="idcard">
                    <Input v-model="formValidate.idcard" placeholder="运营人身份证号" style="width:260px" size="large" :maxlength="18"></Input>
                </Form-item>
                <Form-item label="手持身份证照片：" prop="imgIdcard">
                    <Button type="dashed" icon="plus-round" ref="plusround" class="uploadFieldButton">点击上传</Button>
                    <input v-model="formValidate.imgIdcard" class="hiddenInputField"></input>
                    <input type="file" class="uploadField" accept="image/png,image/jpeg,image/jpg" @change="uploadcard" />
                </Form-item>
                <Form-item>
                    <div class="upload-view" v-if="formValidate.imgIdcard" @click="previewImage(formValidate.imgIdcard)">
                        <img :src="formValidate.imgIdcard">
                    </div>
                    <div class="upload-example" v-else>
                        <img src="../../images/card_example.png" />
                        <p style="margin-top:10px">请按照样片参考方式拍摄，照片需清晰可见。</p>
                        <p>支持大小：2M以下 格式：JPG/PNG。</p>
                    </div>
                </Form-item>
                <Form-item label="相关网站证明：" prop="otherProof">
                    <Input v-model="formValidate.otherProof" placeholder="如官方网站，相关社交媒体主页等.." style="width:260px" size="large"></Input>
                </Form-item>
                <Form-item>
                    <Button type="ghost" shape="circle" style="margin-right:10px" @click="secondsteps">返回</Button>
                    <Button type="primary" shape="circle" @click="handleSubmit('formValidate')">提交</Button>
                </Form-item>
                <Form-item>
                    <p class="submitTips">点击提交意味着你已同意本平台<a @click="authAgreement">《认证协议》</a>。</p>
                </Form-item>
            </Form>
        </div>
        <div class="preview-mask" v-show="displaypreviewmask" @click="closeImagePreview">
            <Icon class="previewclose" type="close-round" size="35"></Icon>
            <img  :src="displaypreviewimg" />
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
                displaypreviewmask: 0,
                displaypreviewimg :'', 
                formValidate: {
                    operatorName: '',
                    idcard: '',
                    imgIdcard: '',
                    otherProof: ''
                },
                ruleValidate: {
                    operatorName: [{
                        required: true,
                        message: '账号运营人不能为空',
                        trigger: 'blur'
                    }],
                    idcard: [{
                        required: true,
                        message: '运营人身份证号不能为空',
                        trigger: 'blur'
                    }, {
                        pattern: /(^\d{15}$)|(^\d{17}([0-9]|X|x)$)/,
                        message: '运营人身份证号不正确',
                        trigger: 'blur'
                    }],
                    imgIdcard: [{
                        required: true,
                        message: '手持身份证照片不能为空',
                        trigger: 'blur'
                    }],
                    otherProof: [{
                        required: true,
                        message: '相关网站证明的网址不能为空',
                        trigger: 'change'
                    }, {
                        pattern: /(http|https):\/\/[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&:/~\+#]*[\w\-\@?^=%&/~\+#])?/,
                        message: '相关网站证明的网址不合法（以http|https开头）',
                        trigger: 'blur'
                    }]
                }
            }
        },
        created() {
            this.tk = Util.getcookie('token');
            let stepsdata = JSON.parse(sessionStorage.getItem('stepsdata'));
            this.formValidate.operatorName = stepsdata['operatorName'];
            this.formValidate.idcard = stepsdata['idcard'];
            this.formValidate.imgIdcard = stepsdata['imgIdcard'];
            this.formValidate.otherProof = stepsdata['otherProof'];
        },
        methods: {
            uploadcard(e) {
                Util.preUploadfile(e, function(url) {
                    this.formValidate.imgIdcard = url;
                }.bind(this), this);
            },
            previewImage(url){
                this.displaypreviewimg  = url;
                this.displaypreviewmask = 1;
                window.document.body.style.overflow = 'hidden';
            },
            closeImagePreview(){
                this.displaypreviewmask = 0;
                window.document.body.style.overflow = '';
            },  
            authAgreement(){
                this.setData();
                location.hash = "#/authAgreement";
            },                      
            setData() {
                let stepsdata = JSON.parse(sessionStorage.getItem('stepsdata'));
                stepsdata['operatorName'] = this.formValidate.operatorName;
                stepsdata['idcard'] = this.formValidate.idcard;
                stepsdata['imgIdcard'] = this.formValidate.imgIdcard;
                stepsdata['otherProof'] = this.formValidate.otherProof;
                sessionStorage.setItem('stepsdata', JSON.stringify(stepsdata));
                return stepsdata;
            },
            secondsteps() {
                this.setData();
                history.back(-1);
            },
            handleSubmit(name) {
                this.$refs[name].validate(function(valid) {
                    if (!this.formValidate.imgIdcard) {
                        this.$refs.plusround.$el.style.borderColor = "#ed3f14";
                    }
                    if (valid) {
                        let data = this.setData();
                        data.type = 20;
                        Ajax.post('/user/authenticate', data).then(function(response) {
                            location = '/#/auth/laststeps';
                        }.bind(this));
                    }
                }.bind(this))
            }
        }
}
</script>
