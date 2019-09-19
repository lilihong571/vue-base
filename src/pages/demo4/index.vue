<template>
    <div>
        <div>计算属性</div>
        <div>--------------------</div>
        <div>{{rv}}</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                aaa:"helloworld",
            }
        },
        computed:{
            // 将aaa反过来
            rv(){
                return this.aaa.split("").reverse().join("");
            }
        }
    }
</script>