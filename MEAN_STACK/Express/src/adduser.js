const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const dbconfig = {
    host: "localhost",
    user: "root",
    password: "shiva",
    database: "nodejs",
};

const addUser = async (input) => {
    const connection = mysql.createConnection(dbconfig);

    await connection.connectAsync();

    const sql =
        "INSERT INTO USER (USERNAME, PASSWORD, EMAIL, MOBILE) VALUES (?, ?, ?, ?)";
    await connection.queryAsync(sql, [
        input.username,
        input.password,
        input.email,
        input.mobile,
    ]);
    await connection.endAsync();
};
module.exports = { addUser };