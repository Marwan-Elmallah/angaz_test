const { default: mongoose } = require("mongoose");

const extraServiceSchema = new mongoose.Schema({
    oldId: Number,
    serviceId: { type: mongoose.Types.ObjectId, ref: "service" },
    price: {
        type: Number,
        required: true,
    },
    title: {
        type: String,
        // required: true,
    },
    description: {
        type: String,
        // required: true,
    }
}, { timestamps: true })

const extraServiceModel = mongoose.model("extraService", extraServiceSchema)

module.exports = extraServiceModel