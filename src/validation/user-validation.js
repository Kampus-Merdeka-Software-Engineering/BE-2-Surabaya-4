import joi from 'joi'

const registerUserValidation = joi.object({
    username : joi.string().max(100).required(),
    password : joi.string().max(100).required(),
    name : joi.string().max(100).required()
})

const loginUserValidation = joi.object({
    username : joi.string().max(100).required(),
    password : joi.string().max(100).required(),

})
const bookingValidation = joi.object({
    id : joi.string().max(100).required(),
    full_name : joi.string().max(100).required(),
    email :joi.string().email().max(100).required(),
    phone :joi.string().max(20).required(),
    id_destination: joi.string().max(100).required()
})
const getContactValidation = joi.string().max(100).required()

export {
    registerUserValidation,
    loginUserValidation,
    bookingValidation,
    getContactValidation
}