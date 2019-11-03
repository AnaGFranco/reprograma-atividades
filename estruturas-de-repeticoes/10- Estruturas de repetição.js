let fib = [0, 1];
for(let i=fib.length; i<15; i++) {
    fib[i] = fib[i-2] + fib[i-1];
}
console.log(fib); 