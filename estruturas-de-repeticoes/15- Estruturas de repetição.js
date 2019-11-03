let arr = [];

function random(x) {
    
return Math.floor(Math.random(x) * arr.length);
}

for (let i = 0 ; i < 10 ; i++){
  arr.push(random())
}

console.log(arr);