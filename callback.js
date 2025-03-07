function hideString1 (str) {
  return str.replace(/[a-zA-Z]/g, 'X');
}

let hidden = hideString1('hello');
console.log(hidden)
console.log('end')

// This is direct style where you return a value from a function.

// ****************************************************************************************************

function hideString2 (str, done) {
  done(str.replace(/[a-zA-Z]/g, 'X'));
}

hideString2('hello', (hidden) => {
  console.log(hidden)
})
console.log('end')

// This is called continuous passing style. It looks like a callback but its not since its synchronous.
// A callback is called for an asynchronous operation.

// ****************************************************************************************************

function hideString3 (str, done) {
  process.nextTick(() => {
    done(str.replace(/[a-zA-Z]/g, 'X'));
  })
}

hideString3('hello', (hidden) => {
  console.log(hidden)
})
console.log('end')

// Now this is callback since it is called to handle an async operation.