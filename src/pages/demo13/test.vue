<template>
    <div>
        <div>过度效果</div>
        <div>-------------------------------</div>
        <button @click="change">change</button>
        <transition name="llh">
            <div v-show="show">哈哈哈啦啦啦</div>
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
/* 离开之前，完全不透明 */
    .llh-leave{
        opacity: 1;
    }
    /* 离开时，渐渐变得透明 */
    .llh-leave-active{
        transition: opacity 0.5s;
    }
    /* 离开后，完全透明 */
    .llh-leave-to{
        opacity: 0;
    }
    /* 准备进入  透明 */
    .llh-enter{
        opacity:0;
    }
    /* 进入的过程，渐渐变得不透明 */
    .llh-enter-active{
        transition: opacity 0.5s;
    }
    /* 进入后，完全不透明 */
    .llh-enter-to{
        opacity:1;
    }
</style>