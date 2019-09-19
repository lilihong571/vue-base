<template>
    <div>
        <div>选项数据</div>
        <div>{{msg}}</div>
        <div>-----------------------</div>
        <div>msg = {{aDouble}}</div>
        <div>-----------------------</div>
        <!-- <div @click="say('hi')">click me</div> -->
        <div @click="say">click me</div>
    </div>
   
</template>
<script>
    export default{
        data(){
            return{
                msg:"你是谁？"
            }
        },
        computed:{
            aDouble(){
                return this.msg;
            }
        },
        methods:{
            // say(h){
            //     console.log(h);
            // }
            say(){
                console.log("ahhaha");
            }
        }
    }
</script>