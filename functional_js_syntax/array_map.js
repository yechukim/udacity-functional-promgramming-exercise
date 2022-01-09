// 1. Write a map function to reverse this array:
const start = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// your code
const makeLengthNumber = (length,number) => {
    return length+1 - number
}

const reverseNumber = ()=> {
  return start.map(num => makeLengthNumber(start.length, num))

}
console.log((reverseNumber()))
// expected output: Array [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

// ----------------------------------------------------------
// 2. Write a map function to print the Job: Name:
const shipMates = [["Mal", "Captain"], ["Wash", "Pilot"], ["Zoey", "1st Mate"], ["Jayne", "Public Relations"]]

// your code
const printMates = ()=> {
    return shipMates.map(item => `${item[1]} : ${item[0]}`)

}
console.log(printMates())


// expected output: Array ["Captain: Mal", etc...]

// ----------------------------------------------------------
// 3. Write a map function that prints the name: even|odd
const awayTeam = ["Picard", "Riker", "Troy", "Data"]

// your code

const checkNameCount = (name)=> {
    if(name.length%2===0) {
        return `${name} : even`
    }
    return `${name} : odd`
}
const printNames = ()=> {
   return awayTeam.map(name => checkNameCount(name))

}
console.log(printNames())


// expected output: Array: ["Picard: even", "Riker: odd", etc...]

// ----------------------------------------------------------
// 4. Create a multidimensional array of each item and its index in the original Array.

const sci_fi_shows = ['Manedlorian', 'Enterprise', 'Firefly', 'Battlestar Galactica']

// your code
const getShowsAndIndex= ()=> {
  return sci_fi_shows.map((item, index)=> [item, index])
}
console.log(getShowsAndIndex())
// expected output: Array [['Manedlorian', 0], ['Enterprise', 1], ['Firefly', 2], ['Battlestar Galactica', 3]]

// ----------------------------------------------------------
// 5. For each item in this array, create a multidimensional array containing the entire original array.

const numbers = [1, 2, 3, 4]

// your code

const getRepeatArrays = ()=> {
    return numbers.map((_number, _index, arr)=> arr)
}
console.log(getRepeatArrays())

// expected output: Array [[1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4], [1, 2, 3, 4]

// Having trouble with creating a 2D array? 
// Take a closer look at the last two arguments of map, one of them might be able to help
