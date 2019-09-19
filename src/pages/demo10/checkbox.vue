<template>
    <div>
        <div>checkbox绑定</div>
        <div>-------------------------</div>
        <!-- 一点击选中，就会把value里面的值赋值给数组 -->
        <input type="checkbox" value="mary" v-model="checkNames"/>
        <label for="mary">mary</label>
        <input type="checkbox" value="jack" v-model="checkNames">
        <label for="jack">jack</label>
        <div>{{checkNames}}</div>
    </div>
</template>
<script>
    export default {
       data(){
           return{
               checkNames:[]
           }
       } 
    }
</script>