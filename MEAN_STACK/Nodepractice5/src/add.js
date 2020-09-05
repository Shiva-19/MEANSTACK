const Promise = require("bluebird");
const mysql = require("mysql");

Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = require("./confi");

let addRecord = async () => {
  const connection = mysql.createConnection(config.Dbconfig);

  await connection.connectAsync();

  let sql =
    "INSERT INTO STUDENT (fname, lname, age, city) VALUES (?, ?, ?, ?)";
  let data = await connection.queryAsync(sql, [
    "priya",
    "kulkarni",
    "15",
    "nashik",
  ]);

  return data;
  console.log(data);
  await connection.endAsync();
};
addRecord();

let addRecordWithParam = async (fname, lname, age, city) => {
  const connection = mysql.createConnection(config.Dbconfig);

  await connection.connectAsync();

  let sql =
    "INSERT INTO USER (fname, lname, age, city) VALUES (?, ?, ?, ?)";
  let res = await connection.queryAsync(sql, [fname, lname, age, city]);

  await connection.endAsync();

  console.log(res);
};
addRecordWithParam();