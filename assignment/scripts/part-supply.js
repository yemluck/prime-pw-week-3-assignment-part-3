console.log('****** Part Supply *******');
// REQUIRED FEATURES

// 1. Create a variable called 'partsNeeded' with a value of the number 40
//    & console.log the variable
console.log('1. Number of partsNeeded:');
let partsNeeded = 40;
console.log(partsNeeded);

// 2. Create a variable call 'supplyChanges' set it to an array containing
//    the following numbers: 3, 5, -6, 0, 7, 11
console.log('2. Array of supplyChanges:');
let supplyChanges = [3, 5, -6, 0, 7, 11];
console.log(supplyChanges);

// 3. Console log the value of the second item in the 'supplyChanges' array
console.log('3. Second supplyChange is:');
console.log(supplyChanges[1]);
// 4. The last item was added by mistake. Remove it from the 'supplyChanges'
//    array & console.log the value removed.
console.log('4. Removed item:');
let removedSupplyChanges = supplyChanges.pop();
console.log(removedSupplyChanges);

// 5. A delivery of 25 more parts arrived. Add the value 25 to the end of the array
console.log('5. Adding 25 to supplyChanges.');
supplyChanges.push(25); //console.log(supplyChanges);

// 6. Write a `for` loop that shows each value in the 'supplyChanges' array
//    Use a console.log formatted as follows, where x is the value from the array
//    - if it is a positive number (greater than 0), log 'Added x parts.'
//    - if the value is 0, log 'No Change.'
//    - if the value is negative, format the log as 'Removed x parts.'
console.log('6. Showing supplyChanges...');
for (i=0; i<supplyChanges.length; i++){
  if(supplyChanges[i] > 0){
    console.log(`Added ${supplyChanges[i]} parts.`);
  }else if(supplyChanges[i] === 0){
    console.log('No change');
  } else {
    console.log(`Removed ${supplyChanges[i]} parts.`);
  }
}


// STRETCH GOALS
console.log('---  Stretch Goals  ---');
// 7. Rewrite the `for` loop from #6 as a `for of` loop.
console.log('7. Showing supplyChanges with "for of" loop');
for (parts of supplyChanges){
  if(parts > 0){
    console.log(`Added ${parts} parts.`);
  } else if(parts === 0) {
    console.log(`No change`);
  } else {
    console.log(`Removed ${parts} parts.`);
  }
}

// 8. Rewrite the `for` loop from #6 as a `while` loop.
console.log('8. Showing supplyChanges with "while" loop');
/*
let j=0
while(supplyChanges[j]){
  console.log(supplyChanges[j]);
  j++;
}
This code outputs 3,5,-6 and ommitted the last 3 numbers in the array. Couldn't
 figure out why
*/
let j=0
while(j < supplyChanges.length){
  console.log(supplyChanges[j]);
  j++;
}


// 9. Write a loop to determine the total number of parts available by
//    adding up all the numbers in the 'supplyChanges' array.
console.log('9. Total supplies available is:');
let sum = 0
for (i of supplyChanges){
  sum +=i;
  }
console.log('Total sum of all parts using for of loop is', sum);

// while loop alternative
let add = 0
let x = 0
while(x < supplyChanges.length){
  add += supplyChanges[x];
  x++;
}
console.log('Total sum of all parts using while loop:', add);
