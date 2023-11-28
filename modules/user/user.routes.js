const uploadFn = require("../../common/uploadFiles")
const authenticator = require("../../middleware/auth")
const validator = require("../../middleware/validator")
const { allUser, addUser, confirmEmail, loginByEmail, loginByUsername, deleteUser, updateProfilePic } = require("./controller/user.controller")
const { registerSchema, loginByEmailSchema, loginByUsernameSchema, deleteUserSchema } = require("./user.validation")

const router = require("express").Router()

const upload = uploadFn('uploads/profiles', "image/png", "image/jpeg")

// router.get("/", authenticator("admin"), allUser)
router.get("/allUsers", allUser)
router.post("/addUser", validator(registerSchema), addUser)
router.get("/confirmEmail/:token", confirmEmail)
router.post("/loginByEmail", validator(loginByEmailSchema), loginByEmail)
router.post("/loginByUsername", validator(loginByUsernameSchema), loginByUsername)
router.delete("/deleteUser/:userId", validator(deleteUserSchema), authenticator(["admin"]), deleteUser)
router.put("/updateProfilePic", authenticator(["client", "freelancer"]), upload.single('profile'), updateProfilePic)

module.exports = router