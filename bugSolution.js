function foo(a, b) {
  // Check if both parameters are numbers. If not, convert them to numbers
  a = Number(a);
  b = Number(b);

  // Handle NaN (Not a Number)
  if (isNaN(a) || isNaN(b)) {
    return 0; //Or throw an error: throw new Error("Invalid input: Parameters must be numbers.");
  }

  return a + b; 
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null));//0
console.log(foo('1',2));//3