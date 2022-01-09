// 1. Find all the words with more than 7 characters
const words = ['tardis', 'grok', 'frak', 'blaster', 'klingon', 'shepherd']

// expected output: Array ['shepherd']
const getLongWords = () => {
  return words.filter(word => word.length > 7)
}
console.log(getLongWords())
// ----------------------------------------------------------
// 2. Find all even values
const numbers = [12, 13, 14, 15, 16, 17]

// expected output: Array [12, 14, 16]
const getEvenValues = () => {
  return numbers.filter(word => word%2===0)
}
console.log(getEvenValues())
// ----------------------------------------------------------
// REAL LIFE EXAMPLES

// We often use filter to quickly pull all the items that share a status or other characteristic. For instance, create a list of all the active bounty hunters from the array below:

const hunters = [
    {
        name: 'Greedo',
        universe: 'Star Wars',
        status: 'active',
    },
    {
        name: 'Boba Fett',
        universe: 'Star Wars',
        status: 'inactive',
    },
    {
        name: 'Asajj Ventress',
        universe: 'Star Wars',
        status: 'unknown',
    },
    {
        name: 'Zam Wesell',
        universe: 'Star Wars',
        status: 'inactive',
    },
    {
        name: 'Jango Fett',
        universe: 'Star Wars',
        status: 'active',
    },
]
const getActiveHunters = () => {
  return hunters.filter(hunter =>hunter.status==='active')
}
console.log(getActiveHunters())

// expected output: Array [
//     {
//         name: 'Greedo',
//         universe: 'Star Wars',
//         status: 'active',
//     },
//     {
//         name: 'Jango Fett',
//         universe: 'Star Wars',
//         status: 'active',
//     },
// ]