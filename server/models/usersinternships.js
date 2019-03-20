const mongoose = require('mongoose');
const { Schema } = mongoose;

const usersinternshipsSchema = new Schema({
    users: { type: Schema.ObjectId, ref: 'Users' },
    internships: { type: Schema.ObjectId, ref: 'Internships' },
});

module.exports = mongoose.model('UsersInternships', usersinternshipsSchema);


