const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const dbt = {
    host: "localhost",
    user: "root",
    password: "shiva",
    database: "nodejs",
};
let addrec = async () => {
    const connection = mysql.createConnection(dbt);
    await connection.connectAsync();

    let sql = "select * from student";
    let operation = await connection.queryAsync(sql);

    await connection.endAsync();
    console.log(operation);
    return operation;

};

addrec();
