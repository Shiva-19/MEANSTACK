const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = require("./config");
let addrecord = async (user) => {
    const connection = mysql.createConnection(config.dbconfig);
    await connection.ConnectAsync();
    let sql = "INSERT INTO STUDENT(FNAME,LNAME,AGE,CITY) VALUES(?,?,?,?)";
    let result = await connection.queryAsync(sql, [user.fname,
    user.lname,
    user.age,
    user.city

    ]);

    await connection.endAsync();
};
module.exports = {
    addrecord
};