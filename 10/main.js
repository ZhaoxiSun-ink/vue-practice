Vue.component('like',{
    template:'<button :class="{liked: liked}" @click="toggle_like()">Like {{count}}</button>',
    data: function(){
        return{
            count:10,
            liked:false,
        }    
    },
    methods:{
        toggle_like: function(){
            if (this.liked != true){
                //alert("like");
                this.count++;
            }
            else{
                //alert("cancel");
                this.count--;
            }
            this.liked = !this.liked;
        }
    }
});

new Vue({
    el:"#app",
})