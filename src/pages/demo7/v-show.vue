<template>
    <div>
        <div>show渲染</div>
        <div>--------------------</div>
        <div v-show="vTrue">可笑</div>
        <div v-on:click="changeV">显示或者隐藏</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                vTrue:true,
            }
        },
        methods:{
            changeV(){
                if(this.vTrue == true){
                    this.vTrue = false;
                }else if(this.vTrue == false){
                    this.vTrue = true;
                }
            }
        }
    }
</script>