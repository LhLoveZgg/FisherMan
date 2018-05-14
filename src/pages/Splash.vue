<template>
  <div class="splash">
     <img class="splash-img" src="../../static/fisherman.png">
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
            this.$router.push("login");
        },3000)
    }
  }
</script>
<style lang="stylus" scoped>
    .splash
        .splash-img
            display:block;
            width:100%;
            height:100%
</style>
