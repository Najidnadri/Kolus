function makeid(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
      counter += 1;
    }
    return result;
}

function animateNumbers(valueRef, start, end, duration, delay) {
  if (delay) {
    setTimeout(() => {
      var range = end - start;
      var current = start;
      var increment = end > start ? 1 : -1;
      var stepTime = Math.abs(Math.floor(duration / range));
      var timer = setInterval(function() {
        current += increment;
        valueRef.value = current;
        if (current == end) {
          clearInterval(timer);
        }
      }, stepTime);
    }, delay)
  } else {
    var range = end - start;
    var current = start;
    var increment = end > start ? 1 : -1;
    var stepTime = Math.abs(Math.floor(duration / range));
    var timer = setInterval(function() {
      current += increment;
      valueRef.value = current;
      if (current == end) {
        clearInterval(timer);
      }
    }, stepTime);
  }

}

export {
    makeid,
    animateNumbers
}

