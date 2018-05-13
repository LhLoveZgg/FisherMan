<template>
  <div class="splash">
     <img class="splash-img" src="../../static/splash.jpg">
  </div>
</template>
<script>
export default {
    name: 'splash',
    data(){
        return {

        }
    },
    mounted(){
        setTimeout(()=>{
            console.log(2);
        },2000)
    }
  }
</script>
<style lang="stylus" scoped>
    .splash
        color:red;
        font-size:1rem;
        .splash-img
            height:100%
</style>
