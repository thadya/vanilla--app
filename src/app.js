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

let date = document.querySelector(".today");
date.innerHTML = `${day}  ${hours}:${minutes}`;

function Weatherinfo(response) {
    document.querySelector("#cityname").innerHTML = response.data.name;
    document.querySelector("#temperature").innerHTML = Math.round(
      response.data.main.temp
    );
  
    document.querySelector("#humidity").innerHTML = response.data.main.humidity;
    document.querySelector("#wind").innerHTML = Math.round(
      response.data.wind.speed
    );
    document.querySelector("#description").innerHTML =
      response.data.weather[0].main;
  }
  
  function search(event) {
    event.preventDefault();
    let cityElement = document.querySelector("#cityname");
    let entercity = document.querySelector("#city");
    cityElement.innerHTML = entercity.value;
  
    let apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
    let city = document.querySelector("#city").value;
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(Weatherinfo);
  }
  let searching = document.querySelector("#citysearch-form");
  searching.addEventListener("submit", search);
  
  function getcity(city) {
    let apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(Weatherinfo);
  }
  function display(description) {
    let apiKey = "72bb9dab46b9ec3d65f423c63f27a9b8";
      let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(Weatherinfo);
      let descriptionElement = document.querySelector("#description");
      descriptionElement.innerHTML = response.data.weather[0].description;
    }
  
  function processsubmit(event) {
    event.preventDefault();
    let city = document.querySelector("#city").value;
    getcity(city);
  }
  let formsearch = document.querySelector("#citysearch-form");
formsearch.addEventListener("submit", processsubmit);