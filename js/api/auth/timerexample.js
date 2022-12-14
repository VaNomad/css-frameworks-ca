console.log('Console.log BEFORE Timer');

setTimeout(() => {
  console.log('Console.log INSIDE of Timer');
}, 3000);

setTimeout(() => {
  console.log('Console.log AFTER Timer');
  
}, 5000)

