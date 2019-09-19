<template>
    <div>
        <div>事件冒泡</div>
        <div>-----------------------------</div>
        <!-- 先执行bbb里面的内容，再执行包裹button的div所绑定的aaa函数里面的内容 -->
        <div v-on:click="aaa">
            <button @click="bbb">bbb</button>
        </div>
        <!-- 阻止事件冒泡 -->
        <div v-on:click="outer">
            <button v-on:click.stop="inner">事件不会冒泡</button>
        </div>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        methods:{
            aaa(){
                alert("aaa");
            },
            bbb(){
                alert('bbb');
            },
            outer(){
                alert("outer");
            },
            inner(){
                alert("inner");
            }
        }
    }
</script>