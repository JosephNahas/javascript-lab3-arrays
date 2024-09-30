console.log('Step1: Declaring Arrays\n');

let awesomeArray = ['Joseph', 'Nahas', 'javascript', 32, 511, 16];

console.log('My array: ', awesomeArray);
console.log('\n-------------------------------------------------------------------');

console.log('\nStep2: Accessing Arrays\n');

let myFirstName = awesomeArray[0];
let myFavouriteCourse = awesomeArray[2];
let lastElement = awesomeArray[awesomeArray.length - 1];

console.log('first element: ', myFirstName);
console.log('\nmiddle element: ', myFavouriteCourse);
console.log('\nlast element: ', lastElement);

console.log('\n-------------------------------------------------------------------');

console.log('\nStep 3: Using Array Properties\n');

console.log('The number of elements in my array is: ', awesomeArray.length);

console.log('\n-------------------------------------------------------------------');

console.log('\nStep 4: Array Methods\n');

let poppedElement = awesomeArray.pop();

console.log('The popped element of my Array: ', poppedElement);
console.log('\nMy array after popping: ', awesomeArray);

let newArrayLength = awesomeArray.push(16, 17);

console.log('\nThe length of my array after pushing two numbers: ', newArrayLength);
console.log('\nMy array after pushing: ', awesomeArray);

let integerElements = awesomeArray.filter(element => Number.isInteger(element));

console.log('\nA copy of my array that is filtered by integers: ', integerElements);

let stringElements = awesomeArray.slice(0,3);

console.log('\nA copy of my array that is sliced to only include the first 3 elements: ', stringElements);

console.log('\n-------------------------------------------------------------------');

console.log('\nStep 5: Iterating Through Arrays\n');

console.log('Traditional for loop:\n');

for (let i = 0; i < awesomeArray.length; i++){
    console.log(awesomeArray[i]);
}

console.log('\nForeach method:\n');

awesomeArray.forEach((value, index) => {
    console.log(`${index}: ${value}`);
});

console.log('\n-------------------------------------------------------------------');

console.log('\nStep 6: Array Destructuring\n');

const [firstElement, secondElement, ...rest] = awesomeArray;

console.log('first element: ', firstElement);
console.log('\nsecond element: ', secondElement);
console.log('\nrest of the elements: ', rest);