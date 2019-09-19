<template>
    <div>
        <div>自定义组件</div>
        <div>----------------------------</div>
        <!-- 使用导入的countdown -->
        <CountDown @end="ending"></CountDown>
    </div>
</template>
<script>
    //将倒计时组件引入到页面当中
    import CountDown from '@/components/countdown.vue'
    export default {
        data(){
            return{
                 
            }
        },
        // 注册组件
        components:{
            CountDown
        },
        methods:{
            ending(){
                alert("你或许真的很差！");
            }
        }
    }
</script>