const exe = require("express");
const app = exe();
const mod = require("./v1");
const mod1 = require("./adduser");
const c = require("cors");
app.use(c());
app.use(exe.json());
app.get('/enter', async (req, res) => {
    try {
        const place = req.query;
        await mod.insertval(place);
        res.json({ msg: "success" })
    } catch (err) {
        res.json({ msg: "Fail" })

    }
});

app.get('/adduser', async (req, res) => {
    try {
        const res = req.query;
        await mod1.addUser(res);
        res.json({ msg: "sucess" })
    } catch (err) {
        res.json({ msg: "fail" })
    }
});
app.listen(3000);