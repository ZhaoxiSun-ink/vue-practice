Vue.directive('pin',function(el,binding){
    var v = binding.value;
    var position = binding.modifiers;
    var warning = binding.arg;
    if(v){
        el.style.position='fixed';

        for(var key in position){
            if(position[key]){
                el.style[key] = '10px';
            }
        }
        if(warning == 'true'){
            el.style.background = 'yellow';
        }
    }else{
        el.style.position='static';
        el.style.background = '#CCC';
    }
})

new Vue({
    el:"#app",
    data:{
        c1:{pinned:false,},
        c2:{pinned:false,},
    }
})