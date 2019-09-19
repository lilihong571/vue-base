<template>
    <div>
        <div>数据共享</div>
        <div>---------------------</div>
        <div>msg-{{msg}}</div>
        <button @click="change">change</button>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                msg:876,
            }
        },
        methods:{
            change(){
                //vuex取数据
                //this.msg = this.$store.state.count;
                //修改共享数据
                this.$store.dispatch('inc',15151);
                this.msg = this.$store.state.count;
            }
        }   
    }
</script>