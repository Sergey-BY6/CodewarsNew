function removeSmallest(numbers) {
  let user =  Math.min (...numbers)
let a = numbers.indexOf(user, 0)
let newUser = []

for (let i in numbers) {
  if (i == a) continue
  else {
    newUser.push (numbers[i])
}
}
return newUser
  throw "TODO: removeSmallest";
}
