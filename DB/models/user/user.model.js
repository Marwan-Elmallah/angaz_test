const { default: mongoose } = require("mongoose");
// const CryptoJS = require("crypto-js");


const userSchema = new mongoose.Schema({
    oldId: Number,
    userName: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    cuntryCode: {
        type: String,
        required: true,
        uppercase: true,
        trim: true
    },
    mobile: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    password: {
        type: String,
        required: true
    },
    ev: {
        type: Boolean,
        default: false
    },
    profilePic: String,
    role: {
        type: String,
    },
    rememberMe: {
        type: String,
    },
    emailUpdates: {
        type: Boolean,
        default: true
    },
    gender: {
        type: String,
    },
    birthDate: {
        type: Date
    },
    jobTitle: {
        type: String
    },
    skills: {
        type: [String]
    },
    aboutMe: {
        type: String,
        default: "I'm New User"
    },
    emailNotification: {
        type: Boolean,
        default: true
    },
    bankAcc: {
        instaPay: {
            email: String,
            username: String,
            status: {
                type: Boolean,
                default: false
            }
        },
        wallet: {
            mobile: String,
            username: String,
            status: {
                type: Boolean,
                default: false
            }
        },
        bank: {
            bankName: String,
            accountNumber: String,
            receiverName: String,
            IBAN: String,
            userName: String,
            status: {
                type: Boolean,
                default: false
            }
        },
        card: {
            cardNumber: String,
            cardHolderName: String,
            status: {
                type: Boolean,
                default: false
            }
        },
        payPal: {
            uaserName: String,
            email: String,
            status: {
                type: Boolean,
                default: false
            }
        }
    },
    status: {
        type: Boolean,
        default: true
    },
    lastSeen: {
        type: Date
    },
    avgResponse: String,
    paiedServices: {
        type: mongoose.Types.ObjectId,
        ref: "product"
    },
    sellServices: {
        type: mongoose.Types.ObjectId,
        ref: "product"
    },
    revesion: {
        general: {
            type: Number
        },
        quality: {
            type: Number
        },
        communication: {
            type: Number
        },
        responsbility: {
            type: Number
        }
    },
    balance: {
        type: Number,
        default: 0
    },
    income: {
        type: Number,
        default: 0
    },
    reservations: [{ type: mongoose.Types.ObjectId, ref: "booking" }],
    likes: {
        users: [{ type: mongoose.Types.ObjectId, ref: "user" }],
        products: [{ type: mongoose.Types.ObjectId, ref: "product" }],
        works: [{ type: mongoose.Types.ObjectId, ref: "work" }]
    },
    views: {
        profile: [{ type: mongoose.Types.ObjectId, ref: "user" }],
        products: [{ type: mongoose.Types.ObjectId, ref: "product" }],
        works: [{ type: mongoose.Types.ObjectId, ref: "work" }]
    },
    works: [{ type: mongoose.Types.ObjectId, ref: "work" }],
    products: [{ type: mongoose.Types.ObjectId, ref: "product" }],
    TFA: {
        type: Boolean,
        default: false
    },
    rank: {
        type: Number,
        default: 0,
        // max : 5
    },
    points: {
        type: Number,
        default: 0
    },
}, { timestamps: true })

// userSchema.pre("save", function (next) {
//     const ciphertext = CryptoJS.AES.encrypt(this.password, process.env.SECRET_KEY).toString();
//     this.password = ciphertext
//     next()
// })

const userModel = mongoose.model("user", userSchema)

module.exports = userModel