<style scoped>
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
}

.total-outer {
    text-align: center;
    height: 50px;
    border-right: 1px solid #e4e4e4;
}

.total-outer > p:first-child {
    font-size: 20px;
    font-weight: bold;
    color: #555;
}

.total-outer > p:last-child {
    font-size: 14px;
    color: #999;
}

.channel-videolist {
    position: relative;
    background-color: #fff;
}

.videolist-outer {
    margin: 10px 28px 0 24px;
}

.videolist-title {
    height: 62px;
    border-bottom: 1px solid #e4e4e4;
}

.videolist-title > div {
    height: 62px;
}

.videolist-title .title {
    font-size: 16px;
    color: #333;
}

.videolist-title .totalcount {
    font-size: 12px;
    color: #999;
}

.videolist-rows li.row {
    position: relative;
    height: 142px;
    border-bottom: 1px solid #e4e4e4;
}

.videolist-rows li.row > div {
    height: 142px;
}

.video-cover img {
    height: 100px;
    width: 180px;
}

.video-info {
    height: 100px;
}

.video-info .video-title {
    position: relative;
}

.video-info .video-title h2 {
    float: left;
    font-size: 18px;
    color: #414447;
    line-height: 2em;
    width: 500px;
}

.operation {
    float: right;
    width: 80px;
    height: 36px;
    line-height: 36px;
    text-align: center;
    color: #8d9198;
    font-size: 15px;
    border: 1px solid #e5e5e5;
    border-radius: 5px;
    cursor: pointer;
    background: -webkit-linear-gradient(top, #fff, #f6f6f6);
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(bottom, #fff, #f6f6f6);
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(bottom, #fff, #f6f6f6);
    /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom, #fff, #f6f6f6);
    /* 标准的语法 */
}

.operation.check {
    background: #eee!important;
    cursor: inherit!important;
    color: #c1c1c1!important;
}

.video-info p {
    font-size: 14px;
    color: #999;
    line-height: 2.5em;
}

.video-info p.property span {
    display: inline-block;
    width: 120px;
}

.video-info p.refuse span {
    color: #414447!important;
    font-size: 12px;
}

.no-video {
    position: relative;
    height: 370px;
    width: 100%;
    text-align: center;
}

.no-video img {
    margin: 20px;
    width: 77px;
    height: 85px;
}

.no-video .tip_1 {
    font-size: 16px;
    color: #4b4d4f;
    line-height: 2em;
}

.no-video .tip_2 {
    font-size: 14px;
    color: #b6b6b6;
    line-height: 2em;
}

.no-video .tip_3 {
    width: 160px;
    display: inline-block;
    border-radius: 30px;
    font-size: 16px;
    margin-top: 20px;
}

.videolist-pager {
    position: relative;
    height: 96px;
}

.pager-outer {
    padding-top: 32px;
    height: 32px;
}

.channel-menu {
    position: relative;
    padding-top: 20px;
    background-color: #fff;
}

.channel-upload {
    padding: 10px 0 48px 24px;
}

.upload-btn {
    display: block;
    width: 158px;
    height: 40px;
    line-height: 40px;
    font-size: 14px;
    color: #8D9198;
    text-align: center;
    border: 1px solid #e5e5e5;
    background: -webkit-linear-gradient(top, #fff, #f6f6f6);
    /* Safari 5.1 - 6.0 */
    background: -o-linear-gradient(bottom, #fff, #f6f6f6);
    /* Opera 11.1 - 12.0 */
    background: -moz-linear-gradient(bottom, #fff, #f6f6f6);
    /* Firefox 3.6 - 15 */
    background: linear-gradient(to bottom, #fff, #f6f6f6);
    /* 标准的语法 */
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

.refuse {
    width: 600px;
}
</style>
<template>
    <div class="content-container clearfix">
        <div class="content-left">
            <div class="channel-menu">
                <Menu theme="light" active-name="1" mode="vertical" width="300px" @on-select="changeUrl">
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
                        <img :src="channelInfo.avatar" class="header-img" alt="草莓频道头像">
                    </div>
                    </Col>
                    <Col span="5">
                    <div class="auth-outer">
                        <p><span class="auth-works">认证创作者</span></p>
                        <p>{{channelInfo.nickName}}</p>
                    </div>
                    </Col>
                    <Col span="4">
                    <div class="total-outer">
                        <p>{{channelInfo.playTimes}}</p>
                        <p>总观看量</p>
                    </div>
                    </Col>
                    <Col span="4">
                    <div class="total-outer">
                        <p>{{channelInfo.praise}}</p>
                        <p>总点赞量</p>
                    </div>
                    </Col>
                    <Col span="4">
                    <div class="total-outer">
                        <p>{{channelInfo.talkCount}}</p>
                        <p>总评论量</p>
                    </div>
                    </Col>
                    <Col span="4">
                    <div class="total-outer" style="border-right:none">
                        <p>{{channelInfo.fans}}</p>
                        <p>总关注量</p>
                    </div>
                    </Col>
                </Row>
            </div>
            <div class="channel-videolist">
                <div class="videolist-outer">
                    <div class="videolist-title">
                        <Row type="flex" justify="center" align="middle">
                            <Col span="12">
                            <h1 class="title">视频列表</h1></Col>
                            <Col span="12" style="text-align:right"><span class="totalcount">{{totalCount}}条</span></Col>
                        </Row>
                    </div>
                    <div class="videolist-rows">
                        <div v-if="totalCount == '0'" class="no-video">
                            <img src="../../images/no_video.png" />
                            <p class="tip_1">您还没有上传作品哦 ~ </p>
                            <p class="tip_2">上传视频作品，便可获得海量的曝光机会。</p>
                            <router-link class="tip_3 button" to="/upload">上传视频</router-link>
                        </div>
                        <ul v-else>
                            <li class="row" v-for="item in items">
                                <Row type="flex" justify="center" align="middle">
                                    <Col span="6" class="video-cover">
                                    <img v-cover="item.coverUrl">
                                    </Col>
                                    <Col span="18" class="video-info">
                                    <div class="video-title clearfix">
                                        <h2 class="ellipsis">{{item.title}}</h2>
                                        <Dropdown trigger="hover" :class="item.status==6?'operation check':'operation'" @on-click="operation">
                                            <span>{{ item.status==6 ? '审核中' : '操作'}}</span>
                                            <Dropdown-menu slot="list" v-if="item.status!=6">
                                                <Dropdown-item :name="'modify_'+item.videoId">修改</Dropdown-item>
                                                <Dropdown-item :name="'delete_'+item.videoId">删除</Dropdown-item>
                                            </Dropdown-menu>
                                        </Dropdown>
                                    </div>
                                    <p>{{item.createDt}} 发布</p>
                                    <Tooltip placement="top-start" v-if="item.status==3">
                                        <span slot="content" style="line-height:1.8em">{{item.refuseDesc}}</span>
                                        <p class="refuse ellipsis">
                                            <span>
                                          <Icon type="minus-circled" color="#f4284f"></Icon>
                                          <span>审核失败：</span>
                                            </span>
                                            <span>{{item.refuseDesc}}</span>
                                        </p>
                                    </Tooltip>
                                    <p class="property" v-else>
                                        <span>{{item.pariseCount}}人赞</span>
                                        <span>{{item.talkCount}}条评论</span>
                                        <span>{{item.shareCount}}次分享</span>
                                        <span>{{item.playCount}}次观看</span>
                                    </p>
                                    </Col>
                                </Row>
                            </li>
                        </ul>
                        <div class="videolist-pager" v-if="totalCount > 10">
                            <div class="pager-outer">
                                <Page :total="totalCount" :page-size="pageSize" show-elevator show-sizer placement="top" @on-change="changePage" @on-page-size-change="changePageSize"></Page>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <Modal v-model="logoutModal" :mask-closable="false" width="400">
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

            <Modal v-model="deleteModal" :mask-closable="false" width="400">
                <p slot="header" class="modal-header">
                    <span>温馨提示</span>
                </p>
                <div class="modal-content">
                    <p style="line-height:50px;height:50px;">视频删除后将无法恢复，确定要删除该视频？</p>
                </div>
                <div slot="footer">
                    <Button type="ghost" shape="circle" @click="deletecannel">取消</Button>
                    <Button type="primary" shape="circle" @click="deleteok">确定</Button>
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
                logoutModal: false,
                deleteModal: false,
                deleteVideoId: '',
                pageIndex: 1,
                pageSize: 10,
                items: [],
                totalCount: '',
                channelInfo: {
                    avatar: require('../../images/channel_header.png'),
                    nickName: '草莓创作者',
                    attention: 0,
                    praise: 0,
                    playTimes: 0,
                    talkCount: 0
                }
            };
        },
        created() {
            this.tk = Util.getcookie('token');
            this.fetchChannelInfo();
            this.fetchChannelVideoList();
        },
        methods: {
            fetchChannelInfo() {
                Ajax.post('/uservideo/channelInfo', {
                    channelUserId: this.tk.split('_')[1]
                }).then(function(response) {
                    response.avatar = Util.joinImageUrl(response.avatar);
                    this.channelInfo = response;
                }.bind(this));
            },
            fetchChannelVideoList() {
                Ajax.post('/video/ownerVideoList', {
                    pageIndex: this.pageIndex,
                    pageSize: this.pageSize,
                    ownerId: this.tk.split('_')[0]
                }).then(function(response) {
                    this.totalCount = response.totalCount;
                    this.items = response.datas;
                }.bind(this));
            },
            operation(name) {
                let arr = name.split("_");
                if (arr[0] == 'delete') {
                    this.deleteModal = true;
                    this.deleteVideoId = arr[1];
                }
                if (arr[0] == 'modify') {
                    location.hash = '#upload?videoId=' + arr[1]
                }
            },
            changePage(index) {
                this.pageIndex = index;
                this.fetchChannelVideoList();
            },
            changePageSize(size) {
                this.pageSize = size;
                this.pageIndex = 1;
                this.fetchChannelVideoList();
            },
            changeUrl(val, event) {
                if (val == 5) {
                    this.logoutModal = true;
                } else {
                    location.hash = hashname[val];
                }
            },
            deleteok() {
                Ajax.post('/uservideo/myUploadRemove', {
                    videoId: this.deleteVideoId
                }).then(function(response) {
                    this.deletecannel();
                    this.fetchChannelVideoList();
                }.bind(this));
            },
            deletecannel() {
                this.deleteModal = false;
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
