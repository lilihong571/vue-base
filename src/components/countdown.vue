<template>
    <div>
        <div>{{time}}</div>
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
            // 这的this必须要赋值给vm,不然会出错
            var vm = this;
            //倒计时函数
            var t = setInterval(function(){
                //每隔1秒执行一次这个函数
                vm.time--;
                //当time减到0的时候，清除间歇调用
                if(vm.time == 0){
                    clearInterval(t);//传入一个t是setInterval返回的id
                    // 触发一个自定义事件endhaha
                    vm.$emit("end");
                }
            },1000);
        }
    }
</script>