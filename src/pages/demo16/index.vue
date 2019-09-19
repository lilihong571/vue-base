<template>
    <div>
        <div>slot插槽</div>
        <div>---------------------------------</div>
        <!-- 引用组件 -->
        <slots>
            <!-- 这里写的东西，会被放到slot组件中的slot标签里面去 -->
            <div>hello</div>
            <p>嘻嘻嘻</p>
            <!-- 通过插槽的名字，来放置我们想要放置的标签 -->
            <p slot="bottom">xxxx</p>
        </slots>
    </div>
</template>
<script>
    import slots from '@/components/slot.vue'// 引入组件
    export default {
        data(){
            return{

            }
        },
        // 注册组件
        components:{
            slots
        }
    }
</script>