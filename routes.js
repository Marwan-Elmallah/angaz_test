const user = require("./modules/user/user.routes")
const admin = require("./modules/admin/admin.routes")

const adminRoutes = require("express")().use("/admin", admin)
const userRoutes = require("express")().use("/user", user)


module.exports = {
    userRoutes,
    adminRoutes
}