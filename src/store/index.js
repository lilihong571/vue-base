import Vue from 'vue'
import Vuex from 'vuex'
// 调用vuex---也就是全局可以调用vuex
Vue.use(Vuex) 
export default new Vuex.Store({
    // state是共享数据
    state:{
        count:0,
        num:1
    },
    mutations:{
        increment(state,num){
            state.count++;
            state.num = num;
        }
    },
    actions:{
         inc({commit},obj){
            commit('increment',obj);
         }
    }
})