let getweather = () => {
    let xhr = new XMLHttpRequest();
    let url = "api.openweathermap.org/data/2.5/forecast/daily?appid=ab8e408560ef850103495a3068361bdd&cnt=7&q=mumbai";
    xhr.open("GET", url);

}