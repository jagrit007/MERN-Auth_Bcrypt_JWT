const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        email: { type: String, required: true },
        password: { type: String, required: true },
        username: { type: String, required: true, unique: true },
        // age: { type: Number},
        // dob: { type: Date}
    }
);

const User = mongoose.model("User", UserSchema);

module.exports = User;