const user = require("./modules/user/user.routes")
const admin = require("./modules/admin/admin.routes")
const categ = require("./modules/categ/categ.routes")


const adminRoutes = require("express")().use("/admin", admin)
const userRoutes = require("express")().use("/user", user)
const categRoutes = require("express")().use("/categ", categ)


module.exports = {
    userRoutes,
    adminRoutes,
    categRoutes
}