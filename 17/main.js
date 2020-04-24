var base = {
    methods:{
        show:function(){
           this.visible = true; 
        },
        hide:function(){
            this.visible = false; 
        },
        toggle:function(){
            this.visible = !this.visible;
        },
    },
    data: function(){
        return{
            visible:false,
        }
    }
};

Vue.component('zeppeli',{
    template:`
    <div>
    <span @mouseenter="show" @mouseleave="hide">杰洛·齐贝林</span>
    <div v-if="visible">最短的捷径就是绕远路，绕远路才是我的最短捷径</div>
    </div>
    `,
    mixins: [base],
})

Vue.component('funny',{
    template:`
    <div>
        <button @click="toggle">法尼·瓦伦泰</button>
        <div v-if="visible">
            <span @click="hide">X</span>
            <h4>title</h4>
            吾心吾行，澄如明镜，一切皆为正义
        </div>
    </div>
    `,
    mixins: [base],
})

new Vue({
    el:"#app",
    data:{

    }
})