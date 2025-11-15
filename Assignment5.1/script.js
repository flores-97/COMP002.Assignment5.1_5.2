// 1. Say you have a function, primitiveMultiply, that in 20% of cases multiplies two
// numbers and in the other 80% of cases raises an exception of type
// MultiplicatorUnitFailure. Write a function that wraps this clunky function and just
// keeps trying until a call succeeds, after which it returns the result. Make sure you
// handle only the exceptions you are trying to handle.
// Example Output:
// console.log(reliableMultiply(8, 8)); // outputs 64

class MultiplicatorUnitFailure extends Error {}

function primitiveMultiply(a, b) {
  if (Math.random() < 0.2) {
    return a * b;
  } else {
    throw new MultiplicatorUnitFailure("Klunk");
  }
}

function reliableMultiply(a, b) {
  // Your code here.
  var x; 
  while(!x){//creates loop until x is true
    try {
      x = primitiveMultiply(a, b);//!x will terminate loop once x is assigned a result
    } 
    catch(error) {//catches errors
      if (!error instanceof MultiplicatorUnitFailure) {
        throw error;
      }
    }
  }
  return x;
}

console.log(reliableMultiply(8, 8));
console.log(reliableMultiply(8, 6));
console.log(reliableMultiply(3, 5));
console.log(reliableMultiply(11, 10));
console.log(reliableMultiply(-2, -2));
console.log(reliableMultiply("3", "5"));
