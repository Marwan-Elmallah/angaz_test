const { default: mongoose } = require("mongoose");

const ServiceSchema = new mongoose.Schema({
    oldId: Number,
    createdUser: {
        type: mongoose.Types.ObjectId,
        ref: "user"
        // type: String
    },
    discountFor: {
        type: mongoose.Types.ObjectId,
        ref: "user"
    },
    featured: String,
    categId: {
        type: mongoose.Types.ObjectId,
        ref: "categ"
    },
    subCategId: {
        type: mongoose.Types.ObjectId,
        ref: "subCateg"
    },
    featured: Boolean,
    title: {
        type: String,
        // required: true
    },
    description: {
        type: String,
        // required: true
    },
    mainImg: String,
    secImg: String,
    video: String,
    instructions: String,
    tag: [String],
    price: Number,
    deliveryTime: Number,
    discount: Number,
    dateFrom: String,
    dateTo: String,
    extraService: [{ type: mongoose.Types.ObjectId, ref: "extraService" }],
    // likes: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    status: {
        type: Number,
        enum: [0, 1, 2, 3], //pending,approved,cancel,pendding update
        default: 0,
    },
    statusComment: String,
    rating: Number
}, { timestamps: true })

const serviceModel = mongoose.model("service", ServiceSchema)

module.exports = serviceModel