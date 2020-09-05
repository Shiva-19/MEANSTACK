const fs = require("fs");

let readDemo = () => {
    const filePath = "/Users/research/Desktop/temp.txt";

    fs.readFile(filePath, { encoding: "utf-8" }, (err, data) => {
        console.log(data);
    });
};

let readDemo1 = () => {
    const filepath = "/Users/research/Desktop/temp.txt";
    fs.readFile(filepath, { encoding: "utf-8" }, (err, data) => {
        console.log(err);
        console.log(data);
    });
} catch (err) {
    console.log(err);
}
};

readDemo1();