const { allCategs } = require("./controller/categ.controller")

const router = require("express").Router()

router.get("/allCategs", allCategs)

module.exports = router