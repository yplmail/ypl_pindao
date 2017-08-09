<style scoped>
body {
    background-image: url(../../images/body_bg.png);
}
.header {
    width: 100%;
}

.wrapper {
    width: 1200px;
    margin: 10px auto;
    overflow: hidden;
}

.nav {
    margin-top: 15px;
}

.nav>ul,
.nav>ul>li {
    list-style: none
}

.nav>ul>li {
    float: left;
}

.nav>ul>li>a {
    font-size: 18px;
    cursor: pointer;
}

.nav>ul>li:last-child {
    margin-left: 80px;
}

.header .home {
    color: #333;
    font-weight: bold;
}

.header .join {
    color: #666;
}


/** header end ***/

.content {
    margin-bottom: 50px;
    position: relative;
}

.content .wrapper .left {
    float: left;
    margin-top: 100px;
}

.content .slogan {
    margin-top: 54px;
}

.content .slogan>p {
    font-size: 50px;
    color: #333;
    letter-spacing: 20px;
}

.content .appDownload {
    margin-top: 76px;
}

.content .appDownload .app:last-child {
    margin-left: 30px;
}

.content .qrCode {
    margin-top: 54px;
    overflow: hidden;
}

.content .qrCode>div {
    float: left;
}

.content .qrCode .slogan_desc {
    margin-left: 30px;
    margin-top: 40px;
}

.content .qrCode .slogan_desc>p {
    color: #aaa;
    font-size: 28px;
}

.content .qrCode .slogan_desc>p:last-child {
    margin-top: 10px;
}

.content .wrapper .right {
    float: right;
}

</style>
<template>
    <div>
        <div class="header">
            <div class="wrapper">
                <div class="nav">
                    <ul>
                        <li><a href="" class="home">首页</a></li>
                        <li><a class="join" href="#/login">创作者入驻</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="content">
            <div class="wrapper">
                <div class="left">
                    <div class="logo_div">
                        <img class="logo" src="../../images/index_logo.png">
                    </div>
                    <div class="slogan">
                        <p>消费心得分享平台</p>
                    </div>
                    <div class="appDownload">
                        <a class="app" target="_blank" href="http://android.myapp.com/myapp/detail.htm?apkName=com.chuncao.adv.cmsj"><img src="../../images/android.png?v=2.5"></a>
                        <a class="app" target="_blank" href="https://itunes.apple.com/cn/app/id1226252296"><img src="../../images/ios.png?v=2.5"></a>
                    </div>
                    <div class="qrCode">
                        <div class="img">
                            <img src="../../images/app_qr.png?v=2.5">
                        </div>
                        <div class="slogan_desc">
                            <p>扫码下载，即刻观看</p>
                            <p>开箱、测评、探店、穿搭...</p>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <img src="../../images/app_show.png?v=2.5">
                </div>
            </div>
        </div>       
    </div>
</template>
<script>
export default {
	data() {
      return {};
	},
	created() {

	},
	methods: {

	}
};
</script>
