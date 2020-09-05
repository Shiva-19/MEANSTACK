let submithere = async () => {

    let fname = document.querySelector("#fname").value;
    let lname = document.querySelector("#lname").value;
    let age = document.querySelector("#age").value;
    let city = document.querySelector("#city").value;

    let url = `http://localhost:3000/enter?fname=${fname}&lname=${lname}&age=${age}&city=${city}`;
    let result = await fetch(url);
    console.log(result);

};

module.exports = { submithere }