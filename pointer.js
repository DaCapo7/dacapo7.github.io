let colorpointer, maindiv, tempcly=0, superdiv;


let mousemoveevent = function(e){
    tempcly = e.clientY
    colorpointer.style.left = e.clientX-100 + 'px';
    colorpointer.style.top = (e.clientY-100)+'px';
   
    
}
let replacecolorpointer = function(){
    colorpointer.style.top = (tempcly-100)+'px';
}

window.addEventListener('load', ()=>
{
    console.log('hi')
    maindiv = document.getElementById('maindiv')
    colorpointer = document.getElementById('colorpointerdiv')
    colorpointer.style = `
    opacity: 0.2;
    width: 200px;
    height: 200px;
    position:fixed;
    z-index: -99;
    border-radius:100%;
    filter:blur(30px);
    background: rgb(80, 255, 246);
    overflow:hidden;
    `
    superdiv = document.getElementById('superdiv2')
    window.addEventListener('mousemove', mousemoveevent)
    window.addEventListener('scroll',replacecolorpointer)
})