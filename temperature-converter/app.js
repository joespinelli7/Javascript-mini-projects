const fahrenheitInput = document.querySelector('#fahrenheit > input')
const celsiusInput = document.querySelector('#celsius > input')
const kelvinInput = document.querySelector('#kelvin > input')

const roundNum = (num) => {
  return Math.round(num * 100)/100;
}

const fahrenheitConverter = () => {
  let fTemp = parseInt(fahrenheitInput.value);
  let cTemp = ((fTemp - 32) * (5/9));
  let kTemp = ((fTemp + 459.67) * (5/9));
  celsiusInput.value = roundNum(cTemp);
  kelvinInput.value = roundNum(kTemp);
}

const celsiusConverter = () => {
  let cTemp = parseInt(celsiusInput.value);
  let fTemp = (cTemp * (9/5) + 32);
  let kTemp = (cTemp + 273.15);
  fahrenheitInput.value = roundNum(fTemp);
  kelvinInput.value = roundNum(kTemp);
}

const kelvinConverter = () => {
  let kTemp = parseInt(kelvinInput.value);
  let fTemp = (9/5 * (kTemp - 273) + 32);
  let cTemp = (kTemp - 273.15)
  fahrenheitInput.value = roundNum(fTemp);
  celsiusInput.value = roundNum(cTemp);
}

const main = () => {
  celsiusInput.addEventListener('input', celsiusConverter);
  fahrenheitInput.addEventListener('input', fahrenheitConverter);
  kelvinInput.addEventListener('input', kelvinConverter);
}

main();
