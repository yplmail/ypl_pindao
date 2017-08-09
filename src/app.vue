<template>
    <div class="wrapper">
        <div class="wrapper-header" v-if="show">
            <div class="header-nav clearfix">
            <div class="sys-logo" @click="gochannel">
                <img src="./images/logo.png" alt="草莓频道logo">
            </div>
            <div class="sys-des" @click="gochannel">
                <h1>草莓频道中心</h1>
                <p>消费心得分享平台</p>
            </div>   
            </div>
        </div>

        <div class="wrapper-content">
            <router-view></router-view>            
        </div>

        <div class="wrapper-footer">
            <p>Copyright©2017&nbsp;深圳市春草传媒科技有限公司版权所有 ICP证：
              <a href="http://www.miitbeian.gov.cn" target="_blank">粤ICP备17017878号</a>
            </p>          
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                show : true
            };
        },
        watch:{
          '$route':'changeRoute'
        },
        methods: {
           gochannel(){
              this.$router.push({path:'channel'});
           },
           changeRoute(router){
               if(router.path == '/login' || router.path == '/index'){
                  this.show = false;
               }else{
                  this.show = true;
               }            
           }
        }
    };
</script>