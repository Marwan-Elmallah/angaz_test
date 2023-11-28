const { loginAdminSchema, signUpAdminSchema } = require("./admin.validation")
const validator = require("../../middleware/validator")
const { addAdmin, allAdmins, loginAdmin } = require("./controller/admin.controller")

const router = require("express").Router()

router.get("/", allAdmins)
router.post("/addAdmin", validator(signUpAdminSchema), addAdmin)
router.post("/loginAdmin", validator(loginAdminSchema), loginAdmin)

module.exports = router