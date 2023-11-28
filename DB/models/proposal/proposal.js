const { default: mongoose } = require("mongoose");

const proposalSchema = new mongoose.Schema({
    createdUser: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    productId: {
        type: mongoose.Types.ObjectId,
        ref: "product"
    },
    description: String,
    attachments: [String]
}, { timestamps: true })

const proposalModel = mongoose.model("proposal", proposalSchema)

module.exports = proposalModel