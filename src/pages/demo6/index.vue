<template>
    <div>
        <div>style的动态绑定</div>
        <div>--------------------------------</div>
        <!-- 第一种方式 -->
        <!-- 这里的activeColor是一个color的值的变量，可以在全局变量中做更改-->
        <div v-bind:style="{color:activeColor,fontSize:activeFont}">Hello</div>
        <div v-on:click="changeStyle">changeStyle</div>
        <!-- 第二种方式 -->
        <!-- 这个styleObject是一个对象，对象里面有两个成员变量，成员变量值可更改 -->
        <div v-bind:style="styleObject">Hahah</div>
        <div v-on:click="changeStyleObject">changeStyleObject</div>
        <!-- 第三种绑定方式 -->
        <!-- 注意：activeColor1是一个对象，activeFontSize1也是一个对象-->
        <div v-bind:style="[activeColor1,activeFontSize1]">Gaga</div>
        <div v-on:click="changeStyleArray">changeStyleArray</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                activeColor:'red',
                activeFont:'20px',
                styleObject:{
                    color:'green',
                    fontSize:'20px',
                },
                // 这里有个区别，数组里面的每项是一个对象
                //其实键值对就是一个对象。
                activeColor1:{
                    color:'gray',
                },
                activeFontSize1:{
                    fontSize:'70px',
                },
            }
        },
        methods:{
            changeStyle(){
                this.activeColor = 'blue';
                this.activeFont = '50px';
            },
            changeStyleObject(){
                this.styleObject.color = 'yellow';
                this.styleObject.fontSize = '60px';
            },
            changeStyleArray(){
                this.activeColor1.color = 'blue';
                this.activeFontSize1.fontSize = '12px';
            }

        }
    }
</script>