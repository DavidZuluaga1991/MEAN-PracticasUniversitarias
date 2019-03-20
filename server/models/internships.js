const mongoose = require('mongoose');
const { Schema } = mongoose;

const internshipsSchema = new Schema({
    namecompany: { type: String, required: true},
    code: { type: String, required: true},
    sede: { type: String, required: true},
    datefrom: { type: Date, required: true},
    dateto: { type: Date, required: true},
    requirements: { type: String },
    programs: { type: String, required: true},
    photography: { type: String },
});

module.exports = mongoose.model('Internships', internshipsSchema);

