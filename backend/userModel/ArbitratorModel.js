const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    fullName: {

        type: String,
        required: true,

    },
    email: {

        type: String,
        required: true,

    },
    password: {

        type: String,
        // required: true,

    },
    mobileNo: {

        type: String,
        // required: true,

    },
    companyName: {

        type: String,
        // required: true,

    },
    profession: {
        type: {
            type: String,
            enum: ["lawyer", "retired-judge", "field-expert", "other"]
        },
       BarCouncil : {
            type: String,
        },

    }

})


const ArbitratorModel = mongoose.model("Arbitrator", userSchema);

module.exports = ArbitratorModel;