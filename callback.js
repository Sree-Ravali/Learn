
const x = 10

function secondMethod(x) {
    console.log("x from second method " + x)
  }
  
  function firstMethod(x,callback) {
    x = x+10
    console.log(x)
    callback(x)
  }
  
  firstMethod(x,secondMethod);
  console.log("x from outside " + x)