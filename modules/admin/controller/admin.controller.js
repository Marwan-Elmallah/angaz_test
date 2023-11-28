const adminModel = require("../../../DB/models/admin/admin.model")
const jwt = require('jsonwebtoken');
const CryptoJS = require("crypto-js");

const allAdmins = async (req, res) => {
    try {
        const admins = await adminModel.find({})
        res.json({ message: "Done", admins })
    } catch (error) {
        res.status(500).json({ message: "Error To get All Admins" })
    }
}

const addAdmin = (req, res) => {
    try {
        let { userName, password, cPassword } = req.body
        userName = userName.toLowerCase()
        const newAdmin = new adminModel({ userName, password })
        newAdmin.save()
            .then((result) => {
                res.json({ message: "Admin Added Successfully", result })
            })
            .catch((err) => {
                res.status(400).json({ message: "Faild To add Admin", err })
            })

    } catch (error) {
        res.status(500).json({ message: "Error To Add Admin" })
    }
}

const loginAdmin = async (req, res) => {
    // res.json({ adminExist })
    try {
        let { userName, password } = req.body
        userName = userName.toLowerCase()
        const adminExist = await adminModel.findOne({ userName })
        if (adminExist) {
            const bytes = CryptoJS.AES.decrypt(adminExist.password, process.env.SECRET_KEY);
            const originalText = bytes.toString(CryptoJS.enc.Utf8);
            // console.log(originalText);
            if (password === originalText) {
                const token = jwt.sign({ logUser: adminExist }, process.env.SECRET_TOKEN);
                res.json({ message: `Welcome ${adminExist.userName}`, token })          // token used for auth
            } else {
                res.status(401).json({ message: "Wrong Password" })
            }
        } else {
            res.status(400).json({ message: "Username is not Exist" })
        }
    } catch (error) {
        res.status(500).json({ message: "Error To Login Admin" })
    }
}

module.exports = {
    allAdmins,
    addAdmin,
    loginAdmin
}