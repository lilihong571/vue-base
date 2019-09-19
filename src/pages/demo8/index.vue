<template>
    <div>
        <div>列表渲染</div>
        <div>----------------------</div>
        <!-- 第一种v-for用法 -->
        <!-- item代表对象 -->
        <ul>
            <li v-for="item in items">{{item.msg}}</li>
        </ul>
        <!-- 第二种v-for用法 -->
        <!-- item代表对象，index代表下标 -->
        <ul>
            <li v-for="(item, index) in items">{{index}} - {{item.msg}}</li>
        </ul>
        <!-- 第三种v-for用法 -->
        <!-- 键值对 会把对象的每个key值和对应的value值打印出来 -->
        <ul>
            <li v-for="(key,value) in obj">{{key}}:{{value}}</li>
        </ul>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                items:[
                    {msg:'hello'},
                    {msg:'world'},
                    {msg:'my'},
                    {msg:'name'},
                ],
                obj:{
                    name:'lilihong',
                    age:21,
                    sex:'famale',
                }
            }
        }
    }
</script>