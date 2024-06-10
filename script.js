const apiKey = 'fc94cf8baa814d7780f113b8c05f8601';

document.getElementById('city-select').addEventListener('change', function() {
  const city = this.value;
  if (city) {
      fetchWeather(city);
  } else {
      document.getElementById('weather').innerHTML = 'Please select a city to view the weather.';
  }
});

function fetchWeather(city) {
  const url = `https://api.weatherbit.io/v2.0/current?city=${city}&key=${apiKey}`;

  console.log('Making API request to:', url);
  fetch(url)
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok: ' + response.statusText);
      }
      return response.json();
  })
  .then(data => {
      console.log(data);
      if (data && data.data && data.data.length > 0) {
          const weather = data.data[0];
          document.getElementById('weather').innerHTML = `
              Current temperature in ${city} is ${weather.temp}°C,
              and the weather condition is ${weather.weather.description}.
          `;
      } else {
          document.getElementById('weather').innerHTML = 'No weather data available for this city.';
      }
  })
  .catch(error => {
      console.error('Error fetching weather data:', error);
      document.getElementById('weather').innerHTML = 'Failed to load weather data. Error: ' + error.message;
  });
}


/* 
function fetchWeather() {
  fetch(url)
  .then(response => response.json())
  .then(data => {
      if (data && data.data && data.data.length > 0) {
          const weather = data.data[0];
          document.getElementById('weather').innerHTML = `
              Current temperature in ${city} is ${weather.temp}°C, 
              and the weather condition is ${weather.weather.description}.
              
          `;
      } else {
          document.getElementById('weather').innerHTML = 'No weather data available.';
      }
  })
  .catch(error => {
      console.error('Error fetching weather data:', error);
      document.getElementById('weather').innerHTML = 'Failed to load weather data.';
  });
} */

// Call the function when the script loads
fetchWeather();







/* 
document.addEventListener("DOMContentLoaded", function() {
    const button = document.querySelector(".currency button");
    const exchangeResult = document.getElementById("exchange-result");
  
    button.addEventListener("click", function() {
      const fromCurrency = document.getElementById("from-currency").value;
      const toCurrency = document.getElementById("to-currency").value;
      const amount = document.getElementById("amount").value;
  
      // Perform the currency conversion (this is just a placeholder)
      let result;
      if (fromCurrency === "USD" && toCurrency === "EUR") {
        result = amount * 0.89;
      } else if (fromCurrency === "USD" && toCurrency === "TL") {
        result = amount * 31.60 ;
      } else if (fromCurrency === "EUR" && toCurrency === "USD") {
        result = amount * 1.12;
      } else if (fromCurrency === "EUR" && toCurrency === "TL") {
        result = amount * 34.10;
      } else if (fromCurrency === "TL" && toCurrency === "USD") {
        result = amount * 0.075;
      } else if (fromCurrency === "TL" && toCurrency === "EUR") {
        result = amount * 0.067;
      }
  
      if (result) {
        exchangeResult.textContent = `${amount} ${fromCurrency} equals ${result.toFixed(2)} ${toCurrency}`;
      } else {
        exchangeResult.textContent = "Invalid conversion";
      }
    });
  }) */;
  
