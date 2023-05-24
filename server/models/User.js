const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    age: {
        type: Number,
    },
    email: {
        type: String,
    },
}
)

const UserMoel = mongoose.model("users", UserSchema)
module.exports = UserMoel