var para = document.querySelector('p');
var input = document.querySelector('input');
var btn = document.querySelector('button');

btn.addEventListener('click', function() {
    var x = 3;
    var y = 5;
    var res = 0;
    for (var i = 0; i < input.value; i++) {
        if (i % x == 0 || i % y == 0) {
            res += i;
        }
    }
    para.textContent = res;
});