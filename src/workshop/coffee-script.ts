const MY_NAME: string = 'Eve';
let myMilkAmount: number = 50;
let myCoffeeType: string = 'cappuccino';

console.log(`Hello, ${MY_NAME}! Your coffee is ${myCoffeeType} and it has ${myMilkAmount} ml.`)


if (myMilkAmount > 50) {
  console.log('Too much milk, not a real coffee!');
} else {
  console.log('Preparing your coffee.');
}
// F7 - get into the method
// F8 - going to next line
// F9 - going to next breakpoint

if (isTooMuchMilk()) { //calls function isTooMuchMilk
  console.log(muchMilkString() + muchMilkResult(false));
} else if (myMilkAmount >= 100) {
  console.log(muchMilkString() + ', not a real coffee!');
} else if (myCoffeeType === 'cappuccino') {
  console.log('Perfect choice!');
} else {
  console.log('All good, making coffee of your choice!');
}

function muchMilkResult(isNotRealCoffee: boolean): string {
  if (isNotRealCoffee) {
    return isNotRealCoffee ? 'not a real coffee!' : ' for other coffee types'
  }
}
function isTooMuchMilk(): boolean { //describes function
  return myMilkAmount > 50 && myCoffeeType !== 'latte';
}
function muchMilkString(): string {
  return 'Too much milk';
}