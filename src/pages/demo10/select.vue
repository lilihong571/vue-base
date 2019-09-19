<template>
    <div>
        <div>表单控件的绑定:select</div>
        <div>---------------------</div>
        <!-- 选中了哪个，就会放在数组中，然后显示出来，一发生更改，数组中的值也会更改 -->
        <select v-model="selectString" multiple>
            <option value="请选择" selected disabled>请选择</option>
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
        </select>
        <div>selectString:{{selectString}}</div>
    </div>
</template>
<script>
    export default {
        data(){
            return{
                selectString:'',
            }
        }
    }
</script>