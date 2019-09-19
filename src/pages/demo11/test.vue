<template>
    <div>
        <div>自定义组件测试</div>
        <div>---------------------------</div>
        <!-- 3.引用组件 -->
        <!-- 第一种写法 -->
        <!-- <CountDown></CountDown> -->
        <!-- 第二种写法 -->
        <!-- <count-down></count-down> -->
        <!-- 第三种写法，传一个属性参数  @end结束时触发的事件 -->
        <count-down col="yellow" @end="ending"></count-down>
    </div>
</template>
<script>
    // 1.先把组件导入到页面当中
    import CountDown from '@/components/test.vue'
    export default {
        data(){
            return{

            }
        },
        //2. 注册组件
        components:{
            //第一种写法
            // CountDown
            // 第二种写法
            'count-down':CountDown
        },
        methods:{
            ending(){
                alert("倒计时结束！");
            }
        }
    }
</script>