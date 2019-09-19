<template>
    <div>
        <div>表单控件绑定</div>
        <div>--------------------------</div>
        <!-- 数据双向绑定 -->
        <!-- 表单控件绑定了message,在输入框中输入什么，message就会变成什么 -->
        <input v-model="message"/>
        <div>message:{{message}}</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                message:0,
            }
        }
    }
</script>