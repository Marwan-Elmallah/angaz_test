const { default: mongoose } = require("mongoose");

const productSchema = new mongoose.Schema({
    oldId: Number,
    productType: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
        enum: ["service", "project"]
    },
    productId: {
        type: mongoose.Types.ObjectId,
        ref: "productType",
        required: true
    }
}, { timestamps: true })

const productModel = mongoose.model("product", productSchema)

module.exports = productModel