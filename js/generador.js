
var canv;
var img;
var context;
var posici=0;
function anim(){ 
    context.drawImage(img, posici, 0);
    posici+= 1;
    setTimeout(anim, 3);
}
window.onclick = function(){
    img = new Image();
    img.src="goku.jpg" ;
    canv=document.getElementById("Asies");
    context=canv.getContext("2d");
anim();
}
