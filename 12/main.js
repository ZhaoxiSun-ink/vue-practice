Vue.component('balance',{
    template:`
    <div>
     <show @show-balance="S"></show>
     <div v-if="sh">
     Account:$ {{m}}
     </div>
    </div>
    `,
    props:['money'],
    methods:{
        S: function(data){
            this.sh = true;
            console.log(data);
        }
    },
    data: function(){
        return{
            sh: false,
            m:this.money,
        }
    }
});

Vue.component('show',{
    template:'<button @click="OC()">Show Balance</button>',
    methods:{
        OC(){
            this.$emit('show-balance',{a:1});
        }
    }
});

new Vue({
    el:"#app",
})