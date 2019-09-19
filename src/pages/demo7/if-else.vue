<template>
    <div>
        <div>条件渲染-if-else</div>
        <div>---------------------------</div>
        <div v-if="aTrue">A</div>
        <div v-else-if="bTrue">B</div>
        <div v-else-if="cTrue">C</div>
        <div v-else>D</div>
        <div v-on:click="selectA">选A</div>
        <div v-on:click="selectB">选B</div>
        <div v-on:click="selectC">选C</div>
        <div v-on:click="selectD">选D</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                aTrue:true,
                bTrue:false,
                cTrue:false,
            }
        },
        methods:{
            selectA(){
                this.aTrue = true;
                this.bTrue = false;
                this.cTrue = false;
            },
            selectB(){
                this.aTrue = false;
                this.bTrue = true;
                this.cTrue = false;
            },
            selectC(){
                this.aTrue = false;
                this.bTrue = false;
                this.cTrue = true;
            },
            selectD(){
                this.aTrue = false;
                this.bTrue = false;
                this.cTrue = false;
            }

        }
    }
</script>