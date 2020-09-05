const Promise = require("bluebird");
const mysql = require("mysql");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = require("./config");

let readAllUser = async () => {
    const connection = mysql.createConnection(config.dbconfig);

    await connection.connectAsync();

    let sql = "SELECT * FROM student";
    const results = await connection.queryAsync(sql);
    console.log(results);
    await connection.endAsync();

    return results;

};
readAllUser();