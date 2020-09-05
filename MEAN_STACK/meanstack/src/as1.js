const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = require("./config");



let readUserByQuery = async () => {
    const connection = mysql.createConnection(config.dbconfig);

    await connection.connectAsync();

    let sql = "SELECT * FROM USER WHERE city=? AND fname=? ";
    let results = await connection.queryAsync(sql, ["Mumbai", "piya"]);

    await connection.endAsync();
    return results;
};


let readUserByQueryParams = async (city, fname) => {
    const connection = mysql.createConnection(config.dbconfig);

    await connection.connectAsync();

    let sql = "SELECT * FROM USER WHERE city=? AND fname=? ";
    let results = await connection.queryAsync(sql, [city, fname]);

    await connection.endAsync();
    return results;
};


let readUserByQueryJsonParam = async (input) => {
    const connection = mysql.createConnection(config.dbconfig);

    await connection.connectAsync();

    let sql = "SELECT * FROM USER WHERE city=? AND fname=? ";
    let results = await connection.queryAsync(sql, [input.id, input.email]);

    await connection.endAsync();
    return results;
};

module.exports = {
    readUserByQuery,
    readUserByQueryParams,
    readUserByQueryJsonParam,
};