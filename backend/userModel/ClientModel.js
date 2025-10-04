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
    governmentId: {
        type: {
            type: String,
            enum: ["aadhaar", "pan", "passport"]
        },
        id: {
            type: String,
        },

    }

})


const ClientModel = mongoose.model("Client", userSchema);

module.exports = ClientModel;