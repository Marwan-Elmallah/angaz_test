const { default: mongoose } = require("mongoose");

const disputReportSchema = new mongoose.Schema({
    createdUser: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    productId: {
        type: mongoose.Types.ObjectId,
        ref: "product"
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
}, { timestamps: true })

const disputReportModel = mongoose.model("disputReport", disputReportSchema)

module.exports = disputReportModel