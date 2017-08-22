console.log('Loaded!');
var element=document.getElementById('main-text');
element.innerHTML = "New Test Value";

var img = document.getElementById('madi');
var marginleft = 0;
function moveRight(){
    marginleft = marginleft+10;
    img.style.marginleft = marginleft+'px';
}
img.onclick= function(){
var interval = setinterval(moveRight,50);
};