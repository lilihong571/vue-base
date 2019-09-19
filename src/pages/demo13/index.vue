<template>
    <div>
        <div>过渡效果</div>
        <div>-----------------------------</div>
        
        <button @click="change">开关</button>
        <transition name="fades">
             <div v-if="show">哈哈哈</div>
        </transition>
       
    </div>
</template>
<script>
    export default {
        data(){
            return{
                show:true,
            }
        },
        methods:{
            change(){
                this.show = !this.show;
            }
        }
    }
</script>
<style>
    /* 正准备离开  进入之后*/
    .fades-leave,.fades-enter-to{
        opacity: 1;
    }
    /* 离开的过程  进入的过程*/
    .fades-leave-active,.fades-enter-active{
        transition: opacity .5s;
    }
    /* 离开之后  正准备进入*/
    .fades-leave-to,.fades-enter{
        opacity: 0;
    }
</style>