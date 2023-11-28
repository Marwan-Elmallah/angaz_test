const { default: mongoose } = require("mongoose");

const commentSchema = new mongoose.Schema({
    createdUser: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    productId: {
        type: mongoose.Types.ObjectId,
        ref: "product"
    },
    description: String
}, { timestamps: true })

const commentModel = mongoose.model("comment", commentSchema)

module.exports = commentModel