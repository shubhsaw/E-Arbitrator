const express = require("express");
const mongoose = require("mongoose");
const Client = require("./userModel/ClientModel.js")
const cors = require("cors");
const app = express();
const Arbitrator = require("./userModel/ArbitratorModel.js")
//atharv cluster:
// mongoose.connect("mongodb+srv://atharvkolhe00:1062037971@cluster0.yyskofu.mongodb.net/Arbitration?retryWrites=true&w=majority&appName=Cluster0").then(() => { console.log("connected") }).catch(() => { console.log("not connected") });

//shubham cluster:
mongoose.connect("mongodb+srv://sawantsb27_db_user:oSKRytT1P7jccByq@nodejscluster.d5fgpuz.mongodb.net/?retryWrites=true&w=majority&appName=NodeJsCluster").then(() => { console.log("connected") }).catch(() => { console.log("not connected") });

app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

app.post("/client", async (req, res) => {
    try {

        const body = req.body;
        console.log(body);
        const user = new Client({
            fullName: body.fullName,
            email: body.email,
            password: body.password,
            mobileNo: body.mobileNo,
            companyName: body.companyName,
            governmentId: body.governmentId,

        })
        console.log(user);
        await user.save();
        res.status(200).json({ msg: "success" });
    }
    catch (e) {
        res.status(500).json({ err: e })
    }


})

app.post("/arbitrator", async (req, res) => {
    try {

        const body = req.body;
        console.log(body);

        const user = new Arbitrator({
                fullName: body.fullName,
                email: body.email,
                password: body.password,
                mobileNo: body.mobileNo,
                companyName: body.companyName,
                profession: body.profession,
            })
        console.log(user);
        await user.save();
        res.status(200).json({ msg: "success" });
    }
    catch (e) {
        res.status(500).json({ err: e })
    }


})


app.listen(5000, () => {

    console.log("server running on 5000");

})