<template>
    <div>
        <div>class与style的动态绑定</div>
        <div>-------------------------------</div>
        <!-- 第一种绑定方式 -->
         <!--isActive是一个bool值变量，用来确定active要不要出现 -->
        <div v-bind:class="{active:isActive, 'lalala':isLalala}"></div>
        <div v-on:click="changeActive">changeActive</div>
        <div @click="changeLalala">changeLalala</div>
        <div>-------------------------------</div>
        <!-- 第二种绑定方式 -->
        <div v-bind:class="classObject"></div>
        <div v-on:click="changeMorning">changeMorning</div>
        <div @click="changeAfternoon">changeAfternoon</div>
        <!-- 第三种绑定方式 -->
        <!-- [Happy,Sad]这么写就行了，Happy和Sad是一个字符串变量 -->
        <div v-bind:class="[Happy,Sad]"></div>
        <div v-on:click="changeHappy">changeHappy</div>
        <div @click="changeSad">changeSad</div>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                isActive:false,
                isLalala:false,
                classObject:{
                    isMorning:false,
                    isAfternoon:false,
                },
                Sad:"SAD",
                Happy:'HAPPY',
            }
        },
        methods:{
            changeActive(){
                if(this.isActive == false){
                    this.isActive = true;
                }else if(this.isActive == true){
                    this.isActive = false;
                }
            },
            changeLalala(){
                if(this.isLalala == false){
                    this.isLalala = true;
                }else if(this.isLalala == true){
                    this.isLalala = false;
                }
            },
            changeMorning(){
                if(this.classObject.isMorning == false){
                    this.classObject.isMorning = true;
                }else if(this.classObject.isMorning == true){
                    this.classObject.isMorning = false;
                }
            },
            changeAfternoon(){
                if(this.classObject.isAfternoon == false){
                    this.classObject.isAfternoon = true;
                }else if(this.classObject.isAfternoon == true){
                    this.classObject.isAfternoon = false;
                }
            },
            changeHappy(){
                this.Happy = 'Nohappy';
            },
            changeSad(){
                this.Sad = 'NoSad';
            }
        }
    }
</script>