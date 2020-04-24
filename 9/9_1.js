Vue.component('alert',{
    template:'<button @click="OC">click</button>',
    methods:{
        OC:function(){
            alert("click");
        }
    }
});

new Vue({
    el:"#app",
})