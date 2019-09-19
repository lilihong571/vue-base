<template>
    <div>
        <div>vuex状态管理</div>
        <div>------------------------</div>
        <div>msg:{{msg}}</div>
        <div @click="change">change</div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                msg:123,
            }
        },
        methods:{
            change(){
                // this.$store.state.count是共享数据count
                // vuex取数据
                //this.msg = this.$store.state.count;
                //vuex修改共享数据  调用actions对象里面的inc函数
                this.$store.dispatch('inc',10000);
                //this.msg = this.$store.state.count;
                this.msg = this.$store.state.num;
            }
        }
    }
</script>