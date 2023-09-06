const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true, "Please add the user name"],

    },

    email: {
        type: String,
        required: [true, "Please add the userr email address"],
        unique: [true, "Email address alreadyy taken"],
    },

    password: {
        type: String,
        required: [true, "Please add the user password"]
    },
}, {
    timestamps: true,

})

module.exports = mongoose.model("User", userSchema);