const { default: mongoose } = require("mongoose");

const bookingSchema = new mongoose.Schema({
    createdUser: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    productId: {
        type: mongoose.Types.ObjectId,
        ref: "product"
    },
    qty: Number,
    amount: Number,
    discount: Number,
    // extraService: [{ type: mongoose.Types.ObjectId, ref: "extraService" }],
    status: {
        type: Boolean,
        default: true
    },
    workingStatus: {
        type: Boolean,
        default: true
    },
    disputeReport: {
        type: mongoose.Types.ObjectId,
        ref: "disputReport"
    }
}, { timestamps: true })

const bookingModel = mongoose.model("booking", bookingSchema)

module.exports = bookingModel