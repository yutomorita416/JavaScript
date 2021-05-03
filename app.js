var hello = "Hello World";
var int1 = 1;
var int2 = -10;
var float1 = 3.14;
var str1 = "JavaScriptを覚えよう";
var str2 = "Hello";
var str3 = "World!!";

var orange = 100;
var apple = 120;
if (orange < apple) {
  //alert("みかんの値段がりんごより安い");
} else if (orange == apple) {
  //alert("みかんとりんごの値段が同じ");
} else {
  //alert("みかんの値段がりんごより高い");
}

var max = 10000;
var num = 1;
var count = 0;
while (num < max) {
  num = num * 10;
  count = count + 1;
}
//alert("10を掛け続けて" + max + "を超えるのに必要だった回数は" + count + "回です");

var i;
var n = 0;
for (i = 1; i < 11; i++) {
  n = n + i;
}
alert("1から10まで足し算した結果は" + n + "です");