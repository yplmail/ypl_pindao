<style scoped>
.video-cover {
    background-color: #fff;
    padding: 10px 20px;
}

.cover-title {
    font-size: 16px;
    height: 40px;
    line-height: 40px;
}

.cover-outer li {
    margin-bottom: 10px;
}

.cover-outer img {
    height: 150px;
}

.content-outer {
    padding: 30px 20px 10px 20px;
    background-color: #fff;
}

.upload-cover {
    position: relative;
    width: 100%;
    height: 145px;
    overflow: hidden;
}

.cover {
    position: relative;
    z-index: 2;
    width: 100%;
    height: 100%;
}

.cover > img {
    width: 100%;
    height: 100%;
}

.cover-mask {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 145px;
    cursor: pointer;
    line-height: 145px;
    text-align: center;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    z-index: 2;
    display: none;
    background-color: rgba(0, 0, 0, .5);
}

.cover:hover .cover-mask {
    display: block;
}

.upload {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    filter: alpha(opacity=0);
    -moz-opacity: 0;
    -khtml-opacity: 0;
    opacity: 0;
}

.upload-cover input[type=file] {
    width: 258px;
    height: 145px;
}

.empty-cover {
    font-size: 12px;
    color: #8e8e8e;
}

.server-cover {
    position: relative;
}

.server-cover p {
    position: relative;
    margin-bottom: 5px;
    text-align: center;
    overflow: hidden;
}

.server-cover p:hover > .servercover-mask {
    display: block;
}

.server-cover img {
    width: 224px;
    height: 126px;
}

.server-cover .selected {
    position: absolute;
    display: block;
    top: 8px;
    right: -22px;
    width: 80px;
    height: 20px;
    background-color: #f4284f;
    line-height: 20px;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
    font-size: 12px;
    color: #fff;
}

.servercover-mask {
    position: absolute;
    top: 0;
    left: 0;
    display: block;
    width: 100%;
    height: 126px;
    line-height: 126px;
    font-size: 14px;
    font-weight: bold;
    color: #fff;
    background-color: rgba(0, 0, 0, .3);
    display: none;
    cursor: pointer;
}

.col-splitline {
    border-left: 1px solid #eee;
}

.progress-outer {
    position: relative;
}

.upload-desprition {
    margin-top: 30px;
}

.upload-desprition p {
    font-size: 12px;
    color: #999;
    line-height: 2em;
}

.progress-detail > p {
    float: left;
    font-size: 12px;
    color: #333;
}

.progress-detail > p:nth-child(2) {
    margin-left: 10px;
    color: #8e8e8e;
}

.upload-operation {
    position: absolute;
    top: 0;
    right: 55px;
    cursor: pointer;
}

.upload-video {
    position: relative;
    display: inline-block;
    margin-top: 10px;
    width: 200px;
    height: 42px;
}

.upload-video input[type=file] {
    position: absolute;
    left:0;
    top:0;
    cursor: pointer;
    z-index: 1;
    width: 200px;
    height: 42px;
    -webkit-opacity: 0;  
    /* Netscape and Older than Firefox 0.9 */  
    -moz-opacity: 0;  
    /* Safari 1.x (pre WebKit!) 老式khtml内核的Safari浏览器*/  
    -khtml-opacity: 0;  
    /* IE9 + etc...modern browsers */  
    opacity: 0;  
    /* IE 4-9 */  
    filter:alpha(opacity=0);  
    /*This works in IE 8 & 9 too*/  
    -ms-filter:"progid:DXImageTransform.Microsoft.Alpha(Opacity=0)";  
    /*IE4-IE9*/  
    filter:progid:DXImageTransform.Microsoft.Alpha(Opacity=0);  
}

.upload-video .upload-button{
    position: absolute;
    left:0;
    top:0;
    width: 200px;
    height: 42px;
    cursor: pointer;
    z-index: 3;    
}

.upload-video .btnTip {
/*    vertical-align:top;*/
    margin-left: 5px;
}

.personality {
    margin-top: 20px;
}

.personality-title {
    margin-bottom: 12px;
}

.personality-title h3 {
    font-size: 14px;
    font-weight: bold;
}

.personality-title h3:last-child {
    margin-left: 5px;
}

.personality-item .tagdot {
    float: left;
    margin: 0 0 8px 5px;
    line-height: 32px;
    height: 32px;
    border-radius: 32px;
    padding: 0 15px;
}

.personality-item .inputdot {
    float: left;
    margin-left: 5px;
    transform: translateY(-1.4px);
}

.address {
    margin-top: 30px;
}

