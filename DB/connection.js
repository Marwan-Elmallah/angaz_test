const mongoose = require("mongoose")

const initConnection = () => {
    mongoose.connect(process.env.CONNECTION_STRING)
        .then((res) => console.log("DB Connected.."))
        .catch((err) => console.log("DB Error to conect", err))
}

module.exports = initConnection