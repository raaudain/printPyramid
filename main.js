// Write a function that accepts a positive number N.
// The functions should console log a pyramid shape with N levels using the # character.
// Make sure the pyramid has psaces on both the left and right sides


function pyramid(n){

  // Solution #1
  const midpoint = Math.floor((2 * n - 1) / 2);

  for (let row = 0; row < n; row++){
    let level = "";

    for (let column = 0; column < 2 * n - 1; column++){
      if (midpoint - row <= column && midpoint + row >= column){
        level += "#";
      }
      else {
        level += " ";
      }
    }
    console.log(level)
  }
}


pyramid(10);