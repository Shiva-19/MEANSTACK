


let submit = () => {
    let cityname = document.querySelector("#input1").value;

    let url = " https://api.openweathermap.org/data/2.5/weather?appid=ab8e408560ef850103495a3068361bdd&units=metric&q=" +
        cityname;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", url);

    xhr.onload = () => {
        let refjson = JSON.parse(xhr.responseText);
        console.log(refjson);
        domlogic(refjson);
    };
    xhr.send();

};

let domlogic = (refjson) => {
    console.log(refjson.main);
    const name = refjson.name;
    const maxtemp = refjson.main.temp_max;


    let parent = document.querySelector("#parent");

    let newel = parent.children[0].cloneNode(true);
    newel.style.display = "flex";
    newel.innerHTML = name + "" + maxtemp;


    parent.insertBefore(newel, parent.firstChild);

    document.querySelector("#input1").value = "";



}







