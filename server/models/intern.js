const mongoose = require('mongoose');
const validator = require('validator');

const internSchema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true
    },
    lastname: {
        type: String,
        required: true,
        trim: true
    },
    middlename: {
        type: String,
        trim: true
    },
    organizationname: {
        type: String,
        required: true,
        trim: true
    },
    gstnumber: {
        type: Number,
        required: true,
        trim: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
        trim: true
    },
    mob: {
        type: Number,
        required: true,
        min: 10,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Invalid email!");
            }
        }
    },
})


const InternProject = new mongoose.model("InternProject", internSchema);
module.exports = InternProject;