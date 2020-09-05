let a = async () => {
    console.log("hello");
    return "123";
};
let b = a();
b.then((data) => {
    console.log(data);
});
console.log(b);

let hello = async () => {
    console.log("I.AM.HELLO");

    return "HELLOOOO";
};

hello().then((data) => {
    console.log(data);
});
