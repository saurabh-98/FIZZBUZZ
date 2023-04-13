

var num = prompt("Enter the number: ");

 const total = Array.from(String(num), Number).reduce((acc, curr) => acc + curr, 0); 
 var ans = "";
  for (let i = 1; i <= total; i++) {
    if (i % 4 === 0 && i % 5 === 0) {
      ans += 'FizzBuzz';
    } else if (i % 4 === 0) {
      ans += 'Fizz';
    } else if (i % 5 === 0) {
      ans += 'Buzz';
    } else {
      ans += i;
    }
    ans += " ";
  }
  
  console.log(ans);