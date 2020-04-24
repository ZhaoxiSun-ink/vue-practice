var app = new Vue({
    el:"#app",
    data:{
        math:90,
        phy:80,
        chem:85,
    },
    computed:{
        sum:function(){
            return this.math +this.phy+this.chem;
        },
        average:function(){
            return Math.round(this.sum/3);
        }
    }
})