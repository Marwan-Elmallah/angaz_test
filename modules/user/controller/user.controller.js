const userModel = require("../../../DB/models/user/user.model")
const sendEmail = require("../../../common/sendEmail")
const jwt = require('jsonwebtoken');
const CryptoJS = require("crypto-js");


const allUser = async (req, res) => {
    try {
        const { start, qty } = req.query
        const users = await userModel.find({}).select("-password").skip(start).limit(qty)
        res.json({ message: "Done", users })
    } catch (error) {
        res.status(500).json({ message: "Error To Get All Users", error })
    }
}

const addUser = (req, res) => {
    try {
        let { userName, firstName, lastName, email, password, cPassword, cuntryCode, mobile } = req.body
        userName = userName.toLowerCase().replaceAll(" ", "")
        // email = email.toLowerCase().replaceAll(" ", "")
        const newUser = new userModel({ userName, firstName, lastName, email, password, cPassword, cuntryCode, mobile })
        newUser.save({ new: true })
            .then((result) => {
                const token = jwt.sign({ email }, process.env.SECRET_TOKEN, { expiresIn: 3600 });   //token valid for 1-Hour
                const tokenValid = jwt.sign({ email }, process.env.SECRET_TOKEN);   //token valid any Time

                const message = `
                    <h2>This confirmation will expired after 1 Hour</h2>
                    <a href=${req.protocol}://${req.headers.host}/user/confirmEmail/${token}>Click Here To confirm Email</a>
                    <h2>Refresh Confirmation</h2>
                    <a href=${req.protocol}://${req.headers.host}/user/confirmEmailValid/${tokenValid}>Click Here To confirm Email</a>
                `
                // sendEmail(email, message)
                //     .then((result) => console.log("Email Sent", result))
                //     .catch((err) => res.status(400).json({ message: "Error To send Email", err }))

                res.status(201).json({ message: "User Added", result })
            })
            .catch((err) => res.status(400).json({ message: "error To Add User", err }))
    } catch (error) {
        res.status(500).json({ message: "Error To Add User", error })
    }
}

const confirmEmail = async (req, res) => {
    try {
        const { token } = req.params
        const { email } = jwt.verify(token, process.env.SECRET_TOKEN);
        console.log(email);
        const userExist = await userModel.findOne({ email })
        if (userExist) {
            if (userExist.ev) {
                res.status(400).json({ message: "Email is Already Verified" })
            } else {
                const confirmUser = await userModel.findOneAndUpdate({ email }, { ev: true }, { new: true })
                res.json({ message: "Confirmed", confirmUser })
            }
        } else {
            res.status(400).json({ message: "User is Not Regitered" })
        }
    } catch (error) {
        res.status(400).json({ message: "Error To Confirm", error })
    }
}

const loginByEmail = async (req, res) => {
    let { email, password } = req.body
    email = email.toLowerCase().replaceAll(" ", "")
    try {
        const emailExist = await userModel.findOne({ email })
        if (emailExist) {
            const bytes = CryptoJS.AES.decrypt(emailExist.password, process.env.SECRET_KEY);
            const originalText = bytes.toString(CryptoJS.enc.Utf8);
            // console.log(originalText);
            if (password === originalText) {
                const token = jwt.sign({ logUser: emailExist }, process.env.SECRET_TOKEN);
                res.json({ message: `Welcome ${emailExist.userName}`, token })          // token used for auth
            } else {
                res.status(401).json({ message: "Wrong Password" })
            }
        } else {
            res.status(400).json({ message: "Email is not Exist" })
        }
    } catch (error) {
        res.status(500).json({ message: "Error To login", error })
    }
}

const loginByUsername = async (req, res) => {
    let { userName, password } = req.body
    userName = userName.toLowerCase().replaceAll(" ", "")
    try {
        const userNameExist = await userModel.findOne({ userName })
        // console.log(userNameExist);
        if (userNameExist) {
            const bytes = CryptoJS.AES.decrypt(userNameExist.password, process.env.SECRET_KEY);
            const originalText = bytes.toString(CryptoJS.enc.Utf8);
            // console.log(originalText);
            if (password === originalText) {
                const token = jwt.sign({ logUser: userNameExist }, process.env.SECRET_TOKEN);
                res.json({ message: `Welcome ${userNameExist.userName}`, token })          // token used for auth
            } else {
                res.status(401).json({ message: "Wrong Password" })
            }
        } else {
            res.status(400).json({ message: "Username is not Exist" })
        }
    } catch (error) {
        res.status(500).json({ message: "Error To login", error })
    }
}

const deleteUser = async (req, res) => {
    try {
        const { userId } = req.params
        const userExist = await userModel.findById(userId)
        if (userExist) {
            const deletedUser = await userModel.findByIdAndDelete({ _id: userId }, { new: true })
            res.json({ message: "User Deleted", deletedUser })
        } else {
            res.status(400).json({ message: "User is Not Exist" })
        }
    } catch (error) {
        res.status(500).json({ message: "Error To Delete User", error })
    }
}

const updateProfilePic = async (req, res) => {
    try {
        const user = req.userIn
        // console.log(req.file);
        if (!req.file) {
            res.status(400).json({ message: "Error To read file" })
        } else {
            const pictureURL = `${req.protocol}://${req.headers.host}/${req.file.path}`
            const updatedProfilePic = await userModel.findByIdAndUpdate(user._id, { profilePic: pictureURL }, { new: true })
            res.json({ message: "Done", updatedProfilePic })
        }
    } catch (error) {
        res.status(500).json({ message: "Error To Update profile picture", error })
    }
}



module.exports = {
    allUser,
    addUser,
    confirmEmail,
    loginByEmail,
    loginByUsername,
    deleteUser,
    updateProfilePic
}