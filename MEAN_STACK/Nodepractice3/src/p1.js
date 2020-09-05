let abc = async () => {
    console.log("I am back");


    return 11;

};
let pqr = abc();


pqr.then((data) => {
    console.log(data);
});


pqr.catch((err) => {
    console.log(err);
});