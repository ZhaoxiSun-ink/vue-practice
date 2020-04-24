Vue.component('user_link',{
    template:'<a :href="\'/user/\'+username">{{username}}</a>',
    props:['username'],
    methods:{}
})

new Vue({
    el:"#app",
})