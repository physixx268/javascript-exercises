const convertToCelsius = function(fahrenheit) {
  let fTemp = fahrenheit;
  let fToCel = (fTemp - 32) * 5 / 9;
  let rounded = Math.round(fToCel * 10) / 10;
  return rounded;
};

const convertToFahrenheit = function(celsius) {
  let cTemp = celsius;
  let cToFahr = cTemp * 9 / 5 + 32;
  let rounded = Math.round(cToFahr * 10) / 10;
  return rounded;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
