const fs = require("fs");
let readDemowithException = () => {
    try {
        const filepath = "/Users/user/Documents/sqlll_assignment19.txt";
        const filecontent = fs.readFileSync(filepath, { encoding: "utf-8" });
        console.log(fileContent);
    } catch (err) {
        console.log("There is some problem", err.message);


    }
};

let readDemoWithoutException = () => {
    const filepath = "/Users/user/Documents/sql_assignment19.txt";
    const fileContent = fs.readFileSync(filepath, { encoding: "utf-8" });
    console.log(fileContent);
};

readDemoWithException();
