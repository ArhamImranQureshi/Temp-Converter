// Temperature Converter
const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const kelvinInput = document.getElementById('kelvin');

function roundToTwo(num) {
  return +(Math.round(num + "e+2")  + "e-2");
}

function celsiusToFahrenheitAndKelvin() {
  const celsiusValue = parseFloat(celsiusInput.value);

  if (!isNaN(celsiusValue)) {
    const fahrenheitValue = roundToTwo((celsiusValue * 9/5) + 32);
    const kelvinValue = roundToTwo(celsiusValue + 273.15);
  
    fahrenheitInput.value = fahrenheitValue;
    kelvinInput.value = kelvinValue;
  } else {
    fahrenheitInput.value = '';
    kelvinInput.value = '';
  }
}

function fahrenheitToCelsiusAndKelvin() {
  const fahrenheitValue = parseFloat(fahrenheitInput.value);

  if (!isNaN(fahrenheitValue)) {
    const celsiusValue = roundToTwo((fahrenheitValue - 32) * 5/9);
    const kelvinValue = roundToTwo((fahrenheitValue - 32) * 5/9 + 273.15);
  
    celsiusInput.value = celsiusValue;
    kelvinInput.value = kelvinValue;
  } else {
    celsiusInput.value = '';
    kelvinInput.value = '';
  }
}

function kelvinToCelsiusAndFahrenheit() {
  const kelvinValue = parseFloat(kelvinInput.value);

  if (!isNaN(kelvinValue)) {
    const celsiusValue = roundToTwo(kelvinValue - 273.15);
    const fahrenheitValue = roundToTwo((kelvinValue - 273.15) * 9/5 + 32);
  
    celsiusInput.value = celsiusValue;
    fahrenheitInput.value = fahrenheitValue;
  } else {
    celsiusInput.value = '';
    fahrenheitInput.value = '';
  }
}

celsiusInput.addEventListener('input', celsiusToFahrenheitAndKelvin);
fahrenheitInput.addEventListener('input', fahrenheitToCelsiusAndKelvin);
kelvinInput.addEventListener('input', kelvinToCelsiusAndFahrenheit);
