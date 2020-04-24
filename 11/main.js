Vue.component('alert',{
    template:'<button @click="OC()">click</button>',
    props:['msg','m2'],
    methods:{
        OC:function(){
            alert(this.msg + this.m2);
        }
    }
})

new Vue({
    el:"#app",
})