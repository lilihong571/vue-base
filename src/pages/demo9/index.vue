<!--
<template>
    <div>
        <div>事件处理器</div>
        <div>--------------------------</div>
        <div>count:{{count}}</div>
        <div v-on:click="changeCount">changeCount</div>
    </div>
</template>
<script>
-->
//     export default{
//         data(){
//             return{
//                 count:25,
//             }
//         },
//         methods:{
//             changeCount(){
//                 this.count+=1;
//             }
//         }
//     }
// </script>
<template>
    <div>
        <div>事件处理器</div>
        <div>--------------------------</div>
        <!-- 注意，这里要动态绑定count，count才可以点击之后进行数值变化 -->
        <div v-bind:count="23">count:{{count}}</div>
        <div v-on:click="changeCount">changeCount</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                count:25,
            }
        },
        methods:{
            changeCount(){
                this.count = this.count + 1;
                console.log(this.count);
            }
        },
        mounted(){
            //接受demo14传递过来的参数      this.$route.params.id
            // 注意这里是route而不是router  id是你传参的键值对的键
            console.log(this.$route.params.userId);
            //弹出query对应的键plan的值 先在demo14界面弹出，再跳转到demo9页面
           // alert(this.$route.query.plan);

           //如果是打印的话，是在demo9界面的控制台打印的
           console.log(this.$route.query.plan);
        }
    }
</script>