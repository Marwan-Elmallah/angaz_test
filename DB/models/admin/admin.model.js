const { default: mongoose } = require("mongoose");
const CryptoJS = require("crypto-js");

const adminSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        require: true
    },
    role: {
        type: String,
        default: "admin"
    }
}, { timestamps: true })

adminSchema.pre("save", function (next) {
    const ciphertext = CryptoJS.AES.encrypt(this.password, process.env.SECRET_KEY).toString();
    this.password = ciphertext
    next()
})

const adminModel = mongoose.model("admin", adminSchema)

module.exports = adminModel