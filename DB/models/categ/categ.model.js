const { default: mongoose, mongo } = require("mongoose");

const categSchema = new mongoose.Schema({
    oldId: Number,
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        // required: true
    }
}, { timestamps: true })


const categModel = mongoose.model("categ", categSchema)

module.exports = categModel