const headers = ["body", "params", "query"]

const validator = (Schema) => {
    return (req, res, next) => {
        headers.forEach((key) => {
            if (Schema[key]) {
                let validateShema = Schema[key].validate(req[key])
                if (validateShema.error) {
                    res.status(400).json({ message: "Validation Error", error: validateShema.error.details })
                } else {
                    next()
                }
            }
        })
    }
}

module.exports = validator