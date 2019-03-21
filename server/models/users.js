
const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersSchema = new Schema({
    name: { type: String, required: true},
    lastname: { type: String, required: true},
    code: { type: String, required: true},
    program: { type: String, required: true},
    user: { type: String, required: true},
    password: { type: String, required: true},
    isadmin: { type: Boolean }
});

module.exports = mongoose.model('Users', usersSchema);

