<template>
    <div>
        <div>事件处理器</div>
        <div>------------------------------</div>
        <div>count:{{count}}</div>
        <!-- 可行的方案 -->
        <button v-on:click="count++">自增</button>
        <!-- 可行的方案 -->
        <div v-on:click="count++">再次自增</div>
        <!-- 可行的方案 -->
        <div v-on:click="changeCount">第三次自增</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                count:5,
            }
        },
        methods:{
            changeCount(){
                this.count++;
            }
        }
    }
</script>