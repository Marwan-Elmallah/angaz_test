const Joi = require("joi")

const signUpAdminSchema = {
    body: Joi.object().required().keys({
        userName: Joi.string().required(),
        password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        cPassword: Joi.any().equal(Joi.ref("password")).required()
    })
}
const loginAdminSchema = {
    body: Joi.object().required().keys({
        userName: Joi.string().required(),
        password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
    })
}

module.exports = {
    loginAdminSchema,
    signUpAdminSchema
}