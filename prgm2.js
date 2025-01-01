const arr = [3, 5, 7, 3, 2, 5, 3, 7, 7, 5, 5];

arr.sort();

let mostFrequentItem = arr[0];
let maxFrequency = 1;
let currentItem = arr[0];
let currentFrequency = 1;

for (let i = 1; i < arr.length; i++) {
  if (arr[i] === currentItem) {
    currentFrequency++;
  } else {
    if (currentFrequency > maxFrequency) {
      mostFrequentItem = currentItem;
      maxFrequency = currentFrequency;
    }
    currentItem = arr[i];
    currentFrequency = 1;
  }
}

if (currentFrequency > maxFrequency) {
  mostFrequentItem = currentItem;
  maxFrequency = currentFrequency;
}

console.log("Most frequent item:", mostFrequentItem);
