// Write a JavaScript program to find the sum of squares of the elements of an array.


var a = [1, 2, 3];
var s = 0;
var n = a.length;
for (i = 0; i < n; i++) {
  s += a[i] ** 2;
}
console.log(s);
