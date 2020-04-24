var Event = new Vue();

Vue.component('jojo',{
    template:`<div>
    JOJO say:<input @keyup="say" v-model="j_said">
    </div>`,
    methods:{
        say:function(){
            Event.$emit('content',this.j_said);
        }
    },
    data: function(){
        return{
            j_said:'',
        }
    },
}),

Vue.component('dio',{
    template:`<div>
    DIO: JOJO said {{jojo_said}}
    </div>`,
    data: function(){
        return{
            jojo_said:'',
        }
    },
    mounted:function(){
        var me = this;
        Event.$on('content',function(data){
            console.log(data);
            me.jojo_said = data;
        });
    },
}),

new Vue({
    el:"#app",
})