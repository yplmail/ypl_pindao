<style scoped>
  .upload-success{
  	  position: relative;
  	  height:300px;
  	  padding:20px;
  	  background-color: #fff;
  }

  .video-cover{
  	width:100%;
  }

  .success-content{
  	  margin:auto 20px;
  	  height: 52px;
  	  line-height: 52px;
  	  border-bottom:1px solid #eee;
  }

  .success-tips{
  	float: left;
  	font-size: 16px;
  	color:#000;
  }

  .success-operation{
  	 float: right;
  }
</style>

<template>
  <div class="content-container">
      <div class="upload-success">
          <Row>
              <Col span="5">
                  <img class="video-cover" :src="coverUrl">
              </Col>

              <Col span="19">
                  <div class="success-content clearfix">
                      <p class="success-tips">视频发布成功！</p>
                      <p class="success-operation">	        	      	
                          <Button type="ghost" shape="circle" style="margin-right:10px" @click="goUpload">继续上传</Button>
                          <Button type="primary" shape="circle" @click="goList">返回视频列表</Button>      	  	 
                      </p>        	      	
                  </div>
              </Col>
          </Row>
      </div>
  </div>
</template>

<script>
    import Ajax from '../../component/server/ajax';
    export default {
    	data(){
    		return {
          coverUrl:''
        };
    	},
    	created(){
    			Ajax.post('/uservideo/myUploadDetail',{
              videoId : this.$route.query.videoId
    			}).then(function(response){
              this.coverUrl = response.coverUrl;
    			}.bind(this));
    	},
      methods: {
         goUpload(){
             location.hash = "#/upload?t="+Date.now();
         },
         goList(){
    				location.hash = "#/channel?t="+Date.now();
         }
      }
    };
</script>