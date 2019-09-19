<template>
    <div>
        <!-- 接收属性参数，col是一个color的变量值 -->
        <!-- 让style动态绑定 -->
        <!-- 应用到div标签中 -->
        <div v-bind:style="{color:col}">{{time}}</div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                time:10,
            }
        },
        mounted(){
            var vm = this;
            var t = setInterval(function(){
                vm.time--;
                if(vm.time == 0){
                    //清除间歇调用
                    clearInterval(t);
                    // 当结束的时候触发事件
                    vm.$emit("end");
                }
            },1000);
        },
        // 1.接收自定义组件传过来的col值，接收到之后应用到div标签中
        props:{
            col:{
                type:String,
                default:'#fff',
            }
        }
    }
</script>