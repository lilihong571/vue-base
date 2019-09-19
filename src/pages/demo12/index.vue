<template>
    <div>
        <div>vue中的DOM</div>
        <div>-------------------------</div>
        <div ref="head"></div>
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        },
        mounted(){
            //获取ref为head的div    this.$refs.head
            this.$refs.head.innerHTML = "hello!";
        },
    }
</script>