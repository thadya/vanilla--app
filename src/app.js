let now = new Date();

let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}

let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes}`;
}

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
];
let day = days[now.getDay()];

let date = document.querySelector(".today")
date.innerHTML = `${day}  ${hours}:${minutes}`;
    
    function Weatherinfo(response) {
      document.querySelector("#cityname").innerHTML = response.data.name;
      document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
      document.querySelector("#humidity").innerHTML = response.data.main.humidity;
      document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
      let nowElement = document.querySelector("#date");
     document.querySelector("#description").innerHTML = response.data.weather[0].description;
    let iconElement = document.querySelector("#mainicon");
    
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
    
    celsiusTemperature = response.data.main.temp;
    
     iconElement.setAttribute(
            "src", 
            `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
              );
              iconElement.setAttribute("alt", response.data.weather[0].description
            );
      }
    function search(city) {
      let apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(Weatherinfo);
    }
    
      function defaultCity(event) {
        event.preventDefault();
          let city = document.querySelector("#city").value;
      search(city);
        }
    
    
    function displayFarenheitTemperature(event) {
        event.preventDefault();
        let temperatureElement = document.querySelector("#temperature");
        celsiustLink.classList.remove("active");
        fahrenheitLink.classList.add("active")
        let fahrenheiTemperature = (celsiusTemperature * 9) / 5 + 32;
        temperatureElement.innerHTML = Math.round(fahrenheiTemperature);
    }
    
    function displayCelsiusTemperature(event) {
        event.preventDefault();
        celsiustLink.classList.add("active");
        fahrenheitLink.classList.remove("active");
        let temperatureElement = document.querySelector("#temperature");
        temperatureElement.innerHTML = Math.round(celsiusTemperature);
    }
    let celsiusTemperature = null;
    
    let formsearch = document.querySelector("#citysearch-form");
    formsearch.addEventListener("submit", defaultCity);
    
    
    let fahrenheitLink = document.querySelector("#fahrenheit-link");
    fahrenheitLink.addEventListener("click", displayFarenheitTemperature);
    
    let celsiustLink = document.querySelector("#celsius-link");
    celsiustLink.addEventListener("click", displayCelsiusTemperature);
    search("New York");
