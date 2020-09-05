const Promise = require("bluebird");
const mysql = require("mysql");

// Promisifying the mysql module methods.
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let helloDatabase = async () => {
    const connection = mysql.createConnection({
        host: "127.0.0.1",
        user: "root",
        password: "shiva",
        database: "nodejs",
    });

    // connection open
    await connection.connectAsync(); // promise

    console.log("CONNECTION.SUCCESS");

    // close the connection
    let sql = "INSERT INTO STUDENT VALUES(?,?,?,?,?)";

    await connection.endAsync();
};

helloDatabase();
