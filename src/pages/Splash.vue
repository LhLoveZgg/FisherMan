<template>
  <div class="splash">
     <img class="splash-img" src="../../static/fisherman.png">
     <div class="version">
         <p> 
             <span>
                 <i>FisherMan</i>
            </span>
         </p>   
         <!-- <p>©Google Inc.</p> -->
          <p>©上海赞同科技有限公司</p>
     </div>
     <!-- <video src="http://112.65.118.10/mp32.9ku.com/upload/2014/04/24/837689.mp3" autoplay loop></video> -->
  </div>
</template>
<script>
export default {
    name: 'splash',
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
        }
    }, 
    mounted(){
        this.$nextTick(()=>{
              document.getElementsByClassName("splash")[0].style.width = this.getViewportSize().width+"px";
              document.getElementsByClassName("splash")[0].style.height = this.getViewportSize().height+"px";
        })
        setTimeout(()=>{
            //  this.$router.push("login");
        },3000)
    }
  }
</script>
<style lang="stylus" scoped>
    .splash
        position:relative;
        .splash-img
            display:block;
            width:100%;
            height:100%;
        .version
            width:100%;
            position:fixed;
            bottom:2rem;
            p
                span 
                        display: block;
                        width: 10rem;
                        margin: 0 auto;
                        border-radius:.4rem;
                        font-size:1.6rem;
                        color:#fff;
                margin:0
                padding:1rem 0;
                text-align :center;
                color:#fff;
              font-size:1.2rem;
</style>
