function foo(a, b) {
  if (a === null || b === null) {
    return 0; // Handle null values
  }
  return a + b; //Original buggy code
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 0
console.log(foo(1, null)); // 0
console.log(foo(null, null));//0
console.log(foo('1',2));//12