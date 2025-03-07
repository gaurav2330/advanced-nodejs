const delay = (seconds) => new Promise((resolve, reject) => {

  if (seconds > 3) reject(new Error(`${seconds} is too long`))

  setTimeout(() => {
    resolve('the code has ended')
  }, seconds*1000);
})

delay(4)
  .then(console.log)
  .catch((err) => console.log(err))

// This works because console.log takes the first argument and logs it to the console and we are passing that as a message from the resolve.

console.log('in here')