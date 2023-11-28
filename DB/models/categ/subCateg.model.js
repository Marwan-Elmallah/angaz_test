const { default: mongoose } = require("mongoose");

const subCategSchema = new mongoose.Schema({
    oldId: Number,
    title: {
        type: String,
        required: true,
        unique: true
    },
    desc: {
        type: String,
        // required: true
    },
    oldCateg: Number
}, { timestamps: true })

const subCategModel = mongoose.model("subCateg", subCategSchema)

module.exports = subCategModel