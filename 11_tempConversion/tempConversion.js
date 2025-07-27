const convertToCelsius = function(fahrenheitTemp) {
  const celciusTemp = (fahrenheitTemp - 32) * (5 / 9);
  const roundedCelciusTemp = Math.round(celciusTemp * 10) / 10 
  return roundedCelciusTemp;
};

const convertToFahrenheit = function(celciusTemp) {
  const fahrenheitTemp = (celciusTemp * (9 / 5)) + 32;
  const roundedFahrenheitTemp = Math.round(fahrenheitTemp * 10) / 10;
  return roundedFahrenheitTemp;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
