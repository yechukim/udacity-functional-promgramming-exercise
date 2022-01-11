// 1. Create a function that when passed as a callback to the Higher Order function provided,
// makes the final return the number's square plus two

const addTwo = (callback) => {
  return callback() + 2
}
const cal = (num)=> {
  return num * num
}
console.log(addTwo(()=> cal(3)))

// 2. Create a Higher Order Function that could take this callback to return a greeting

const createFullName = (first_name, last_name, title) => {
  return `${title} ${first_name} ${last_name}`
}

const greeting = (callback) =>{
  return `greeting! ` + callback()
}
console.log(greeting(()=> createFullName('a','d','c')))
// you might notice that this function is less than ideal - that's great! We'll talk about why next

/*
1번 에서는 addTwo가 고차함수고, 2번에서는 greeting이 고차함수 인 것
1번은 고차함수에 들어가는 콜백함수를 만들어보는 것,
2번은 콜백이 들어갈 고차함수를 만드는 것
* */