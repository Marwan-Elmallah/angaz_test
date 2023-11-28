const Joi = require("joi")

const registerSchema = {
    body: Joi.object().required().keys({
        userName: Joi.string().required(),
        firstName: Joi.string().required(),
        lastName: Joi.string().required(),
        cuntryCode: Joi.string().required(),
        email: Joi.string().email().required(),
        password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
        cPassword: Joi.any().equal(Joi.ref("password")).required(),
        mobile: Joi.string().required(),
        gender: Joi.string(),
        role: Joi.string(),
        address: Joi.string(),
        aboutMe: Joi.string()
    })
}

loginByEmailSchema = {
    body: Joi.object().required().keys({
        email: Joi.string().email().required(),
        password: Joi.string().required()
    })
}

loginByUsernameSchema = {
    body: Joi.object().required().keys({
        userName: Joi.string().required(),
        password: Joi.string().required()
    })
}

deleteUserSchema = {
    params: Joi.object().required().keys({
        userId: Joi.string().required()
    })
}

module.exports = {
    registerSchema,
    loginByEmailSchema,
    loginByUsernameSchema,
    deleteUserSchema
}