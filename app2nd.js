var hello = 'Hello World';
alert(hello);

var int1 = 1;
alert(int1);

var int2 = -10;
alert(int2);

var float1 = 3.14;
alert(float1);

var str1 = 'JavaScriptを覚えよう';
alert(str1);

alert(4 + 3);
alert(8 - 5);
alert(2 * 6);
alert(10 / 2);

alert('Hello' + 'World');

var str2 = 'Hello';
var str3 = 'World!!';
alert(str2 + str3);

var orange = 100;
var apple = 120;
if (orange < apple) {
  alert('みかんの値段がりんごより安い');
} else if (orange == apple) {
  alert('みかんとりんごが同じ値段');
} else {
  alert('みかんの値段がりんごより高い');
}

var max = 100;
var num = 1;
var count = 0;
while (num < max) {
  num = num * 2;
  count = count + 1;
}
alert('2を掛け続けて' + max + 'を越えるのに必要だった回数は' + count + '回です');

var i;
var num1 = 0;
for (i = 1; i < 11; i++) {
  num1 += i;
}
alert('1から10まで足し算した結果は' + num1 + 'です');