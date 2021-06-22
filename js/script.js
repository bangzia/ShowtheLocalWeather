// listen for changes to document.readyState - onreadystatechange is
// fired when readyState value is changed
getWeather();

async function getWeather() {
  try {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(function (position) {
        getWeatherData(position.coords.latitude, position.coords.longitude);
      });
    } else {
      document.getElementById("root").innerHTML =
        "la géolocalisation n'est pas disponible";
    }
  } catch (e) {
    console.error(e);
  }
}
async function getWeatherData(lat, lon) {
  try {
    const weatherResponse = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=315add96e2132c518fd8a742ae96e1e1`
    );
    const weatherData = await weatherResponse.json();
    document.getElementById("city").innerHTML = weatherData.name;
    document.getElementById("description").innerHTML =
      weatherData.weather[0].main;
    console.log(weatherData);
    document.getElementById(
      "weatherIcon"
    ).innerHTML = `<img src=" http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" alt="weather icon"/>`;
    document.getElementById("temp").innerHTML = weatherData.main.temp;
  } catch (e) {
    console.error(e);
  }
}
