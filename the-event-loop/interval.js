let count = 4;

let greet = () => {
  count--
  console.log(count)
  if (count === 1) {
    console.log('Blast off!')
    clearInterval(interval)
  }
}

let interval = setInterval(greet ,1000);
