// Use 'const' and 'let' instead of 'var' for better variable scoping.
const temp = document.querySelector(".temp");
const city = document.querySelector(".city-name");
const desc = document.querySelector(".desc");
const input = document.querySelector("#inputValue");

// Add an event listener for 'Enter' keypress to trigger the weather search.
input.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    findWeather();
  }
});

function findWeather() {
  // Declare 'apiKey' and 'apiUrl' constants using template literals for readability.
  const apiKey = '06f24d0de2580b6656c9cc5d9ee28f70';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&appid=${apiKey}`;

  // Fetch weather data from the OpenWeatherMap API.
  fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      // Use 'const' for variables that won't change their value after initialization.
      const tempValue = data.main.temp;
      const name = data.name;
      const descValue = data.weather[0].description;

      // Calculate temperature and format it.
      const temperature = (tempValue - 273).toFixed(2) + "°C";

      // Update DOM elements with weather data.
      city.textContent = name;
      temp.textContent = temperature;
      desc.textContent = descValue;

      // Clear the input field after displaying weather data.
      input.value = "";
    })
    .catch(err => alert("Wrong city name!")); // Handle errors with an alert message.
}
