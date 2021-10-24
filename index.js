var x = [8, -7, 3, -11, 6, -3, -2, 3, -2, 4, 1];
//var x_rng = [1,2,3,4,5,6.5,6.5,8,9.5,9.5,11,12]
var y = [12, -2, 4, 7, 13, 3, -2, -4, 13, -1, -5];
//var y_rng = [1,2,3,5,5,5,7,8.5,8.5,10,11,12]
var _x = 0;
var _y = 3.4545454545455;
sum_kov = 0;
sum_kov_rng = 0;
sum_varx_rng = 0;
sum_vary_rng = 0;
sum_varx = 0;
sum_vary = 0;
console.log(x.sort());
for (var i = 0; i < x.length; i++) {
  sum_varx = Math.pow(x[i] - _x, 2);
  sum_vary = Math.pow(y[i] - _y, 2);
  sum_varx_rng = Math.pow(x_rng[i] - 6.5, 2);
  sum_vary_rng = Math.pow(y_rng[i] - 6.5, 2);
  console.log(sum_kov);
  console.log(x[i] + '-' + _x + '*' + y[i] + '-' + _y);
  sum_kov = sum_kov + (x[i] - _x) * (y[i] - _y);
  sum_kov_rng = sum_kov_rng + (x_rng[i] - 6.5) * (y_rng[i] - 6.5);
}

sum_varx = Math.sqrt((1 / x.length) * sum_varx);
sum_vary = Math.sqrt((1 / x.length) * sum_vary);
console.log(sum_kov);
sum_kov = (1 / x.length) * sum_kov;
sum_kov_rng = (1 / x_rng.length) * sum_kov_rng;

sum_korrelationskoeffizient = sum_kov / (sum_varx * sum_vary);

sum_korrelationskoeffizient_rng = sum_kov_rng / (sum_varx_rng * sum_vary_rng);

console.log(sum_kov);
console.log(sum_korrelationskoeffizient);

console.log(sum_kov_rng);
console.log(sum_korrelationskoeffizient_rng);
console.log('test');
