function prime(a) {
  var n = a[0];
  var flag = 0;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      console.log(n, "is not a prime number");
      flag = 1;
      break;
    }
  }
  if (flag == 0) {
    console.log(n, "is a prime number");
  }
}
var a = [4, 2, 3];
prime(a);
