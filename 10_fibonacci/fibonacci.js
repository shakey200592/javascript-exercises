const fibonacci = function (count) {
  if (typeof count === "string") {
    count = parseInt(count);
  }
  if (count === 0) {
    return 0;
  } else if (count < 0) {
    return `OOPS`;
  }

  let fib = [0, 1];

  for (let i = 0; i <= count - 2; i++) {
    fib.push(fib[i] + fib[i + 1]);
  }
  return fib[fib.length - 1];
};

console.log(fibonacci("0"));

// Do not edit below this line
module.exports = fibonacci;
