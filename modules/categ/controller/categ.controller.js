const categModel = require("../../../DB/models/categ/categ.model")

const allCategs = async (req, res) => {
    try {
        const { start, qty } = req.query
        const allCategs = await categModel.find({}).skip(start).limit(qty)
        res.json({ message: "Done", allCategs })
    } catch (error) {
        res.status(500).json({ message: "Error To Get All Categories", error })
    }
}

module.exports = {
    allCategs
}