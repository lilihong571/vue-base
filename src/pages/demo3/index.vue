<template>
    <div>
        <div>模板语法</div>
        <div>-------------------------</div>
        <!-- 让v-html里面绑定的全局变量的值 变成div的子元素 -->
        <div v-html="hello"></div>
        <div>-------------------------</div>
        <!-- v-bind:动态化绑定 -->
        <!-- <div v-bind:class="red"></div> -->
         <div v-bind:class=red></div>
        <div @click="change">click me</div>
        <div>----------------------------</div>
        <div v-on:click="haha">啊哈哈</div>
        <div>----------------------------</div>
        <!-- 过滤器 -->
        <div>{{hello|captalize}}</div>
        <!-- 不再输出<span>啊呀！</span>  ，输出过滤器里面返回的值 -->
    </div>
</template>
<script>
    export default{
        data(){
            return{
                // hello:"你好！",
                hello:"<span>啊呀！</span>",
                red:"hello red",
            }
        },
        methods:{
            change(){
                this.red = "bbb";
            },
            haha(){
                console.log(this.red);
            },
        },
        filters:{
            // 对于用这个过滤器过滤的信息，会替换掉前面的信息
            captalize(){
                return "给我一杯！";
            }
        }
    }
</script>