Vue.directive('pin',function(el,binding){
    var v = binding.value;
    if(v){
        el.style.position='fixed';
        el.position.top = '10px';
        el.position.left='10px';
    }else{
        el.style.position='static';
    }
})

new Vue({
    el:"#app",
    data:{
        c1:{pinned:false,},
        c2:{pinned:false,},
    }
})