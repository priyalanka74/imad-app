var button = document.getElementById('counter');
var count = 0;
button.onclick = function() {
count = count+1;
console.log(count.toString());
};
