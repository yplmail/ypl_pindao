<style scoped>
.channel-menu {
    position: relative;
    padding-top: 20px;
    background-color: #fff;
}

.channel-qrcode {
    margin-top: 10px;
    background-color: #ededed;
    text-align: center;
}

.channel-qrcode h3 {
    padding-top: 28px;
    padding-bottom: 20px;
    font-size: 14px;
    color: #8D9198;
}

.channel-qrcode img {
    width: 120px;
    height: 120px;
}

.channel-qrcode p {
    padding-top: 20px;
    padding-bottom: 28px;
    font-size: 14px;
    color: #8D9198;
}

.channel-header {
    position: relative;
    height: 150px;
    width: 100%;
    overflow: hidden;
    background-color: #fff;
}

.header-row {
    margin-top: 32px;
}

.header-outer {
    height: 80px;
}

.header-img {
    margin-left: 32px;
    width: 80px;
    height: 80px;
    border-radius: 50%;
}

.auth-outer {
    margin-left: 20px;
    height: 50px;
}

.auth-outer .auth-works {
    color: #fff;
    font-size: 12px;
    padding: 3px 6px;
    border-radius: 5px;
    background: -webkit-linear-gradient(left, #A33AED, #E418CA, #FF6B3D);
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(right, #A33AED, #E418CA, #FF6B3D);
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(right, #A33AED, #E418CA, #FF6B3D);
    /* Firefox 3.6 - 15 */
    background: linear-gradient(to right, #A33AED, #E418CA, #FF6B3D);
    /* 标准的语法 */
}

.auth-outer > p:last-child {
    font-size: 20px;
    color: #333;
    line-height: 2em;
    width:128px;
}

.setting-centent {
    position: relative;
    height: 840px;
    margin-top: 10px;
    background-color: #fff;
}

.setting-title {
    line-height: 64px;
    height: 64px;
    font-size: 16px;
    color: #333;
    margin: 0 20px;
    border-bottom: 1px solid #eee;
}

.setting-detail {
    position: relative;
    margin: 0 20px;
}

.setting-detail form {
    width: 700px;
    padding: 50px;
}

.filedText {
    width: 260px;
    height: 34px;
    line-height: 34px;
    font-size: 14px;
}

.modifytips {
    font-size: 12px;
    color: #888;
    line-height: 1.5em;
}
.refuseDesc{
    color:#999;
}
</style>
<template>
    <div class="content-container clearfix">
        <div class="content-left">
            <div class="channel-menu">
                <Menu theme="light" active-name="4" mode="vertical" width="300px" @on-select="changeUrl">
                    <Menu-item name="1">
                        <Icon type="social-vimeo"></Icon>
                        视频管理
                    </Menu-item>                  
                    <Menu-item name="3">
                        <Icon type="upload"></Icon>
                        上传视频
                    </Menu-item>
                    <Menu-item name="4">
                        <Icon type="settings"></Icon>
                        账号设置
                    </Menu-item>                    
                    <Menu-item name="5">
                        <Icon type="power"></Icon>
                        退出登录
                    </Menu-item>
                </Menu>
            </div>
            <div class="channel-qrcode">
                <h3>微信客服支持</h3>
                <img src="../../images/qrcode.png" alt="草莓频道头像">
                <p>使用微信，扫一扫！</p>
            </div>
        </div>
        <div class="content-right">
            <div class="channel-header">
                <Row type="flex" justify="center" align="middle" class="header-row">
                    <Col span="3">
                    <div class="header-outer">
                        <img :src="userInfo.avatar" class="header-img" alt="草莓频道头像">
                    </div>
                    </Col>
                    <Col span="4">
                    <div class="auth-outer">
                        <p><span class="auth-works">认证创作者</span></p>
                        <p class="ellipsis">{{userInfo.nickName}}</p>
                    </div>
                    </Col>
                    <Col span="17">
                    <div>
                        <p>{{userInfo.introduction}}</p>
                    </div>
                    </Col>
                </Row>
            </div>
            <div class="setting-centent">
                <div class="setting-title">详细信息</div>
                <div class="setting-detail">
                    <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="120">
                        <Form-item label="频道类型：" prop="type" >
                            <Select v-model="formValidate.type" placeholder="请选择内容领域" size="large" style="width:260px" disabled>
                                <Option :value="20">个人创作者</Option>
                                <Option :value="30">泛媒体</Option>
                                <Option :value="40">企业</Option>
                                <Option :value="50">其他组织</Option>
                            </Select>
                        </Form-item>
                        <Form-item label="频道名称：" prop="channelName">
                            <Input v-model="formValidate.channelName" placeholder="有趣的名字会带来好运哦 （20字以内）" :maxlength="20" size="large" style="width:260px" :disabled="formValidate.status==1?true:false"></Input>
                        </Form-item>
                        <Form-item label="频道简介：" prop="introduction">
                            <Input type="textarea" v-model="formValidate.introduction" :autosize="{minRows:3,maxRows: 6}" placeholder="介绍下自己的频道吧 （50字以内）" :maxlength="50" style="width:260px" :disabled="formValidate.status==1?true:false">
                            </Input>
                        </Form-item>
                        <Form-item label="内容领域：" prop="categoryId" >
                            <Select v-model="formValidate.categoryId" placeholder="请选择内容领域" size="large" style="width:260px" :disabled="formValidate.status==1?true:false">
                                <Option v-for="item in classfiyItems" :value="item.categoryId" :key="item.categoryId">{{item.cateName}}</Option>
                            </Select>
                        </Form-item>
                        <Form-item label="所在地区：">
                            <p class="filedText">{{formValidate.address}}</p>
                        </Form-item>
                        <Form-item label="机构名称：" v-if="formValidate.institutionName">
                            <p class="filedText">{{formValidate.institutionName}}</p>
                        </Form-item>
                        <Form-item label="运营人姓名：">
                            <p class="filedText">{{formValidate.operatorName}} （{{formValidate.idcard}}）</p>
                        </Form-item>
                        <Form-item label="运营人手机号：">
                            <p class="filedText">{{formValidate.mobile}}</p>
                        </Form-item>
                        <Form-item>
                            <Row>
                                <Col span="8">
                                    <Button v-if="formValidate.status==1" type="primary" shape="circle" style="background:#ccc">审核中</Button>
                                    <Button v-else type="primary" shape="circle" @click="handleSubmit('formValidate')">保存</Button>
                                </Col>
                                <Col span="16">
                                    <p class="modifytips">
                                        修改提示：
                                        <br> 修改频道信息需要重新进行审核。修改成功后，会直接显示修改后的频道信息。认证过程中， 将保留原有频道信息及认证状态。如果认证失败，也将为您保留原有认证信息和认证状态。
                                    </p>
                                </Col>
                            </Row>
                        </Form-item>

                        <Form-item v-if="formValidate.status==3" class="refuseDesc">
                            审核失败：{{formValidate.refuseDesc}}                        
                        </Form-item>
                    </Form>
                </div>
            </div>
        </div>
        <div>
            <Modal v-model="logoutModal" :mask-closable="false" width="400" class-name="vertical-center-modal">
                <p slot="header" class="modal-header">
                    <span>温馨提示</span>
                </p>

                <div class="modal-content">
                    <p style="line-height:50px;height:50px;">确定要退出登录吗？</p>
                </div>

                <div slot="footer">
                    <Button type="ghost" shape="circle" @click="cannelModal">取消</Button>
                    <Button type="primary" shape="circle" @click="logout">确定</Button>
                </div>
            </Modal>
        </div>
    </div>
</template>
<script>
import Util from '../../libs/util';
import Ajax from '../../component/server/ajax';
let hashname = {
    1: '#/channel',
    2: '#/auth/firststeps',
    3: '#/upload',
    4: '#/setting'
}

export default {
    data() {
            return {
                logoutModal  : false,
                classfiyItems: [],
                formValidate : {},
                userInfo     : {},
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
                        required:50,
                        message: '频道简介过长（50字以内）',
                        trigger: 'blur'
                    }]
                }
            };
        },
        created() {
            this.tk = Util.getcookie('token');
            this.fetchUserInfo();
            this.fetchVideoClassfiy();
        },
        methods: {
            fetchUserInfo() {
                Ajax.post('/uservideo/channelInfo', {
                    channelUserId: this.tk.split('_')[1]
                }).then(function(response) {
                    response.avatar = Util.joinImageUrl(response.avatar);
                    this.userInfo = response;
                }.bind(this));
            },
            fetchVideoClassfiy() {
                Ajax.post('/uservideo/videoCateList').then(function(response) {
                    this.classfiyItems = response.datas;
                    this.fetchChannelInfo();
                }.bind(this));
            },
            fetchChannelInfo() {
                Ajax.post('/user/getAuthenticateInfo').then(function(response) {
                    response.categoryId = response.categoryId + "";
                    this.formValidate = response;
                }.bind(this));
            },
            changeUrl(val, event) {
                if (val == 5) {
                    this.logoutModal = true;
                } else {
                    location.hash = hashname[val];
                }
            },
            save(){
                Ajax.post('/uservideo/modifyUserChannelInfo',{
                    nickName     : this.formValidate.channelName,
                    introduction : this.formValidate.introduction,
                    categoryId   : this.formValidate.categoryId,
                }).then(function(response) {
                    this.$Notice.success({
                        title: '温馨提示',
                        desc : '频道信息修改成功！',
                        duration: 2,
                        onClose: function() {
                            location.reload();
                        }.bind(this)
                    })                    
                }.bind(this));                            
            },
            handleSubmit(name) {
                this.$refs[name].validate(function(valid){
                    if(valid){
                        this.save();
                    }
                }.bind(this))
            },            
            logout() {
                Ajax.post('user/logout').then(function(response) {
                    this.cannelModal();
                    Util.setcookie('token', '', -1);
                    location.hash = "#/login";
                }.bind(this));
            },
            cannelModal() {
                this.logoutModal = false;
            }
        }
};
</script>
