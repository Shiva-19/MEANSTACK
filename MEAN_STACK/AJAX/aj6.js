let callAjaxUsingJquery = () => {
    let cityname = document.querySelector("#input1");
    let url = " https://api.openweathermap.org/data/2.5/weather?appid=ab8e408560ef850103495a3068361bdd&units=metric&q=" +
        cityname;
    $.ajax(url).done((data1) => {
        console.log(data1);
        $("#parent:nth-child(1)")
            .clone(true)
            .html(data1.name + " " + data1.main.temp_max)
            .insertBefore($("#parent:nth-child(1)"));
        $("#inputid").val("");
    });

};
