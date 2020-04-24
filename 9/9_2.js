new Vue({
    el:"#app1",
    components:{
        'alert':{
            template:'<button @click="OC">click</button>',
            methods:{
                OC:function(){
                    alert("click");
                }
            }
        }
    }
});

new Vue({
    el:"#app2",
    components:{
        'alert':{
            template:'<button @click="OC">click2</button>',
            methods:{
                OC:function(){
                    alert("wow~");
                }
            }
        }
    }
})