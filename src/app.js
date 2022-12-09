function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = math.round(response.data.main.temp);
}

let apiKey = "2ad3df86f01baa30d925420a827292df";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Abuja&appid=${apiKey}&units=metric`;

console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);