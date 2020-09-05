const http = require("http");
const mod = require("./modul1");

http
    .createServer((req, res) => {
        res.setHeader("Access-Control-Allow-Origin", "*");

        const myresponse = JSON.stringify(mod.list);

        // to send the response to the client
        res.end(myresponse);
    })
    .listen(5900);

const mod1 = require("./module2");
console.log(mod1.sub(3, 4));