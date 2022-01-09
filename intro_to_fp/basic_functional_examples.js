// -----------------------------------------------------------------
// Exercise 1
// Directions: Write a pure function that prints "good afternoon" if
//       its afternoon and "good morning" any other time of the day.
// Hint - this will help with time of day: new Date().getHours()
// -----------------------------------------------------------------
const time = new Date().getHours()
const getTimeMessage = () => {

  if (time < 12) return 'good morning'
  return 'good afternoon'
}

console.log(getTimeMessage())


// -----------------------------------------------------------------
// Exercise 2
// Directions: Write a pure function that takes in a number and  
//       returns an array of items counting down from that number to 
//       zero.
// -----------------------------------------------------------------

const countNumbers = (number) => {
  const numberArrays = []

  for (let i = number; i >= 0; i--) {
    numberArrays.push(i)
  }
  return numberArrays
}
console.log(countNumbers(30))