.descriptive {
    position: relative;
    margin-top: 30px;
    border: 1px solid #e4e4e4;
    height: 310px;
    overflow: hidden;
}

.descriptive-title {
    margin: 0 10px;
    height: 52px;
    line-height: 52px;
    border-bottom: 1px solid #e4e4e4;
}

.descriptive-title input {
    height: 50px;
    width: 100%;
    border: 0;
    outline: none;
    font-size: 18px;
    color: #999;
}

.descriptive-title input:focus {
    color: #555;
}

.descriptive-content {
    border: 0;
    outline: none;
    margin: 10px;
}

.video-remark {
    position: relative;
    height: 60px;
    line-height: 60px;
}

.norm-content p {
    margin: 20px;
    line-height: 2em;
}

.norm-content p:first-child {
    margin-top: 0;
}

.demo-spin-icon-load {
    animation: ani-demo-spin 1s linear infinite;
}

@keyframes ani-demo-spin {
    from {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(180deg);
    }
    to {
        transform: rotate(360deg);
    }
}
.validate-tips{
    height:28px;
    font-size: 14px;
    margin-top: 10px;
    color: #ed3f14;
    line-height: 2em;
}
</style>
<template>
    <div class="content-container clearfix">
        <div class="content-left">
            <div class="video-cover">
                <h1 class="cover-title">编辑封面</h1>
                <div class="upload-cover">
                    <input type="file" class="upload" ref="cover" accept="image/png,image/jpeg,image/jpg" @change="uploadCover">
                    <div class="cover" v-if="coverUrl">
                        <img :src="coverUrl + '?x-oss-process=image/resize,m_lfit,h_360,w_640'" />
                        <div class="cover-mask" @click="modifyCorver">修改封面</div>
                    </div>
                    <Button type="dashed" style="width:100%;height:145px" v-else>
                        <Icon type="images" size="60"></Icon>
                        <p>自定义封面</p>
                    </Button>
                </div>
                <Card dis-hover style="margin-top:20px" v-if="!queryVideoId">
                    <p slot="title">封面设置</p>
                    <div class="empty-cover" v-if="coverItems.length == 0">
                        <Icon type="load-d" size="18" class="demo-spin-icon-load" v-if="videoUrl" color="#f4284f"></Icon>
                        <span style="vertical-align:text-bottom">正在生成封面...</span>
                    </div>
                    <div class="server-cover" v-else>
                        <p ref="coverOuter" @click="settingCover" v-for="url in coverItems">
                            <span class="servercover-mask">{{settingcover ? '取消封面' : '设为封面'}}</span>
                            <span class="selected" v-if="settingcover">封面</span>
                            <img :src="url + '?x-oss-process=image/resize,m_lfit,h_360,w_640'" />
                        </p>
                    </div>
                </Card>
                <div class="upload-desprition">
                    <p>1.请上传16:9比例的封面图。</p>
                    <p>2.仅支持JPG，PNG格式图片</p>
                    <p>3.图片大小需小于5MB。</p>
                </div>
            </div>
        </div>
        <div class="content-right">
            <div class="content-outer">
                <div v-if="!queryVideoId">
                    <div class="progress-outer" v-if="progress">
                        <div class="progress-detail clearfix">
                            <p>{{progressStatus}}</p>
                            <p>{{videoName}}</p>
                        </div>
                        <div class="upload-progress">
                            <Progress :percent="percent" :stroke-width="5" :status="percent < 100 ? 'active' : 'success' "></Progress>
                        </div>
                        <div class="upload-operation" @click="stopUpload" v-if="percent==100">
                            <Icon type="android-close" size="18"></Icon>
                        </div>
                    </div>
                    <div class="upload-video" v-else>
                       <input  type="file"   ref="videoUploadInput" accept=".mp4,.avi" @change="selectUploadVideo">
                       <Button type="dashed" class="upload-button" @click="uploadVideoHandle">
                            <Icon type="android-add" size="15"></Icon>
                            <span class="btnTip">上传视频</span>
                        </Button>
                    </div>
                </div>
                <div class="personality">
                    <Row class="personality-title clearfix">
                        <Col span="4">
                        <h3 class="classfiy" span="4">分类</h3></Col>
                        <Col span="20">
                        <h3 class="tag" span="20">标签</h3></Col>
                    </Row>
                    <Row class="personality-item clearfix">
                        <Col span="4">
                        <Select class="selectdot" v-model="classify">
                            <Option v-for="item in classfiyItems" :value="item.cateId+'_'+item.cateName" :key="item.cateId">{{item.cateName}}</Option>
                        </Select>
                        </Col>
                        <Col span="20">
                        <Tag class="tagdot" closable v-for="item in tags" v-bind:key="item.index" v-if="item" :name="item" @on-close="closeTag">
                            <Icon type="pound"></Icon>
                            {{item}}
                        </Tag>
                        <Input class="inputdot" v-model="tag" placeholder="请输入标签" style="width:130px" :maxlength="10">
                        <span slot="append" style="cursor:pointer" @click="addTag">添加</span>
                        </Input>
                        </Col>
                    </Row>
                </div>
                <div class="address">
                    <h3>地点</h3>
                    <p style="margin-top:12px">
                        <input class="ivu-input" ref="mapInput" v-model="mapInputValue" :placeholder="mapInputPlaceholder" style="width:200px" lnglat="destination" />
                    </p>
                </div>
                <div class="descriptive">
                    <div class="descriptive-title">
                        <input type="text" v-model="title" placeholder="请输入标题(30字以内)" maxlength="30">
                    </div>
                    <div class="descriptive-content">
                        <Input v-model="content" type="textarea" :rows="8" placeholder="请输入简介(300字以内)" :maxlength="300"></Input>
                    </div>
                </div>
                <div class="validate-tips">{{tips}}</div>
                <div class="video-remark">
                    <Row type="flex" justify="center" align="middle">
                        <Col span="12">
                        <p>提示：上传前，请确认视频是否符合 <a style="color:#2d8cf0" @click="showUploadNorm">视频上传规范</a></p>
                        <Modal v-model="norm" class-name="vertical-center-modal" width="380">
                            <p slot="header" class="modal-header">
                                <span>视频上传规范</span>
                            </p>
                            <div class="norm-content">
                                <p>1.上传视频，即表示您已同意草莓视频用户协议。仅支持生活娱乐消费等相关内容，不支持咨询政治相关内容视频上传，请勿上传色情，反动等违法违规内容。</p>
                                <p>2.目前仅支持16:9横屏播放的MP4格式视频。视频需支持720P以上高清画质。</p>
                                <p>3.带有其他平台水印，(除创作团队水印)的视频将会被驳回下架。</p>
                                <p>4.时长建议不要超过6分钟。否则将影响推荐权重。视频大小仅支持在1000M以内。</p>
                                <p>6.非原创类视频，将会被下架处理，并永久性废除认证资质。</p>
                            </div>
                            <div slot="footer"></div>
                        </Modal>
                        </Col>
                        <Col span="12" style="text-align:right">
                        <Button type="ghost" shape="circle" style="margin-right:10px" @click="goback">返回</Button>
                        <Button type="primary" shape="circle" @click="submit">上传</Button>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
        <div>
            <Modal v-model="back" :mask-closable="false" width="400" class-name="vertical-center-modal">
                <p slot="header" class="modal-header">
                    <span>温馨提示</span>
                </p>
                <div class="modal-content">
                    <p style="line-height:50px;height:50px;">退出将丢失本次编辑内容，是否退出编辑页？</p>
                </div>
                <div slot="footer">
                    <Button type="ghost" shape="circle" @click="cannelback">取消</Button>
                    <Button type="primary" shape="circle" @click="okback">确定</Button>
                </div>
            </Modal>
            <Modal v-model="del" :mask-closable="false" width="400" class-name="vertical-center-modal">
                <p slot="header" class="modal-header">
                    <span>温馨提示</span>
                </p>
                <div class="modal-content">
                    <p style="line-height:50px;height:50px;">视频删除后将要重新上传，确定要删除该视频？</p>
                </div>
                <div slot="footer">
                    <Button type="ghost" shape="circle" @click="cannelDelete">取消</Button>
                    <Button type="primary" shape="circle" @click="okDelete">确定</Button>
                </div>
            </Modal>
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
                corverName: '',
                coverUrl: '',
                coverItems: [],
                videoId: '',
                videoName: '',
                videoUrl: '',
                progress: false,
                percent: 0,
                classify: '',
                tag: '',
                tags: [],
                address: '',
                destination: '',
                province: '',
                city: '',
                district: '',
                title: '',
                content: '',
                classify: '',
                classfiyItems: [],
                norm: false,
                alert: false,
                content: '',
                settingcover: false,
                queryVideoId: this.$route.query.videoId,
                back: false,
                mapInputPlaceholder: '',
                del: false,
                mapInputValue: '',
                tips:''
            }
        },
        created() {
            this.tk = Util.getcookie('token');
            this.fetchVideoClassfiy();
            this.queryVideoId && this.fetchVideoDetail();
        },
        mounted() {
            this.initMaps();
        },
        methods: {
            initMaps() {
                let ap = new qq.maps.place.Autocomplete(this.$refs.mapInput);
                let that = this;
                var geocoder = new qq.maps.Geocoder({    
                    complete: function(result) {
                        let d = result.detail;
                        // this.address  = d.address;
                        // this.mapInputValue = d.address;
                        this.province = d.addressComponents.province;
                        this.city = d.addressComponents.city;
                        this.district = d.addressComponents.district;
                        this.destination = d.location.lat + ',' + d.location.lng;    
                    }.bind(this)
                });

                qq.maps.event.addListener(ap, "confirm", function(res) {
                    that.address = this.place.name;
                    that.mapInputValue = this.place.name;
                    let placeName = this.place.name;
                    if (this.place.address) {
                        placeName = this.place.address + ',' + placeName;
                    }
                    geocoder.getLocation(placeName);
                });

                let timer = setTimeout(function() {
                    clearTimeout(timer);
                    this.mapInputPlaceholder = '请输入上传地点';
                }.bind(this), 0);

                this.$refs.mapInput.addEventListener('blur', function() {
                    if (this.mapInputValue) {
                        this.mapInputValue = this.address;
                    } else {
                        this.address = '';
                        this.mapInputValue = '';
                        this.province = '';
                        this.city = '';
                        this.district = '';
                        this.destination = '';
                    }
                }.bind(this))
            },

            uploadCover(e) {
                let file = '';
                if (!e.target.files && /msie/i.test(navigator.userAgent) && !window.opera) {
                    let fileSystem = new ActiveXObject("Scripting.FileSystemObject");
                    file = fileSystem.GetFile(target.value);
                } else {
                    file = e.target.files[0];
                }

                if (!/\.(jpg|jpeg|png|JPG|PNG)$/.test(e.target.value)) {
                    this.$Notice.warning({
                        title: '文件格式不正确',
                        desc: '文件 ' + file.name + ' 格式不正确，请上传 jpg、jpeg、png格式的图片。'
                    });
                    return false
                }

                if (file.size / 1024 / 1024 > 5) {
                    this.$Notice.warning({
                        title: '上传文件大小限制',
                        desc: '文件 ' + file.name + ' 大于5MB，请上传小于5MB的文件。'
                    });
                    return false
                }

                Ajax.post('/config/getPolicy', {
                    fileType: 1
                }).then(function(response) {
                    let client = new OSS.Wrapper({
                        region: 'oss-cn-shenzhen',
                        accessKeyId: response.accessKeyId,
                        accessKeySecret: response.accessKeySecret,
                        stsToken: response.token,
                        bucket: response.bucket
                    });
                    let key = md5(this.tk + Date.now());
                    client.multipartUpload('/' + response.dir + key, file).then(function(res) {
                        this.coverUrl = Util.joinImageUrl(res.name);
                        this.clearFileInput(e.target);
                    }.bind(this));
                }.bind(this));
            },
            uploadVideoHandle(){
                 this.$refs.videoUploadInput.click();
            },
            selectUploadVideo(e) {
                let file = '';
                if (!e.target.files && /msie/i.test(navigator.userAgent) && !window.opera) {
                    let fileSystem = new ActiveXObject("Scripting.FileSystemObject");
                    file = fileSystem.GetFile(target.value);
                } else {
                    file = e.target.files[0];
                }

                if (!/\.(mp4|avi|MP4|AVI)$/.test(e.target.value)) {
                    this.$Notice.warning({
                        title: '文件格式不正确',
                        desc: '文件 ' + file.name + ' 格式不正确，请上传 mp4、avi格式的视频。'
                    });
                    return false
                }
                if (file.size / 1024 / 1024 > 1000) {
                    this.$Notice.warning({
                        title: '上传文件大小限制',
                        desc: '文件 ' + file.name + ' 大于1000MB，请上传小于1000MB的文件。'
                    });
                    return false
                }
                Ajax.post('/uservideo/myUploadApply').then(function(response) {
                    this.videoId = response.videoId;
                    this.progressStatus = '正在上传';
                    this.videoName = file.name;
                    this.uploadVideo(file, this.videoId, e.target);
                }.bind(this))
            },
            uploadVideo(file, videoId, input) {
                Ajax.post('/config/getPolicy', {
                    fileType: 2
                }).then(function(response) {
                    this.videoClient = new OSS.Wrapper({
                        region: 'oss-cn-shenzhen',
                        accessKeyId: response.accessKeyId,
                        accessKeySecret: response.accessKeySecret,
                        stsToken: response.token,
                        bucket: response.bucket
                    });                    
                    this.progress = true;
                    this.videoClient.multipartUpload('/' + response.dir + videoId, file, {
                        progress: this.videoProgress.bind(this)
                    }).then(function(res) {
                        this.progressStatus = '上传成功';
                        this.videoUrl = Util.joinImageUrl(res.name);
                        this.clearFileInput(input);
                        this.fetchVideoCover();
                    }.bind(this)).catch(function(error){

                    });

                }.bind(this));
            },
            videoProgress(p, obj) {
                this.percent = Math.floor(p * 100);
                return function(done) {
                    done();
                }
            },
            clearFileInput(f) {
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
            },
            stopUpload() {
                this.del = true;
            },
            cannelDelete() {
                this.del = false;
            },
            okDelete() {
                clearInterval(this.timer);
                this.progress = 0;
                this.videoUrl = '';
                this.coverUrl = '';
                this.coverItems = [];
                this.del = false;
            },
            fetchVideoCover() {
                this.timer = setInterval(function() {
                    Ajax.post('/uservideo/myUploadShots', {
                        videoId: this.videoId
                    }).then(function(response) {
                        if (response.datas.length > 0) {
                            clearInterval(this.timer);
                            this.timer = undefined;
                            this.coverItems = response.datas;
                            let timeout = setTimeout(function() {
                                clearTimeout(timeout);
                                if (!this.coverUrl) {
                                    this.$refs.coverOuter[0].click();
                                }
                            }.bind(this), 0)
                        }
                    }.bind(this));
                }.bind(this), 10000);
            },
            fetchVideoClassfiy() {
                Ajax.post('/uservideo/videoCateList').then(function(response) {
                    this.classfiyItems = response.datas;
                }.bind(this));
            },
            fetchVideoDetail() {
                Ajax.post('/uservideo/myUploadDetail', {
                    videoId: this.queryVideoId
                }).then(function(response) {
                    this.videoId = response.videoId;
                    this.coverUrl = Util.joinImageUrl(response.coverUrl);
                    this.content = response.content;
                    this.title = response.title;
                    this.address = response.locationStr;
                    this.district = response.district;
                    this.destination = response.destination;
                    this.mapInputValue = response.locationStr;
                    this.classify = response.cateId + '_' + response.cateName;
                    this.tags = response.tags.split("#");
                }.bind(this));
            },
            modifyCorver() {
                this.$refs.cover.click();
            },
            settingCover() {
                if (this.settingcover) {
                    this.settingcover = false;
                    this.coverUrl = '';
                } else {
                    this.settingcover = true;
                    this.coverUrl = Util.joinImageUrl(this.coverItems[0]);
                }
            },
            closeTag(event, name) {
                let index = this.tags.indexOf(name);
                this.tags.splice(index, 1);
            },
            addTag() {
                if (this.tag) {
                    this.tags.push(this.tag);
                    this.tag = '';
                }
            },
            showUploadNorm() {
                this.norm = true;
            },
            cannelback() {
                this.back = false;
            },
            okback() {
                this.back = false;
                location.hash = "#/channel";
            },
            goback() {
                this.back = true;
            },
            submit() {
                if (!this.queryVideoId) {
                    if (!this.videoId || !this.videoUrl) {
                        this.tips = "请上传视频";
                        return false;
                    }
                }

                if (!this.coverUrl) {
                    this.tips = "请设置视频封面";
                    return false;
                }

                if (!this.classify) {
                    this.tips = "请选择视频分类";
                    return false;
                }

                if (!this.title) {
                    this.tips = "请输入视频标题";
                    return false;
                }

                this.tips = '';

                Ajax.post('/uservideo/myUploadConfirm', {
                    videoId: this.videoId,
                    coverUrl: this.coverUrl,
                    title: this.title,
                    content: this.content,
                    cateId: this.classify.split('_')[0],
                    cateName: this.classify.split('_')[1],
                    tags: this.tags.join("#"),
                    address: this.address,
                    province: this.province,
                    city: this.city,
                    district: this.district,
                    destination: this.destination
                }).then(function(response) {
                    this.$Notice.success({
                        title: '温馨提示',
                        desc: this.queryVideoId ? '视频信息修改成功' : '视频上传成功',
                        duration: 2,
                        onClose: function() {
                            if (this.queryVideoId) {
                                location.hash = '#/channel?t=' + Date.now()
                            } else {
                                location.hash = '#/complete?videoId=' + this.videoId;
                            }
                        }.bind(this)
                    })
                }.bind(this));
            }
        },
        beforeDestroy() {
            this.timer && clearInterval(this.timer);
        }
}
</script>
