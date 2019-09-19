<template>
    <div>
        <div>vue-router页面跳转</div>
        <div>------------------------------</div>
        <!-- 第一种页面跳转 只跳转  to后面接你要跳转过去的那个地址-->
        <router-link to="/demo10">demo10</router-link>
        <!-- 第二种页面跳转 传递一些参数过去   参数会在地址栏显示  http://localhost:8080/#/demo9/123-->
        <!-- 通过name找对应的path -->
        <router-link :to="{name:'demo9', params:{userId:'123'}}">带params跳转</router-link>
        <!-- 第三种页面跳转，带问号，https://www.baidu.com/s?cl=3&
        tn=baidutop10&
        fr=top1000&wd=%E8%8B%B9%E6%9E%9C%E5%89%AF%E6%80%BB%E8%A3%81%E7%A6%BB%E8%81%8C&
        rsv_idx=2&
        rsv_dl=fyb_n_homepage&
        hisfilter=1   问号后面是一些键值对-->
        <!-- 跳转结果   http://localhost:8080/#/demo9/789?plan=private -->
        <router-link :to="{name:'demo9',params:{userId:789},query:{plan:'private'}}">query</router-link>
        <!-- js方式跳转 -->
        <button @click="toURL">js方式页面跳转</button>
    </div>
</template>
<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            toURL(){
                //js第一种方式跳转，注意是router,不是route
                //this.$router.push({path:'/demo8'});

                //js第二种方式跳转
                //this.$router.push({name:'demo9',params:{userId:'78990000'}});

                //js第三种方式跳转
                this.$router.push({name:'demo9',params:{userId:"hello"},query:{plan:'private'}});
            }
        }
    }
</script>