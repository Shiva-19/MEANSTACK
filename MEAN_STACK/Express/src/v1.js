const Promise = require("bluebird");
//const Promise = require("bluebird");
const mysql = require("mysql");


Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

const config = {
    host: "localhost",
    user: "root",
    password: "shiva",
    database: "nodejs",

};
/*let q = {
    fname: "abc",
    lname: "pqr",
    age: "12",
    city: "mumbai",

};*/
let insertval = async (q) => {
    let con = mysql.createConnection(config);
    await con.connectAsync();
    let sql = "INSERT INTO STUDENT (fname,lname,age,city) VALUES(?,?,?,?)";
    let result = await con.queryAsync(sql, [q.fname, q.lname, q.age, q.city]);

    console.log(result);

    await con.endAsync();
    return result;


};
//insertval(q);
module.exports = { insertval };