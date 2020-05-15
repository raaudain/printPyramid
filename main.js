// Write a function that accepts a positive number N.
// The functions should console log a pyramid shape with N levels using the # character.
// Make sure the pyramid has psaces on both the left and right sides


// function pyramid(n){

//   // // Solution #1
//   // const midpoint = Math.floor((2 * n - 1) / 2);

//   // for (let row = 0; row < n; row++){
//   //   let level = "";

//   //   for (let column = 0; column < 2 * n - 1; column++){
//   //     if (midpoint - row <= column && midpoint + row >= column){
//   //       level += "#";
//   //     }
//   //     else {
//   //       level += " ";
//   //     }
//   //   }
//   //   console.log(level)
//   // }




//   // let count = 1

//   // const midpoint = Math.floor((2 * n - 1) / 2) - 1;

//   // while (count <= n){
//   //   console.log(`${" ".repeat(midpoint)}${"#".repeat(count)}${" ".repeat(midpoint)}`);
//   //   count++
//   // }
// }


// Solution #2
function pyramid(n, row = 0, level = ""){
  if (row === n){
    return;
  }

  if (level.length === 2 * n - 1){
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);

  let add;

  if (midpoint - row <= level.length && midpoint + row >= level.length){
    add = "#";
  }
  else {
    add = " ";
  }

  pyramid(n, row, level + add);
}

pyramid(10);