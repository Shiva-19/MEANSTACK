let getweather = () => {


    let xhr = new XMLHttpRequest();
    let cityname = document.querySelector("#input1").value;
    let url = " https://api.openweathermap.org/data/2.5/weather?appid=ab8e408560ef850103495a3068361bdd&units=metric&q=" +
        cityname;
    $.ajax(url).done((data1) => {
        console.log(data1);
        domlogic(data1);
    });

};
let domlogic = (data1) => {
    const parent = document.querySelector("#parent");
    let newel = parent.children[0];
    const name = data1.name;
    const maxtemp = data1.main.temp_max;
    newel.innerHTML = name + "" + maxtemp;

    parent.insertBefore(newel, parent.firstChild);
    newel.style.display = "flex";

}
document.querySelector("#input1").value = " ";