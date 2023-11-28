const { default: mongoose } = require("mongoose");

const workSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    title: String,
    description: String,
    images: [String],
    skills: [String],
    categId: {
        type: mongoose.Types.ObjectId,
        ref: "categ"
    },
    subCategId: {
        type: mongoose.Types.ObjectId,
        ref: "subCateg"
    },
    video: String,
    link: String
}, { timestamps: true })

const workModel = mongoose.model("work", workSchema)

module.exports = workModel