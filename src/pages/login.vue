<template>
  <div class="login">
      <div class="login-dialog">
            <div class="toggle">
                <span>登录</span>
                <span>注册</span>
            </div>
            <div class="input">
                    <span class="iconfont">&#xe622;</span>
                    <input type="text" placeholder="请输入账号">
            </div>
            <div class="input">
                   <span class="iconfont">&#xe8ad;</span>
                   <input type="password" placeholder="请输入密码">  
            </div>
            <a href="javascript:void(0)" class="login-btn">登录</a>
      </div>
  </div>
</template>
<script>
export default {
    name: 'login',
    data(){
        return {
            
        }
    },
    methods:{
         getViewportSize () {
                return {
                    width :  window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
                    height : window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight   
                }    
        },
    },
    mounted(){
        this.$nextTick(()=>{
              document.getElementsByClassName("login")[0].style.width = this.getViewportSize().width+"px";
              document.getElementsByClassName("login")[0].style.height = this.getViewportSize().height+"px";
        });
    }

  }
</script>
<style lang="stylus" scoped>
    .login 
        background:url("../../static/login.jpg");
        .login-dialog
            width:16rem;
            height:20rem;
            border:.1rem solid #ccc;
            position:absolute;
            top:50%;
            left:50%;
            margin-left:-8rem;
            margin-top:-10rem;
            box-sizing :border-box;
            padding:1rem;
            padding-top:0;
            border-radius:.2rem;
            .toggle
                overflow:hidden;
                span
                    float:left;
                    width:50%;
                    text-align:center;
                    height:2.2rem;
                    line-height :2.2rem;
                    color:#fff;
            .input
                position :relative
                .iconfont{
                    position :absolute;
                    top:.5rem;
                    left:.5rem;
                }
                input 
                    width:100%;
                    height :2rem;
                    line-height :2rem;
                    border:.1rem solid #ccc;
                    outline:none;
                    margin-bottom:1rem;
                    background-color :#fff;
                    border-radius:.05rem;
                    box-sizing :border-box;
                    padding-left:2rem;
                    font-size:1rem;
            .login-btn
                border:.1rem solid #ccc;    
                display:block;   
                text-align center;
                height:2rem;
                line-height :2rem;
                background:#3385ff;
</style>
