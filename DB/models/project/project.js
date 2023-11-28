const { default: mongoose } = require("mongoose");

const projectSchema = new mongoose.Schema({
    createdUser: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    categ: {
        type: mongoose.Types.ObjectId,
        ref: "categ"
    },
    subCateg: {
        type: mongoose.Types.ObjectId,
        ref: "subCateg"
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    skills: [String],
    expectedBudget: {
        type: Number,
        required: true
    },
    estimatedDeliveryTime: Date,
    attachments: [String],
    offers: [{
        user: { type: mongoose.Types.ObjectId, ref: "user" },
        price: Number
    }],
    status: {
        type: Boolean,
        default: true
    },
    likes: [{ type: mongoose.Types.ObjectId, ref: "user" }]
}, { timestamps: true })

const projectModel = mongoose.model("project", projectSchema)

module.exports = projectModel