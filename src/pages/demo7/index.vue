<template>
    <div>
        <div>条件渲染</div>
        <div>-------------------------</div>
        <!-- 注意v-on:click -->
        <div v-on:click="changeT">changeT</div>
        <!-- 这两种写法都行 -->
        <!-- <div v-if=hTrue>{{msg}}</div> -->
        <div v-if='hTrue'>{{msg}}</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msg:"HelloWorld!",
                hTrue:true,
            }
        },
        methods:{
           changeT(){
                if(this.hTrue == true){
                    this.hTrue = false;
                }else if(this.hTrue == false){
                    this.hTrue = true;
                }
               // console.log(this.msg);
           }
        }
    }
</script>