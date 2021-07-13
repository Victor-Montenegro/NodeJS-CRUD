const mongoose = require("../database/index.js");
const { v4: uuid} = require(`uuid`);

const UserSchema = new mongoose.Schema({
    _id: {type: String, default: () => uuid()},
    name: {type: String, require: true},
    email: {type: String, require: true},
    cpf: {type: String, require: true},
    passworld: { type: String, require: true, select:false},
    createdAt: {type: Date, default: Date.now}
});

const User = mongoose.model("user", UserSchema);

module.exports = User;