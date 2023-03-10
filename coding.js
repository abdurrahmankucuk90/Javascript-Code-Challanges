
// ? Turn minutes to seconds

// function convert (minutes) {
//     return minutes * 60
// }

// ? Fix the code in the code tab to pass this challenge (only syntax errors). Look at the examples below to get an idea of what the function should do.
// //! cubes(3) ➞ 27

// //! cubes(5) ➞ 125

// //! cubes(10) ➞ 1000

// //? Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

// function minMax(arr) {
// 	let maxN = Math.max(...arr)
//     let minN = Math.min(...arr)
//     return [minN, maxN]
// }
// minMax([1,2,3,4,5])

// const getChrismasday = (date) => {
//     return date.getMonth() == 11 && date.getDate() == 24
// }

// console.log(getChrismasday(new Date(3000, 11, 24)))

// function matchHouses(step) {
//     if (step === 1) {
//       return 6;
//     }
    
//     return matchHouses(step - 1) + (step * 5) - 1;
//   }

//? Create a function that returns true if the first array can be nested inside the second and false otherwise.

//? arr1 can be nested inside arr2 if:

//? arr1's min is greater than arr2's min.
//? arr1's max is less than arr2's max.

function canNest(arr1, arr2) {
    console.log(Math.max(...arr1),Math.max(...arr2));
	// if(Math.min(arr1) > Math.min(arr2) && Math.max(arr1) < Math.max(arr2)){
	// 	return true
	// } else {return false}
}

canNest([1, 2, 3, 4], [0, 6])

//? array = [0,1,2,1,0,4,0,5] lets say it was raining and each element in this array was columns. rain fills between columns as much as possible. can you show me how much rain stored between columns as numbers in array
function calculateRainStored(arr) {
    let rainStored = 0;
    for (let i = 1; i < arr.length - 1; i++) {
      let leftMax = Math.max(...arr.slice(0, i));
      let rightMax = Math.max(...arr.slice(i + 1));
      let currentHeight = arr[i];
      let minHeight = Math.min(leftMax, rightMax);
      if (currentHeight < minHeight) {
        rainStored += minHeight - currentHeight;
      }
    }
    return rainStored;
  }
  
  const array = [0, 1, 2, 1, 0, 4, 0, 5];
  const rainStored = calculateRainStored(array);
  console.log(rainStored);