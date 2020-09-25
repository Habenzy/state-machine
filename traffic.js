let yellow = {color: 'yellow'}
let green = {color: 'green'}
let red = {color: 'red'}
let blinkingRed = {color: 'blinking red'}

let lightLookup = {
  yellow: yellow,
  green: green,
  red: red,
  'blinking red': blinkingRed
}

// ----------------Below here is all state machine-----------------
let light = green

let canChangeTo = {
  green: [yellow],
  yellow: [red],
  red: [green, blinkingRed],
  'blinking red': [red]
}

function changeLight(nextState) {
  let currentState = light

  if(canChangeTo[currentState.color].includes(lightLookup[nextState])) {
    light = lightLookup[nextState]
  } else {
    console.log(`Invalid state transition attempted from ${currentState} to ${nextState}`)
  }
}

console.log(light)
changeLight('yellow')
console.log(light)
changeLight('red')
console.log(light)
changeLight('blinking red')
console.log(light)
